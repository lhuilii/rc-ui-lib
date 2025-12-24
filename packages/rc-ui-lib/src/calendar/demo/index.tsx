/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import Calendar, { CalendarDayItem, CalendarType } from '..';
import { useCalendarDemoI18n } from './locale';

const DEFAULT_PROPS = {
  id: '',
  type: 'single',
  round: true,
  color: undefined,
  minDate: undefined,
  maxDate: undefined,
  maxRange: undefined,
  position: undefined,
  formatter: undefined,
  showConfirm: true,
  confirmText: undefined,
  confirmDisabledText: undefined,
  firstDayOfWeek: 0,
  currentDate: null,
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCalendarDemoI18n();
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState({
    maxRange: [],
    selectSingle: null,
    selectRange: [],
    selectMultiple: [],
    quickSelect1: null,
    quickSelect2: [],
    customColor: [],
    customConfirm: [],
    customRange: null,
    customDayText: [],
    customPosition: null,
  });
  const [props, setProps] = useState({ ...DEFAULT_PROPS });

  const resetSettings = () => {
    setProps({ ...DEFAULT_PROPS });
  };

  const dayFormatter = (day: CalendarDayItem) => {
    if (!day.date) {
      return day;
    }

    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    if (month === 5) {
      if (date === 1) {
        day.topInfo = t.laborDay;
      } else if (date === 4) {
        day.topInfo = t.youthDay;
      } else if (date === 11) {
        day.text = t.today;
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = t.checkIn;
    } else if (day.type === 'end') {
      day.bottomInfo = t.checkOut;
    }

    return day;
  };

  const show = (type: string, id: string) => {
    resetSettings();
    const state = { ...DEFAULT_PROPS };
    state.id = id;
    state.type = type;

    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        state.showConfirm = false;
        break;
      case 'customColor':
        state.color = '#1989fa';
        break;
      case 'customConfirm':
        state.confirmText = t.confirmText;
        state.confirmDisabledText = t.confirmDisabledText;
        break;
      case 'customRange':
        state.minDate = new Date(2010, 0, 1);
        state.maxDate = new Date(2010, 0, 31);
        break;
      case 'customDayText':
        state.minDate = new Date(2010, 4, 1);
        state.maxDate = new Date(2010, 4, 31);
        state.formatter = dayFormatter;
        break;
      case 'customPosition':
        state.round = false;
        state.position = 'right';
        break;
      case 'maxRange':
      case 'selectMultiple':
        state.maxRange = 3;
        break;
      case 'firstDayOfWeek':
        state.firstDayOfWeek = 1;
        break;
      default:
        break;
    }
    setProps(state);
    setShowCalendar(true);
  };

  const formatDate = (date: Date) => {
    if (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return '';
  };

  const formatFullDate = (date: Date) => {
    if (date) {
      return `${date.getFullYear()}/${formatDate(date)}`;
    }
    return '';
  };

  const formatMultiple = (dates: Date[]) => {
    if (dates.length) {
      return t.selectedCount.replace('{count}', String(dates.length));
    }
    return '';
  };

  const formatRange = (dateRange: Date[]) => {
    if (dateRange.length) {
      const [start, end] = dateRange;
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
    return '';
  };

  const onClose = () => {
    setShowCalendar(false);
  };
  const onConfirm = (value: Date | Date[]) => {
    onClose();
    setDate({
      ...date,
      [props.id]: value,
    });
  };

  return (
    <DemoSection className="demo-cascader">
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell
          isLink
          title={t.selectSingle}
          value={formatFullDate(date.selectSingle)}
          onClick={() => show('single', 'selectSingle')}
        />
        <Cell
          isLink
          title={t.selectMultiple}
          value={formatMultiple(date.selectMultiple)}
          onClick={() => show('multiple', 'selectMultiple')}
        />
        <Cell
          isLink
          title={t.selectRange}
          value={formatRange(date.selectRange)}
          onClick={() => show('range', 'selectRange')}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleQuickSelect}>
        <Cell
          isLink
          title={t.selectSingle}
          value={formatFullDate(date.quickSelect1)}
          onClick={() => show('single', 'quickSelect1')}
        />
        <Cell
          isLink
          title={t.selectRange}
          value={formatRange(date.quickSelect2)}
          onClick={() => show('range', 'quickSelect2')}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustom}>
        <Cell
          isLink
          title={t.customColor}
          value={formatRange(date.customColor)}
          onClick={() => show('range', 'customColor')}
        />
        <Cell
          isLink
          title={t.customRange}
          value={formatFullDate(date.customRange)}
          onClick={() => show('single', 'customRange')}
        />
        <Cell
          isLink
          title={t.customConfirm}
          value={formatRange(date.customConfirm)}
          onClick={() => show('range', 'customConfirm')}
        />
        <Cell
          isLink
          title={t.customDayText}
          value={formatRange(date.customDayText)}
          onClick={() => show('range', 'customDayText')}
        />
        <Cell
          isLink
          title={t.customPosition}
          value={formatFullDate(date.customPosition)}
          onClick={() => show('single', 'customPosition')}
        />
        <Cell
          isLink
          title={t.maxRange}
          value={formatRange(date.maxRange)}
          onClick={() => show('range', 'maxRange')}
        />
        <Cell isLink title={t.firstDayOfWeek} onClick={() => show('single', 'firstDayOfWeek')} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitlePoppable}>
        <Calendar
          type="single"
          poppable={false}
          round
          showConfirm={false}
          style={{ height: '500px' }}
        />
      </DemoBlock>
      <Calendar
        show={showCalendar}
        type={props.type as CalendarType}
        color={props.color}
        round={props.round}
        position={props.position}
        minDate={props.minDate}
        maxDate={props.maxDate}
        maxRange={props.maxRange}
        formatter={props.formatter}
        showConfirm={props.showConfirm}
        confirmText={props.confirmText}
        confirmDisabledText={props.confirmDisabledText}
        firstDayOfWeek={props.firstDayOfWeek}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    </DemoSection>
  );
};
