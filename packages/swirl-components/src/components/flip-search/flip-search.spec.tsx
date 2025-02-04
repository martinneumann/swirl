import { newSpecPage } from "@stencil/core/testing";

import { FlipSearch } from "./flip-search";

describe("flip-search", () => {
  it("renders the input with passed props", async () => {
    const page = await newSpecPage({
      components: [FlipSearch],
      html: `<flip-search auto-focus clear-button-label="Clear" disabled input-name="search" input-id="search" label="Label" placeholder="Placeholder" value="Value"></flip-search>`,
    });

    expect(page.root).toEqualHtml(`
      <flip-search auto-focus="" clear-button-label="Clear" disabled="" input-id="search" input-name="search" label="Label" placeholder="Placeholder" value="Value">
        <span class="search search--disabled">
          <flip-icon-search class="search__icon"></flip-icon-search>
          <input aria-disabled="true" aria-label="Label" autocomplete="off" autofocus="" class="search__input" disabled="" id="search" inputmode="search" name="search" placeholder="Placeholder" type="search" value="Value">
        </span>
      </flip-search>
    `);
  });

  it("fires events", async () => {
    const page = await newSpecPage({
      components: [FlipSearch],
      html: `<flip-search label="Search"></flip-search>`,
    });

    const focusSpy = jest.fn();
    const changeSpy = jest.fn();

    page.root.addEventListener("valueChange", changeSpy);
    page.root.addEventListener("inputFocus", focusSpy);
    page.root.addEventListener("inputBlur", focusSpy);

    const input = page.root.querySelector("input");

    input.focus();
    expect(focusSpy).toHaveBeenCalledTimes(1);

    input.blur();
    expect(focusSpy).toHaveBeenCalledTimes(2);

    input.dispatchEvent(new Event("change"));
    expect(changeSpy).toHaveBeenCalled();
  });

  it("focuses with shortcuts", async () => {
    const page = await newSpecPage({
      components: [FlipSearch],
      html: `<flip-search label="Search"></flip-search>`,
    });

    const spy = jest.fn();

    page.root.addEventListener("inputFocus", spy);

    page.win.dispatchEvent(
      new KeyboardEvent("keydown", { code: "KeyK", metaKey: true })
    );
    page.win.dispatchEvent(
      new KeyboardEvent("keydown", { code: "KeyK", ctrlKey: true })
    );
    page.win.dispatchEvent(
      new KeyboardEvent("keydown", { code: "Slash", metaKey: true })
    );
    page.win.dispatchEvent(
      new KeyboardEvent("keydown", { code: "Slash", ctrlKey: true })
    );

    expect(spy).toHaveBeenCalledTimes(4);
  });
});
