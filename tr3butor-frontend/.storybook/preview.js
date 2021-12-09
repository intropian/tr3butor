import { GlobalStyled } from "../src/components/GlobalStyled";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";
import { RecoilRoot } from "recoil";

export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <DAppProvider config={{ autoConnect: false }}>
          <BrowserRouter>
            <GlobalStyled />
            <div className="content">
              <Story />
            </div>
          </BrowserRouter>
        </DAppProvider>
      </RecoilRoot>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "tr3butor",
    values: [
      {
        name: "tr3butor",
        value: "#09130E",
      },
      {
        name: "black",
        value: "#000",
      },
      {
        name: "white",
        value: "#fff",
      },
    ],
  },
};
