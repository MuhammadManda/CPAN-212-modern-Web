import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to the lab Proff")
})
router.get("/name", (req, res) => {
    res.send("Muhammad Manda")
})
router.get("/greetings", (req, res) => {
    res.send("hello from muhammad N number is N01649178")
})
router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x)
    let y = parseFloat(req.params.y)

    res.send(`Result: ${x + y}`)
})
router.get("/calculate/:a/:b/:operation", (req, res) => {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    let key= req.params.operation
    let result = 0;
    switch (key) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
         case "/":
            result = b !== 0 ? a / b : `invalid division `;
            break;
         case "**":
            result = a ** b;
            break;
       
        default:
            res.send("Invalid operator")
            break;
    }res.send(`Result: ${result}`)
})

export default router;