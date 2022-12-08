const { Strategy } = require('passport-github');
const { providers } = require('../../config');
const authenticate = require('./authenticate');

module.exports = new Strategy({
  clientID: providers.github.app_id,
  clientSecret: providers.github.app_secret,
  callbackURL: providers.github.callback_uri,
  scope: providers.github.options.scope,
  session: false,
}, function (accessToken, refreshToken, profile, done) {
  authenticate('github', accessToken, mapGithubUserProfile(profile), done);
});

function mapGithubUserProfile(profile) {
  return {
    username: profile.displayName || profile.username,
    url: profile.profileUrl,
    avatar: profile.photos?.[0].value
  }
}
