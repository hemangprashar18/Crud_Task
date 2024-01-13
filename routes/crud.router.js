const express = require("express");
const router = express.Router();
const crudss = require("../controller/crud.controller");

router.route("/fetch/data").get(crudss.fetchEntry);

router.route("/update/data").put(crudss.updateEntry);

router.route("/create/data").post(crudss.createEntry);

router.route("/delete/data").delete(crudss.deleteEntry);



module.exports = router;