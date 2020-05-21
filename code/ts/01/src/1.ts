// 原始数据类型
// 配置文件中strict为false时，string|number|boolean 类型的值可以是null|undefined
// 严格模式不可以
// let a: string = 'str'
// let b: number = 2 // NaN Infinity
// let c: boolean = true
// // void 类型变量的值可以是null|undefined  
// // 严格模式只能是undefined
// let e: void=undefined
// let f: null = null
// let g:undefined = undefined
// let h: symbol = Symbol('foo')
// console.log(9)
// // 标准库  
// // 修改配置文件中的target OR lib 
// // lib: ['es2015', 'dom']
// // console 属于 bom  ，浏览器对象的标准库对应dom（dom与bom的统称）

// // 支持中文错误消息  编辑器中的错误提示（seetings->typescript）|编译时的错误提示(yarn tsc --locale zh-CN)


// const obj1: object = () => { }
// const obj2: object = []
// const obj3: object = {}
// const obj4: object = new Set()
// const obj5: object = new Map()

// const obj6: {name: string, age: number} = {name: 'jack', age: 18}
// <> 里必须有个类型
// const arr0: Array<number> = [1]
// const arr1: Array<number|string> = []

// const arr2: [] = []
// const arr3: number[] = [2]
// const arr4: string[] = ['foo']

// 枚举
enum dataStatus {
    '出厂' = 0,
    '运输' = 1,
    '收货' = 2
}
const enum dataStatus2 {
    '出厂' = 0,
    '运输' = 1,
    '收货' = 2
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
let resData = {
    status: dataStatus['出厂'],
    status2: dataStatus2['出厂']
}