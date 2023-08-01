const http = require('http');
const fs = require('fs');
const port = 5000;

const requestHandler = (req, res) => {
  let filename = '';
  switch (req.url) {
    case '/':
      filename = 'index.html';
      break;
    case '/blog':
      filename = 'blog.html';
      break;
      case '/contact':
      filename = 'contact.html';
      break;
      case '/gallery':
      filename = 'gallery.html';
      break;
  }
  
  fs.readFile(filename, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};

const server = http.createServer(requestHandler);//server create thay...
server.listen(port, (err) => {//listen no use create thyela server ne run karca thay...
  if (!err) {
    console.log("Server running on port " + port);
  }
})
