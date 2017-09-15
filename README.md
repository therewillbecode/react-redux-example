# Supply Chain Trial Project
####React, Redux, Immutable, Jest, React-Router and Docker

![preview](https://image.ibb.co/iDcYg5/supply_chain_preview_min.png)

#### Starting the App

To start the app ensure docker and docker-compose system dependencies are installed. Then from the project root run

```
docker-compose-up

```
Then navigate to http://localhost:3000/ in your browser.
----


##### Running test suites

```
npm test
```

##### Running linters

```
npm run lint
```

Both tests and linting are run in temporary docker containers.

Git hooks are set up to run linters on precommit and tests on premerge
