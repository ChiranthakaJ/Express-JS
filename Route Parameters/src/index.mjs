import express from "express";
// This express module is used to create a server and handle HTTP requests and responses. It provides a simple and flexible way to 
// build web applications and APIs.

//The imported value express name is actually a top level function and we need to call this function in order to create an express application.

//So we can create an express application by calling the express function and storing the returned value in a variable. 
// This variable will represent our express application and we can use it to define routes, middleware, and other functionalities.
const app = express();

const PORT = process.env.PORT || 3000;
// The PORT variable is used to specify the port number on which the server will listen for incoming requests. It first checks if there is a PORT environment variable set (which is common in production environments), and if not, it defaults to 3000. 
// This allows the server to be flexible and adaptable to different deployment environments. || is the logical OR operator, which is used here to provide a fallback value (3000) in case process.env.PORT is undefined or falsy.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// The listen method is used to start the server and listen for incoming HTTP requests. It takes a port number as an argument, which specifies the port on which the server will listen for requests. For example, app.listen(3000) will start the server on port 3000. Once the server is running, it will be able to handle incoming requests and send responses back to clients.

// The second argument to the listen method is a callback function, (starts with {}) that will be executed once the server starts successfully. In this case, it logs a message to the console indicating that the server is running and on which port it is listening. This is useful for confirming that the server has started correctly and is ready to handle requests.

//------------------------------------------------------------------------------

const mockUsers = [
    {id: 1, username:"anson", displayname:"Anson"},
    {id: 2, username:"john", displayname:"John"},
    {id: 3, username:"adam", displayname:"Adam"}
];



/* SNIPPET 1: Handling dynamic route parameters. When a client makes a GET request to the "/api/users/:id" URL, 
the server will extract the value of the id parameter from the URL and log it to the console. For example, if a client makes a GET request to "/api/users/5", it will log "5" to the console. */

app.get('/api/users/:id', (req, res) => {
    console.log("Id: " + req.params.id); //This will log the value of the id parameter from the URL to the console. For example, if a client makes a GET request to "/api/users/5", it will log "5" to the console. We can use either id, username or displayname as the parameter in the URL and we can access it using req.params.id, req.params.username or req.params.displayname respectively. The value of the parameter will be extracted from the URL and logged to the console when a GET request is made to the specified route. URL ex: http://localhost:3000/api/users/2. If we use 'displayname" as the parameter in the URL, then we can access it using req.params.displayname and it will log the value of displayname to the console when a GET request is made to the specified route. URL ex: http://localhost:3000/api/users/anson.
    res.send(`User ID: ${req.params.id}`); //This will send a response back to the client with the message "User ID: " followed by the value of the id parameter from the URL. For example, if a client makes a GET request to "/api/users/5", it will respond with "User ID: 5". We can use either id, username or displayname as the parameter in the URL and we can access it using req.params.id, req.params.username or req.params.displayname respectively. The value of the parameter will be extracted from the URL and included in the response sent back to the client when a GET request is made to the specified route. If we use 'displayname' as the parameter in the URL, then we can access it using req.params.displayname and it will send a response back to the client with the message "User Display Name: " followed by the value of displayname from the URL when a GET request is made to the specified route. URL ex: http://localhost:3000/api/users/anson.
})


/* SNIPPET 2: Sending a list of products as a JSON response. When a client makes a GET request to the "/api/products" URL, 
the server will respond with a JSON array containing a list of product objects, each with an id, name, and price. */
app.get("/api/products", (req, res) => {
    res.send([{id: 1, name:"Laptop", price: 999.99}, 
              {id: 2, name:"Smartphone", price: 499.99}, 
              {id: 3, name:"Headphones", price: 199.99}
            ])
});
