# About

This project is the class project for an online class that I'm going through primarily to learn some new React libraries (Redux/Saga/etc.) that I don't get exposure to at work.
  
## Improvements
Because the project is fairly complex for a personal project it also seemed like a good opportunity to get my hands dirty with different build tooling. Some additions I have added or have planned are as follows:

### Current additions
- I'm using `vite` and `nx` instead of `create-react-app`
- I'm using `yarn 3` with pnp instead of `yarn classic`
- I've added unit tests with `vitest`
- I'm writing the entire project in TypeScript (the course will eventually add this in, but I've chosen to add it from the start)
- I've added storybook and some basic stories to develop components in isolation

### Planned additions
- Add more stories and tests
- Add snyk to check for code and dependency vulnerabilities
- Create a CI workflow with github actions that will be run on PR
  - Runs tests
  - Runs typecheck
  - Builds project
  - Checks formatting
  - Checks commit messages (I haven't really been good about setting a standard here yet)
  - Runs snyk?
