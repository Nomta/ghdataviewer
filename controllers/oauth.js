const passport = require('../services/passport');
const config = require('../config');

module.exports.oauth = async function oauth(ctx, next) {
  const provider = ctx.params.provider;

  await passport.authenticate(
    provider,
    config.providers[provider].options,
  )(ctx, next);

  ctx.status = 200;
  ctx.body = {
    status: 'ok',
    location: ctx.response.get('location')
  };

  ctx.response.remove('location');
};

module.exports.oauthCallback = async function oauthCallback(ctx, next) {
  const provider = ctx.request.body.provider;

  await passport.authenticate(provider, async (err, data, info) => {
    if (err) throw err;

    if (!data) {
      ctx.status = 400;
      ctx.body = { error: info };
      return;
    }

    ctx.body = data;
  })(ctx, next);
};
