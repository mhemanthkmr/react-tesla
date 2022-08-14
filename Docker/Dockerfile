FROM node:18.7.0-alpine
WORKDIR /app
RUN apk update
RUN apk add git
COPY data/main.sh /app/
RUN chmod +x main.sh
CMD sh main.sh