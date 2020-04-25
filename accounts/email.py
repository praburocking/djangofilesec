from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.conf import settings

class user_mail:

    def __init__(self,  recipients):
        self.email_from=settings.EMAIL_HOST_USER
        self.recipients=recipients.split(',')

    def welcome_email(self, name):
        subject = 'Welcome to file coffer'
        message = 'Hi '+name +',<div><br></div><div>Thanks for signingup with FileCoffer, a place to store your important digital documents. please feel free to mail back, if you need any assistance.</div><div><br></div><div><br></div><div>with regards,</div><div>Prabu.M</div>'
        msg = EmailMessage(subject, message,self.email_from, self.recipients)
        msg.content_subtype = "html"  # Main content is now text/html
        return msg.send()

