const express = require("express");
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.
import db from '../db';
// REST API
router.get('/', async (req, res) => {
    try {
        res.json(await db.Chirps.all());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id?', async (req, res) => {
    const id = req.params.id;
    try {
        res.json((await db.Chirps.one(id)));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.post("/", async (req, res) => {
    const body = req.body;
    try {
        res.json(await db.Chirps.post(body.userid, body.content, body.location));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        res.json(await db.Chirps.del(id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const content = req.body.content;
    try {
        res.json(await db.Chirps.update(id, content));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;