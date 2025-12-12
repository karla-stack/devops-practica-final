const request = require('supertest');
const app = require('./app');

describe('Pruebas de la aplicacion', () => {
  test('GET / debe retornar "Hola Mundo"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hola Mundo');
  });

  test('GET /health debe retornar status OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});