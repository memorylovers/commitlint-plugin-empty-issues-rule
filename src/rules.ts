import type { Rule } from "@commitlint/types";

export const RULE_KEY = {
  EMPTY_ISSUES: "empty-issues",
} as const;
type RULE_KEY = typeof RULE_KEY[keyof typeof RULE_KEY];

export const ERR_MESSAGE = {
  EMPTY_ISSUES: "empty issues",
} as const;
type ERR_MESSAGE = typeof ERR_MESSAGE[keyof typeof ERR_MESSAGE];

export const ruleEmptyIssues: Rule = (parsed) => {
  const { header } = parsed;
  const hasIssue = header.match(/\s+(\S*)(#\d+)(\s+.*)?$/) != null;
  return hasIssue ? [true] : [false, ERR_MESSAGE.EMPTY_ISSUES];
};

export const rules = {
  [RULE_KEY.EMPTY_ISSUES]: ruleEmptyIssues,
};
