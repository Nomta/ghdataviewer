module.exports = {
  staticDirName: 'client/dist',
  cors: {
    options: {
      origin: 'http://localhost:8080'
    }
  },
  providers: {
    github: {
      app_id: process.env.GITHUB_APP_ID || 'github_app_id',
      app_secret: process.env.GITHUB_APP_SECRET || 'github_app_secret',
      callback_uri: 'http://localhost:3000',
      options: {
        scope: ['no scope'],
      },
    },
  },
};
