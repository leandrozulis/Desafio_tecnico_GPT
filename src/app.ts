import fastify from 'fastify'
import { allRoutes } from './routes'

export const app = fastify()

app.register(allRoutes)