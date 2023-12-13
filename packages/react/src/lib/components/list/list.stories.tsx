import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconCheck } from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsList } from './list';
import { PdsListItem } from '../list-item/list-item';
import { PdsLink } from '../link/link';

export default {
  title: 'Components/List',
  component: PdsList,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsList> = (args) => {
  return <PdsList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
    </>
  ),
};

export const DefaultSmall = Template.bind({});
DefaultSmall.storyName = 'Default small';
DefaultSmall.args = {
  size: 'sm',
  children: (
    <>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
    </>
  ),
};

export const DefaultWithIcons = Template.bind({});
DefaultWithIcons.storyName = 'Default with icons';
DefaultWithIcons.args = {
  children: (
    <>
      <PdsListItem>
        <span slot="icon">
          <PdsIconCheck color={themedefault.SemanticBorderIconDefault} />
        </span>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span slot="icon">
          <PdsIconCheck color={themedefault.SemanticBorderIconDefault} />
        </span>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span slot="icon">
          <PdsIconCheck color={themedefault.SemanticBorderIconDefault} />
        </span>
        <span>List item label</span>
      </PdsListItem>
    </>
  ),
};

export const DefaultSmallSpacing = Template.bind({});
DefaultSmallSpacing.storyName = 'Default small spacing';
DefaultSmallSpacing.args = {
  spacing: 'sm',
  children: (
    <>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item label</span>
      </PdsListItem>
    </>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const HorizontalSmall = Template.bind({});
HorizontalSmall.storyName = 'Horizontal small';
HorizontalSmall.args = {
  orientation: 'horizontal',
  size: 'sm',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const HorizontalSmallSpacing = Template.bind({});
HorizontalSmallSpacing.storyName = 'Horizontal small spacing';
HorizontalSmallSpacing.args = {
  orientation: 'horizontal',
  spacing: 'sm',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const HorizontalLargeSpacing = Template.bind({});
HorizontalLargeSpacing.storyName = 'Horizontal large spacing';
HorizontalLargeSpacing.args = {
  orientation: 'horizontal',
  spacing: 'lg',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const AlignCenter = Template.bind({});
AlignCenter.storyName = 'Align center';
AlignCenter.args = {
  align: 'center',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const AlignCenterHorizontal = Template.bind({});
AlignCenterHorizontal.storyName = 'Align center horizontal';
AlignCenterHorizontal.args = {
  orientation: 'horizontal',
  align: 'center',
  children: (
    <>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
      <PdsListItem>
        <span>List item</span>
      </PdsListItem>
    </>
  ),
};

export const LinkList = Template.bind({});
LinkList.storyName = 'Link list';
LinkList.args = {
  children: (
    <>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink>
          <span>This is a link</span>
        </PdsLink>
      </PdsListItem>
    </>
  ),
};

const DescriptionTemplate: StoryFn<typeof PdsList> = (args) => (
  <PdsList {...args}>
    <PdsListItem>
      <span slot="description-term">List item label</span>
      <span slot="description">List item description</span>
    </PdsListItem>
    <PdsListItem>
      <span slot="description-term">List item label</span>
      <span slot="description">List item description</span>
    </PdsListItem>
    <PdsListItem>
      <span slot="description-term">List item label</span>
      <span slot="description">List item description</span>
    </PdsListItem>
    <PdsListItem>
      <span slot="description-term">List item label</span>
      <span slot="description">List item description</span>
    </PdsListItem>
    <PdsListItem>
      <span slot="description-term">List item label</span>
      <span slot="description">List item description</span>
    </PdsListItem>
  </PdsList>
);

export const DescriptionDefault = DescriptionTemplate.bind({});
DescriptionDefault.args = {
  variant: 'description',
};
DescriptionDefault.storyName = 'Description default';

export const DescriptionReverse = DescriptionTemplate.bind({});
DescriptionReverse.args = {
  variant: 'description-reverse',
};
DescriptionReverse.storyName = 'Description reverse';
