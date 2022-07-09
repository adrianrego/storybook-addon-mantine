import { mantineTheme } from "../src/mantineTheme";

export const decorators = [
  mantineTheme([{ primaryColor: "green" }, { themeName: "Custom 2" }]),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
