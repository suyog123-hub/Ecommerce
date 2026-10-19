"""Development settings: local Postgres (falls back to env vars)."""
import os

from .base import *  # noqa: F401,F403

DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Local dev DB. Override with env vars if needed.
DATABASES = {    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Drf_ecommerce',
        'USER': 'postgres',
        'PASSWORD': 'Suyogpostgres@1234',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

# To use sqlite locally instead, comment the above and uncomment:
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',  # noqa: F405
#     }
# }
