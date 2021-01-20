import React from "react";
import ComponentGallery from "./ComponentGallery";
import MaybeJsBundleThemeProvider from "./MaybeJsBundleThemeProvider";
import MaybeScreenVariantProvider from "./MaybeScreenVariantProvider";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  // By default, we render a gallery where you can look through your
  // components using the arrow key.  Feel free to edit this file
  // to render just the component that you want!
  return (
    <MaybeJsBundleThemeProvider>
      <MaybeScreenVariantProvider>
        <BrowserRouter>
          <ComponentGallery />
        </BrowserRouter>
      </MaybeScreenVariantProvider>
    </MaybeJsBundleThemeProvider>
  );
}

export default App;
