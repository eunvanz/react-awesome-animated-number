import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Button, Switch, TextField } from "@mui/material";
import { random } from "lodash-es";
import AnimatedNumber from "./AnimatedNumber";

export default {
  title: "components/AnimatedNumber",
  component: AnimatedNumber,
  args: {
    number: 31290827,
    size: 20,
    duration: 200,
  },
} as ComponentMeta<typeof AnimatedNumber>;

const Template: ComponentStory<typeof AnimatedNumber> = (args) => (
  <AnimatedNumber {...args} />
);

export const Default = Template.bind({});

export const WithController = () => {
  const [number, setNumber] = useState(random(0, 100000000));
  const [hasComma, setHasComma] = useState(true);
  const [size, setSize] = useState(28);
  const [duration, setDuration] = useState(200);

  const increaseNumber = useCallback(() => {
    setNumber((number) => number + random(0, 100000000));
  }, []);

  const decreaseNumber = useCallback(() => {
    setNumber((number) => number - random(0, 100000000));
  }, []);

  return (
    <>
      <AnimatedNumber
        number={number}
        hasComma={hasComma}
        size={size}
        duration={duration}
      />
      <div style={{ marginTop: 10 }}>
        <Button variant="contained" size="small" onClick={increaseNumber}>
          Increase Number
        </Button>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 5 }}
          onClick={decreaseNumber}
        >
          Decrease Number
        </Button>
        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Switch checked={hasComma} onChange={(_, checked) => setHasComma(checked)} />{" "}
          Comma
        </div>
        <div style={{ marginTop: 10 }}>
          <TextField
            type="number"
            value={size}
            size="small"
            label="Size"
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <TextField
            type="number"
            value={duration}
            size="small"
            label="Duration"
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};
