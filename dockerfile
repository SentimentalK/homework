FROM cypress/base:12.14.0
WORKDIR /app
ADD . /app
RUN npm install
ENTRYPOINT [ "npx","cypress","run" ]