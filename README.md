# Pokemon Battle - Backend

## Dependencies:

NodeJS v22.2.0 or later

## Notes:

- Authentication not required

- Dotenv file required

## Installation:

- Download this repository on your computer

- Add the .env file in the main folder. Request the file from the author.

- Open in your IDE

- In your terminal, download node dependencies with command npm i

- Run the API with command npm start

## Endpoints:

#### Create Pokemon

- POST method

- localhost:4000/api/pokemon

- Authentication not required

- Body must be:
  {name: "Pikachu", attack: 4, defense: 3, hp: 3, speed: 6, type: "Electric", imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
  }

- Recieve:
  {success: true, validationError: null, error: null}

#### Update Pokemon

- PUT method

- localhost:4000/api/pokemonid/id-from-pokemon

- Authentication not required

- Body must have at least one property. Send only the properties to modify:
  {name: "Pikachu", attack: 4}

- Recieve:
  {success: true, error: null}

#### Delete Pokemon

- DELETE method

- localhost:4000/api/pokemonid/id-from-pokemon

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null}

#### Read Pokemon List

- GET method

- localhost:4000/api/pokemon

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: [array with all pokemons]}

#### Read Pokemon by Id

- GET method

- localhost:4000/api/pokemonid/id-from-pokemon

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: {complete pokemon object}}

#### Create Battle

- POST method

- localhost:4000/api/battle

- Authentication not required

- Body must be:
  {firstPokemon: "Pikachu", secondPokemon: "Eevee"}

- Recieve:
  {success: true, error: null, response: {firstPokemon: {complete pokemon object}, secondPokemon: {complete pokemon object}, turns: [array from turns], winner: "Pikachu", createdAt: "Date in UTC-0", \_id: "id from battle"}}

#### Read Battle List

- GET method

- localhost:4000/api/battle

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: [array from battle objects]}

## Versions:

- v1.1.0 | Created readPokemonById controller.

- v1.0.0 | Created readBattleList controller.

- v0.9.1 | Created battleCalculator service.

- v0.9.0 | Created createBattle controller without turns and winner sistem.

- v0.8.0 | Created readPokemonList controller.

- v0.7.1 | Created deletePokemon controller.

- v0.7.0 | Created updatePokemon controller.

- v0.6.0 | Created createPokemon controller.

- v0.5.1 | Created battle validator.

- v0.5.0 | Created battle model.

- v0.4.1 | Created pokemon validator.

- v0.4.0 | Created pokemon model.

- v0.3.1 | Created controllers files.

- v0.3.0 | Created routes from pokemons and battles.

- v0.2.0 | Created dotenv, database, constants and server files.

- v0.1.0 | First commit.
