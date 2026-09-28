import app from './app.js'
import { env } from './env.js'

const { PORT } = env()

console.log(`otel-ducklake-server listening on http://localhost:${PORT}`)

export default {
  port: PORT,
  fetch: app.fetch,
}
