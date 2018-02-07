# Example Stock Inventory Management App
#### React, Redux, Redux-Form, Immutable, Jest, Enzyme, React-Router, 0Auth and Docker

App where users can manage and track assets within an inventory.

This app was created as an example to illustrate the use of a somewhat real application.
Based on create-react-app this example is aimed at giving you a reference for building a 
small application that has good test coverage.

Most of the bases in a modern react application are touched here. OAuth is used for authentication.
Redux thunk is used for asynchronous actions. These async actions are tested in Jest. The testing of react components are carried out using a combination of Jest snapshot testing and Enzyme for testing the behaviour 
of event handlers. Eslint and prettier are used for linting and style formatting.

#### Starting the App

To run the app just run

```npm install``

followed by.

```npm start```

Alternatively you can run the app from the docker container.
To start the app ensure docker and docker-compose system dependencies are installed. Then from the project root run:

```
docker-compose-up

```

Then navigate to http://localhost:3000/ in your browser.

##### Running test suites

The testing strategy employed for react components was a mixture of jest snapshots and enzyme/jsdom tests.

To run the test suites run:

```
npm test
```

For test coverage:

```
npm run coverage
```


##### Running linters

Git hooks are set up to run linters on precommit and tests for premerge,

```
npm run lint
```

##### Docker

Both tests and linting are run in temporary docker containers.

NPM install is cached in the Dockerfile so as to enable fast image builds.


##### Redux Thunk

Redux thunk was used for async actions such as fetching the users profile. To test thunk actions the jest mock function was used to mock out the fetch API. Assertions were then made on the type and payload of dispatched actions under different status codes.


##### Redux Immutable Persist

In order to save assets to CSV Redux Immutable Persist was used to convert the inventory slice of the store from an Immutable data  structure to serialised JSON and then save it to local storage. This was then parsed to csv before being downloaded in the browser.


##### ImmmutableJS

To take advantage of  the performance benefits of immutable data structures PureComponent was used in some React components. This removed the need to write the explicit logic for a shallow  check of props and state in shouldComponentUpdate.


##### Authentication

The OAuth api was used for signing in with google credentials. Private routes in the app are protected with an authentication higher order component that uses react router to redirect the user if they try to access restricted routes.


#### Possible Future Improvements to work on for practicing your skills - PRs Welcome

* Use reselect to memoize selectors
* Set up authenticated API and database to serve and store data
* Websockets for realtime push updates from API
* Set up continuous integration
