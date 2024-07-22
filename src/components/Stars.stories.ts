import type { Meta, StoryObj } from '@storybook/vue3'
import Stars from './Stars.vue';
const meta: Meta<typeof Stars> = {
    component: Stars,
};

export default meta;
type Story = StoryObj<typeof Stars>;
export const Basic: Story= {
    render: (args) => ({
        components: {Stars,},
        setup() {
            return {args};
        },
        template: '<Stars v-bind="args" />',
    }),
    args: {count:5, selected:3}
};
