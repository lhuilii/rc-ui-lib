import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { DatetimePicker, Toast, Field, Popup } from '../..';
import { useDatetimePickerDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useDatetimePickerDemoI18n();

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleDate}>
        <DatetimePicker
          title={t.pickerTitleDate}
          type="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          onChange={(value) => console.log(value)}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleYearMonth}>
        <DatetimePicker
          type="year-month"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'year') {
              return `${val}${t.yearSuffix}`;
            }
            if (type === 'month') {
              return `${val}${t.monthSuffix}`;
            }
            return val;
          }}
          onChange={(value) => console.log(value)}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleMonthDay}>
        <DatetimePicker
          type="month-day"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'month') {
              return `${val}${t.monthSuffix}`;
            }
            if (type === 'day') {
              return `${val}${t.daySuffix}`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleTime}>
        <DatetimePicker
          type="time"
          minHour="10"
          maxHour="20"
          value="12:00"
          onChange={(value) => console.log(value)}
          onConfirm={(value) => console.log(value)}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDatetime}>
        <DatetimePicker
          type="datetime"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDateHour}>
        <DatetimePicker
          type="datehour"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleFilter}>
        <DatetimePicker
          type="time"
          minHour="10"
          maxHour="20"
          value="12:00"
          filter={(type, options) => {
            if (type === 'minute') {
              return options.filter((option) => +option % 5 === 0);
            }
            return options;
          }}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleColumnsOrder}>
        <DatetimePicker
          type="date"
          columnsOrder={['month', 'day', 'year']}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleConfirm}>
        <DatetimePicker
          onConfirm={(value: Date) => Toast(`${t.confirmToast}${value}`)}
          type="date"
          minDate={new Date(2021, 0, 1)}
          maxDate={new Date(2021, 2, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleWithPopup}>
        <Field
          readonly
          clickable
          label={t.fieldLabel}
          value={fieldValue}
          placeholder={t.fieldPlaceholder}
          onClick={() => setShowPicker(true)}
        />
      </DemoBlock>
      <Popup
        title={t.popupTitle}
        closeable
        visible={showPicker}
        round
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        <div style={{ padding: '0 8px' }}>
          <DatetimePicker
            onConfirm={(value: Date) => {
              setFieldValue(value.toISOString());
              setShowPicker(false);
            }}
            type="date"
            filter={(type: string, options) => {
              if (type === 'minute') {
                return options.filter((option) => +option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={new Date()}
          />
        </div>
      </Popup>
    </DemoSection>
  );
};
