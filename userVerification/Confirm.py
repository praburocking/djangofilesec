from datetime import datetime as dt
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from hashlib import sha224
from random import randint, shuffle
from smtplib import SMTP
from threading import Thread
from django.core.mail import EmailMessage
from datetime import timedelta
from django.utils import timezone

from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.template.loader import render_to_string
from django.urls import get_resolver

from .errors import InvalidUserModel, EmailTemplateNotFound
from .errors import NotAllFieldCompiled



# Create your views here.
def verify(request, email_token):
    try:
        template = settings.EMAIL_PAGE_TEMPLATE
        return render(request, template, {'success': verifyToken(email_token)})
    except AttributeError:
        raise NotAllFieldCompiled('EMAIL_PAGE_TEMPLATE field not found')


def sendConfirm(user, **kwargs):
    from .models import Token
    try:
        email = user.email
        user.verified = False
        user.save()
        token_type='U_V'

        try:
            token = kwargs['token']
        except KeyError:
            alpha = [c for c in 'abcdefghijklmnopqrstuwxyz']
            shuffle(alpha)
            word = ''.join([a for a in alpha if randint(0, 1) == 1])
            token = str(sha224(bytes(email + str(dt.now()) + str(randint(1000, 9999)) + word, 'utf-8')).hexdigest())

        try:
            user_email=Token.objects.get(user=user,token_type=token_type)
            is_token_active=user_email.is_token_active()
            if is_token_active :
                token=user_email.token
            else:
                user_email.delete()
                user_email = Token.objects.create(user=user, token=token,token_type=token_type)
                user_email.save()
        except Token.DoesNotExist:
            user_email = Token.objects.create(user=user, token=token,token_type=token_type)
            user_email.save()
            pass

        #user_email = User.objects.create(user=user, email_token=token,token_type=token_type)
        
        t = Thread(target=sendConfirm_thread, args=(email, token))
        t.start()
    except AttributeError:
        raise InvalidUserModel('The user model you provided is invalid')


def sendConfirm_thread(email, token):
    try:
        sender = settings.EMAIL_SERVER
        domain = settings.EMAIL_PAGE_DOMAIN
        subject = settings.EMAIL_MAIL_SUBJECT
        address = settings.EMAIL_ADDRESS
        port = settings.EMAIL_PORT
        password = settings.EMAIL_PASSWORD
    except AttributeError:
        raise NotAllFieldCompiled('Compile all the fields in the settings')

    domain += '/' if not domain.endswith('/') else ''
    link = ''
    for k, v in get_resolver(None).reverse_dict.items():
        if k is verify and v[0][0][1][0]:
            addr = str(v[0][0][0])
            link = domain + addr[0: addr.index('%')] + token
    try:
        
        html = settings.EMAIL_MAIL_HTML
        html = render_to_string(html, {'link': link})
        print("html verification  mail "+html)
        msg = EmailMessage(subject, html,address, email.split(","))
        msg.content_subtype = "html"  # Main content is now text/html
        msg.send()
    except AttributeError:
        pass

def verifyToken(email_token):
    from .models import Token
    try:
        user_email = Token.objects.get(token=email_token,token_type='U_V')
        if  user_email.is_token_active():
            user = get_user_model().objects.get(email=user_email.user.email)
            user.verified = True
            user.save()
            user_email.delete()
            return True
        else:
            return False
    except Token.DoesNotExist:
        return False

