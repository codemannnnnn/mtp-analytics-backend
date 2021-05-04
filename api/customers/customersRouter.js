const express = require("express");
const router = express.Router();

const db = require("./customersModel.js");

router.get("/", (req, res) => {
  db.findAll()
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((err) => res.staus(400).json(err));
});

router.post("/", (req, res) => {
  const body = req.body;
  try {
    db.create(body)
      .then((e) => {
        res.status(200).json({ message: "New db Created", example: e[0] });
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } catch {
    res.status(401).json({ message: "Error creating the new example." });
  }
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const id = body.id;
  db.findById(id).then(
    db
      .update(id, body)
      .then((e) => {
        res.status(200).json({ message: "example updated", example: e });
      })
      .catch((err) => res.status(400).json({ message: err.message }))
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  try {
    db.findById(id).then((ex) => {
      db.remove(ex.id).then(() => {
        res.status(200).json({ message: `db id ${id} deleted.`, example: ex });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't delete id ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
