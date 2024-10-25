/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("flashcards", (table) => {
    table.increments("id").primary();
    table.integer("topic_id").unsigned().references("id").inTable("topics").onDelete("CASCADE").onUpdate("CASCADE"); // Reference to topic
    table.string("content", 1000).notNullable(); 
    table.string("image", 255);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("flashcards");
}
