# React awesome animated number

[![npm version](https://img.shields.io/npm/v/react-awesome-animated-number)](https://www.npmjs.com/package/react-awesome-animated-number) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-awesome-animated-number)](https://www.npmjs.com/package/react-awesome-animated-number) [![npm type definitions](https://img.shields.io/npm/types/react-awesome-animated-number)](https://www.npmjs.com/package/react-awesome-animated-number) [![npm](https://img.shields.io/npm/dt/react-awesome-animated-number)](https://www.npmjs.com/package/react-awesome-animated-number) [![GitHub](https://img.shields.io/github/license/eunvanz/react-awesome-animated-number)](https://github.com/eunvanz/react-awesome-animated-number/blob/master/LICENSE)

A React component which animates numbers in elegant way

![Example](https://user-images.githubusercontent.com/17351661/152665919-04500d26-78ff-48be-a505-914f2bf323e6.gif)

# Live demo

[Live demo](https://eunvanz.github.io/react-awesome-animated-number/iframe.html?id=components-animatednumber--with-controller&args=&viewMode=story)

## Code

```typescript
import { useCallback, useState } from "react";
import { Button, Box, Switch, TextField } from "@mui/material";
import { random } from "lodash-es";

import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index/css";

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
        value={number}
        hasComma={hasComma}
        size={size}
        duration={duration}
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
            Increase Number
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ ml: 1 }}
            onClick={decreaseNumber}
          >
            Decrease Number
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
      </Box>
    </>
  );
};
```

# Props

| name     | type      | required | default | description                 |
| -------- | --------- | -------- | ------- | --------------------------- |
| value    | `number`  | O        |         | Number to animate           |
| size     | `number`  |          | `14`    | Font size of number in `px` |
| hasComma | `boolean` |          | `false` | `true` for locale string    |
| duration | `number`  |          | `200`   | Animation duration in `ms`  |

# Contributions

Contributions will be welcomed! Just make PRs to https://github.com/eunvanz/react-awesome-animated-number.

# Have some Github contributions?

You probably like my side project 👉 https://gitkemon.com/link/sl_68A

# License

react-awesome-animated-number is released under the MIT license.
