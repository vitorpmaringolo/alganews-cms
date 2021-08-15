import { Story, Meta } from '@storybook/react';

import NoData, { NoDataProps } from '../app/components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData
} as Meta;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args = {}

export const FixedHeight = Template.bind({})
Default.args = {
    height: 240
}