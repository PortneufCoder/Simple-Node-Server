const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if ( url === "/") {
        res.write("<html>")
        res.write("<h1>Node JS is quite great!</h1>")
        res.write(
            '<body><form action="/create-user" method="POST"><input type="username" name="create-user"><button id ="clickMe" type="submit">Create</button></form></body>'
          );
        res.write("</html>")
    
        return res.end();
    }
    else if ( url === "/users" ) {
        res.write("<html>")
        res.write("<ul><li>Dog</li></br><li>Cat</li></br><li>Mouse</li></br></ul>")
        res.write("</html>")
        return res.end();
    }
    else if ( method === "POST") {
        url === "/create-users" 
        const newUser = [];
        req.on("data", chunk => {
            newUser.push(chunk);
            const addedUser = Buffer.concat(newUser).toString(); // turn my array of buffered chunks into a string
            console.log(addedUser.split('=')[1]);
           
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

module.exports = routeHandler;