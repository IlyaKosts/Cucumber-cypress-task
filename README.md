# Cucuber-cypress-task

## Before installing cypress make sure that:

Node.js is installed (v 14 or higher), link:"https://nodejs.org/en/";

Git is installed (v 2.37.2), link:"https://git-scm.com/downloads";

Yarn is inslalled (v 1.22 or higher), link:"https://yarnpkg.com/getting-started/install".

## Installing cypress

   First of all, in order to run these tests you need to install cypress. You can
   do it by using npm:
```bash
npm install cypress --save-dev
```
The process should look something like this:

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

Then, you will need to install such plugins:
```bash
npm i @badeball/cypress-cucumber-preprocessor
```
and
```bash
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
```
and also
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```
If you have any errors like:"npm ERR! ERESOLVE could not resolve", type this:
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator --force
```
Initialize yarn:
```bash
yarn
```
Well, we finally finish with installation part.

## Run our tests

We can execute tests in cypress by two ways: from command line and from test runner.
For execution from the command line, you should run:
```bash
./node_modules/.bin/cypress run
```
or
```bash
npx cypress run
```
Via yarn:
```bash
yarn cypress:run
```
or
```bash
yarn test
```
For execution from from the Test Runner(the best option I think, at least because of the very comfortable GUI), you should run:
```bash
./node_modules/.bin/cypress open
```
or
```bash
npx cypress open
```
Via yarn:
```bash
yarn cypress:open
```


All information was taken from the resource: "https://www.cypress.io/".
