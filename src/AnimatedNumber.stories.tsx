import { useCallback, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { random } from "lodash-es";
import AnimatedNumber from "./AnimatedNumber";

export default {
  title: "components/AnimatedNumber",
  component: AnimatedNumber,
  args: {
    value: 31290827,
    size: 20,
    duration: 200,
    order: "asc",
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
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const increaseNumber = useCallback(() => {
    setNumber((number) => number + random(0, 100000000));
  }, []);

  const decreaseNumber = useCallback(() => {
    setNumber((number) => number - random(0, 100000000));
  }, []);

  return (
    <>
      <AnimatedNumber
        value={number}
        hasComma={hasComma}
        size={size}
        duration={duration}
        order={order}
      />
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", mt: 2 }}>
          <TextField
            type="number"
            value={number}
            size="small"
            label="Value"
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <Button
            variant="contained"
            size="small"
            sx={{ ml: 1 }}
            onClick={increaseNumber}
          >
            Increase
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ ml: 1 }}
            onClick={decreaseNumber}
          >
            Decrease
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Switch checked={hasComma} onChange={(_, checked) => setHasComma(checked)} />{" "}
          Comma
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            type="number"
            value={size}
            size="small"
            label="Size"
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            type="number"
            value={duration}
            size="small"
            label="Duration"
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControl>
            <FormLabel>Order</FormLabel>
            <RadioGroup
              row
              value={order}
              onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
            >
              <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
              <FormControlLabel value="desc" control={<Radio />} label="Descending" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
