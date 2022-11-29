import type { Rule,Plugin } from "@commitlint/types";

 const ruleEmptyIssues:Rule = (parsed) => {
  const { header } = parsed;
  const hasIssue = header.match(/(#\d+)/) != null;
  return hasIssue ? [true] : [false, "empty issues"];
}

export const plugin: Plugin = {
  rules: {
    "empty-issues": ruleEmptyIssues
  }
};