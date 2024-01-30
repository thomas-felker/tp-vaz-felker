export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      Example: '/api/example',
      ExampleById: '/api/example/:id',
      ExampleFilterByName: '/api/example/name/:name'
    }
  }
};
