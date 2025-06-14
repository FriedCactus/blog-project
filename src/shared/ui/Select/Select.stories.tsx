import type {Meta, StoryObj} from '@storybook/react';
import {Select, SelectOption} from "./Select";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {useState} from "react";

const SelectRender = () => {
    const [value, setValue] = useState('');
    const options: SelectOption<string>[] = [
        {
            value: 'кот',
            text: 'Кот',
        },
        {
            value: 'собака',
            text: 'Собака',
        },
        {
            value: 'попугай',
            text: 'Попугай',
        }];

    return (
        <Select
            label="Select"
            placeholder="Выберите значение"
            value={value}
            onChange={value => setValue(value)}
            options={options}
        />
    );
};

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    render: () => <SelectRender/>,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};