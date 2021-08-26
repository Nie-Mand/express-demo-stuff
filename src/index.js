import express from "express"
import { json } from "body-parser"
import user from "./routes/user.route"

// Create the App
const app = express()

// Middlewares
app.use(json())

// Routes
app.use("/user", user)

// Launch
app.listen(666, () => {
  console.log("server is running...")
})
