// 生成器函数

// function* fn() {
//     try {
//         console.log('start')
//         // return 77
//         let res1 = yield '66'
//         console.log(res1)
//         console.log('bb')
//         return 88
//     } catch (e) {
//         console.log(e)
//     }
// }

// let generator = fn()

// console.log(generator.next())
// // console.log(generator.next(99))
// generator.throw(new Error('错啦'))

// 关键字 function 与 函数名之间加 *。函数内部可加关键字yield，也可使用return
// 调用函数时，函数体内代码不会执行
// 函数调用的返回值再调用next方法时，会将yield 后的值作为返回对象额value值
// 向函数内部抛出一个错误，函数内部使用try catch 捕获

function* fn2() {
    const res1 = yield Promise.resolve(1)
    console.log(res1)
    const res2 = yield Promise.resolve(2)
    console.log(res2)
}

const generator1 = fn2()

// const p1Obj = generator1.next()
// p1Obj.value.then(data=>{
//     if(p1Obj.done) return
//     const p2Obj = generator1.next(data)
//     p2Obj.value.then(data=>{
//         if(p2Obj.done) return
//         const p3Obj = generator1.next(data)
//         if(p3Obj.done) return;
//         console.log(p3Obj)
//     })
// })

// function co1(generator,data=null){
//     let resObj = generator.next(data)
//     if(!resObj.done){
//         resObj.value.then(data=>{
//             co(generator, data)
//         })
//     }
// }
// co1(generator1)

// function co2(objHasPromise) {
//     if (!objHasPromise.done) {
//         objHasPromise.value.then(data => {

//         })

//     }
// }

async function fn3(){
    const res1 = await Promise.resolve(88)
    console.log(res1)
    const res2 = await Promise.resolve(99)
    console.log(res2)
}
const promise3 = fn3()
promise3.then(()=>{
    console.log('complete')
})

let minNUm = 0
var arr = [2,3,5,12,4,6,4,1,5]
arr.map((item, index)=>{
    if(index===0 || minNUm>item){
        minNUm=item
    }
})
console.log(minNUm)
