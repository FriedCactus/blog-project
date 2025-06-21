import type {Meta, StoryObj} from '@storybook/react';
import {Flex} from "./Flex";
import {storyGlobalsDesktop} from 'shared/config/storybook';

const meta: Meta<typeof Flex> = {
    title: 'shared/Stack',
    render: (args) => (
        <Flex {...args}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 2</div>
        </Flex>
    ),
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Row: Story = {};

export const Column: Story = {
    args: {
        direction: 'column'
    }
};

// Justify
export const JustifyStart: Story = {
    args: {
        justify: 'start'
    }
};

export const JustifyCenter: Story = {
    args: {
        justify: 'center'
    }
};

export const JustifyEnd: Story = {
    args: {
        justify: 'end'
    }
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between'
    }
};

// Align
export const AlignStart: Story = {
    args: {
        direction: 'column',
        align: 'start'
    }
};

export const AlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center'
    }
};

export const AlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end'
    }
};

// Gap
export const GapS: Story = {
    args: {
        gap: 's'
    }
};

export const GapM: Story = {
    args: {
        gap: 'm'
    }
};

export const GapL: Story = {
    args: {
        gap: 'l'
    }
};

export const GapXL: Story = {
    args: {
        gap: 'xl'
    }
};