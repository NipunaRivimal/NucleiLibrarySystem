const express = require("express");
const router = express.Router();
const controller = require("./controller");

//add new member and return all members
router.post("/adduser", (req, res) => {
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

//return all members
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

//return member according to member id
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

//get members according to first name
router.get("/getfiltereduserfname/:name", (req, res) => {
  controller
    .getFilteredName(req.params.name)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

//get members according to id
router.get("/getfiltereduserid/:id", (req, res) => {
  controller
    .getFilteredId(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

//update member and return member accordign to id
router.put("/updateuser/:id", (req, res) => {
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

//delete member and return all members
router.delete("/deleteuser/:id", (req, res) => {
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
