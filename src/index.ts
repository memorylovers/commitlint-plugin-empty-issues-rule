import type { Plugin } from "@commitlint/types";
import { ruleEmptyIssues } from "./rules";

export const plugin: Plugin = {
  rules: {
    "empty-issues": ruleEmptyIssues,
  },
};

export default plugin;
