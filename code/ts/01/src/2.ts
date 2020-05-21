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

let resdata = [1, 2, 3]
let res = resdata.find(i => 1 > 0)

let res2 = res as number
let res3 = <number>res // 与jsx混合使用可能会有bug（标签）