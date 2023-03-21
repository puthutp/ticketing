import request from 'supertest';
import { app } from '../../app';
import { json } from 'body-parser';

it('fails when an email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect is supplied', async () => {
  const cookie = await signin();

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'passwordx',
    })
    .expect(400);
});

it('response with a cookie when given valid credentials', async () => {
  const cookie = await signin();

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
