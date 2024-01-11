import { Meta, Story } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent
} as Meta;

const avatarUrl =
  'https://media.licdn.com/dms/image/D4D03AQEVfOHVEoTMhg/profile-displayphoto-shrink_200_200/0/1697433955233?e=1709164800&v=beta&t=ShbuVClacgM8M4wAZ3_gV6W_dthxHSEb_sku-o2BGTM';

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  component: AvatarComponent,
  props: args
});

export const Rounded: Story<AvatarComponent> = Template.bind({});
Rounded.args = {
  avatarUrl,
  size: 64
};

export const Square: Story<AvatarComponent> = Template.bind({});
Square.args = {
  avatarUrl,
  size: 64,
  rounded: false
};
