import { Bulb } from "../bulb/bulb";
import { Box, Switch } from "@mui/material";
import React, { useEffect, memo, useState } from "react";

export interface RackProps {
  items: Array<boolean>;
}

export const Rack = ({ items }: RackProps) => {
  const [states, setStates] = useState(items);
  const handleSwitchChanged = (index: number) => () => {
    setStates(states.map((v: boolean, i: number) => (i === index ? !v : v)));
  };

  const renderedItems = items.map((checked: boolean, index: number) =>
    memo(function () {
      return (
        <Box sx={{ width: "fit-content", display: "flex" }} key={index}>
          <Bulb on={checked} />
          <Switch
            checked={states[index]}
            onChange={handleSwitchChanged(index)}
          />
        </Box>
      );
    })
  );

  return renderedItems ? <>{renderedItems}</> : null;
};
