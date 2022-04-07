import Graph from './Graph.js';

export default {
  title: 'Graph',
  component: Graph,
};

const Template = (args) => <Graph {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Accumulation of my React skillz",
    graphHeight: "320px",
    showDatapointMarker: true,
    legend: "New concepts grasped",
    xLabels: [
      "1.4.2022",
      "2.4.2022", 
      "3.4.2022", 
      "4.4.2022", 
      "5.4.2022", 
      "6.4.2022", 
      "7.4.2022", 
      "8.4.2022", 
    ],
    values: [-3, 1, 2, 6, 8, 12, 16, 20],
};