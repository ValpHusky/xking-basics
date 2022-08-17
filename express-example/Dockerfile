FROM node:16

# Customized name (can be anything)
WORKDIR /myexpress-server

COPY index.js package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon

# ENTRYPOINT [ "nodemon", "--legacy-watch", "--inspect=0.0.0.0", "index.js"]

EXPOSE 4001

CMD node index.js
