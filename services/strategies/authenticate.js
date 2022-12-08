module.exports = async function authenticate(strategy, accessToken, profile, done) {
  if (!accessToken) {
    return done(null, false, 'Не передан токен');
  }

  return done(null, { accessToken, profile });
};


