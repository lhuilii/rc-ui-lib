# Collapse 折疊面板

### 介紹

將一組內容放置在多個折疊面板中，點擊面板的標題可以展開或收起其內容。

### 引入

```js
import { Collapse } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

透過 `initValue` 控制展開的面板列表，`initValue` 為陣列格式。

```js
const initValue = ['1'];
```

```jsx
<Collapse initValue={initValue}>
  <Collapse.Item title="標題1" name="1">
    內容
  </Collapse.Item>
  <Collapse.Item title="標題2" name="2">
    內容
  </Collapse.Item>
  <Collapse.Item title="標題3" name="3">
    內容
  </Collapse.Item>
</Collapse>
```

### 手風琴

透過 `accordion` 可以設定為手風琴模式，最多展開一個面板，此時 `initValue` 為字串格式。

```jsx
<Collapse initValue="1" accordion>
  <Collapse.Item title="標題1" name="1">
    內容
  </Collapse.Item>
  <Collapse.Item title="標題2" name="2">
    內容
  </Collapse.Item>
  <Collapse.Item title="標題3" name="3">
    內容
  </Collapse.Item>
</Collapse>
```

### 禁用狀態

透過 `disabled` 屬性來禁用單個面板。

```jsx
<Collapse initValue="initValue">
  <Collapse.Item title="標題1" name="1">
    內容
  </Collapse.Item>
  <Collapse.Item title="標題2" name="2" disabled>
    內容
  </Collapse.Item>
  <Collapse.Item title="標題3" name="3" disabled>
    內容
  </Collapse.Item>
</Collapse>
```

### 自訂標題內容

透過 `title` 可自訂標題欄的內容。

```jsx
<Collapse initValue="initValue">
  <Collapse.Item
    name="1"
    title={
      <div>
        標題1 <Icon name="question-o" />
      </div>
    }
  >
    內容
  </Collapse.Item>
  <Collapse.Item title="標題2" name="2" icon="shop-o">
    內容
  </Collapse.Item>
</Collapse>
```

## API

### Collapse Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| initValue | 預設開啟的面板 name | 手風琴模式：_number \| string_<br/>非手風琴模式：_(number \| string)[]_ | - |
| value | 當前展開面板的 name | _number \| string_ \| _(number \| string)[]_ | - |
| accordion | 是否開啟手風琴模式 | _boolean_ | `false` |
| border | 是否顯示外邊框 | _boolean_ | `true` |

### Collapse Events

| 事件名   | 說明           | 回調參數                                   |
| -------- | -------------- | ------------------------------------------ |
| onChange | 切換面板時觸發 | initValue: 型別與 initValue 綁定的值一致  |

### CollapseItem Props

| 參數       | 說明                                   | 類型                | 預設值  |
| ---------- | -------------------------------------- | ------------------- | ------- |
| name       | 唯一識別符，預設為索引值               | _number \| string_  | `index` |
| icon       | 標題欄左側圖示                         | _string\|ReactNode_ | -       |
| size       | 標題欄大小，可選值為 `large`           | _string_            | -       |
| title      | 標題欄左側內容                         | _number \| string_  | -       |
| value      | 標題欄右側內容                         | _number \| string_  | -       |
| label      | 標題欄描述資訊                         | _number \| string_  | -       |
| border     | 是否顯示內邊框                         | _boolean_           | `true`  |
| isLink     | 是否展示標題欄右側箭頭並開啟點擊回饋   | _boolean_           | `true`  |
| disabled   | 是否禁用面板                           | _boolean_           | `false` |
| titleClass | 左側標題額外類名                       | _string_            | -       |
| valueClass | 右側內容額外類名                       | _string_            | -       |
| labelClass | 描述資訊額外類名                       | _string_            | -       |

### CollapseItem 方法

透過 ref 可以取得 CollapseItem 實例並呼叫實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切換面板展開狀態，傳 `true` 為展開，`false` 為收起，不傳參為切換 | _expand?: boolean_ | - |

### 型別定義

元件匯出以下型別定義：

```js
import type { CollapseItemInstance } from 'rc-ui-lib';
```

`CollapseItemInstance` 是元件實例的型別，用法如下：

```js
import { useRef } from 'react';
import type { CollapseItemInstance } from 'rc-ui-lib';

const collapseItemRef = useRef<CollapseItemInstance>();

collapseItemRef.current?.toggle();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                        | 預設值                                      | 描述 |
| ------------------------------------------- | ------------------------------------------- | ---- |
| --rc-collapse-item-transition-duration      | _var(--rc-animation-duration-base)_         | -    |
| --rc-collapse-item-content-padding          | _var(--rc-padding-sm) var(--rc-padding-md)_ | -    |
| --rc-collapse-item-content-font-size        | _var(--rc-font-size-md)_                    | -    |
| --rc-collapse-item-content-line-height      | _1.5_                                       | -    |
| --rc-collapse-item-content-text-color       | _var(--rc-gray-6)_                          | -    |
| --rc-collapse-item-content-background-color | _var(--rc-white)_                           | -    |
| --rc-collapse-item-title-disabled-color     | _var(--rc-gray-5)_                          | -    |


