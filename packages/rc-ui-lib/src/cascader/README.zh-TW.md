# Cascader 級聯選擇

### 介紹

級聯選擇框，用於多層級資料的選擇，典型場景為省市區選擇。

### 引入

```js
import { Cascader } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

級聯選擇元件可以搭配 Field 和 Popup 元件使用，示例如下：

```jsx
import { Field, Popup, Cascader, useSetState } from 'rc-ui-lib';

// 選項列表，children 代表子選項，支援多級巢狀
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江蘇省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

export default () => {
  const [state, set] = useSetState({
    visible: false,
    value: '',
  });
  // 全部選項選擇完畢後，會觸發 finish 事件
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="地區"
        placeholder="請選擇所在地區"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="請選擇所在地區"
          options={options}
          onClose={() => set({ visible: false })}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### 自定義顏色

透過 `activeColor` 屬性來設定選中狀態的高亮顏色。

```jsx
<Cascader title="請選擇所在地區" activeColor="#f44336" options={options} />
```

### 非同步載入選項

可以監聽 `onChange` 事件並動態設定 `options`，實現非同步載入選項。

```jsx
import { useState } from 'react'
import { Toast, Field, Popup, Cascader, useSetState } from 'rc-ui-lib';

export default () => {
  const [dynamicOpts, setDynamicOpts] = useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ]);
  const onChange = ({ value }) => {
    if (value === dynamicOpts[0].value) {
      Toast.loading({ message: '載入中...', duration: 0 });
      setTimeout(() => {
        Toast.clear()
        const newOpts = [...dynamicOpts];
        newOpts[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '寧波市', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="地區"
        placeholder="請選擇所在地區"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="請選擇所在地區"
          options={options}
          onClose={() => set({ visible: false })}
          onChange={onChange}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### 自定義欄位名

透過 `fieldNames` 屬性可以自定義 `options` 裡的欄位名稱。

```jsx
const options = [
  {
    name: '浙江省',
    code: '330000',
    items: [{ name: '杭州市', code: '330100' }],
  },
  {
    name: '江蘇省',
    code: '320000',
    items: [{ name: '南京市', code: '320100' }],
  },
];

<Cascader
  title="請選擇所在地區"
  options={options}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items',
  }}
/>;
```

### 受控元件

透過 `value` 屬性可以讓 Cascader 成為受控元件。

```jsx
import { useState } from 'react';
import { Cascader, Button, Popup, Field } from 'rc-ui-lib';

// 選項列表，children 代表子選項，支援多級巢狀
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江蘇省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

// 從當前選中值取得選中文本
// 在實際業務中可能需要結合 childrenKey、valueKey 等進行調整
function getTextFromValue(value, opts) {
  const rs = [];
  value.reduce((a, v) => {
    const matchOpt = a.find((opt) => opt.value === v);
    rs.push(matchOpt.text);
    return matchOpt.children;
  }, opts);
  return rs.join('/');
}

export default () => {
  const [text, setText] = useState(getTextFromValue(['330000', '330100', '330103'], options));
  const [value, setValue] = useState(['330000', '330100', '330103']);
  const [visible, setVisible] = useState(false);

  const onFinish = ({ selectedOptions }) => {
    setText(selectedOptions.map((option) => option.text).join('/'));
    setValue(selectedOptions.map((option) => option.value));
    setVisible(false);
  };

  const onSetting = () => {
    const newValue = ['330000', '330100', '330104'];
    setText(getTextFromValue(newValue, options));
    setValue(newValue);
  };
  return (
    <>
      <Field
        isLink
        readonly
        value={text}
        label="地區"
        placeholder="請選擇所在地區"
        errorMessage={<div>當前值:{JSON.stringify(value)}</div>}
        onClick={() => setVisible(true)}
      />
      <Popup visible={visible} round position="bottom" onClose={() => setVisible(false)}>
        <Cascader
          title="請選擇所在地區"
          options={options}
          value={value}
          onClose={() => setVisible(false)}
          onFinish={onFinish}
        />
      </Popup>

      <Button onClick={onSetting}>外部設定</Button>
    </>
  );
};
```

## API

### Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| title | 頂部標題 | _ReactNode_ | - |
| value | 當前選中的值 | _(string \| number)[]_ | - |
| defaultValue | 預設選中的值 | _(string \| number)[]_ | - |
| options | 可選項資料來源 | _Option[]_ | `[]` |
| optionRender | 自定義選項文字 | _({ option: Option, selected: boolean }) => ReactNode_ | - |
| placeholder | 未選中時的提示文案 | _string_ | `請選擇` |
| activeColor | 選中狀態的高亮顏色 | _string_ | `#ee0a24` |
| closeable | 是否顯示關閉圖示 | _boolean_ | `true` |
| closeIcon | 關閉圖示 | _string\|ReactNode_ | `cross` |
| fieldNames | 自定義 `options` 結構中的欄位 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Option 資料結構

`options` 屬性是一個由物件構成的陣列，陣列中的每個物件配置一個可選項，物件可以包含以下值：

| 鍵名      | 說明                     | 類型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 選項文字（必填）         | _string_                    |
| value     | 選項對應的值（必填）     | _string \| number_          |
| color     | 選項文字顏色             | _string_                    |
| children  | 子選項列表               | _Option[]_                  |
| disabled  | 是否禁用選項             | _boolean_                   |
| className | 為對應列新增額外的 class | _string \| Array \| object_ |

### Events

| 事件       | 說明                   | 回調參數                               |
| ---------- | ---------------------- | -------------------------------------- |
| onChange   | 選中項變化時觸發       | `{ value, selectedOptions, tabIndex }` |
| onFinish   | 全部選項選擇完成後觸發 | `{ value, selectedOptions, tabIndex }` |
| onClose    | 點擊關閉圖示時觸發     | -                                      |
| onClickTab | 點擊標籤時觸發         | _tabIndex: number, title: string_      |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/config-provider)。

| 名稱                                  | 預設值                   | 描述 |
| ------------------------------------- | ------------------------ | ---- |
| --rc-cascader-header-height           | _48px_                   | -    |
| --rc-cascader-header-padding          | _0 var(--rc-padding-md)_ | -    |
| --rc-cascader-title-font-size         | _var(--rc-font-size-lg)_ | -    |
| --rc-cascader-title-line-height       | _20px_                   | -    |
| --rc-cascader-close-icon-size         | _22px_                   | -    |
| --rc-cascader-close-icon-color        | _var(--rc-gray-5)_       | -    |
| --rc-cascader-close-icon-active-color | _var(--rc-gray-6)_       | -    |
| --rc-cascader-selected-icon-size      | _18px_                   | -    |
| --rc-cascader-tabs-height             | _48px_                   | -    |
| --rc-cascader-active-color            | _var(--rc-danger-color)_ | -    |
| --rc-cascader-options-height          | _384px_                  | -    |
| --rc-cascader-option-disabled-color   | _van(--rc-gray-5)_       | -    |
| --rc-cascader-tab-color               | _var(--rc-text-color)_   | -    |
| --rc-cascader-unselected-tab-color    | _var(--rc-gray-6)_       | -    |


