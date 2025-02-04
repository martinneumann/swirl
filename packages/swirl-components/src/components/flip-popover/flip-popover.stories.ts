import { generateStoryElement } from "../../utils";
import Docs from "./flip-popover.mdx";

export default {
  argTypes: {
    trigger: {
      description: "ID of the trigger element.",
    },
  },
  component: "flip-popover",
  parameters: {
    docs: {
      page: Docs,
      source: {
        code: `<flip-button id="trigger" label="Trigger"></flip-button>

<flip-popover label="Popover" popover-id="popover" trigger="trigger">
  <flip-action-list>
    <flip-action-list-section label="Section 1">
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 1"></flip-action-list-item>
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 2"></flip-action-list-item>
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 3"></flip-action-list-item>
    </flip-action-list-section>
    <flip-action-list-section label="Section 2">
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 1"></flip-action-list-item>
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 2"></flip-action-list-item>
      <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 3"></flip-action-list-item>
    </flip-action-list-section>
  </flip-action-list>
</flip-popover>`,
      },
    },
  },
  title: "Components/FlipPopover",
};

const Template = (args) => {
  const container = document.createElement("div");
  const trigger = document.createElement("flip-button");
  const element = generateStoryElement("flip-popover", args);

  trigger.id = "trigger";
  trigger.label = "Trigger popover";

  element.innerHTML = `
    <flip-action-list>
      <flip-action-list-section label="Section 1">
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 1"></flip-action-list-item>
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 2"></flip-action-list-item>
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 3"></flip-action-list-item>
      </flip-action-list-section>
      <flip-action-list-section label="Section 2">
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 1"></flip-action-list-item>
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 2"></flip-action-list-item>
        <flip-action-list-item icon="<flip-icon-mention></flip-icon-mention>" label="Action item 3"></flip-action-list-item>
      </flip-action-list-section>
    </flip-action-list>
  `;

  container.append(trigger, element);

  return container;
};

export const FlipPopover = Template.bind({});

FlipPopover.args = {
  label: "Popover",
  popoverId: "popover",
  trigger: "trigger",
};
