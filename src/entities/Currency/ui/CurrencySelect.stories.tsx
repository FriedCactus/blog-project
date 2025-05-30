import type {Meta, StoryObj} from '@storybook/react';
import {CurrencySelect} from "./CurrencySelect";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {useState} from "react";

const CurrencySelectRender = () => {
    const [value, setValue] = useState('');

    return (
        <CurrencySelect
            value={value}
            onChange={setValue}
        />
    );
};

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    render: () => <CurrencySelectRender/>,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};