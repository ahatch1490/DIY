import type { Meta, StoryObj } from '@storybook/vue3'
import GridViewDetail  from './GridViewDetail.vue';


const meta: Meta<typeof GridViewDetail> = {
    component: GridViewDetail,
};


export default meta;
type Story = StoryObj<typeof GridViewDetail>;
export const Basic: Story={render: (args) => ({
        components: { GridViewDetail },
        setup() {
            return { args };
        },
        template: '<GridViewDetail v-bind="args" />',
    }),
    args: {
        title: 'Wen Track Saw',
        image_url:'/images/track_saw.jpg',
        description: "Overall, I appreciate the WEN Track Saw for its combination of functionality and price. It does clean cuts and has a general ease of use in my small home workshop. However, it has some minor quality issues in the dust collection and track robustnes.I just bought higher quality tracks and deal with the dust collection issues.",
        link_url:'https://www.example.com',
    },};