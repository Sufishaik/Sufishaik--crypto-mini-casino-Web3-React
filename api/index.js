// api/index.js
const { kv } = require('@vercel/kv');
const filter = require('dev-filterjs');

const KEY = 'trollbox'

async function handler(req){
  try {
    if (req.method === 'GET') {
      const list = (await kv.lrange(KEY, 0, 19)) ?? []
      return new Response(JSON.stringify(list.reverse()), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
    if (req.method === 'POST') {
      const { user = 'anon', text } = await req.json()
      const clean = String(text ?? '').trim()
      if (!clean) return new Response('Empty', { status: 400 })

      const msg = { user, text: clean, ts: Date.now() }
      await kv.lpush(KEY, msg)
      await kv.ltrim(KEY, 0, 19)
      return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
    }
    return new Response('Method Not Allowed', { status: 405 })
  } catch (err) {
    console.error('[chat API error]', err);
    return new Response('Internal Error', { status: 500 })
  }
}

module.exports = handler;