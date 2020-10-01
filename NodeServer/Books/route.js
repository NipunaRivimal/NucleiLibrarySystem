const express = require("express");
const router = express.Router();
const controller = require("./controller");

//add new book and return all books
router.post("/addbook", (req, res) => {
  controller
    .add(req.body)
    .then((response) => {
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

//return all books
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

//return book according to issue status
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

//return books according to user id
router.get("/getselectedbooksbyuser/:id", (req, res) => {
  controller
    .getSelectedByUser(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

//return book according to book id
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

//return books according to book name
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

//return book according to author
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

//update book and return book according to id
router.put("/updatebooks/:id", (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((response) => {
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

//delete book and return all books
router.delete("/deletebook/:id", (req, res) => {
  controller
    .delete(req.params.id)
    .then((response) => {
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
