module.exports = {
  printwidth: 120, // 每行代码长度(默认80)
  tabwidth: 2, // 每个tab相当于多少个空格(默认2)
  useTabs: false, //是否使用tab进行缩进(默认false)
  semi: false, // 声明结尾使用分号(默认true)
  singleQuote: true, // 默认单引号
  quoteProps: 'as-needed',
  jsxsingleQuote: false,
  // trailingComma: 'none', // es5对象属性最后加逗号。none不加
  bracketspacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always', // 只有一个参数的箭头函数的参数是否带圆括号(默认avoid)
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false, // script、style标签不缩进
  endOfLine: 'auto',
  insertPragma: false,
  requirePragma: false,
  prosewrap: 'never',
  rangeStart: 0,
}
