/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable("quizzes", (table) => {
      table.increments("id").primary();
      table.integer("topic_id").unsigned().references("id").inTable("topics").onDelete("CASCADE").onUpdate("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("questions", (table) => {
      table.increments("id").primary();
      table.integer("quiz_id").unsigned().references("id").inTable("quizzes").onDelete("CASCADE").onUpdate("CASCADE");
      table.string("question_text").notNullable();
      table.string("option_a").notNullable();
      table.string("option_b").notNullable();
      table.string("option_c").notNullable();
      table.string("option_d").notNullable();
      table.string("correct_option").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable("questions")
    .dropTable("quizzes");
}
