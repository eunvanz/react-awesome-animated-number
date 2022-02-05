import type { ComponentStory, ComponentMeta } from "@storybook/react";
import AnimatedNumberItem from "./AnimatedNumberItem";

export default {
  title: "components/AnimatedNumberItem",
  component: AnimatedNumberItem,
  args: {
    number: 3,
    size: 18,
  },
} as ComponentMeta<typeof AnimatedNumberItem>;

const Template: ComponentStory<typeof AnimatedNumberItem> = (args) => (
  <AnimatedNumberItem {...args} />
);

export const Default = Template.bind({});
