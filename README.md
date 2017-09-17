# Supply Chain Trial Project
#### React, Redux, Immutable, Jest, React-Router and Docker

![preview](https://image.ibb.co/djikUQ/screen2_min.png)

App where users can manage and track assets within an inventory.

#### Starting the App


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


#### Possible Future Improvements

* Use reselect to memoize selectors
* Make inventory table sortable
* Time based filtering of inventory table
* Set up authenticated API and database to serve and store data
* Websockets for realtime push updates from API
* Set up continuous integration
