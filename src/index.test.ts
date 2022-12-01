import { LintOptions, LintOutcome, LintRuleConfig } from "@commitlint/types";
import * as plugin from ".";
import { ERR_MESSAGE, rules, RULE_KEY } from "./rules";

test("exports a CommonJS module", (t) => {
  expect(typeof plugin).toBe("object");
  expect(typeof plugin.rules).toBe("object");
});

test("exports rules", (t) => {
  expect(plugin.rules).toEqual(rules);
});

const targetVers = [15, 16, 17];

test.each(targetVers)(`loadTest v%i`, async (version: number) => {
  const load = (await import(`@commitlint/load-v${version}`)).default;
  await load({ plugin: [plugin] });
});

test.each(targetVers)(`lintTest v%i`, async (version: number) => {
  const lint = (await import(`@commitlint/lint-v${version}`)).default;

  const ruleConfig: LintRuleConfig = { [RULE_KEY.EMPTY_ISSUES]: [2, "always"] };
  const lintOption: LintOptions = { plugins: { "empty-issues-rule": plugin } };

  // test validateion
  const testConfig = [
    { message: "chore: test basic #1", expect: { valid: true } },
    { message: "chore: test basic", expect: { valid: false } },
  ];

  for (let item of testConfig) {
    const report: LintOutcome = await lint(item.message, ruleConfig, lintOption);
    expect(report.valid).toBe(item.expect.valid);
    if (!report.valid) {
      expect(report.errors[0].message).toBe(ERR_MESSAGE.EMPTY_ISSUES);
    }
  }
});
