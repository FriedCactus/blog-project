import type {Meta, StoryObj} from '@storybook/react';
import {Card} from "./Card";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const render = () => (
    <Card>
        <div
            style={{
                height: 300,
                width: 200
            }}
        >
            Card
        </div>
    </Card>
);

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    render,
    args: {},
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};
