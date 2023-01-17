const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userColtroller")
const router = require("express").Router();

router.get("/getAll", middlewareController.verifiToken, userController.getAll)
router.post("/delete", userController.deleteUser)


module.exports = router