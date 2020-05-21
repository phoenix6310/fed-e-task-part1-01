## typescript
#### 强类型语言&弱类型语言
*程序运行时是否会发生隐式转换*
#### 静态类型语言&动态类型语言
*编码时是否可规定数据类型*

## ts优点
1. 编译时发现错误，而不是运行时
2. 便于协同开发，形成代码规范的强约定
3. 避免js的隐式转换（如es5的对象属性名需是String类型），编码更准确

```
1. 错误更早暴露
2. 代码更智能，编码更准确
3. 重构更牢靠
4. 减少不必要的类型判断
```

ts 是js的超集，支持js，类型注解，es6。

## ts 的安装及使用
1. 项目初始化 yarn init --yes
2. yarn add typescript --dev
3. 目标文件的编译 yarn tsc 目标文件路径
4. 配置文件初始化：yarn tsc --init


## 原始数据类型
*配置文件中strict为false时，string|number|boolean 类型的值可以是null|undefined , 严格模式不可以*
```
let a: string = 'str'
let b: number = 2 // NaN Infinity
let c: boolean = true
*void 类型变量的值可以是null|undefined , 严格模式只能是undefined*
let e: void=undefined
let f: null = null
let g:undefined = undefined
let h: symbol = Symbol('foo')
console.log(9)
```
## 标准库  
修改配置文件中的target OR lib 
**lib: ['es2015', 'dom']** 
*console 属于 bom  ，浏览器对象的标准库对应dom（dom与bom的统称）*


## 支持中文错误消息  
编辑器中的错误提示（seetings->typescript）|编译时的错误提示(yarn tsc --locale zh-CN)

## 作用域问题
1. 添加包裹函数
2. ts文件结尾添加 export {} ,将当前文件作为模块。实质同1