# ConfigProvider 全域配置

### 引入

```js
import { ConfigProvider } from 'rc-ui-lib';
```

## 自訂主題

### 介紹

rc-ui-lib 元件透過豐富的 [CSS 變數](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 來組織樣式，透過覆蓋這些 CSS 變數，可以實現 **自訂主題、動態切換主題** 等效果。

#### 範例

以 Button 元件為例，查看元件的樣式，可以看到 `.rc-button--primary` 類名上存在以下變數：

```css
.rc-button--primary {
  color: var(--rc-button-primary-color);
  background-color: var(--rc-button-primary-background-color);
}
```

這些變數的預設值被定義在 `root` 節點上，HTML 文件的任何節點都可以存取到這些變數：

```css
:root {
  --rc-white: #fff;
  --rc-blue: #3f45ff;
  --rc-button-primary-color: var(--rc-white);
  --rc-button-primary-background-color: var(--rc-primary-color);
}
```

### 自訂 CSS 變數

#### 透過 CSS 覆蓋

你可以直接在程式碼中覆蓋這些 CSS 變數，Button 元件的樣式會隨之發生改變：

```css
/* 加上這段樣式後，Primary Button 會變成紅色 */
:root {
  --rc-button-primary-background-color: red;
}
```

#### 透過 ConfigProvider 自訂主題

`ConfigProvider` 元件提供了覆蓋 CSS 變數的能力，你需要在根節點外包裹一個 `ConfigProvider` 元件，並透過 `themeVars` 屬性來配置一些主題變數。

```jsx
import { ConfigProvider, Field, Rate, Slider, Button } from 'rc-ui-lib';

// themeVars 內的值會被轉換成對應 CSS 變數
// 比如 sliderBarHeight 會轉換成 `--rc-slider-bar-height`
const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default () => {
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);

  return (
    <ConfigProvider themeVars={themeVars}>
      <Field label="評分">
        <Rate value={rate} onChange={updateRate} />
      </Field>
      <Field label="滑塊">
        <Slider value={slider} onChange={updateSlider} />
      </Field>
      <div style={{ margin: 16 }}>
        <Button block round type="primary">
          提交
        </Button>
      </div>
    </ConfigProvider>
  );
};
```

> 注意：ConfigProvider 僅影響它的子元件的樣式，不影響全域 root 節點。

### 透過 ConfigProvider 替換 Icon

`ConfigProvider` 元件提供了替換 Icon 的能力，你需要在根節點外包裹一個 `ConfigProvider` 元件，並透過 `iconPrefix` 屬性來修改圖示的類名前綴。

```css
/* 引入第三方或自訂的字型圖示樣式 */
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1619071_dqiwns2g0d.ttf') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-style: normal;
}

.iconfont-1111::before {
  content: '\e782';
}
.iconfont-emojifill::before {
  content: '\e78d';
}
.iconfont-emojilight::before {
  content: '\e7a1';
}
```

```jsx
import { ConfigProvider, Field, Rate, Button } from 'rc-ui-lib';

export default () => {
  return (
    <ConfigProvider iconPrefix="iconfont">
      <Field label="評分">
        <Rate icon="emojifill" voidIcon="emojilight" />
      </Field>
      <div style={{ margin: 16 }}>
        <Button icon="1111" block round type="primary">
          提交
        </Button>
      </div>
    </ConfigProvider>
  );
};
```

### 基礎變數

rc-ui-lib 中的 CSS 變數分為 **基礎變數** 和 **元件變數**。元件變數會繼承基礎變數，因此在修改基礎變數後，會影響所有相關的元件。

#### 修改變數

由於 CSS 變數繼承機制的原因，兩者的修改方式有一定差異：

- **基礎變數** 只能透過 `root 選擇器` 修改，不能透過 `ConfigProvider 元件` 修改。
- **元件變數** 可以透過 `root 選擇器` 和 `ConfigProvider 元件` 修改。

#### 變數列表

下面是所有的基礎變數：

```less
// Color Palette
--rc-black: #000;
--rc-white: #fff;
--rc-gray-1: #f7f8fa;
--rc-gray-2: #f2f3f5;
--rc-gray-3: #ebedf0;
--rc-gray-4: #dcdee0;
--rc-gray-5: #c8c9cc;
--rc-gray-6: #969799;
--rc-gray-7: #646566;
--rc-gray-8: #323233;
--rc-red: #ee0a24;
--rc-blue: #3f45ff;
--rc-orange: #ff976a;
--rc-orange-dark: #ed6a0c;
--rc-orange-light: #fffbe8;
--rc-green: #07c160;

// Gradient Colors
--rc-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
--rc-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
--rc-primary-color: var(--rc-blue);
--rc-success-color: var(--rc-green);
--rc-danger-color: var(--rc-red);
--rc-warning-color: var(--rc-orange);
--rc-text-color: var(--rc-gray-8);
--rc-active-color: var(--rc-gray-2);
--rc-active-opacity: 0.7;
--rc-disabled-opacity: 0.5;
--rc-background-color: var(--rc-gray-1);
--rc-background-color-light: #fafafa;
--rc-text-link-color: #576b95;

// Padding
--rc-padding-base: 4px;
--rc-padding-xs: 8px;
--rc-padding-sm: 12px;
--rc-padding-md: 16px;
--rc-padding-lg: 24px;
--rc-padding-xl: 32px;

// Font
--rc-font-size-xs: 10px;
--rc-font-size-sm: 12px;
--rc-font-size-md: 14px;
--rc-font-size-lg: 16px;
--rc-font-weight-bold: 500;
--rc-line-height-xs: 14px;
--rc-line-height-sm: 18px;
--rc-line-height-md: 20px;
--rc-line-height-lg: 22px;
--rc-base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial,
  Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
--rc-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
--rc-animation-duration-base: 0.3s;
--rc-animation-duration-fast: 0.2s;
--rc-animation-timing-function-enter: ease-out;
--rc-animation-timing-function-leave: ease-in;

// Border
--rc-border-color: var(--rc-gray-3);
--rc-border-width-base: 1px;
--rc-border-radius-sm: 2px;
--rc-border-radius-md: 4px;
--rc-border-radius-lg: 8px;
--rc-border-radius-max: 999px;
```

你可以在各個元件文件底部的表格中查看元件變數。

## API

### Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| themeVars | 自訂主題變數 | _object_ | - |
| prefixCls | 設定統一樣式前綴。注意：需要搭配 less 變數 [@rc-prefix]() 使用 | _string_ | `rc` |
| iconPrefix | 所有圖示的類名前綴，等同於 Icon 元件的 [classPrefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| tag | `ConfigProdiver` 對應的 HTML 節點標籤名 | _string_ | `div` |


