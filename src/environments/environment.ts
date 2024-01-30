export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3002',
    endpoints: {
      Example: '/api/example',
      ExampleById: '/api/example/:id',
      ExampleFilterByName: '/api/example/name/:name',
      Default: '/musics',
      Random: '/musics/random',
      ById: '/musics/:id',
      ByTitle: '/musics/title/:title'
    }
  }
};
