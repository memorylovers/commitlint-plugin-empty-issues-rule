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

Pull requests and stars are always welcome.

Please [create an issue](/issues/new/choose) if you have a bug report, feature proposal or question that does not yet exist.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](/LICENSE) 2022-PRESENT [Memory Lovers, LLC](https://memory-lovers.com)
