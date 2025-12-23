# Icon 圖標

### 介紹

基於字體的圖標集，可以通過 `Icon` 元件使用，也可以在其他元件中通過`icon`屬性引用

### 引入

```js
import { Icon } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`Icon` 的 `name` 屬性支持傳入圖標名稱或圖片鏈接，所有可用的圖標名稱見右側示例。

```jsx
<Icon name="chat-o" />
<Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 徽標提示

`Icon` 的 `badge` 屬性用來設置徽標內容。

```jsx
<Icon name="chat-o" badge={{ dot: true }} />
<Icon name="chat-o" badge={{ content: "99+" }} />
```

### 圖標顏色

`Icon` 的 `color` 屬性用來設置圖標的顏色。

```jsx
<Icon name="cart-o" color="#1989fa" />
<Icon name="fire-o" color="#ee0a24" />
```

### 圖標大小

`Icon` 的 `size` 屬性用來設置圖標的尺寸大小，默認單位為 `px`。

```jsx
<Icon name="chat-o" size="40" />
<Icon name="chat-o" size="3rem" />
```

### 自定義圖標

#### 方式一

如果需要在現有 `Icon` 的基礎上使用更多圖標，可以引入第三方 `iconfont` 對應的字體文件和 `CSS` 文件，之後就可以在 `Icon` 元件中直接使用

```css
/* 引入第三方或自定義的字體圖標樣式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```jsx
<!-- 通過 classPrefix 指定類名為 my-icon -->
<Icon classPrefix="my-icon" name="extra"/>
```

#### 方式二

通過方法`createFromIconfontCN` 引入[iconfont.cn](https://www.iconfont.cn)上的 js 文件

```jsx
const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/xxx.js');
<!-- classPrefix 屬性失效不要再指定 -->
<IconFont name="cuIcon-thank"/>

```

## API

### 方法

| 方法名                    | 說明            | 參數                | 返回值      |
| ------------------------- | --------------- | ------------------- | ----------- |
| Icon.createFromIconfontCN | 創建第三方 Icon | `scriptUrl: string` | _Icon 元件_ |

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 圖標名稱或圖片鏈接 | _string_ | - |
| badge | 圖標右上角徽標 | [_BadgeProps_](#/zh-CN/badge) | - |
| color | 圖標顏色 | _string_ | `inherit` |
| size | 圖標大小，如 `20px` `2em`，默認單位為`px` | _number \| string_ | `inherit` |
| classPrefix | 類名前綴，用於使用自定義圖標 | _string_ | `van-icon` |
| tag | HTML 標籤 | _string_ | `i` |

### Events

| 事件名  | 說明           | 回調參數       |
| ------- | -------------- | -------------- |
| onClick | 點擊圖標時觸發 | _event: Event_ |

