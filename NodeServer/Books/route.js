const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/addbook", (req, res) => {
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

router.get("/getallbooks", (req, res) => {
  controller
    .getAll()
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getselectedbooks/:id", (req, res) => {
  controller
    .getSelected(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getsinglebook/:id", (req, res) => {
  controller
    .getSingle(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getfilteredbooksname/:name", (req, res) => {
  controller
    .getFilteredName(req.params.name)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.get("/getfilteredbooksauthor/:author", (req, res) => {
  controller
    .getFilteredAuthor(req.params.author)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

router.put("/updatebooks/:id", (req, res) => {
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

router.delete("/deletebook/:id", (req, res) => {
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
