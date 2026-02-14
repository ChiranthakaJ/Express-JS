import express from "express";
// This express module is used to create a server and handle HTTP requests and responses. It provides a simple and flexible way to build web applications and APIs.

//The imported value express name is actually a top level function and we need to call this function in order to create an express application.

//So we can create an express application by calling the express function and storing the returned value in a variable. This variable will represent our express application and we can use it to define routes, middleware, and other functionalities.
const app = express();

const PORT = process.env.PORT || 3000;
// The PORT variable is used to specify the port number on which the server will listen for incoming requests. It first checks if there is a PORT environment variable set (which is common in production environments), and if not, it defaults to 3000. This allows the server to be flexible and adaptable to different deployment environments. || is the logical OR operator, which is used here to provide a fallback value (3000) in case process.env.PORT is undefined or falsy.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// The listen method is used to start the server and listen for incoming HTTP requests. It takes a port number as an argument, which specifies the port on which the server will listen for requests. For example, app.listen(3000) will start the server on port 3000. Once the server is running, it will be able to handle incoming requests and send responses back to clients.

// The second argument to the listen method is a callback function, (starts with {}) that will be executed once the server starts successfully. In this case, it logs a message to the console indicating that the server is running and on which port it is listening. This is useful for confirming that the server has started correctly and is ready to handle requests.