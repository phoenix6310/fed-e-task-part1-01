

// var obj = {
//     a: 1
// }

// var proxy = new Proxy(obj, {
//     get(target, name){
//         console.log(target === obj,target === proxy, this)
//         // true false 配置对象
//         return target[name]
//     },
//     set(target, name, value){
//         return target[name] = value
//     }
// })

// const {log} =console

// log(proxy === obj)

// proxy.a = 2
// proxy.b = 2
// log(obj.a)
// log(proxy.a)

// log(obj, proxy)
const { log } = console

// class Person {
//     constructor(name) {
//         console.log(this)
//         this.name = name
//     }
//     sayName() {
//         return this.name
//     }
// }

// let jack = new Person('jack')
// log(jack, jack.sayName())

// class Student extends Person {
//     constructor(name, age = 18) {
//         super(name)
//         this.age = age
//     }

//     logInfo() {
//         let name = super.sayName()
//         let age = this.age
//         return {
//             name,
//             age
//         }
//     }
// }

// // let tom = new Student('tom')
// let tom = new Student('tom', 20)
// log(tom, tom.logInfo())

// var set = new Set([1,2,2,1,3])
// set.add(10).add(20)
// log(set.size, set.has(10), set.delete(1), set.size) // 5 true true 4
// log(set.delete(100)) // false

// set.forEach(item=>log(item))
// for(let item of set){
//     log(item)
//     if(item===3){
//         break;
//     } 
// }
// // set.clear()  // 清空

// // 数组去重
// var res1 = Array.from(new Set([1,2,1,2]))
// var res2 = [...new Set([1,2,3,2,1])]
// log(res1,res2) // [1,2]  [1,2,3]

// var map = new Map()
// map.set('name', 'jack')
// map.set('age', 18)

// log(map, map.size, map.get('name'), map.delete('age'), map, map.has('age'))
// var tom = {
//     name: 'tom'
// }
// map.set(tom, 'tom 的信息')
// log(map, map.get(tom))
// map.clear()


// let arr = [100,200,300]

// for(let item of arr){
//     log(item)
// }

// let map = new Map()
// map.set('name', 'jack')
// map.set('age', 18)
// for(let [name,value] of map){
//     log(name, value)
// }

// let set = new Set([4,5,6,3,1])

// let iterator = set[Symbol.iterator]()
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())


var obj = {
    store: [2, 3, 4],
    [Symbol.iterator]() {
        var index = 0
        return {
            next() {
                var res = {
                    value: obj.store[index],
                    done: index >= obj.store.length
                }
                index++
                return res
            }
        }
    }
}

var iterator = obj[Symbol.iterator]()
log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())

for(let value of obj){
    log(value)
}













