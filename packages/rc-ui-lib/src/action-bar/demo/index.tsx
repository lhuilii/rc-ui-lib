/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import { useActionBarDemoI18n } from './locale';
import ActionBar from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useActionBarDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={ t.demoTitleBasic}>
        <ActionBar>
          <ActionBar.Icon icon="chat-o" text={ t.service} onClick={() => console.log('chat click')} />
          <ActionBar.Icon icon="cart-o" text={ t.cart } onClick={() => console.log('cart click')} />
          <ActionBar.Icon icon="shop-o" text={ t.shop } onClick={() => console.log('shop click')} />
          <ActionBar.Button
            type="danger"
            text={ t.buyNow }
            onClick={() => console.log('button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title={ t.demoTitleBadge}>
        <ActionBar>
          <ActionBar.Icon
            icon="chat-o"
            badge={{ dot: true }}
            text={ t.service}
            onClick={() => console.log('chat click')}
          />
          <ActionBar.Icon
            icon="cart-o"
            badge={{ content: 5 }}
            text={ t.cart }
            onClick={() => console.log('cart click')}
          />
          <ActionBar.Icon
            icon="shop-o"
            badge={{ content: 12 }}
            text={ t.shop }
            onClick={() => console.log('shop click')}
          />
          <ActionBar.Button
            type="warning"
            text={ t.addToCart }
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            type="danger"
            text={ t.buyNow }
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title={ t.demoTitleIconColor}>
        <ActionBar>
          <ActionBar.Icon
            icon="chat-o"
            color="#ee0a24"
            text={ t.service}
            onClick={() => console.log('chat click')}
          />
          <ActionBar.Icon icon="cart-o" text={ t.cart } onClick={() => console.log('cart click')} />
          <ActionBar.Icon
            icon="star"
            color="#ff5000"
            text={ t.shop }
            onClick={() => console.log('shop click')}
          />
          <ActionBar.Button
            type="warning"
            text={ t.addToCart }
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            type="danger"
            text={ t.buyNow }
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title={ t.demoTitleButtonColor}>
        <ActionBar>
          <ActionBar.Icon icon="chat-o" text={ t.service} onClick={() => console.log('chat click')} />
          <ActionBar.Icon icon="cart-o" text={ t.cart } onClick={() => console.log('cart click')} />
          <ActionBar.Button
            color="#be99ff"
            type="warning"
            text={ t.addToCart }
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            color="#7232dd"
            type="danger"
            text={ t.buyNow }
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
    </DemoSection>
  );
};
