# Code Challenges

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Github Actions](https://github.com/woodbrettm/challenges/actions/workflows/main.yml/badge.svg?branch=master)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

This repository was built as a space for practicing code challenges. If you're interested in using it for your own purpose, follow the instructions under [Using the Config Template](#using-the-config-template). The template comes with the following tools:

* Jest Unit Testing
* ESLint
* Javascript
* Github Actions
* VSCode Config
* Yarn Plug n Play

## Using the Config Template

Follow the instructions below for installation :)

### Download
```shell
mkdir challenges
cd challenges
npx degit github:woodbrettm/challenges#config-template
git init
```

### Yarn

If you don't have yarn installed globally, run `npm install -g yarn`. Once complete, you're able to run commands from the `package.json` file immediately.

To ensure the git hooks are properly installed, run: `yarn hooks`.

### Set Up Your Challenges Folder

First create a **challenges** folder in your project root, then a folder inside with the name of your code challenge (e.g. fibonacci). To use a different folder name other than **challenges**, you'll need to edit the `jest.config.js` folder as well as the `lint` command in your `package.json`. 

You should have the following structure

```
challenges/
    fibonacci/
        index.js
        index.test.js
```

### ESLint VSCode

When opening a JS file in VSCode, check the VSCode Output Panel with ESLint selected in the dropdown. Ensure it's showing something similar to the output below.

I noticed VSCode can be a bit finnicky at times with ESLint when using Yarn PnP (even with the yarn vscode sdk installed). If the output isn't loading from `.yarn`, try closing and opening vscode, or re-importing the project. 

```bash
# Make sure ESLint shows this in VSCode output panel
ESLint Library loaded from: somepath\.yarn\sdks\eslint\lib\api.js
```

### Running Tests
```bash
yarn test # Jest Unit Tests
yarn lint # ESLint Checks
```

### Github Actions
The test build is triggered to run on pushes and pull requests to the `master` branch. To change that, edit the `main.yml` file in the `.github/workflows` folder.

## License
This project is [MIT licensed](./LICENSE).
