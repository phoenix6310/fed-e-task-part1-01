## object 类型
*指js中除了原始类型外的数据类型，而不是 {}*
```
const obj1: object = () => { }
const obj2: object = []
const obj3: object = {}
const obj4: object = new Set()
const obj5: object = new Map()

const obj6: {name: string, age: number} = {name: 'jack', age: 18}
<!-- obj6 里只能有这2个属性，不能多不能少。flow好像可以多？ -->
```
## 数组类型
```
// <> 里必须有个类型
const arr0: Array<number> = [1]
const arr1: Array<number|string> = []

const arr2: [] = []
const arr3: number[] = [2]
const arr4: string[] = ['foo']
```
## 元组（Tuple）
```
const tuple1: [number, string] = [18, 'jack']
<!-- 限制个数及类型 -->
<!-- 取值 -1-->
let age1 = tuple1[0]
let name1 = tuple1[1]
<!-- 取值 -2-解构赋值 -->
let [age2,name2] = tuple1
```
## 枚举
1. 不指定值时，第一个默认为0
2. 累加
3. 如果第一个值是非数字，应该全都指定值
**emum 会入侵代码。可使用常量枚举。在定义enum前加 const**
```
enum dataStatus {
    '出厂' = 0,
    '运输' = 1,
    '收货' = 2
}
<!-- 常量枚举，编译后 -->
const enum dataStatus2 {
    '出厂' = 0,
    '运输' = 1,
    '收货' = 2
}
let resData = {
    status: dataStatus['出厂'],
    status2: dataStatus2['出厂']
}
// enum dataStatus {
//     '出厂'
//     '运输',
//     '收货'
// }
// enum dataStatus {
//     '出厂' = 6,
//     '运输',
//     '收货'
// }
<!-- 常量枚举 -->
```
## 函数
```
function fn1(a: number, b?: number): void {

}

function fn2(a: number, b: number = 20, ...rest: number[]): void {

}

let fn3 = function (a: number, b: number = 1): string {
    return a + b + ''
}
let fn4: (a: number, b: number) => number = function () {
    return 4
}
fn4(6, 6)
```
## 任意类型
**any**
## 隐式类型推断
```
let age = 18 // 默认age为number
age = 'str' // 报错
let other // 默认为 any
```
## 断言
**编码阶段告知ts变量的数据类型**
```
let resdata = [1, 2, 3]
let res = resdata.find(i => 1 > 0)

let res2 = res as number
let res3 = <number>res // 与jsx混合使用可能会有bug（标签）
```