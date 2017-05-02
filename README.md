# MEAN Stack Todo Application

Cloned and simplified/modified from: https://github.com/scotch-io/node-todo

[M]ongoDB : A simple NoSQL Database

[E]xpress : Provides a web server and RESTful API layer for the NodeJS application

[A]ngular : Frontend framework and access of the API

[N]odeJS  : Provides the server code.

## Install Dependencies - OSX.  These steps should be similar on Linux.

Please contact me if you are running windows and we can work out the installation together.

1. Install Node Package Manager available here: https://nodejs.org/en/download/
2. Install MongoDB available here (Community Server Edition)... if you have Homebrew you can run `brew install mongodb`: https://www.mongodb.com/download-center#community
3. Configure MongoDB: `sudo mkdir -p /data/db`
4. Grant Write Permissions on the directory: `sudo chmod 777 /data/db`
4. Run MongoDB Daemon: `mongod`
5. In a new tab, Run Mongo: `mongo`

## Quickstart
1. Clone the Repository
2. Install the base npm modules with `npm install`.
3. Start up the server with `node server.js`.
4. View in browser at `http://localhost:8080`.

## Project Layout

1. The `app` folder contains the database schemas in the models directory, and all RESTful API route definitions inside routes.js
2. `server.js` is the top level entry point for the application, and contains all imports and configuration for NodeJS and Express.  The database connection is also established here.
3. The `public` folder contains all client side code.  `index.html` contains the HTML layout and some simple styles.  `core.js` links the Angular code into the Angular module.  The `services` folder contains the API calls to the server from the client.  The `controllers` folder contains our client side JavaScript interactions between our templates and services.

## Task

Create, Read, and Delete have already been completed.  Let's try to make this simple application just a little more robust.  Each todo item also has a description, and a created field (At the date of creation).

I'd like for you to implement a new HTTP route when you click on a task that takes you to that item's individual page.  For instance if you have this todo:

```
{
	"_id" : ObjectId("5908c2c403edbc18ccfa3fc1"),
	"text" : "Mow the Lawn",
  "description" : "",
	"created" : ISODate("2017-05-02T17:32:52.773Z"),
  "last_updated": ISODate("2017-05-02T17:32:52.773Z")
}
```

Clicking on the TODO should take you to `http://localhost:8080/5908c2c403edbc18ccfa3fc1` , which should display the text, description, and created date.  On this page, you should be able to update the description for the item by changing the data in an input field, and clicking an update button.  On clicking update, you should see the last_updated date become set to the new date, and all data should persist on a page refresh.

## Steps

1. You'll need to change the label in index.html to an anchor which points to the new page so that when you click on the todo, you are taken to this new page.

2. The new page should use the items id property in the URL.  i.e. `http://localhost:8080/5908c2c403edbc18ccfa3fc1`

3. The new page should use a GET request to show all of the details for the item on the page however you choose.  The text, description, created, and last_updated fields should all be displayed.

4. The new page should have a go back button to return you to the homepage.

5. The new page should have an update button so that any changes to the description can be saved to the database.  This should use an AJAX PUT request, with the description passed into the request body, similar to the create request.

I've completed the database call in `routes.js`, the GET by ID and PUT API requests in `services/todos.js`.

## Extra Credit

1. You could add a delete all button to the parent page to delete all items.

2. You could consider adding a 'priority' feature to the todo list.  This could be a dropdown select box with a few color priorities ranging from high to low.  Then on the parent page, you could add a way to only show high priority items.  

This doesn't need to involve any database querying or page changes, it can be a javascript filter to match the current selection.




