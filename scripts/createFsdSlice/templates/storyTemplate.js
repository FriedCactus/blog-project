module.exports = (layer, componentName) => `import type {Meta, StoryObj} from '@storybook/react';
import { ${componentName} } from "./${componentName}";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

// Light
export const Primary: Story = {};

// Dark
export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};`;