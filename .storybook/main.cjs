const path = require("path");
const Icons = require("unplugin-icons/vite");
const Inspect = require("vite-plugin-inspect");
const Unocss = require("unocss/vite");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    config.plugins.push(
      Icons({
        iconCustomizer(collection, icon, props) {
          if (collection === "carbon" && icon === "checkmark-outline") {
            props.color = "green";
          }
          if (collection === "carbon" && icon === "close-outline") {
            props.color = "red";
          }
        },
        compiler: "jsx",
        jsx: "react",
      })
    );
    return config;
  },
};
