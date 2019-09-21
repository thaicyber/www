import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Drawer from "./Drawer";
import DrawerReadme from "./README.md";

storiesOf("Components/Drawer", module)
  .addDecorator(withKnobs)
  .addParameters({
    jest: ["Drawer.test"],
    readme: {
      sidebar: DrawerReadme,
      includePropTables: [Drawer]
    }
  })
  .add("Left side", () => (
    <div style={{ height: "200vh" }}>
      <p>lol1</p>
      <Drawer
        disabled={boolean("Disabled", false)}
        onClick={action("Drawer-clicked")}
      >
        {text("Label", "This is a Drawer")}
      </Drawer>
      <p>lol2</p>
    </div>
  ))
  .add("Right side", () => (
    <div style={{ height: "200vh" }}>
      <Drawer
        disabled={boolean("Disabled", false)}
        onClick={action("Drawer-clicked")}
        rightSide
      >
        {text("Label", "This is a Drawer")}
      </Drawer>
    </div>
  ));