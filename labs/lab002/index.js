import express from "express"
import lab_router from "./routers/lab_router.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("welcome to the server")
})

//imported routes
// -> localhost:3000/lab
app.use("/lab", lab_router)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
