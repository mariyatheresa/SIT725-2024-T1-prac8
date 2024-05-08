from node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 2008
RUN npm install
CMD ["node","server.js"]
