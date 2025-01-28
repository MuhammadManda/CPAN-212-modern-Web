import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const sendFile = (res, filePath) => {
    const fullPath = path.join(__dirname, filePath);
    console.log(fullPath)
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<h1>500 Internal Server Error</h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
};


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        sendFile(res, "index.html");
    } else if (req.url === "/about") {
        sendFile(res, "about.html");
    } else if (req.url === "/contact") {
        sendFile(res, "contact.html");
    } else {
        sendFile(res, "notfound.html"); 
    }
});


const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
