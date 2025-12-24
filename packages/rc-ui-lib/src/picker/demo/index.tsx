import React, { useRef, useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast, Field, Popup } from '../..';
import Picker from '..';
import { usePickerDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = usePickerDemoI18n();

  const picker = useRef<any>(null);

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];
  const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };

  const onChangeToast = (value: string, index: number) =>
    Toast(`${t.toastCurrent}${JSON.stringify(value)}, ${t.toastIndex}${index}`);

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Picker
          title={t.title}
          columns={[
            { text: '杭州' },
            { text: '宁波' },
            { text: '温州', disabled: true },
            { text: '嘉兴', disabled: true },
          ]}
          onChange={onChangeToast}
          onCancel={() => Toast.info(t.toastCancel)}
          onConfirm={() => Toast.info(t.toastConfirm)}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDefaultIndex}>
        <Picker columns={columns} defaultIndex={2} onChange={onChangeToast} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleMultiple}>
        <Picker
          onChange={(value: string, index: number) => {
            console.log(value, index);
          }}
          columns={[
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCascade}>
        <Picker
          onChange={(value: string, index: number) => {
            console.log(value, index);
          }}
          onConfirm={(value, index) => console.log(value, index)}
          columns={[
            {
              text: '江苏',
              children: [
                {
                  text: '苏州',
                  children: [{ text: '姑苏区' }, { text: '吴中区' }],
                },
                {
                  text: '扬州',
                  children: [{ text: '广陵区' }, { text: '邗江区' }],
                },
              ],
            },
            {
              text: '浙江',
              children: [
                {
                  text: '杭州',
                  children: [{ text: '西湖区' }, { text: '余杭区' }],
                },
                {
                  text: '温州',
                  children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                },
              ],
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDisabled}>
        <Picker columns={[{ text: '南京', disabled: true }, { text: '苏州' }, { text: '扬州' }]} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDynamic}>
        <Picker
          ref={picker}
          columns={[{ values: Object.keys(cities) }, { values: cities['浙江'], defaultIndex: 2 }]}
          onChange={(values) => {
            picker.current.setColumnValues(1, cities[values[0]]);
          }}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleLoading}>
        <Picker
          loading
          columns={[
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleWithPopup}>
        <Field
          readonly
          clickable
          label={t.fieldLabelCity}
          value={fieldValue}
          placeholder={t.fieldPlaceholderCity}
          onClick={() => setShowPicker(true)}
        />
      </DemoBlock>
      <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
        <Picker
          title={t.title}
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
          columns={columns}
        />
      </Popup>
      <DemoBlock card title={t.demoTitleCustomColumns}>
        <Picker
          title={t.title}
          columnsFieldNames={{
            text: 'cityName',
            children: 'cities',
          }}
          columns={[
            {
              cityName: '浙江',
              cities: [
                {
                  cityName: '杭州',
                  cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
                },
                {
                  cityName: '温州',
                  cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
                },
              ],
            },
            {
              cityName: '福建',
              cities: [
                {
                  cityName: '福州',
                  cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
                },
                {
                  cityName: '厦门',
                  cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
                },
              ],
            },
          ]}
        />
      </DemoBlock>
    </DemoSection>
  );
};
