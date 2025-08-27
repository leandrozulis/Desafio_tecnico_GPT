import { app } from './app'

app.listen({
  host: '0.0.0.0',
  port: 1234
}).then(() => {
  console.log(`Server Running 🎮 http://localhost:1234`)
})