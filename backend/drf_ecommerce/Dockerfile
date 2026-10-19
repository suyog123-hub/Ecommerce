FROM python:3.12

WORKDIR /app

COPY . . 

RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir -p logs

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]