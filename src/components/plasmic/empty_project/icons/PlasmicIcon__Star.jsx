// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        d={
          "M12.072 17.284l-3.905 2.053a1 1 0 01-1.053-.076 1 1 0 01-.398-.978l.745-4.349-3.159-3.08a1 1 0 01-.252-1.025 1 1 0 01.806-.68l4.366-.635 1.953-3.956A1 1 0 0112.072 4a1 1 0 01.897.558l1.952 3.956 4.366.635a1 1 0 01.807.68 1 1 0 01-.252 1.025l-3.16 3.08.746 4.349a1 1 0 01-.398.977 1 1 0 01-1.052.077l-3.906-2.053z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
