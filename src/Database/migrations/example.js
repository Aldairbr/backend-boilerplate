export const up = (knex) =>
  knex.schema.createTable('put table name here', (table) => {

  });

export const down = (knex) => knex.schema.dropTable('put table name here');
