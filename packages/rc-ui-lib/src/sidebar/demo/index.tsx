import React, { useState } from 'react';
import Sidebar from '..';
import { Grid, Toast } from '../..';
import { useSidebarDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const t = useSidebarDemoI18n();

  const onChange = (value: number) => {
    Toast(t.toastClickLabel(value));
    setActive4(value);
  };

  return (
    <Grid className="demo-sidebar" columnNum={2} border={false}>
      <Grid.Item>
        <h3 className="demo-sidebar-title">{t.demoTitleBasic}</h3>
        <Sidebar value={active1} onChange={setActive1}>
          <Sidebar.Item title={t.labelName} />
          <Sidebar.Item title={t.labelName} />
          <Sidebar.Item title={t.labelName} />
        </Sidebar>
      </Grid.Item>
      <Grid.Item>
        <h3 className="demo-sidebar-title">{t.demoTitleDisabled}</h3>
        <Sidebar value={active2} onChange={setActive2}>
          <Sidebar.Item title={t.labelName} />
          <Sidebar.Item title={t.labelName} disabled />
          <Sidebar.Item title={t.labelName} />
        </Sidebar>
      </Grid.Item>
      <Grid.Item>
        <h3 className="demo-sidebar-title">{t.demoTitleBadge}</h3>
        <Sidebar value={active3} onChange={setActive3}>
          <Sidebar.Item dot title={t.labelName} />
          <Sidebar.Item badge="5" title={t.labelName} />
          <Sidebar.Item badge="20" title={t.labelName} />
        </Sidebar>
      </Grid.Item>
      <Grid.Item>
        <h3 className="demo-sidebar-title">{t.demoTitleEvent}</h3>
        <Sidebar value={active4} onChange={onChange}>
          <Sidebar.Item title={t.labelName} />
          <Sidebar.Item title={t.labelName} />
          <Sidebar.Item title={t.labelName} />
        </Sidebar>
      </Grid.Item>
    </Grid>
  );
};
