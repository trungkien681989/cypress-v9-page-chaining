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


## Help!
**If you get stuck, here is more help:**

* [Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://docs.cypress.io/guides/guides/command-line)
