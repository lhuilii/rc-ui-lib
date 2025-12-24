# Development Guide

### Introduction

Thank you for using `rc-ui-lib`.

The following is a guide on submitting feedback or code. Please take a few minutes to read the following before submitting an issue or PR.

## Contributing

### Local Development

Follow the steps below to develop components locally.

```bash
# Clone repository
https://github.com/rancui/rc-ui-lib.git

# Install dependencies
cd my-app && yarn bootstrap

# Enter development mode, visit http://localhost:8080 in browser
yarn start
```

### Directory Structure

- Component code is located under src, with one folder per component
- The docs directory contains the documentation website code. You can run yarn start in the directory to start the documentation website during local development

The main directories of the project are as follows:

```
rc-ui-lib
├─ build     # Build
├─ docs      # Documentation
├─ src       # Components
├─ packages  # Sub-packages
├─ tests     # Unit tests
└─ typings   # Types
```

### Adding New Components

When adding new components, please organize files according to the following directory structure and configure the component name in `vant.config.js`.

```
src
└─ button
   ├─ demo              # Example code
   ├─ __test__          # Unit tests
   ├─ index.tsx         # Component entry
   ├─ PropsType.ts      # Component props
   ├─ style/index.less  # Component styles
   ├─ style/var.less    # Style variables
   ├─ README.md         # Chinese documentation
   └─ README.en-US.md   # English documentation
```

## Submitting PR

### Pull Request Guidelines

If this is your first time submitting a Pull Request on GitHub, you can read these two articles to learn:

- [How to elegantly contribute code on GitHub](https://segmentfault.com/a/1190000000736629)
- [First Contribution to Open Source](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### Guidelines

- If you encounter problems, it is recommended to keep your PR small enough. Ensure that one PR only solves one problem or adds one feature
- When adding new components or modifying existing components, remember to add or modify test code to ensure code stability
- Add appropriate descriptions in PR and associate related Issues

### Pull Request Process

- Fork the main repository. If you have already forked, please sync the latest code from the main repository
- Create a new branch based on the `main` branch of the forked repository, such as `feat-button_color`
- Develop on the new branch. After development is complete, submit a Pull Request to the `main` branch of the main repository
- Pull Requests will be merged into the main repository after Review passes
- Wait for rc-ui-lib to release a version

### Syncing Latest Code

Before submitting a Pull Request, please follow the process below to sync the latest code from the main repository:

```bash
# Add main repository to remote as upstream repository of forked repository
git remote add upstream https://github.com/rancui/rc-ui-lib.git

# Pull latest code from main repository
git fetch upstream

# Merge main repository code
git merge upstream/main
```

