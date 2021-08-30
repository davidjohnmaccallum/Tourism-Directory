import OfferingTile from '../components/OfferingTile';

const story = {
  title: 'OfferingTile',
  component: OfferingTile,
  argTypes: {
    argTypes: { onClick: { action: 'clicked' } },
  },
};
export default story;

const Template = (args) => <OfferingTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Leopard Safari",
  price: "R5999",
  stars: 4
};
