import type { Rule } from "@commitlint/types";

export const errorMessage = "empty issues";
export const ruleEmptyIssues: Rule = (parsed) => {
  const { header } = parsed;
  const hasIssue = header.match(/\s+(\S*)(#\d+)(\s+.*)?$/) != null;
  return hasIssue ? [true] : [false, errorMessage];
};
