const express = require("express");
const router = express.Router();
const constants = require("../constants");
const pokemonControllers = require("../controllers/pokemonControllers.js");
const battleControllers = require("../controllers/battleControllers.js");
const pokemonValidator = require("../controllers/pokemonValidator.js");
const battleValidator = require("../controllers/battleValidator.js");

router
  .route(constants.routes.pokemon)
  .post(pokemonValidator, pokemonControllers.createPokemon)
  .delete(pokemonControllers.deletePokemon)
  .get(pokemonControllers.readPokemonList);

router
  .route(constants.routes.updatePokemon)
  .put(pokemonControllers.updatePokemon);

router
  .route(constants.routes.battle)
  .post(battleValidator, battleControllers.createBattle)
  .get(battleControllers.readBattleList);

module.exports = router;
