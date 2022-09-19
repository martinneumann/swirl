import { EventEmitter } from "@stencil/core";

export interface FlipFormInput<ValueType = string> {
  flipAriaDescribedby?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  value?: ValueType;
  valueChange: EventEmitter;
}

export function generateStoryElement(
  tag: string,
  args: { [arg: string]: any },
  content?: string
): HTMLElement {
  const element = document.createElement(tag);

  Object.entries(args)
    .filter((arg) => arg[1] !== undefined && arg[1] !== null && arg[1] !== "")
    .forEach(([attr, value]) => {
      if (typeof value === "object") {
        return (element[attr] = value);
      }

      return element.setAttribute(
        attr.replace(
          /[A-Z]+(?![a-z])|[A-Z]/g,
          ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
        ),
        String(value)
      );
    });

  if (Boolean(content)) {
    element.innerHTML = content;
  }

  return element;
}
