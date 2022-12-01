import type { Plugin } from "@commitlint/types";
import { rules } from "./rules";

const plugin: Plugin = {
  rules: rules,
};

export = plugin;
