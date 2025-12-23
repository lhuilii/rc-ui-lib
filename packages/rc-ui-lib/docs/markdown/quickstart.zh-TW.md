# 快速上手

### 通過 npm 安裝

在現有項目中使用，可以透過`npm`安裝

```bash
# 通過 npm 安裝
npm i rc-ui-lib
```

## 引入元件

### 方式一. 自動按需引入組件 (推薦)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它會在編譯過程中將 import 的寫法自動轉換為按需引入的方式

```bash

# 安裝插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中新增配置：

```js
// 注意：webpack 1 無須設置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "rc-ui-lib",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 對於使用 babel7 的用戶，可以在 babel.config.js 中配置
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
// 原始程式碼
import { Button } from 'rc-ui-lib';

// 編譯後代碼
import Button from 'rc-ui-lib/es/button';
import 'rc-ui-lib/es/button/style';
```

> Tips：如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 實現按需引入。

### 方式二. 手動按需引入組件

在不使用插件的情況下，可以手動引入需要的組件

```js
import { Button } from 'rc-ui-lib';
import 'rc-ui-lib/lib/button/style';
```

> Tips：配置按需引入後，將不允許直接導入所有組件。

### 方式三. 導入所有組件樣式

rc-ui-lib支援一次性導入所有組件樣式。

```js
import { Button } from 'rc-ui-lib';
import 'rc-ui-lib/lib/index.css';
```

> Tips：引入所有元件樣式會增加代碼包體積，因此不推薦這種做法。
