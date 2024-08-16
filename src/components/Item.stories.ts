import type { Meta, StoryObj } from '@storybook/vue3'
import Item  from './Item.vue';


const meta: Meta<typeof Item> = {
    component: Item,
};


export default meta;
type Story = StoryObj<typeof Item>;
export const Basic: Story={render: (args) => ({
        components: { Item },
        setup() {
            return { args };
        },
        template: '<Item v-bind="args" />',
    }),
    args: {gridItem: {
        id:1,
        title: 'testing item title',
        image_url:'/images/track_saw.jpg',
        description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
        link_url:'https://www.example.com',
        stars:null,}
    },};