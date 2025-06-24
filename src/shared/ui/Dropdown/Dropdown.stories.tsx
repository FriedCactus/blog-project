import type {Meta, StoryObj} from '@storybook/react';
import {Dropdown, DropdownItem} from "./Dropdown";
import {RouterDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const items: DropdownItem[] = [
    {
        content: 'item 1',
        onClick: () => {
            console.log('click 1');
        }
    },
    {
        content: 'item 2',
        onClick: () => {
            console.log('click 2');
        }
    },
    {
        content: 'item 3',
        onClick: () => {
            console.log('click 3');
        }
    },
    {
        content: 'Link',
        href: '/'
    }
];

const Trigger = () => {
    return (
        <div style={{
            width: 'fit-content',
        }}>
            Открыть
        </div>
    );
};

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    args: {
        items,
        trigger: <Trigger/>
    },
    decorators: [RouterDecorator()],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Light
export const Primary: Story = {};

// Dark
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const Green: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};