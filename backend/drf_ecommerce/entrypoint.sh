#!/bin/sh
set -e

# Run database migrations before starting the server
python manage.py migrate --noinput

# Then run the command passed to the container (runserver)
exec "$@"
