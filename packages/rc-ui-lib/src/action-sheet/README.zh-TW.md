# ActionSheet 動作面板

### 介紹

底部彈起的模態面板，包含與當前情境相關的多個選項。

### 引入

```js
import { ActionSheet } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

動作面板透過 `actions` 屬性來定義選項，`actions` 屬性是一個由物件構成的數組，數組中的每個物件配置一列，物件格式見文檔下方表格。

```jsx
const actions = [{ name: '選項一' }, { name: '選項二' }, { name: '選項三' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={() => setVisible(false)} actions={actions} />
    </>
  );
};
```

### 展示取消按鈕

設置 `cancelText` 屬性後，會在底部展示取消按鈕，點擊後關閉當前面板並觸發 `onCancel` 事件。

```jsx
const actions = [{ name: '選項一' }, { name: '選項二' }, { name: '選項三' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="取消"（此為英文代码中常用簡體表述，在繁體中文系統或界面中通常亦保持原樣不變，若特定情境需完全繁體化可寫作 cancelText="取消" ，因"取消"繁簡相同）
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 展示描述資訊

透過 `description` 可以在選單頂部顯示描述資訊，透過選項的 `subname` 屬性可以在選項文字的右側展示描述資訊。

```jsx
const actions = [{ name: '選項一' }, { name: '選項二' }, { name: '選項三', subname: '描述信息' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        description="這是一段描述信息"
        cancelText="取消"（此為英文與中文繁體混合且英文部分不翻译的特定代码情境，中文“取消”繁简体相同）
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 選項狀態

可以透過 `loading` 和 `disabled` 將選項設置為加載狀態或禁用狀態，或者透過`color`設置選項的顏色

```jsx
const actions = [
  { name: '選項一', color: '#ee0a24' },
  { name: '選項二', disabled: true },
  { loading: true },
];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="取消"（此句本身繁簡相同，无需轉換，保持原樣）
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 自定義面板

通過插槽可以自定義面板的展示內容，同時可以使用`title`屬性展示標題欄

```jsx
export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet title="自定義內容" visible={visible} onCancel={() => setVisible(false)}>
        <div>自定義內容</div>
      </ActionSheet>
    </>
  );
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示動作面板 | _boolean_ | `false` |
| actions | 面板選項列表 | _Action[]_ | `[]` |
| title | 頂部標題 | _ReactNode_ | - |
| cancelText | 取消按鈕 | _ReactNode_ | - |
| description | 選項上方的描述資訊 | _ReactNode_ | - |
| closeable | 是否顯示關閉圖示 | _boolean_ | `true` |
| closeIcon | 關閉圖標 | _string\|ReactNode_ | `cross` |
| duration | 動畫時長，單位毫秒 | _number \| string_ | `300` |
| round | 是否顯示圓角 | _boolean_ | `true` |
| overlay | 是否顯示遮罩層 | _boolean_ | `true` |
| overlayClass | 自定義遮罩層類名 | _string \| Array \| object_ | - |
| overlayStyle | 自定義遮罩層樣式 | _object_ | - |
| lockScroll | 是否鎖定背景滾動 | _boolean_ | `true` |
| closeOnPopstate | 是否在頁面回退時自動關閉 | _boolean_ | `false` |
| closeOnClickAction | 是否在點擊選項後關閉 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| beforeClose | 關閉前的回調函數，返回 `false` 可阻止關閉，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Action 資料結構

`actions` 屬性是一個由物件構成的數組，數組中的每個物件配置一列，物件可以包含以下值：

| 鍵名      | 說明                     | 類型             |
| --------- | ------------------------ | ---------------- |
| name      | 標題                     | _string_         |
| subname   | 二級標題                 | _string_         |
| color     | 選項文字顏色             | _string_         |
| className | 為對應列添加額外的 class | _string_         |
| style     | 為對應列添加額外的 style | _CSSProperties_  |
| loading   | 是否為加載狀態           | _boolean_        |
| disabled  | 是否為禁用狀態           | _boolean_        |
| callback  | 點擊時觸發的回調函數     | _action: Action_ |

### Events

| 事件名         | 說明                                     | 回調參數                        |
| -------------- | ---------------------------------------- | ------------------------------- |
| onSelect       | 點擊選項時觸發，禁用或載入狀態下不會觸發 | _action: Action, index: number_ |
| onCancel       | 點擊取消按鈕時觸發                       | -                               |
| onOpen         | 打開面板時觸發                           | -                               |
| onClose        | 關閉面板時觸發                           | -                               |
| onOpened       | 打開面板且動畫結束後觸發                 | -                               |
| onClosed       | 關閉面板且動畫結束後觸發                 | -                               |
| onClickOverlay | 點擊遮罩層時觸發                         | _event: MouseEvent_             |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/config-provider)。

| 名稱                                       | 預設值                       | 描述 |
| ------------------------------------------ | ---------------------------- | ---- |
| --rc-action-sheet-max-height               | _80%_                        | -    |
| --rc-action-sheet-header-height            | _48px_                       | -    |
| --rc-action-sheet-header-font-size         | _var(--rc-font-size-lg)_     | -    |
| --rc-action-sheet-description-color        | _var(--rc-gray-6)_           | -    |
| --rc-action-sheet-description-font-size    | _var(--rc-font-size-md)_     | -    |
| --rc-action-sheet-description-line-height  | _var(--rc-line-height-md)_   | -    |
| --rc-action-sheet-item-background          | _var(--rc-white)_            | -    |
| --rc-action-sheet-item-font-size           | _var(--rc-font-size-lg)_     | -    |
| --rc-action-sheet-item-line-height         | _var(--rc-line-height-lg)_   | -    |
| --rc-action-sheet-item-text-color          | _var(--rc-text-color)_       | -    |
| --rc-action-sheet-item-disabled-text-color | _var(--rc-gray-5)_           | -    |
| --rc-action-sheet-subname-color            | _var(--rc-gray-6)_           | -    |
| --rc-action-sheet-subname-font-size        | _var(--rc-font-size-sm)_     | -    |
| --rc-action-sheet-subname-line-height      | _var(--rc-line-height-sm)_   | -    |
| --rc-action-sheet-close-icon-size          | _22px_                       | -    |
| --rc-action-sheet-close-icon-color         | _var(--rc-gray-5)_           | -    |
| --rc-action-sheet-close-icon-active-color  | _var(--rc-gray-6)_           | -    |
| --rc-action-sheet-close-icon-padding       | _0 var(--rc-padding-md)_     | -    |
| --rc-action-sheet-cancel-text-color        | _var(--rc-gray-7)_           | -    |
| --rc-action-sheet-cancel-padding-top       | _var(--rc-padding-xs)_       | -    |
| --rc-action-sheet-cancel-padding-color     | _var(--rc-background-color)_ | -    |
| --rc-action-sheet-loading-icon-size        | _22px_                       | -    |

