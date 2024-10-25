import topicsData from "../seed-data/topics.js";
import flashcardsData from "../seed-data/flashcards.js";
import quizzesData from "../seed-data/quizzes.js";

export async function seed(knex) {

  await knex("quizzes").del();
  await knex("flashcards").del();
  await knex("topics").del();


  await knex("topics").insert(topicsData);
  await knex("flashcards").insert(flashcardsData);
  await knex("quizzes").insert(quizzesData);
}
