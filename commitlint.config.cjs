/** @type {import("@commitlint/types").UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-empty-issues-rule"],
  rules: {
    "empty-issues": [1, "always"],
  },
};
