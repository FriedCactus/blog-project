import type {Meta, StoryObj} from '@storybook/react';
import {CountrySelect} from "./CountrySelect";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {useState} from "react";

const CountrySelectRender = () => {
    const [value, setValue] = useState('');

    return (
        <CountrySelect
            value={value}
            onChange={setValue}
        />
    );
};

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    render: () => <CountrySelectRender/>,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};