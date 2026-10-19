"""Production settings: RDS Postgres via env vars, no hardcoded secrets."""
import os

from .base import *  # noqa: F401,F403

DEBUG = False

SECRET_KEY = os.environ['DJANGO_SECRET_KEY']  # must be set, fail fast if missing

ALLOWED_HOSTS = os.environ.get('DJANGO_ALLOWED_HOSTS', '').split(',')
# e.g. DJANGO_ALLOWED_HOSTS=api.example.com,www.example.com
ALLOWED_HOSTS = [h.strip() for h in ALLOWED_HOSTS if h.strip()]

DATABASES = {    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Drf_ecommerce',
        'USER': 'postgres',
        'PASSWORD': 'Suyogpostgres@1234',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

STATIC_ROOT = BASE_DIR / 'staticfiles'  # noqa: F405

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
