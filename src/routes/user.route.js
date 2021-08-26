import { Router } from "express"
import controller from "../controllers/user.controller"

const route = Router()
/*
    5 ACTIONS
        + get all           /
        + get one by id     /:id
        + create            /
        + update one by id  /:id
        + delete one by id  /:id
*/

route.route("/").get(controller.getAllUsers).post(controller.createUser)

route
  .route("/:id")
  .get(controller.getUserById)
  .put(controller.updateUserById)
  .get(controller.deleteUserById)

export default route
