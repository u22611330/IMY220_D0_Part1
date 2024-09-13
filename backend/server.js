//const express = require("express");
import express from "express";
import path from 'path';

const app = express();

app.use(express.static('frontend/public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public", "index.html"));
});

app.listen(3000, () => {
console.log("Listening on http://localhost:3000");
});