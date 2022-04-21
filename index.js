import express from "express";
const app = express();

const pokedex = [
    {
        id: 1,
        nome: 'bulbasaur',
        descricao: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        tipo: 'grass',
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
        id: 2,
        nome: 'Charmander',
        descricao: 'There is It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        tipo: 'fire',
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
        id: 3,
        nome: 'Squirtle',
        descricao: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
        tipo: 'water',
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    }
]

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {pokedex});
});

app.get("/home", (req, res) => {
    res.send("");
});

app.listen(3000, () => console.log('terminal rodando em http://localhost:3000'));