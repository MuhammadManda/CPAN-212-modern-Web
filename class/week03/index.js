import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{res.send("Welcoooommeeee - GET")})
app.post("/",(req,res)=>{res.send("Welcoooommeeee - POST")})
app.put("/",(req,res)=>{res.send("Welcoooommeeee - PUT")})
app.delete("/", (req, res) => { res.send("Welcoooommeeee - DELETE") })
app.patch("/", (req, res) => { res.send("Welcoooommeeee - patch") })

app.get("/search", (req, res) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)

    res.send("you came to the /search route")
})

app.get("/item/:itemID/:otherID", (req, res) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)

    res.send("you came to the /item route")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

