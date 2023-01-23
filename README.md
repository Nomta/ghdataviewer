# Github data viewer

A web app that allows you to view Github user data using the Github API, built with Node.js, Koa, and Vue 3.

## Project setup

Register a new application on [Github](https://github.com/settings/developers).
Fill out the [registration form](https://github.com/settings/applications/new) as follows:

|  |  |
| --- | --- |
| Application name | Name of your application |
| Homepage URL | http://localhost:3000 |
| Application description | Description of your application (optional) |
| Authorization callback URL | http://localhost:3000/oauth/github |

After registering the application, you will receive a Client ID and Client Secret. Add them in the [`config.js`](./config.js) or `.env.local` file.

*Do not publish secret keys on Github as it poses a security risk.*

### Server

```
npm install
```

### Client

```
cd client
npm install
```

## Usage

### Server

At the root of the project:

Run server

```
npm start
```

### Client

In the [client](./client) directory:

Run in development mode

```
npm run serve
```

Run in production mode

```
npm run build
```

