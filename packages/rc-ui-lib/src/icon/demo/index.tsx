import React from 'react';
import icons from '@vant/icons';
import { components } from 'site-mobile-demo';
import { Flex, Icon, Tabs, Toast } from '../..';
import { useIconDemoI18n } from './locale';
import './style.less';

const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/font_2763890_w471tfudy4d.js');

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useIconDemoI18n();
  const copy = (icon: string, option: Record<string, unknown> = {}) => {
    let tag = `<Icon name="${icon}"`;
    if ('dot' in option) {
      tag = `${tag} ${option.dot ? 'dot' : ''}`;
    }
    if ('badge' in option) {
      tag = `${tag} badge="${option.badge}"`;
    }
    if ('color' in option) {
      tag = `${tag} color="${option.color}"`;
    }
    if ('size' in option) {
      tag = `${tag} size="${option.size}"`;
    }
    tag = `${tag} />`;
    copyToClipboard(tag);

    Toast({
      duration: 1500,
      className: 'demo-icon-notify',
      message: `${t.copySuccess}${tag}`,
    });
  };

  return (
    <DemoSection>
      <Tabs active={0} sticky>
        <Tabs.TabPane title={t.tabUsage}>
          <DemoBlock title={t.demoTitleBasic}>
            <Flex>
              <Flex.Item span={6}>
                <Icon color="red" name="chat-o" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title={t.demoTitleBadge}>
            <Flex>
              <Flex.Item span={6}>
                <Icon name="chat-o" dot />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="chat-o" badge={{ content: 9 }} />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="chat-o" badge={{ content: '99+' }} />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title={t.demoTitleColor}>
            <Flex>
              <Flex.Item span={6}>
                <Icon name="cart-o" color="#f44336" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="fire-o" color="#999" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title={t.demoTitleSize}>
            <Flex>
              <Flex.Item span={6}>
                <Icon name="close" size="40" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="close" size="3rem" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title={t.demoTitleCustom}>
            <Flex>
              <Flex.Item span={6}>
                <IconFont name="cuIcon-classify" color="#f44336" />
              </Flex.Item>
              <Flex.Item span={6}>
                <IconFont name="cuIcon-classify_fill" color="green" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabBasic}>
          <Flex wrap="wrap">
            {icons.basic.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabOutline}>
          <Flex wrap="wrap">
            {icons.outline.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabFilled}>
          <Flex wrap="wrap">
            {icons.filled.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
