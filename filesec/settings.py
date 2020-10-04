"""
Django settings for filesec project.

Generated by 'django-admin startproject' using Django 3.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
#import dj_database_url
import django_heroku
import environ
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
from datetime import timedelta
env = environ.Env(
    DEBUG=(bool, False)
)
environ.Env.read_env()

#env settings
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'ru=1b%+1v&*caoowl=2o3f#@*esw0b!jz9a*3ks2^!--f6%%@w'
DEBUG = env('DEBUG')

#cors settings
ALLOWED_HOSTS = ['filesec.herokuapp.com','localhost']
CORS_URLS_REGEX = r'^/api/v1/.*$'
CORS_ORIGIN_WHITELIST = ['http://localhost:3000']

# Application definition
INSTALLED_APPS = [
    "sslserver",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'knox',
    'django.contrib.sites',
    'django_s3_storage',
    'accounts',
    'licenses',
    'log_viewer',
    'api',
    'files',
    'payments',
    'userVerification',
    'webhook'
   
]
MIDDLEWARE = [
    #'sslify.middleware.SSLifyMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
ROOT_URLCONF = 'filesec.urls'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build'),os.path.join(BASE_DIR,'emailTemplates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = env('SECURE_SSL_REDIRECT')

WSGI_APPLICATION = 'filesec.wsgi.application'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_USE_TLS = True
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')


#for authentication emails
EMAIL_SERVER = env('EMAIL_HOST')
EMAIL_ADDRESS = env('EMAIL_HOST_USER')
EMAIL_PASSWORD = env('EMAIL_HOST_PASSWORD')
EMAIL_MAIL_SUBJECT = 'Confirm your email'
EMAIL_MAIL_HTML ="verificationEmail.html"
EMAIL_PAGE_TEMPLATE="verificationResponse.html"
USER_VERIFICATION_HTML_TEMPLATE={'U_V': "verificationEmail.html",'P_R':"passwordReset.html"}
EMAIL_USER_VERIFICATION_LINK = env('HOST_URL')+'/verify/'
EMAIL_MODEL_ADMIN = False # the default value is False


SITE_ID = 1

# Database configurations
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'filesec',
        'USER': 'prabu',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    }
}
# prod_db  =  dj_database_url.config(conn_max_age=500)
# DATABASES['default'].update(prod_db)


#authentication configurations
AUTH_USER_MODEL = 'accounts.User'
REST_FRAMEWORK = {
     'DEFAULT_AUTHENTICATION_CLASSES': [
        'knox.auth.TokenAuthentication',
    ],
    'DATETIME_FORMAT': "%m/%d/%Y %H:%M:%S",
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
         'rest_framework.throttling.ScopedRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '40/minute',
        'user': '60/minute',
        'signin/signup':'5/minute',
        'reset':'12/hour'
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

 #static configurations
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'build', 'static')
STATICFILES_DIRS = []
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STRIPE_API_KEY=env('STRIPE_API_KEY')
STRIPE_PLAN_A_PRODUCT_ID=env('STRIPE_PLAN_A_PRODUCT_ID')
STRIPE_PLAN_B_PRODUCT_ID=env('STRIPE_PLAN_B_PRODUCT_ID')
STRIPE_WH_SCRECT=env('STRIPE_WH_SCRECT')

#amazon S3 settings
AWS_S3_BUCKET_NAME = env('AWS_STORAGE_BUCKET_NAME')
AWS_REGION = env('AWS_S3_REGION_NAME')
AWS_ACCESS_KEY_ID = env('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = env('AWS_SECRET_ACCESS_KEY')
#AWS_S3_ENDPOINT_URL = 'https://s3.amazonaws.com'
AWS_S3_ADDRESSING_STYLE = "auto"
DEFAULT_FILE_STORAGE = 'django_s3_storage.storage.S3Storage'


LOG_VIEWER_FILES = ['app.log', 'logfile2', ...]
LOG_VIEWER_FILES_DIR = os.path.join(BASE_DIR, 'logs')
LOG_VIEWER_MAX_READ_LINES = 2000  # total log lines will be read
LOG_VIEWER_PAGE_LENGTH = 25       # total log lines per-page

# Optionally you can set the next variables in order to customize the admin:

# LOG_VIEWER_FILE_LIST_TITLE = "Custom title"
# LOG_VIEWER_FILE_LIST_STYLES = "/static/css/my-custom.css"

# sentry_logging = LoggingIntegration(
#     level=logging.INFO,        # Capture info and above as breadcrumbs
#     event_level=logging.ERROR  # Send errors as events
# )


sentry_sdk.init(
    dsn="https://4184927374f1407894fe14bfe94ca9c2@o419378.ingest.sentry.io/5331811",
    integrations=[DjangoIntegration()],

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True
)


#knox property
REST_KNOX = {
  'TOKEN_TTL': timedelta(hours=1),
  'TOKEN_LIMIT_PER_USER': 3,
  'AUTO_REFRESH': True,
  'MIN_REFRESH_INTERVAL':600
}

django_heroku.settings(locals(),staticfiles=False)
