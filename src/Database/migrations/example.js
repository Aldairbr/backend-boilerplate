export const up = (knex) =>
  knex.schema.createTable('your table here', (table) => {

  });

export const down = (knex) => knex.schema.dropTable('your table here');
