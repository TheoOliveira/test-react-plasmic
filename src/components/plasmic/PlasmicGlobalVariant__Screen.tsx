// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
export type ScreenValue = "desktop" | "mobile";
export const ScreenContext = React.createContext<ScreenValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

const screenVariants: ScreenValue[] = ["desktop", "mobile"];
const screenQueries = [
  "(min-width:630px)",
  "(min-width:0px) and (max-width:630px)",
];

function matchScreenVariant() {
  if (!globalThis.matchMedia) {
    return undefined;
  }
  const index = screenQueries.findIndex(
    (q) => globalThis.matchMedia(q).matches
  );
  return index >= 0 ? screenVariants[index] : undefined;
}

export function ScreenVariantProvider(props: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState<ScreenValue>();
  React.useEffect(() => {
    const handler = () => {
      const newValue = matchScreenVariant();
      if (newValue !== value) {
        setValue(newValue);
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
/* prettier-ignore-end */
