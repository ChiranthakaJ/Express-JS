import express from "express";
// This express module is used to create a server and handle HTTP requests and responses. It provides a simple and flexible way to 
// build web applications and APIs.

//The imported value express name is actually a top level function and we need to call this function in order to create an express application.

//So we can create an express application by calling the express function and storing the returned value in a variable. 
// This variable will represent our express application and we can use it to define routes, middleware, and other functionalities.
const app = express();

const PORT = process.env.PORT || 3000;
// The PORT variable is used to specify the port number on which the server will listen for incoming requests. It first checks 
// if there is a PORT environment variable set (which is common in production environments), and if not, it defaults to 3000. 
// This allows the server to be flexible and adaptable to different deployment environments. || is the logical OR operator, 
// which is used here to provide a fallback value (3000) in case process.env.PORT is undefined or falsy.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// The listen method is used to start the server and listen for incoming HTTP requests. It takes a port number as an argument, 
// which specifies the port on which the server will listen for requests. For example, app.listen(3000) will start the 
// server on port 3000. Once the server is running, it will be able to handle incoming requests and send responses back to clients.

// The second argument to the listen method is a callback function, (starts with {}) that will be executed once the server 
// starts successfully. In this case, it logs a message to the console indicating that the server is running and on which 
// port it is listening. This is useful for confirming that the server has started correctly and is ready to handle requests.

//------------------------------------------------------------------------------

//This get method is used to define a route handler for GET requests to the specified path (in this case, "/"). 
// The first argument is the path for which the handler will be executed, and the second argument is a callback 
// function that will be called when a request matches the specified path and HTTP method. The callback function 
// takes two parameters: req (the request object) and res (the response object). Inside the callback function, you can 
// define how the server should respond to the incoming request. In this example, res.send("Hello, World!") sends a simple 
// text response back to the client with the message "Hello, World!" when a GET request is made to the root URL ("/").

//A route handler is a function that is executed when a specific route (URL path) and HTTP method (GET, POST, etc.) are matched 
// by an incoming request. In this case, the route handler is defined for GET requests to the root URL ("/"). When a client sends
// a GET request to the root URL, the server will execute the provided callback function, which sends a response back to the client 
// with the message "Hello, World!" using res.send(). This allows the server to respond to client requests with specific 
// content based on the requested route and HTTP method.

//This request handler is set up to respond to GET requests made to the root URL ("/"). When a client sends a GET request
//  to the root URL, the server will execute the provided callback function, which takes two parameters: req (the request object)
//  and res (the response object). Inside the callback function, res.send("Hello, World!") is called to send a response back to 
// the client with the message "Hello, World!". This means that when you access the root URL of the server in a web browser or 
// through an HTTP client, you will see "Hello, World!" displayed as the response.


/*The below two example demonstrate how to send different types of responses (text and JSON) to the client when a GET 
request is made to the root URL ("/"). The first example sends a simple text response, while the second example sends 
a JSON response containing a message. Depending on the client's needs, you can choose to send either type of response 
or even other formats as required. However, in practice, you would typically choose one response format (either text or JSON) 
for a given route based on the requirements of your application and the expectations of the clients consuming your API.

NOTE: We have to comment out one app.get() at a time in order to get the response of each. 
*/

/*SNIPPET 1: Text response to the client browser or HTTP client. When a client makes a GET request to the root URL ("/"), 
the server will respond with the message "Hello, World!".*/

/*SNIPPET 2: JSON response to the client browser or HTTP client. When a client makes a GET request to the root URL ("/"), 
the server will respond with a JSON object containing the message "Hello, World!".*/

/*
app.get("/", (req, res) => {
    res.send({text:"Hello, World!"}); //Simple text response to the client browser or HTTP client. When a client makes a GET request to the root URL ("/"), 
    // the server will respond with the message "Hello, World!".
});

app.get("/", (req, res) => {
    res.send({json: { msg: "Hello, World!" }}); //JSON response to the client browser or HTTP client. When a client makes a GET request to the root URL ("/"), 
    // the server will respond with a JSON object containing the message "Hello, World!".
});

*/

//To get both types of responses, for the same route, in two separate lines on the web browser, we can follow the below approach:

/*SNIPPET 3: Sending both text and JSON responses in one go. When a client makes a GET request to the root URL ("/"), 
the server will respond with both a text message and a JSON object containing the message "Hello, World!". 
But the respose will be sent in a single response, and the client will receive both pieces of data together in one line.*/

/*
app.get("/", (req, res) => {
    // Sending both pieces of data in one go
    res.send({
        text: "Hello, World!",
        json: { msg: "Hello, World!" }
    });
});
*/

/*output in the web browser or HTTP client will be:
{"text":"Hello, World!\n","json":{"msg":"Hello, World!"}}*/

//To resolve the display in single line issue, I followed the below approach:

/*SNIPPET 4: Sending both text and JSON responses in separate lines. When a client makes a GET request to the root URL ("/"), 
the server will respond with both a text message and a JSON object containing the message "Hello, World!", but they will be 
sent as separate responses, allowing the client to receive and display them on separate lines.*/

app.get("/", (req, res) => {
    const textData = "Hello, World!";
    const jsonData = { msg: "Hello, World!" };

    // We send a string of HTML to the browser
    res.status(201).send(`
        <div>${textData}</div>
        <pre>${JSON.stringify(jsonData, null, 2)}</pre>
    `);
});

/*output in the web browser or HTTP client will be:
Hello, World!
{
  "msg": "Hello, World!"
}
*/

//The res.status(201) method is used to set the HTTP status code of the response to 201, which indicates that a 
// resource has been successfully created. We can check that in the web browser or HTTP client by inspecting the 
// response headers, where we will see "HTTP/1.1 201 Created" indicating that the status code of the response is 201.
//  This status code is typically used in RESTful APIs to indicate that a new resource has been created as a result of
//  the request. In this case, it is being used to indicate that the response is successful and that the requested data
//  has been sent back to the client. We can see the 201 status code in the web browser's developer tools specifically 
// in the network tab or in the response headers of an HTTP client like Postman or curl.

/* SNIPPET 5: Sending a list of users as a JSON response. When a client makes a GET request to the "/api/users" URL, 
the server will respond with a JSON array containing a list of user objects, each with an id, username, and displayname. */
app.get('/api/users', (req, res) => {
    res.send([{id: 1, username:"anson", displayname:"Anson"}, 
              {id: 2, username:"john", displayname:"John"}, 
              {id: 3, username:"adam", displayname:"Adam"}
            ])
});


/* SNIPPET 6: Sending a list of products as a JSON response. When a client makes a GET request to the "/api/products" URL, 
the server will respond with a JSON array containing a list of product objects, each with an id, name, and price. */
app.get("/api/products", (req, res) => {
    res.send([{id: 1, name:"Laptop", price: 999.99}, 
              {id: 2, name:"Smartphone", price: 499.99}, 
              {id: 3, name:"Headphones", price: 199.99}
            ])
});
