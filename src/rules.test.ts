import { Commit, RuleConfigCondition } from "@commitlint/types";
import { errorMessage, ruleEmptyIssues } from "./rules";

type RuleResponse = [boolean, (string | undefined)?];
const doTest = (msg: string, expected: RuleResponse, when: RuleConfigCondition = "always") => {
  const actual = ruleEmptyIssues({ header: msg } as Commit, when);
  expect(actual, `msg="${msg}"`).toEqual(expected);
};

describe("rules test suite; ok", () => {
  it("ok: has one issue: simple", () => {
    doTest("choro: aあA #1", [true]);
    doTest("choro: aあA #12", [true]);
    doTest("choro: aあA #123", [true]);
    doTest("choro: aあA #123 aあA", [true]);
    doTest("choro: #123 aあA", [true]);
    doTest("choro: #123 ", [true]);
  });

  it("ok: has one issue: other repo", () => {
    doTest("choro: aあA repo#1", [true]);
    doTest("choro: aあA repo#12", [true]);
    doTest("choro: aあA repo#123", [true]);
    doTest("choro: aあA repo#123 aあA", [true]);
    doTest("choro: repo#123 aあA", [true]);
    doTest("choro: repo#123 ", [true]);
  });

  it("ok: has one issue: other org/repo", () => {
    doTest("choro: aあA org/repo#1", [true]);
    doTest("choro: aあA org/repo#12", [true]);
    doTest("choro: aあA org/repo#123", [true]);
    doTest("choro: aあA org/repo#123 aあA", [true]);
    doTest("choro: org/repo#123 aあA", [true]);
    doTest("choro: org/repo#123 ", [true]);
  });
});

describe("rules test suite; ng", () => {
  it("ng: no issue", () => {
    doTest("choro: update", [false, errorMessage]);
    doTest("", [false, errorMessage]);
  });

  it("ng: invalid issue format", () => {
    doTest("choro: update #1aa", [false, errorMessage]);
    doTest("choro: update #1aa/", [false, errorMessage]);
  });
});
