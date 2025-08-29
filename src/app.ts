import fastify from 'fastify'
import { allRoutes } from './routes'
import { fastifyJwt } from '@fastify/jwt'
import { env } from './.env'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.secret,
  sign: {
    expiresIn: '1h'
  }
})
app.register(allRoutes)