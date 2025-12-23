# Popover 氣泡彈出框

### 介紹

彈出式的氣泡菜單。

### 引入

```js
import { Popover } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

當 Popover 彈出時，會基於 `reference` 屬性的內容進行定位。

```jsx
import { Popover, Button, Toast } from 'rc-ui-lib';

const actions = [{ text: '選項一' }, { text: '選項二' }, { text: '選項三' }];

export default () => {
  const onSelect = (item) => Toast.info(item.text);

  return (
    <Popover
      placement="bottom-start"
      actions={actions}
      onSelect={onSelect}
      reference={<Button type="primary">淺色風格</Button>}
    />
  );
};
```

### 深色風格

Popover 支持淺色和深色兩種風格，默認為淺色風格，將 `theme` 屬性設置為 `dark` 可切換為深色風格。

```jsx
<Popover
  theme="dark"
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">淺色風格</Button>}
/>
```

### 彈出位置

通過 `placement` 屬性來控制氣泡的彈出位置。

```jsx
<Popover placement="top" />
```

`placement` 支持以下值：

```bash
top           # 頂部中間位置
top-start     # 頂部左側位置
top-end       # 頂部右側位置
left          # 左側中間位置
left-start    # 左側上方位置
left-end      # 左側下方位置
right         # 右側中間位置
right-start   # 右側上方位置
right-end     # 右側下方位置
bottom        # 底部中間位置
bottom-start  # 底部左側位置
bottom-end    # 底部右側位置
```

### 展示圖標

在 `actions` 數組中，可以通過 `icon` 字段來定義選項的圖標，支持傳入[圖標名稱](#/zh-CN/icon)或圖片鏈接。

```jsx
const actions = [
  { text: '選項一', icon: 'add-o' },
  { text: '選項二', icon: 'music-o' },
  { text: '選項三', icon: 'more-o' },
];

<Popover
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">淺色風格</Button>}
/>;
```

### 禁用選項

在 `actions` 數組中，可以通過 `disabled` 字段來禁用某個選項。

```jsx
const actions = [
  { text: '選項一', disabled: true },
  { text: '選項二', disabled: true },
  { text: '選項三' },
];

<Popover
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">淺色風格</Button>}
/>;
```

### 自定義內容

通過 children，可以在 Popover 內部放置任意內容。

```jsx
<Popover ref={popover} placement="top-start" reference={<Button type="primary">自定義內容</Button>}>
  <Grid square border={false} columnNum={3} style={{ width: 240 }}>
    {Array.from({ length: 6 }, (_, i) => (
      <Grid.Item onClick={() => popover.current?.hide()} key={i} icon="photo-o" text="文字" />
    ))}
  </Grid>
</Popover>
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| actions | 選項列表 | _Action[]_ | `[]` |
| placement | 彈出位置 | _string_ | `bottom` |
| theme | 主題風格，可選值為 `dark` | _string_ | `light` |
| trigger | 觸發方式，可選值為 `manual` | _string_ | `click` |
| duration | 動畫時長，單位秒，設置為 0 可以禁用動畫 | _number \| string_ | `0.3` |
| offset | 出現位置的偏移量 | _[number, number]_ | `[0, 8]` |
| overlay | 是否顯示遮罩層 | _boolean_ | `false` |
| overlayClass | 自定義遮罩層類名 | _string_ | - |
| overlayStyle | 自定義遮罩層樣式 | _CSSProperties_ | - |
| closeOnClickAction | 是否在點擊選項後關閉 | _boolean_ | `true` |
| closeOnClickOutside | 是否在點擊外部元素後關閉菜單 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉菜單 | _boolean_ | `true` |
| iconPrefix | 圖標類名前綴，等同於 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| children | 自定義菜單內容 | _React.ReactNode_ | - |
| reference | 觸發 Popover 顯示的元素內容 | _React.ReactNode_ | - |
| teleport | 指定掛載的節點 | _Element\|() => Element_ | - |

### Action 數據結構

`actions` 屬性是一個由對象構成的數組，數組中的每個對象配置一列，對象可以包含以下值：

| 鍵名      | 說明                                                       | 類型      |
| --------- | ---------------------------------------------------------- | --------- |
| text      | 選項文字                                                   | _string_  |
| icon      | 文字左側的圖標，支持傳入[圖標名稱](#/zh-CN/icon)或圖片鏈接 | _string_  |
| color     | 選項文字顏色                                               | _string_  |
| disabled  | 是否為禁用狀態                                             | _boolean_ |
| className | 為對應選項添加額外的類名                                   | _string_  |

### Events

| 事件名         | 說明                     | 回調參數                        |
| -------------- | ------------------------ | ------------------------------- |
| onSelect       | 點擊選項時觸發           | _action: Action, index: number_ |
| onOpen         | 打開菜單時觸發           | -                               |
| onClose        | 關閉菜單時觸發           | -                               |
| onOpened       | 打開菜單且動畫結束後觸發 | -                               |
| onClosed       | 關閉菜單且動畫結束後觸發 | -                               |
| onClickOverlay | 點擊遮罩層時觸發         | _event: MouseEvent_             |

### 方法

通過 ref 可以獲取到 Popover 實例並調用實例方法。

| 方法名 | 說明         | 參數 | 返回值 |
| ------ | ------------ | ---- | ------ |
| show   | 顯示 popover | -    | -      |
| hide   | 關閉 popover | -    | -      |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                          | 默認值                       | 描述 |
| --------------------------------------------- | ---------------------------- | ---- |
| --rc-popover-arrow-size                       | _6px_                        | -    |
| --rc-popover-border-radius                    | _var(--rc-border-radius-lg)_ | -    |
| --rc-popover-action-width                     | _128px_                      | -    |
| --rc-popover-action-height                    | _44px_                       | -    |
| --rc-popover-action-font-size                 | _var(--rc-font-size-md)_     | -    |
| --rc-popover-action-line-height               | _var(--rc-line-height-md)_   | -    |
| --rc-popover-action-icon-size                 | _20px_                       | -    |
| --rc-popover-light-text-color                 | _var(--rc-text-color)_       | -    |
| --rc-popover-light-background-color           | _var(--rc-white)_            | -    |
| --rc-popover-light-action-disabled-text-color | _var(--rc-gray-5)_           | -    |
| --rc-popover-dark-text-color                  | _var(--rc-white)_            | -    |
| --rc-popover-dark-background-color            | _#4a4a4a_                    | -    |
| --rc-popover-dark-action-disabled-text-color  | _var(--rc-gray-6)_           | -    |

## 常見問題

### Popover 的點擊事件無法正確觸發？

這種情況通常是由於項目中引入了 `fastclick` 庫導致的。建議移除 `fastclick`，或者配置 `fastclick` 的 [ignore 規則](https://github.com/ftlabs/fastclick#advanced)。

