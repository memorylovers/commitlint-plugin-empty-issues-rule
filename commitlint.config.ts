import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-empty-issues-rule"],
  rules: {
    "empty-issues": [1, "always"],
  },
};

export default config;
