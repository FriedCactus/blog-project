import type {Meta, StoryObj} from '@storybook/react';
import {ListBox, ListBoxProps, ListItem} from "./ListBox";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {useState} from "react";

const items: ListItem[] = [
    {
        value: '1',
        content: '1 item'
    },
    {
        value: '2',
        content: '2 item'
    },
    {
        value: '3',
        content: 'Длинный элемент',
    },
];

const RenderComponent = (args: ListBoxProps) => {
    const [value, setValue] = useState('2');

    return (
        <ListBox
            {...args}
            value={value}
            onSelect={setValue}
            items={items}
            placeholder="Выберите опцию"
        />
    );
};

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: RenderComponent,
    args: {
        label: 'ListBox'
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};

export const BottomPosition: Story = {
    args: {
        optionsPosition: 'bottom'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};
