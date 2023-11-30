const express  = require("express");
const router = express.Router();

const {create,get,getSingleUser} = require("../controller/auth");

router.post("/create",create);
router.get("/studInfo",get);
router.get("/info/:id",getSingleUser);

module.exports = router;



 