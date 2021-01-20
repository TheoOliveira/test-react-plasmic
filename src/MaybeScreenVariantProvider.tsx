
import React from "react";
import {ScreenVariantProvider} from "./components/plasmic/PlasmicGlobalVariant__Screen";
export default function MaybeScreenVariantProvider(props: {children?: React.ReactNode}) {
  return <ScreenVariantProvider {...props} />;
}
      