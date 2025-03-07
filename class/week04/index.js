import express from "express"; 
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 


//app.use(logger); //this is app wide,runs everywhere

// routes
app.get("/",logger, (req, res) => {
   
  res.send("Welcome to our server");
});



app.get("/about", (req, res) => {

  res.send("Welcome to our about page");
});

app.get("/login", (req, res) => {
  res.send("req login");
});

app.post("/login", (req, res) => {
  res.send("I stole");
});

app.get("/fetchData",auth, (req, res) => {
  res.send("Heyy muhaaaaaaaaaaaaaaaaa");
});
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
res.status(404).send("Page not found");
});
 