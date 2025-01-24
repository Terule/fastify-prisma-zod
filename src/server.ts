import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' });

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Fastify API',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

//Define your routes here
app.get('/', async () => {
  return { hello: 'world' };
});

app.listen({ port: 3000 }).then(() => {
  console.log('Server is running on http://localhost:3000');
});