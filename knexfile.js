module.exports = {
  client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'campusnav',
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
};
