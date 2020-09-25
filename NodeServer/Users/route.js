const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/adduser", (req, res) => {
  controller
    .add(req.body)
    .then((response) => {
      //   res.status(response.status).send(response);
      controller
        .getAll()
        .then((response) => {
          res.status(response.status).send(response);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getallusers", (req, res) => {
  controller
    .getAll()
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getsingleuser/:id", (req, res) => {
  controller
    .getSingle(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.put("/updateuser/:id", (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((response) => {
      //   res.status(response.status).send(response);
      controller
        .getSingle(req.params.id)
        .then((response) => {
          res.status(response.status).send(response);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.delete("/deleteuser/:id", (req, res) => {
  controller
    .delete(req.params.id)
    .then((response) => {
      // res.status(response.status).send(response);
      controller
        .getAll()
        .then((response) => {
          res.status(response.status).send(response);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

module.exports = router;
