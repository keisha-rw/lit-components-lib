import type { Meta, StoryObj } from '@storybook/react';
import { PdsErrorPage } from './error-page';
declare const meta: Meta<typeof PdsErrorPage>;
export default meta;
type Story = StoryObj<typeof PdsErrorPage>;
export declare const Error404: Story;
export declare const Error403: Story;
export declare const Error500: Story;
export declare const Error503: Story;
