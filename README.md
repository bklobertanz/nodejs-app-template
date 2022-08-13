# Basic starter template using Nodejs, Typescript and Jest.
## Table of Contents

- [Project description](#project-description)
  - [Technologies](#technologies)
- [How to use the project](#how-to-use-the-project)
  - [Installation](#installation)
  - [Starting](#Starting)
  - [Requirements and considerations](#requirements-and-considerations)
- [License](#license)

---

## Project description

> Basic starter template using Nodejs, Typescript and Jest.

### Technologies

- Typescript for static typing.
- Eslint enforcing airbnb-base code styling.
- Prettier as a code formatter (working with eslint).
- Pre-commit hook, using husky, to force linting.
- Jest.

[Back to the Top](#table-of-contents)

---

## How to use the project

### Requirements and considerations

- You need yarn installed.
- For using environment variables (dotenv): 

> Add a .env file in the root of the directory.

### Installation

```
$ yarn && yarn prepare
```

`yarn prepare` will install git hooks and husky.

### Starting up


For creating a build (./dist folder) and starting the app:
```
$ yarn start
```

For running the app using ts-node and nodemon:
```
$ yarn start:dev
```

### Testing

```
$ yarn test
```

For checking test coverage:

```
$ yarn test:cov
```

For entering watch mode:

```
$ yarn test:watch
```

---

[Back to the Top](#table-of-contents)
## License

> MIT

[Back to the Top](#table-of-contents)
