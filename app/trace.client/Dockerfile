FROM node:lts-jessie
LABEL maintainer="Godwin peter .O <me@godwin.dev>"
WORKDIR /adapt
COPY . /adapt/
# Destroy copied files..
RUN rm -rf /adapt/oracle/ /tmp/* \
    && chmod a+rwx -R /adapt/uploads \
    && npm install -g pm2 \
    && npm install --no-optional --no-shrinkwrap --no-package-lock \
    && npm rebuild node-sass \
    && npm run build
EXPOSE 4444
# start the app
#CMD [ "npm", "start" ]
#pm2 start npm --name "adapt" -- run dev
CMD [ "npm", "start" ]
