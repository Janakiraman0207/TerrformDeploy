const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Backend API 🚀");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
