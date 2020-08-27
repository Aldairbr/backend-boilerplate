export const up = (knex) =>
  knex.schema.createTable("table's name", (table) => {

  });

export const down = (knex) => knex.schema.dropTable("table's name");
