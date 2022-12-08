const { KoaPassport } = require('koa-passport');
const passport = new KoaPassport();

const githubStrategy = require('./strategies/github');

passport.use(githubStrategy);

module.exports = passport;
