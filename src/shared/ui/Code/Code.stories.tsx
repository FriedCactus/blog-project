import type {Meta, StoryObj} from '@storybook/react';
import {Code} from "./Code";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const testText = 'const UserInfo = async () => {\n' +
    '  const session = await getServerSession(authOptions);\n' +
    '\n' +
    '  if (!session) {\n' +
    '    return <p>Вы не вошли в систему</p>;\n' +
    '  }\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h2>Привет, {session.user?.name}</h2>\n' +
    '      <p>Email: {session.user?.email}</p>\n' +
    '    </div>\n' +
    '  );\n' +
    '};\n' +
    '\n' +
    'export default UserInfo;';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    args: {
        text: testText
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};