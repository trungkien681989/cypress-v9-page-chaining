# Cypress [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-todomvc.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-todomvc) [![Build status](https://ci.appveyor.com/api/projects/status/6wjyoye82orkkyny/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-todomvc/branch/master)

This repo contains an example of automation testing written in Cypress v9 using Page Object Model for better readability and scripting experience.

The tests are written to verify basic functions of https://computer-database.herokuapp.com/computers website.

This project presents following tests:
- E2E testing: `cypress/integration/specs/crud.spec.js`
- Data driven testing using fixture: `cypress/integration/specs/search.spec.js`

## Installation

The steps below will take you all the way through setup and running the tests. You will also need to clone the repo and have a basic understanding of [Git](https://en.wikipedia.org/wiki/Git).

### 1. Install Node.js

[Node.js download](https://nodejs.org/en/download/)

### 2. Installing node_modules
```npm install```

## Run Test

### 1. Open Cypress and select a test to run
```npm run cypress:open```

![cypress-open](https://user-images.githubusercontent.com/49904115/189499145-1d7104fa-6f0d-48e1-8467-7914e48fa862.gif)


### 2. Run all tests (headless)
```npm run cypress:run```

![cypress-run](https://user-images.githubusercontent.com/49904115/189499398-179543de-d5aa-411d-b8ba-3a4f74821e14.gif)

## Mocha Reporting
For reporting, this repo utilizes mocha via cypress-mochawesome-reporter.

Generating reports locally after a run with the following steps, scripts can be taken from the `package.json` file:

- execute ```npm run cypress:run```
- next ```npm run cypress:merge```
- then ```npm run cypress:generate```

This will place an `output.html` file in the reports directory that can be viewed and show the run details.

<img width="1396" alt="Screen Shot 2022-09-11 at 11 04 08" src="https://user-images.githubusercontent.com/49904115/189512080-4a6f565c-2e26-408e-baf3-9dde494c57d6.png">

Finally execute ```npm run delete-reports``` to clean up the reports

## Help!
**If you get stuck, here is more help:**

* [Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://docs.cypress.io/guides/guides/command-line)
