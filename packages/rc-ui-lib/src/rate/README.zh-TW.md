# Rate 評分

### 介紹

用於對事物進行評級操作。

### 引入

```js
import { Rate } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `value` 來綁定當前評分值。

```jsx
<Rate value={3} />
```

```jsx
export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={(current) => setValue(current)} />;
};
```

### 自定義圖標

通過 `icon` 屬性設置選中時的圖標，`voidIcon` 屬性設置未選中時的圖標。

```jsx
<Rate defaultValue={3} icon="like" voidIcon="like-o" />
```

### 自定義樣式

通過 `size` 屬性設置圖標大小，`color` 屬性設置選中時的顏色，`voidColor` 設置未選中時的顏色。

```jsx
<Rate defaultValue={3} size={25} color="#ffd21e" voidIcon="star" voidColor="#eee" />
```

### 半星

設置 `allowHalf` 屬性後可以選中半星。

```jsx
<Rate defaultValue={3.5} allowHalf />
```

### 自定義數量

通過 `count` 屬性設置評分總數。

```jsx
<Rate defaultValue={1} count="8" />
```

### 禁用狀態

通過 `disabled` 屬性來禁用評分。

```jsx
<Rate defaultValue={3} disabled />
```

### 只讀狀態顯示小數

設置 `readonly` 和 `allowHalf` 屬性後，Rate 元件可以展示任意小數結果。

```jsx
<Rate defaultValue={3.3} readonly allowHalf />
```

## API

### Props

| 參數          | 說明                                         | 類型               | 默認值    |
| ------------- | -------------------------------------------- | ------------------ | --------- |
| value         | 當前分值                                     | _number_           | -         |
| defaultValue  | 默認分值                                     | _number_           | -         |
| count         | 圖標總數                                     | _number \| string_ | `5`       |
| size          | 圖標大小，默認單位為`px`                     | _number \| string_ | `20px`    |
| gutter        | 圖標間距，默認單位為`px`                     | _number \| string_ | `4px`     |
| color         | 選中時的顏色                                 | _string_           | `#ee0a24` |
| voidColor     | 未選中時的顏色                               | _string_           | `#c8c9cc` |
| disabledColor | 禁用時的顏色                                 | _string_           | `#c8c9cc` |
| icon          | 選中時的[圖標名稱](#/zh-CN/icon)或圖片鏈接   | _string_           | `star`    |
| voidIcon      | 未選中時的[圖標名稱](#/zh-CN/icon)或圖片鏈接 | _string_           | `star-o`  |
| allowHalf     | 是否允許半選                                 | _boolean_          | `false`   |
| readonly      | 是否為只讀狀態，只讀狀態下無法修改評分       | _boolean_          | `false`   |
| disabled      | 是否禁用評分                                 | _boolean_          | `false`   |
| touchable     | 是否可以通過滑動手勢選擇評分                 | _boolean_          | `true`    |

### Events

| 事件名   | 說明                     | 回調參數 |
| -------- | ------------------------ | -------- |
| onChange | 當前分值變化時觸發的事件 | 當前分值 |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                          | 默認值                   | 描述 |
| ----------------------------- | ------------------------ | ---- |
| --rc-rate-icon-size           | _20px_                   | -    |
| --rc-rate-icon-gutter         | _var(--rc-padding-base)_ | -    |
| --rc-rate-icon-void-color     | _var(--rc-gray-5)_       | -    |
| --rc-rate-icon-full-color     | _var(--rc-danger-color)_ | -    |
| --rc-rate-icon-disabled-color | _var(--rc-gray-5)_       | -    |

