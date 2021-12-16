import React, { useState } from 'react';
import { Button } from "@mui/material";
import { getMethod } from "../../api/public";

export default () => {
  const [state, setState] = useState(() => {
  });

  const throwSomething = () => {
    setState(() => { throw new Error(500); });
    getMethod({ path: "example/error_example" });
  };
  return <button type="button" onClick={throwSomething}>Labas</button>;
};
