# Quickstart

### Install via npm

To use in an existing project, install via `npm`

```bash
# Install via npm
npm i rc-ui-lib
```

## Import Components

### Method 1. Automatic on-demand import (Recommended)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin that automatically converts import statements to on-demand imports during compilation.

```bash

# Install plugin
npm i babel-plugin-import -D
```

Add configuration to .babelrc or babel.config.js:

```js
// Note: webpack 1 does not need to set libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "rc-ui-lib",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For babel7 users, you can configure in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'rc-ui-lib',
      libraryDirectory: 'es',
      style: true
    }, 'rc-ui-lib']
  ]
};
```

```js
// Original code
import { Button } from 'rc-ui-lib';

// Compiled code
import Button from 'rc-ui-lib/es/button';
import 'rc-ui-lib/es/button/style';
```

> Tips: If you are using TypeScript, you can use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) to achieve on-demand import.

### Method 2. Manual on-demand import

Without using the plugin, you can manually import the components you need

```js
import { Button } from 'rc-ui-lib';
import 'rc-ui-lib/lib/button/style';
```

> Tips: After configuring on-demand import, direct import of all components will not be allowed.

### Method 3. Import all component styles

rc-ui-lib supports importing all component styles at once.

```js
import { Button } from 'rc-ui-lib';
import 'rc-ui-lib/lib/index.css';
```

> Tips: Importing all component styles will increase the bundle size, so this approach is not recommended.

