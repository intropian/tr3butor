import { GlobalStyled } from "../src/components/GlobalStyled"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { DAppProvider } from "@usedapp/core"
import { store } from "../src/store"
import { Provider } from "react-redux"

export const decorators = [
  (Story) => (
    <>
      <DAppProvider config={{ autoConnect: false }}>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyled />
            <Story />
          </BrowserRouter>
        </Provider>
      </DAppProvider>
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "tr3butor",
    values: [
      {
        name: "tr3butor",
        value: "#09130E"
      },
      {
        name: "black",
        value: "#000"
      },
      {
        name: "white",
        value: "#fff"
      }
    ]
  }
}
