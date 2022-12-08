const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const { staticDirName, cors } = require('./config');
const { oauth, oauthCallback } = require('./controllers/oauth');

const app = new Koa();

app.use(require('koa-static')(path.join(__dirname, staticDirName)));
app.use(require('koa-bodyparser')());
app.use(require('@koa/cors')(cors.options));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.status) {
      ctx.status = err.status;
      ctx.body = { error: err.message };
    } else {
      console.error(err);
      ctx.status = 500;
      ctx.body = { error: 'Internal server error' };
    }
  }
});

const router = new Router({ prefix: '/api' });

router.get('/oauth/:provider', oauth);
router.post('/oauth_callback', oauthCallback);

app.use(router.routes());

// this for HTML5 history in browser
const fs = require('fs');

const index = fs.readFileSync(path.join(__dirname, `${staticDirName}/index.html`));
app.use(async (ctx) => {
  if (ctx.url.startsWith('/api') || ctx.method !== 'GET') return;

  ctx.set('content-type', 'text/html');
  ctx.body = index;
});

module.exports = app;
