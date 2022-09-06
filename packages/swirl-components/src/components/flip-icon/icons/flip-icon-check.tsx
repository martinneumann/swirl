// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-check",
})
export class FlipIconCheck {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${this.size} ${this.size}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M6.36666 11.8166C6.26666 11.8166 6.17222 11.8 6.08333 11.7666C5.99444 11.7333 5.91111 11.6777 5.83333 11.6L2.96666 8.73329C2.82222 8.58885 2.75289 8.40818 2.75866 8.19129C2.764 7.97485 2.83889 7.7944 2.98333 7.64996C3.12778 7.50551 3.30844 7.43329 3.52533 7.43329C3.74178 7.43329 3.91666 7.50551 4.05 7.64996L6.36666 9.96663L11.95 4.38329C12.0833 4.23885 12.2611 4.16663 12.4833 4.16663C12.7056 4.16663 12.8889 4.23885 13.0333 4.38329C13.1667 4.52774 13.2333 4.70818 13.2333 4.92463C13.2333 5.14151 13.1667 5.32218 13.0333 5.46663L6.9 11.6C6.82222 11.6777 6.73889 11.7333 6.65 11.7666C6.56111 11.8 6.46667 11.8166 6.36666 11.8166V11.8166Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 24 && (
          <Fragment>
            <path
              d="M9.55001 17.725C9.40001 17.725 9.25835 17.7 9.12501 17.65C8.99168 17.6 8.86668 17.5167 8.75001 17.4L4.45001 13.1C4.23335 12.8833 4.12935 12.6123 4.13801 12.287C4.14601 11.9623 4.25835 11.6917 4.47501 11.475C4.69168 11.2583 4.96268 11.15 5.28801 11.15C5.61268 11.15 5.87501 11.2583 6.07501 11.475L9.55001 14.95L17.925 6.575C18.125 6.35833 18.3917 6.25 18.725 6.25C19.0583 6.25 19.3333 6.35833 19.55 6.575C19.75 6.79167 19.85 7.06233 19.85 7.387C19.85 7.71233 19.75 7.98333 19.55 8.2L10.35 17.4C10.2333 17.5167 10.1083 17.6 9.97501 17.65C9.84168 17.7 9.70001 17.725 9.55001 17.725Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M11.1417 20.6791C10.9667 20.6791 10.8014 20.65 10.6458 20.5916C10.4903 20.5333 10.3444 20.4361 10.2083 20.3L5.19167 15.2833C4.93889 15.0305 4.81756 14.7143 4.82767 14.3348C4.837 13.956 4.96806 13.6402 5.22084 13.3875C5.47362 13.1347 5.78978 13.0083 6.16934 13.0083C6.54812 13.0083 6.85417 13.1347 7.0875 13.3875L11.1417 17.4416L20.9125 7.67079C21.1458 7.41801 21.457 7.29163 21.8458 7.29163C22.2347 7.29163 22.5556 7.41801 22.8083 7.67079C23.0417 7.92357 23.1583 8.23935 23.1583 8.61813C23.1583 8.99768 23.0417 9.31385 22.8083 9.56663L12.075 20.3C11.9389 20.4361 11.7931 20.5333 11.6375 20.5916C11.4819 20.65 11.3167 20.6791 11.1417 20.6791V20.6791Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
