# Supply Chain Trial Project
#### React, Redux, Immutable, Jest, React-Router and Docker

![preview](https://image.ibb.co/djikUQ/screen2_min.png)

App where users can manage assets within an inventory.

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

Redux thunk was used for async actions such as fetching the users profile.

##### Redux Immutable Persist

In order to save assets to CSV Redux Immutable Persist was used to convert the inventory slice of the store from an Immutable data  structure to serialised JSON and then save it to local storage. This was then parsed to csv before being downloaded in the browser.

