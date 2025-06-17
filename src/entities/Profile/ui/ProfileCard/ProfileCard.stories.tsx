import type {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from "./ProfileCard";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Country, Currency} from "shared/const";
import {ValidateProfileError} from "../../model/types/profile";
import {Theme} from "app/providers/ThemeProvider";
import AvatarImage from 'shared/assets/test/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        profile: {
            id: '',
            userId: '',
            firstName: 'Иван',
            lastName: 'Иванов',
            age: 30,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Москва',
            username: 'Username',
            avatar: AvatarImage
        }
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};

export const Error: Story = {
    args: {
        error: 'Ошибка'
    }
};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};

export const WithValidateError: Story = {
    args: {
        validateErrors: [ValidateProfileError.INCORRECT_FIRSTNAME]
    }
};

// Dark
export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorDark: Story = {
    args: {
        error: 'Ошибка'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const LoadingDark: Story = {
    args: {
        isLoading: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithValidateErrorDark: Story = {
    args: {
        validateErrors: [ValidateProfileError.INCORRECT_FIRSTNAME]
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const ErrorGreen: Story = {
    args: {
        error: 'Ошибка'
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const LoadingGreen: Story = {
    args: {
        isLoading: true
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const WithValidateErrorGreen: Story = {
    args: {
        validateErrors: [ValidateProfileError.INCORRECT_FIRSTNAME]
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};