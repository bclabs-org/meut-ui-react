import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CloudArrowDownIcon, DocumentIcon } from '@heroicons/react/24/outline';
import DropdownV2 from '../components/DropdownV2';
import DropdownItem from '../components/DropdownItem';

export default {
  title: 'Components/DropdownV2',
  component: DropdownV2,
} as ComponentMeta<typeof DropdownV2>;

const translationData = {
  ko: {
    BTC: '비트코인',
    ETH: '이더리움',
    ADA: '에이다',
    BNB: '바이낸스 코인',
    SOL: '솔라나',
  },
  en: {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    ADA: 'Cardano',
    BNB: 'Binance Coin',
    SOL: 'Solana',
  },
};

const translationMenuData = {
  ko: {
    copyLink: '링크 복사',
    downloadStrategyCard: '전략 카드 다운로드',
  },
  en: {
    copyLink: 'Copy Link',
    downloadStrategyCard: 'Download Strategy Card',
  },
};

const Template: ComponentStory<typeof DropdownV2> = (args) => {
  const [selectedItem, setSelectedItem] = React.useState(args.activeItem);
  const [currentLanguage, setCurrentLanguage] = React.useState<'en' | 'ko'>('en');
  const mockT = (key: string): string => translationData[currentLanguage][key];

  const handleClick = (item: string): void => {
    setSelectedItem(item);
  };

  return (
    <DropdownV2 {...args} activeItem={selectedItem} activeItemLabel={mockT(selectedItem)}>
      {['BTC', 'ETH', 'SOL', 'ADA', 'BNB'].map((item) => (
        <DropdownItem key={item} value={item} onClick={(): void => handleClick(item)}>
          {mockT(item)}
        </DropdownItem>
      ))}
    </DropdownV2>
  );
};

const MenuTemplate: ComponentStory<typeof DropdownV2> = (args) => {
  const [selectedItem, setSelectedItem] = React.useState(args.activeItem);
  const [currentLanguage, setCurrentLanguage] = React.useState<'en' | 'ko'>('en');
  const mockT = (key: string): string => translationMenuData[currentLanguage][key];

  const handleClick = (item: string): void => {
    setSelectedItem(item);
  };

  return (
    <DropdownV2
      {...args}
      activeItem={selectedItem}
      activeItemLabel={mockT(selectedItem)}
      variants="secondary"
    >
      <DropdownItem value={'copyLink'} onClick={(): void => handleClick('copyLink')}>
        <DocumentIcon className="w-6 h-6" />
        {mockT('copyLink')}
      </DropdownItem>
      <DropdownItem
        value={'downloadStrategyCard'}
        onClick={(): void => handleClick('downloadStrategyCard')}
      >
        <CloudArrowDownIcon className="w-6 h-6" />
        {mockT('downloadStrategyCard')}
      </DropdownItem>
    </DropdownV2>
  );
};

export const Default = Template.bind({});
Default.args = {
  activeItem: 'BTC',
  activeItemLabel: 'Bitcoin',
  titleLabel: 'Select a coin',
  fontSize: 'text-base',
};

export const WithIcon = MenuTemplate.bind({});
WithIcon.args = {
  activeItem: 'myAccount',
  activeItemLabel: 'My Account',
  fontSize: 'text-base',
  placeholder: 'Share',
};
