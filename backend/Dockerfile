FROM node:20-alpine As builder
WORKDIR /app
COPY package.json .
COPY *.js .
RUN npm install

FROM node:20-alpine
WORKDIR /app
RUN addgroup -S testg && adduser -S test -G testg
COPY --from=builder --chown=test:testg /app /app/
#ENV MONGO_URI=mongodb://mongodb:27017/tasksdb ----handelling in .env file----
USER test
CMD [ "node", "server.js" ]