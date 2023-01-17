const User = require("../models/user")
const userController = {
    getAll: async (req, res) => {
        User.find().then((user) => res.send(user)).catch((err) => {
            res.status(500).send(err)
        })

    },
    deleteUser: async (req, res) => {

        let id = req.body.id;
        const customer = await User.findByIdAndRemove(id)
        if (!customer)
            res.status(404).send("Not found")
        else {
            res.send(customer)

        }

    }
}
module.exports = userController