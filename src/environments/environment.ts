export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3002',
    endpoints: {
      Default: '/musics',
      Random: '/musics/random',
      ById: '/musics/:id',
      ByTitle: '/musics/title/:title'
    }
  }
};
