import type {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from "./ProfileCard";
import {storyGlobalsDesktop} from 'shared/config/storybook';
import {Country, Currency} from "shared/const";
import avatar from 'shared/assets/test/avatar.jpg';
import {ValidateProfileError} from "entities/Profile";

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        profile: {
            firstName: 'Иван',
            lastName: 'Иванов',
            age: 30,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Москва',
            username: 'Username',
            avatar,
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
export const PrimaryDark: Story = {};

export const ErrorDark: Story = {
    args: {
        error: 'Ошибка'
    }
};

export const LoadingDark: Story = {
    args: {
        isLoading: true
    }
};

export const WithValidateErrorDark: Story = {
    args: {
        validateErrors: [ValidateProfileError.INCORRECT_FIRSTNAME]
    }
};

// Green
export const PrimaryGreen: Story = {};

export const ErrorGreen: Story = {
    args: {
        error: 'Ошибка'
    }
};

export const LoadingGreen: Story = {
    args: {
        isLoading: true
    }
};

export const WithValidateErrorGreen: Story = {
    args: {
        validateErrors: [ValidateProfileError.INCORRECT_FIRSTNAME]
    }
};