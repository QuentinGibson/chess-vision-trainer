import "@unocss/reset/tailwind.css";
import "uno.css";
import GameContextProvider from "../src/GameContextProvider.tsx"

export const decorators = [
  (Story) => (
    <GameContextProvider>
      <Story/>
    </GameContextProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
