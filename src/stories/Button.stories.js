import React from "react";

import Button from "../ui/Button";

export default {
  title: "DPFUi/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = () => <Button type="primary">Seja um DeMolay</Button>
