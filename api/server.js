const express = require("express");
const Anime = require("./anime/anime-model");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/anime", (req, res) => {
  Anime.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/anime/id", (req, res) => {
  res.end()
});

server.post("/anime", (req, res) => {
  Anime.insert(req.body).then(anime => {
    res.status(201).json(anime)
  }).catch(error => {
    res.status(500).json(error)
  })
});

server.delete("/anime/:id", (req, res) => {
  res.end()
});

server.put("/anime/:id", (req, res) => {
  res.end()
});

module.exports = server;