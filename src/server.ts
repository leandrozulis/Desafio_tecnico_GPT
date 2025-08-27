import { app } from './app'
import { env } from './.env'

app.listen({
  host: '0.0.0.0',
  port: env.port
}).then(() => {
  console.log(`Server Running 🎮 http://localhost:${env.port}`)
})