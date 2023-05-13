FROM python:3.8-slim-buster

COPY requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY csvRead.py /csvRead.py
RUN chmod +x /csvRead.py

ENTRYPOINT ["/entrypoint.sh"]
