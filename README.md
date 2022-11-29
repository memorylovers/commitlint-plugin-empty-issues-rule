# commitlint-plugin-empty-issues-rule

[commitlint](https://commitlint.js.org) rule plugin to check include issues

## Install

```bash
npm install -D @commitlint/{cli,config-conventional}
npm install -D commitlint-plugin-empty-issues-rule
```

## Usage

Use this plugin in your project's [commitlint](https://commitlint.js.org) configuration by specifying it as item in the `plugins` array.

```javascript
// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['empty-issues-rule'],
  rules: {
    'empty-issues-rule': [2, 'always'],
  },
}
```

## Contributing

Please [create an issue](/issues/new/choose) if you have a bug report, feature proposal or question that does not yet exist.

## License

[MIT License](/LICENSE) 2022-PRESENT [Memory Lovers, LLC](https://memory-lovers.com)
