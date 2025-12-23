# Circle 環形進度條

### 介紹

圓環形的進度條元件，支援進度漸變動畫。

### 引入

```js
import { Circle } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`rate` 屬性表示進度條的進度，當 `rate` 發生變化時，進度條會以 `speed` 的速度變化，直到達到 `rate` 設定的值。

```jsx
import { setState } from 'react';
import { Circle, Button } from 'rc-ui-lib';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };
  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Circle rate={rate} speed={100} text={`${rate}%`} />
      <ButtonGroup>
        <Button onClick={add} type="primary">
          增加
        </Button>
        <Button onClick={reduce} type="danger">
          減少
        </Button>
      </ButtonGroup>
    </>
  );
};
```

### 寬度客製化

透過 `strokeWidth` 屬性來控制進度條寬度。

```jsx
<Circle rate={rate} strokeWidth={60} text="寬度客製化" />
```

### 顏色客製化

透過 `color` 屬性來控制進度條顏色，`layer-color` 屬性來控制軌道顏色。

```jsx
<Circle rate={rate} layerColor="#ebedf0" text="顏色客製化" />
```

### 漸層色

`color` 屬性支援傳入物件格式來定義漸層色。

```jsx
<Circle
  rate={rate}
  text="漸層色"
  color={{
    '0%': '#3fecff',
    '100%': '#6149f6',
  }}
/>
```

### 逆時針方向

將 `clockwise` 設定為 `false`，進度會從逆時針方向開始。

```jsx
<Circle rate={rate} clockwise={false} text="逆時針方向" />
```

### 大小客製化

透過 `size` 屬性設定圓環直徑。

```jsx
<Circle rate={rate} size={120} text="大小客製化" />
```

### 起始位置

進度條預設從頂部開始，可以透過 `startPosition` 屬性設定起始位置。

```jsx
<Circle defaultRate={70} text="左側" startPosition="left" />
<Circle defaultRate={70} text="右側" startPosition="right" />
<Circle defaultRate={70} text="底部" startPosition="bottom" />
```

## API

### Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| defaultRate | 預設進度 | _number_ | - |
| rate | 當前進度 | _number_ | - |
| size | 圓環直徑，預設單位為 `px` | _number \| string_ | `100px` |
| color | 進度條顏色，傳入物件格式可以定義漸層色 | _string \| object_ | `#3f45ff` |
| layerColor | 軌道顏色 | _string_ | `white` |
| fill | 填充顏色 | _string_ | `none` |
| speed | 動畫速度（單位為 rate/s） | _number \| string_ | `0` |
| text | 文字 | _string_ | - |
| strokeWidth | 進度條寬度 | _number \| string_ | `40` |
| strokeLinecap | 進度條端點的形狀，可選值為 `square` `butt` | _string_ | `round` |
| clockwise | 是否順時針增加 | _boolean_ | `true` |
| startPosition | 進度起始位置，可選值為 `left`、`right`、`bottom` | _CircleStartPosition_ | `top` |

### 型別定義

元件匯出以下型別定義：

```js
import type { CircleStartPosition } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                         | 預設值                       | 描述 |
| ---------------------------- | ---------------------------- | ---- |
| --rc-circle-size             | _100px_                      | -    |
| --rc-circle-color            | _var(--rc-primary-color)_    | -    |
| --rc-circle-layer-color      | _var(--rc-white)_            | -    |
| --rc-circle-text-color       | _var(--rc-text-color)_       | -    |
| --rc-circle-text-font-weight | _var(--rc-font-weight-bold)_ | -    |
| --rc-circle-text-font-size   | _var(--rc-font-size-md)_     | -    |
| --rc-circle-text-line-height | _var(--rc-line-height-md)_   | -    |


