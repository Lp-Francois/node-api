# Node API

A simple API build with express to fetch data from mongoDB.

## Getting started

To easily getting started, run the following:

```
npm install
```

Then `copy` the `.env.example` file into `.env`. You can modify the DB_CONNECTION variable to your needs.

```
npm start
```


## Container

The application can run in docker container. Don't forget you need a mongoDB database. Go the [Coding Challenge Repository for more information](https://gitlab.com/AsterYujano/coding-challenge).

```
docker build -t node-api .
```

```
docker run -it node-api
```