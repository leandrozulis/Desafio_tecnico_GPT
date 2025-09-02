import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJWT(req: FastifyRequest, reply: FastifyReply) {
  try {
    const decoded = await req.jwtVerify();
    return decoded;
  } catch (err) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}