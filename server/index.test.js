import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from './app';

describe('Successful responses', () => {
  it('should respond with a json string at /api (200)', async () => {
    const response = await request(app).get('/api');

    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
    expect(response.body).toBe('Hello from the express server!');
  });
});
