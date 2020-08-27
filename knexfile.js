module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'your password here',
      database: 'your database here.',
    },
    migrations: {
      directory: './src/Database/migrations',
    },
    useNullAsDefault: true,
  },
};
