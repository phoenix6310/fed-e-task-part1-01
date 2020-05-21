# flow
## 安装
*使用 yarn*
1. 项目根目录初始化，yarn init --yes
2. 安装flow-bin，yarn add flow-bin --dev
3. 生成配置文件(.flowconfig)，yarn flow init
4. 在需要添加类型注解的js文件的开头添加 //@flow
5. 代码必要处添加注解
6. 检查代码中变量是否符合注解要求。
    1. yarn flow。
*初次运行时，会启动一个后台服务。再次检查时需使用命令：yarn flow。关闭服务：yarn flow stop*
    2. vscode 插件。flow support language,自动标红
7. 移除注解
    1. 使用 flow-remove-types 。
        1. yarn add flow-remove-types --dev  
        2. yarn flow-remove-types 文件|文件夹路径 -d 目标文件夹
    2. 使用babel 的一个插件：preset-flow。
        1. yarn add @babel/preset-flow --dev
        2. .babelrc 写入 
        ```
        {
        "presets": ["@babel/preset-flow"]
        }
        ```
        3. yarn babel 文件|文件夹路径 -d 目标文件夹

## babel 使用
1. 安装babel&cli, yarn add @babel/core @babel/cli --dev
2. 创建babel的配置文件 .babelrc
3. 在presets 中写入要使用的插件

## 注解方式
1. 变量/函数参数注解
```
[string|number|boolean|symbol|null|undefined]
var num: number = 1 
<!-- NaN Infinity -->
var e: void = undefined
function sum(a: number, b:number){
    return a + b
}

<!-- 数组 -->
const arr1: Array<number> = [1,2]
const arr2: number[] = [1,2]
// 元组。定长&定类型
const arr3: [number, string] = [3, 'ff']

<!-- 对象 -->
<!-- obj1对象必须有 name&age 属性及规定的值-->
const obj1: {name: string, age: number} = {name: 'jack', age: 18, value: 1}
<!-- 某属性可有可无 -->
const obj2: {name?:string, age:number} = {name: 'jack', age: 18, value: 1}
<!-- 无‘限制’ -->
const obj3: {[string]: string|number} = {}
obj3.name=18
<!-- 函数参数注解 -->
function test(cb: (number, number) => void) {
    cb(2, 3)
}

// 字面量类型，只能是foo
const str: 'foo'= 'foo'
const state: 1 | 2 | 3 =1

type stringOrNumber = string|number
const foo: stringOrNumber = 2

// mabye
let boo: ?number = null
<!-- 等价于 扩展为null 或 undefined -->
<!-- let boo: number|null|void = null -->
boo = undefined
```
2. 函数返回值注解
```
function sum(): number{
    return 6
}
<!-- 无返回值 -->
function sum(): void{

}
```
3. mixed 与 any
*若把变量标注为mixed，在使用时用typeof再去判断类型，否则不能通过flow检验。any真正的任意*



