import Circle from './Circle.js';

export default {
  title: 'Circle',
  component: Circle,
};

const Template = (args) => <svg><Circle {...args} /></svg>;

export const Small = Template.bind({});
Small.args = {
    cx: 80,
    cy: 80,
    r: 30,
    stroke: "yellow",
    strokeWidth: 6,
    fill: "none",
};

export const Big = Template.bind({});
Big.args = {
    cx: 80,
    cy: 80,
    r: 60,
    stroke: "yellow",
    "strokeWidth": 6,
    fill: "none",
};