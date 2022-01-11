// 使用嵌套数组初始化映射
const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
console.log(m1.size); // 3

// 使用自定义迭代器初始化映射
let m2=new Map({
    [Symbol.iterator]:function*(){
        yield ["key1","val1"];
        yield ["key2","val2"];
        yield ["key3","val3"];
    }
});
console.log(m2.size); // 3

// 映射期待的键/值对，无论是否提供
let m3=new Map([[]]);
console.log(m3.has(undefined));  //true
console.log(m3.get(undefined));  //undefined

let m=new Map();
console.log(m.has("firstName"));  //false
console.log(m.get("firstName"));  //undefined
console.log(m.size);  //0

m.set("firstName","sadio").set("lastName","mane");
console.log(m.has("firstName"));  //true
console.log(m.get("firstName"));  //sadio
console.log(m.size);  //2

m.delete("firstName");  //只删除这一个键/值对
console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // true
console.log(m.size); // 1

m.clear();  //清除这个映射实例中的所有键/值对
console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // false
console.log(m.size); // 0

let m=new Map();

let functionKey=function(){};
let symbolKey=Symbol();
let objectKey=new Object();

m.set(functionKey,"functionValue");
m.set(symbolKey,"symbolValue");
m.set(objectKey,"objectValue")


console.log(m.size); // 3
console.log(m.get(functionKey));  //functionValue
console.log(m.get(symbolKey));  //symbolValue
console.log(m.get(objectKey));  //objectValue

// SameValueZero 比较意味着独立实例不冲突
console.log(m.get(function(){}));  //undefined

let m=new Map();

const objKey = {},
objVal = {},
arrKey = [],
arrVal = [];

m.set(objKey, objVal);
m.set(arrKey, arrVal);

objKey.foo = "foo";
objVal.bar = "bar";

arrKey.push("foo");
arrVal.push("bar");

console.log(m.get(objKey)); // {bar: "bar"}
console.log(m.get(arrKey)); // ["bar"]

let m=new Map();

const a = 0/"", // NaN
b = 0/"", // NaN
pz = +0,
nz = -0;

console.log(a === b); // false
console.log(pz === nz); // true
m.set(a, "foo");
m.set(pz, "bar");
console.log(m.get(b)); // foo
console.log(m.get(nz)); // bar

console.log([...m]);
//[ [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] ]

console.log(m.entries===m[Symbol.iterator]); // true

for (let pair of m.entries()){
    console.log(pair);
}
//一样效果
for (let pair of m[Symbol.iterator]()){
    console.log(pair);
}
/*
[ 'key1', 'val1' ]
[ 'key2', 'val2' ]
[ 'key3', 'val3' ]
*/

console.log([...m]);
//[ [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] ]

for (let key of m.keys()){
    console.log(key);
}
for (let val of m.values()){
    console.log(val);
}

m.forEach((val,key)=>console.log(`${key}->${val}`));
// key1 -> val1
// key2 -> val2
// key3 -> val3

const m1 = new Map([
    ["key1", "val1"]
]);
// 作为键的字符串原始值是不能修改的
for (let key of m1.keys()) {
    key = "newKey";
    console.log(key); // newKey
    console.log(m1.get("key1")); // val1
}
const keyObj = {id: 1};
const m = new Map([
    [keyObj, "val1"]
]);
// 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
for (let key of m.keys()) {
    key.id = "newKey";
    console.log(key); // {id: "newKey"}
    console.log(m.get(keyObj)); // val1
}
console.log(keyObj); // {id: "newKey"}

const key1 = {id: 1},
    key2 = {id: 2},
    key3 = {id: 3};
// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"]
]);
console.log(wm1.get(key1)); // val1
console.log(wm1.get(key2)); // val2
console.log(wm1.get(key3)); // val3

const key1 = {id: 1},
    key2 = {id: 2},
    key3 = {id: 3};
// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"]
]);
console.log(wm1.get(key1)); // val1
console.log(wm1.get(key2)); // val2
console.log(wm1.get(key3)); // val3

// 原始值可以先包装成对象再用作键
let stringKey=new String("key1");
let vm3=new WeakMap([
    [key1, "val1"],
    [stringKey, "val2"],
    [key3, "val3"]
    ]);
console.log(vm3.get(stringKey));  //val2

// 初始化是全有或全无的操作
// 只要有一个键无效就会抛出错误，导致整个初始化失败
let vm2=new WeakMap([
    [key1,"val1"],
    ["badkey","val2"],
    [key3,"val3"]  //TypeError: Invalid value used as weak map key
    ]);

let wm=new WeakMap();

let key1={id:1},key2={id:2};

console.log(wm.has(key1));  //false
console.log(wm.get(key1));  //undefined

wm.set(key1,"Arnold").set(key2,"mane");

console.log(wm.has(key1)); // true
console.log(wm.get(key1)); // Arnold

wm.delete(key1); // 只删除这一个键/值对
console.log(wm.has(key1)); // false
console.log(wm.has(key2)); // true

const wm = new WeakMap();
const container = {
    key: {}
};

wm.set(container.key, "val");

function removeReference() {
    container.key = null;
}

const wm = new WeakMap();

class User{
    constructor(id){
        this.idProperty=Symbol('id');
        this.setId(id);
    }
    setPrivate(property,value){
        let privateMembers=wm.get(this) || {};
        privateMembers[property]=value;
        wm.set(this,privateMembers);
    }
    getPrivate(property){
        return wm.get(this)[property];
    }
    setId(id){
        this.setPrivate(this.idProperty,id);
    }
    getId(){
        return this.getPrivate(this.idProperty);
    }
}

let user=new User(123);
console.log(user.getId());  //123
user.setId(456);
console.log(user.getId());  //456

// 并不是真正私有的
console.log(wm.get(user)[user.idProperty]);  //456

const User=(()=>{
    const wm = new WeakMap();

    class User{
        constructor(id){
            this.idProperty=Symbol('id');
            this.setId(id);
        }
        setPrivate(property,value){
            let privateMembers=wm.get(this) || {};
            privateMembers[property]=value;
            wm.set(this,privateMembers);
        }
        getPrivate(property){
            return wm.get(this)[property];
        }
        setId(id){
            this.setPrivate(this.idProperty,id);
        }
        getId(){
            return this.getPrivate(this.idProperty);
        }
    }

    return User;
})();
    

let user=new User(123);
console.log(user.getId());  //123
user.setId(456);
console.log(user.getId());  //456

// 使用数组初始化集合
const s1 = new Set(["val1", "val2", "val3"]);
console.log(s1.size); // 3
// 使用自定义迭代器初始化集合
const s2 = new Set({
    [Symbol.iterator]: function*() {
        yield "val1";
        yield "val2";
        yield "val3";
    }
});
console.log(s2.size); // 3

const s = new Set();
console.log(s.has("Matt")); // false
console.log(s.size); // 0
s.add("Matt")
.add("Frisbie");
console.log(s.has("Matt")); // true
console.log(s.size); // 2
s.delete("Matt");
console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // true
console.log(s.size); // 1
s.clear(); // 销毁集合实例中的所有值
console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // false
console.log(s.size); // 0

const s = new Set();

const functionVal = function() {};
const symbolVal = Symbol();
const objectVal = new Object();

s.add(functionVal);
s.add(symbolVal);
s.add(objectVal);

console.log(s.has(functionVal)); // true
console.log(s.has(symbolVal)); // true
console.log(s.has(objectVal)); // true

// SameValueZero 检查意味着独立的实例不会冲突
console.log(s.has(function() {})); // false

const s = new Set();
const objVal = {},
arrVal = [];
s.add(objVal);
s.add(arrVal);
objVal.bar = "bar";
arrVal.push("bar");
console.log(s.has(objVal)); // true
console.log(s.has(arrVal)); // true

const s = new Set();
s.add('foo');
console.log(s.size); // 1
s.add('foo');
console.log(s.size); // 1
// 集合里有这个值
console.log(s.delete('foo')); // true
// 集合里没有这个值
console.log(s.delete('foo')); // false


class Xset extends Set{
    union(...sets){
        return Xset.union(this,...sets);
    }
    intersection(...sets){
        return Xset.intersection(this,...sets);
    }
    difference(set){
        return Xset.difference(this,set);
    }
    symmetricDifference(set){
        return Xset.symmetricDifference(this,set);
    }
    cartesianProduct(set){
        return Xset.cartesianProduct(this,set);
    }
    powerSet(){
        return Xset.powerSet(this);
    }
    //返回两个或更多集合的并集
    static union(a,...bSets){
        let unionSet=new Xset(a);
        for (let b of bSets){
            for (let bValue of b){
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }
    // 返回两个或更多集合的交集
    static intersection(a,...bSets){
        let intersectionSet=new Xset(a);
        for (let aValues of intersectionSet){
            for (let b of bSets){
                if (!b.has(aValues)){
                    intersectionSet.delete(aValues);
                }
            }
        }
        return intersectionSet;
    }
    // 返回两个集合的差集
    static difference(a,b){
        let differenceSet=new Xset(a);
        for (let bValue of b){
            if (a.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }
    // 返回两个集合的对称差集
    static symmetricDifference(a,b){
        // 按照定义，对称差集可以表达为
        return a.union(b).difference(a.intersection(b));
    }
    // 返回两个集合（数组对形式）的笛卡儿积
    // 必须返回数组集合，因为笛卡儿积可能包含相同值的对
    //笛卡尔乘积是指在数学中，两个集合X和Y的笛卡尔积（Cartesian product），
    //又称直积，表示为X × Y，第一个对象是X的成员而第二个对象是Y的所有可能有序对的其中一个成员 。
    static cartesianProduct(a,b){
        let cartesianProductSet=new Xset();
        for (let aValues of a){
            for (let bValue of b){
                cartesianProductSet.add([aValues,bValue]);
            }
        }
        return cartesianProductSet;
    }
    // 返回一个集合的幂集
    //所谓幂集（Power Set）， 就是原集合中所有的子集（包括全集和空集）构成的集族。
    static powerSet(a){
        let powerSet=new Xset().add(new Xset());
        for (let aValues of a){
            for (let set of new Xset(powerSet)){
                powerSet.add(new Xset(set).add(aValues));
            }
        }
        return powerSet;
    }
}

let a=new Xset([1,2,3]);
let b=new Xset([2,3,4]);


//并集
console.log("并集");
let result=a.union(b);
for (let value of result.values()) {
    console.log(value);
}

//求交集
console.log("交集");
result=a.intersection(b);
for (let value of result.values()) {
    console.log(value);
}

//两个集合的差集
console.log("差集");
result=a.difference(b);
for (let value of result.values()) {
    console.log(value);
}

//两个集合的对称差集
console.log("对称差集");
result=a.symmetricDifference(b);
for (let value of result.values()) {
    console.log(value);
}

//两个集合的笛卡儿积
console.log("笛卡儿积");
result=a.cartesianProduct(b);
for (let value of result.values()) {
    console.log(value);
}

//返回一个集合的幂集
console.log("返回一个集合的幂集");
result=a.powerSet();
for (let value of result.values()) {
    console.log(value);
}

const val1 = {id: 1},
    val2 = {id: 2},
    val3 = {id: 3};

// 使用数组初始化弱集合
const ws1 = new WeakSet([val1, val2, val3]);
console.log(ws1.has(val1)); // true
console.log(ws1.has(val2)); // true
console.log(ws1.has(val3)); // true

// 原始值可以先包装成对象再用作值
const stringVal = new String("val1");
const ws3 = new WeakSet([stringVal]);
console.log(ws3.has(stringVal)); // true

// 初始化是全有或全无的操作
// 只要有一个值无效就会抛出错误，导致整个初始化失败
const ws2 = new WeakSet([val1, "BADVAL", val3]);
// TypeError: Invalid value used in WeakSet
console.log(typeof ws2);
// ReferenceError: ws2 is not defined

const ws = new WeakSet();

const val1 = {id: 1},val2 = {id: 2};

console.log(ws.has(val1)); // false

ws.add(val1).add(val2);
console.log(ws.has(val1)); // true
console.log(ws.has(val2)); // true

ws.delete(val1); // 只删除这一个值
console.log(ws.has(val1)); // false
console.log(ws.has(val2)); // true

function foo() {}
let bar = function() {};
let baz = () => {};

console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((() => {}).name); //（空字符串）
console.log((new Function()).name); // anonymous

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

console.log(factorial(5));

let trueFactorial=factorial;

factorial=function(){
    return 0;
}

console.log(trueFactorial(5));  //120
console.log(factorial(5));  //0

function outer() {
    inner();
}
function inner() {
    console.log(inner.arguments.callee.caller);
}

outer();  //[Function: outer]

function sayName(name) {
    console.log(name);
}
function sum(num1, num2) {
    return num1 + num2;
}
function sayHi() {
    console.log("hi");
}

console.log(sayName.length); // 1
console.log(sum.length); // 2
console.log(sayHi.length); // 0

const target={
    id:"target"
}

const handler={};

const proxy=new Proxy(target,handler);

//id 属性会访问同一个值
console.log(target.id);  //target
console.log(proxy.id);  //target

// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id="foo";
console.log(target.id);  //foo
console.log(proxy.id);  //foo

// 给代理属性赋值会反映在两个对象上
// 因为这个赋值会转移到目标对象
proxy.id="bar";
console.log(target.id);  //bar
console.log(proxy.id);  //bar

// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(proxy.hasOwnProperty("id"));  //true
console.log(target.hasOwnProperty('id')); // true

// 严格相等可以用来区分代理和目标
console.log(target===proxy);  //false

// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
//console.log(target instanceof Proxy);  //TypeError: Function has non-object prototype 'undefined' in instanceof check
//console.log(proxy instanceof Proxy);  //TypeError: Function has non-object prototype 'undefined' in instanceof check

const target={
    foo:"bar"
}

const handler={
    // 捕获器在处理程序对象中以方法名为键
    get(){
        return 'handler override';
    }
};

const proxy=new Proxy(target,handler);

const target={
    foo:"bar"
}

const handler={
    // 捕获器在处理程序对象中以方法名为键
    get(trapTarget,property,receiver){
        //get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
        console.log(trapTarget===target);
        console.log(property);
        console.log(receiver===proxy);
    }
};

const proxy=new Proxy(target,handler);

proxy.foo;
// true
// foo
// true


const target={
    foo:"bar"
}

const handler={
    get(){
        return Reflect.get(...arguments);
    }
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar

const target={
    foo:"bar",
    baz:"qux"
}

const handler={
    // 捕获器在处理程序对象中以方法名为键
    get(trapTarget,property,receiver){
        //get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
        let decoration="";
        if (property==="foo") {
            decoration="!!!";
        }
        return Reflect.get(...arguments)+decoration;
    }
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar!!!

console.log(proxy.baz); // qux
console.log(target.baz); // qux

const target={
    foo:"bar"
};


const handler={
    get(){
        return 'intercepted';
    }
};

const {proxy,revoke}=Proxy.revocable(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // intercepted

revoke();  //撤销函数

console.log(proxy.foo);  //TypeError: Cannot perform 'get' on a proxy that has been revoked

const target={
    foo:"bar"
};

const firstProxy=new Proxy(target,{
    get(){
        console.log("first proxy");
        return Reflect.get(...arguments);
    }
});

const secondProxy=new Proxy(firstProxy,{
    get(){
        console.log("second proxy");
        return Reflect.get(...arguments);
    }
});

console.log(secondProxy.foo);  //
// second proxy
// first proxy
// bar

const mytarget={};

const proxy=new Proxy(mytarget,{
    get(target,property,receiver){
        console.log('get()');
        return Reflect.get(...arguments);
    }
});

proxy.foo;  //get()

const hiddenProperties = ['foo', 'bar'];

const targetObject = {
    foo: 1,
    bar: 2,
    baz: 3
};

const proxy=new Proxy(targetObject,{
    get(target,property){
        if (hiddenProperties.includes(property)) {
            return undefined;
        }else{
            return Reflect.get(...arguments);
        }
    },
    has(target,property){
        if (hiddenProperties.includes(property)) {
            return false;
        }else{
            return Reflect.has(...arguments);
        }
    },
});

// get()
console.log(proxy.foo); // undefined
console.log(proxy.bar); // undefined
console.log(proxy.baz); // 3
// has()
console.log('foo' in proxy); // false
console.log('bar' in proxy); // false
console.log('baz' in proxy); // true

class User {
constructor(id) {
this.id_ = id;
}
}

const proxy=new Proxy(User,{
    construct(target,argumentsList,newTarget){
        if (argumentsList[0]===undefined) {
            throw 'User cannot be instantiated without id';
        }else{
            return Reflect.construct(...arguments);
        }
    }
});

new proxy(1);
new proxy();
// Error: User cannot be instantiated without id

const userList = [];

function emit(newValue){
    console.log(newValue);
}

const proxy=new Proxy(userList,{
    set(target, property, value, receiver) {
        const result=Reflect.set(...arguments);
        if (result) {
            emit(Reflect.get(target,property,receiver));
        }
        return result;
    }
});

proxy.push('John');
// John
//1
proxy.push('Jacob');
// Jacob
//2

function double(value,success,failure) {
    setTimeout(() => {
        try{
            if (typeof value!=="number") {
                throw "Must provide number as first argument";
            }
            success(2*value);
        }catch(e){
            failure(e);
        }
    },1000);
}

const successCallback=(x)=>console.log(`success:${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3,successCallback,failureCallback);  //Success: 6（大约 1000 毫秒之后）
double('3',successCallback,failureCallback);  //Failure: Must provide number as first argument（大约 1000 毫秒之后）

let p=new Promise(()=>{});
setTimeout(console.log,0,p);  //Promise { <pending> }

//调用 resolve()会把状态切换为兑现，
let p1=new Promise((resolve,reject)=>resolve());
setTimeout(console.log,0,p1);  //// Promise <resolved>

//调用 reject()会把状态切换为拒绝。
let p2=new Promise((resolve,reject)=>reject());
setTimeout(console.log,0,p2);  // Promise <rejected>
//UnhandledPromiseRejectionWarning: undefined

let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));

// 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
setTimeout(console.log, 0, p); // Promise <pending>


const _proxy = (object,...prototypes) => {
    // 补全代码
    let proxy=new Proxy(object,{
        get(object,property){
            //target：目标对象。property：引用的目标对象上的字符串键属性。
            if ([...prototypes].includes(property)) {
                return "noright";
            }else{
                return Reflect.get(...arguments);
            }
        }
    });
    return proxy;
}

//const hiddenProperties = ['foo', 'bar'];
const targetObject = {
    foo: 1,
    bar: 2,
    baz: 3
};

let p=_proxy(targetObject,"foo","bar");
console.log(p.foo); // noright
console.log(p.bar); // noright
console.log(p.baz); // 3

let p1 = Promise.reject('foo');

// 调用 then()时不传处理程序则原样向后传
let p2 = p1.then();
// Uncaught (in promise) foo

setTimeout(console.log, 0, p2); // Promise <rejected>: foo

// 这些都一样
let p3 = p1.then(null, () => undefined);
let p4 = p1.then(null, () => {});
let p5 = p1.then(null, () => Promise.resolve());
setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
setTimeout(console.log, 0, p5); // Promise <resolved>: undefined

// 这些都一样
let p6 = p1.then(null, () => 'bar');
let p7 = p1.then(null, () => Promise.resolve('bar'));
setTimeout(console.log, 0, p6); // Promise <resolved>: bar
setTimeout(console.log, 0, p7); // Promise <resolved>: bar

// Promise.resolve()保留返回的期约
let p8 = p1.then(null, () => new Promise(() => {}));
let p9 = p1.then(null, () => Promise.reject());
// Uncaught (in promise): undefined

setTimeout(console.log, 0, p8); // Promise <pending>
setTimeout(console.log, 0, p9); // Promise <rejected>: undefined

let p10 = p1.then(null, () => { throw 'baz'; });
// Uncaught (in promise) baz
setTimeout(console.log, 0, p10); // Promise <rejected>: baz

let p11 = p1.then(null, () => Error('qux'));
setTimeout(console.log, 0, p11); // Promise <resolved>: Error: qux

let p=Promise.reject();
let onRejected=function(e){
    setTimeout(console.log,0,"rejected");
}

// 这两种添加拒绝处理程序的方式是一样的：
p.then(null,onRejected);  //rejected
p.catch(onRejected);  //rejected

let p1=Promise.resolve();
let p2=Promise.reject();
let onFinally=function(){
    setTimeout(console.log,0,"Finally!");
}

p1.finally(onFinally); // Finally
p2.finally(onFinally); // Finally

let p1 = Promise.resolve("foo");

// 这里都会原样后传
let p2=p1.finally();
let p3=p1.finally(()=>undefined);
let p4=p1.finally(()=>{});
let p5=p1.finally(()=>Promise.resolve());
let p6=p1.finally(()=>"bar");
let p7=p1.finally(()=>Promise.resolve("bar"));
let p8=p1.finally(()=>Error("qux"));

setTimeout(console.log, 0, p2); // Promise <resolved>: foo
setTimeout(console.log, 0, p3); // Promise <resolved>: foo
setTimeout(console.log, 0, p4); // Promise <resolved>: foo
setTimeout(console.log, 0, p5); // Promise <resolved>: foo
setTimeout(console.log, 0, p6); // Promise <resolved>: foo
setTimeout(console.log, 0, p7); // Promise <resolved>: foo
setTimeout(console.log, 0, p8); // Promise <resolved>: foo

// Promise.resolve()保留返回的期约
let p9=p1.finally(()=>new Promise(()=>{}));
let p10=p1.finally(()=>Promise.reject());
// Uncaught (in promise): undefined
setTimeout(console.log, 0, p9); // Promise <pending>
setTimeout(console.log, 0, p10); // Promise <rejected>: undefined

let p11=p1.finally(()=>{throw "baz";});
// Uncaught (in promise) baz

setTimeout(console.log,0,p11);  //Promise <rejected>: baz

// 创建解决的期约
let p=Promise.resolve();

// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(()=>console.log("onResolved handler"));

//同步输出，证明 then()已经返回
console.log("then() return");

//实际的输出：
// then() returns
// onResolved handler

let synchronousResolve;

// 创建解决的期约
let p=new Promise((resolve)=>{
    synchronousResolve=function(){
        console.log('1: invoking resolve()');
        resolve();
        console.log('2: resolve() returns');
    };
})

// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(() => console.log('4: then() handler executes'));

synchronousResolve();
console.log('3: synchronousResolve() returns');

// 实际的输出：
// 1: invoking resolve()
// 2: resolve() returns
// 3: synchronousResolve() returns
// 4: then() handler executes

let p1=Promise.resolve();
p1.then(()=>console.log("p1.then() onResolved"));

let p2=Promise.reject();
p2.then(null,()=>console.log("p2.then() onRejected"));

let p3=Promise.reject();
p3.catch(()=>console.log("p3.catch() onRejected"));
console.log("p3.catch() returns");

let p4=Promise.resolve();
p4.finally(()=>console.log("p4.finally() onFinally"));
console.log("p4.finally() returns");

/*
p3.catch() returns
p4.finally() returns
p1.then() onResolved
p2.then() onRejected
p3.catch() onRejected
p4.finally() onFinally
*/


let p=new Promise((resolve,reject)=>{
    console.log("first");
    resolve();
});
p.then(()=>console.log("second"))
    .then(()=>console.log("third"))
    .then(()=>console.log("fourth"));
// first
// second
// third
// fourth

let p=new Promise((resolve,reject)=>{
    console.log("p1 executor");
    setTimeout(resolve,1000);
});
p.then(()=>new Promise((resolve,reject)=>{
        console.log("p2 executor");
        setTimeout(resolve,1000);
    }))
    .then(()=>new Promise((resolve,reject)=>{
        console.log("p3 executor");
        setTimeout(resolve,1000);
    }))
    .then(()=>new Promise((resolve,reject)=>{
        console.log("p4 executor");
        setTimeout(resolve,1000);
    }));

function delayedResolve(str){
    return new Promise((resolve,reject)=>{
        console.log(str);
        setTimeout(resolve,1000);
    });
}

delayedResolve("p1 executor")
    .then(()=>delayedResolve("p2 executor"))
    .then(()=>delayedResolve("p3 executor"))
    .then(()=>delayedResolve("p4 executor"));
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）

let A = new Promise((resolve, reject) => {
    console.log('A');
    resolve();
});

let B=A.then(()=>console.log("B"));
let C=A.then(()=>console.log("C"));

B.then(()=>console.log("D"));
B.then(()=>console.log("E"));
C.then(()=>console.log("F"));
C.then(()=>console.log("G"));

//A B C D E F G

let p1=Promise.all([
    Promise.resolve(),
    Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve()转换为期约
let p2=Promise.all([3,4]);

// 空的可迭代对象等价于 Promise.resolve()
let p3=Promise.all([]);

// 无效的语法
let p4=Promise.all();
//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
let p=Promise.all([
    Promise.resolve(),
    new Promise((resolve,reject)=>setTimeout(resolve,1000))
]);

setTimeout(console.log,0,p);  //Promise <pending>

p.then(()=>setTimeout(console.log,0,"all() resolved"))
// all() resolved!（大约 1 秒后）

let p1=Promise.race([
    Promise.resolve(),
    Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve()转换为期约
let p2=Promise.race([3,4]);

// 空的可迭代对象等价于 new Promise(() => {})
let p3=Promise.race([]);

// 无效的语法
let p4 = Promise.race();
// TypeError: cannot read Symbol.iterator of undefined

// 解决先发生，超时后的拒绝被忽略
let p1=Promise.race([
    Promise.resolve(3),
    new Promise((resolve,reject)=>setTimeout(reject,1000))
]);
setTimeout(console.log,0,p1);  //Promise { 3 }

// 拒绝先发生，超时后的解决被忽略
let p2 = Promise.race([
    Promise.reject(4),
    new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p2); // Promise <rejected>: 4

// 迭代顺序决定了落定顺序
let p3 = Promise.race([
    Promise.resolve(5),
    Promise.resolve(6),
    Promise.resolve(7)
]);
setTimeout(console.log, 0, p3); // Promise <resolved>: 5

function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function addTen(x){
    return Promise.resolve(x)
        .then(addTwo)
        .then(addThree)
        .then(addFive);
}

addTen(8).then(console.log); // 18

function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function addTen(x){
    return [addTwo,addThree,addFive]
        .reduce((promise,fn)=>promise.then(fn),Promise.resolve(x));
}

addTen(8).then(console.log); // 18

function compose(...fns){
    return (x)=>fns.reduce((promise,fn)=>promise.then(fn),Promise.resolve(x));
}

let addTen = compose(addTwo, addThree, addFive);
addTen(8).then(console.log); // 18

    class CancelToken{
        constructor(cancelFn){
            this.promise=new Promise((resolve,reject)=>{
                cancelFn(()=>{
                    setTimeout(console.log,0,"delay cancelled");
                    resolve();
                });
            });
        }
    }

    const startButton = document.querySelector('#start');
    const cancelButton = document.querySelector('#cancel');

    function cancellableDelayedResolve(delay) {
        setTimeout(console.log,0,"set delay");
        return new Promise((resolve,reject)=>{
            const id=setTimeout((()=>{
                setTimeout(console.log,0,"delay resolve");
                resolve();
            }),delay);
            const cancelToken=new CancelToken((cancelCallback)=>
                cancelButton.addEventListener("click",cancelCallback));
            cancelToken.promise.then(()=>clearTimeout(id));
        });
    }
    startButton.addEventListener("click",()=>cancellableDelayedResolve(1000));

class TrackablePromise extends Promise{
    constructor(executor){
        const notifyHandlers=[];
        super((resolve,reject)=>{
            return executor(resolve,reject,(status)=>{
                notifyHandlers.map((handler)=>handler(status));
            });
        });
        this.notifyHandlers=notifyHandlers;
    }
    notify(notifyHandler){
        this.notifyHandlers.push(notifyHandler);
        return this;
    }
}

let p=new TrackablePromise((resolve,reject,notify)=>{
    function countdown(x){
        if (x>0) {
            notify(`${20*x}% remaining`);
            setTimeout(()=>countdown(x-1),1000);
        }else{
            resolve();
        }
    }
    countdown(5);
});

p.notify((x)=>setTimeout(console.log,0,"a:",x))
    .notify((x)=>setTimeout(console.log,0,"b:",x));
p.then(()=>setTimeout(console.log,0,"completed"));

// （约 1 秒后） a: 80% remaining
// （约 1 秒后） b: 80% remaining
// （约 2 秒后） a: 60% remaining
// （约 2 秒后） b: 60% remaining
// （约 3 秒后） a: 40% remaining
// （约 3 秒后） b: 40% remaining
// （约 4 秒后） a: 20% remaining
// （约 4 秒后） b: 20% remaining
// （约 5 秒后） completed

async function foo(){}

let bar=async function(){};

let baz=async ()=>{};

class Qux{
    async qux(){}
}

// 返回一个原始值
async function foo(){
    return "foo";
}
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
//foo

// 返回一个没有实现 thenable 接口的对象
async function bar(){
    return ["bar"];
}
bar().then(console.log);
//[ 'bar' ]

// 返回一个实现了 thenable 接口的非期约对象
async function baz(){
    const thenable={
        then(callback){
            callback("baz");
        }
    };
    return thenable;
}
baz().then(console.log);
//baz

// 返回一个期约
async function qux(){
    return Promise.resolve("qux");
}
qux().then(console.log);
//qux

async function foo() {
    let p=new Promise((resolve,reject)=>setTimeout(resolve,1000,3));
    console.log(await p);
}
foo();
//3

// 异步打印"foo"
async function foo() {
    console.log(await Promise.resolve("foo"));
}
foo();
//foo

// 异步打印"bar"
async function bar() {
    return await Promise.resolve("bar");
}
bar().then(console.log);
// bar

// 1000 毫秒后异步打印"baz"
async function baz(){
    await new Promise((resolve,reject)=>setTimeout(resolve,1000));
    console.log("baz");
}
baz();
// baz（1000 毫秒后）

// 等待一个原始值
async function foo() {
    console.log(await "foo");
}
foo();
//foo

// 等待一个没有实现 thenable 接口的对象
async function bar() {
    console.log(await ["bar"]);
}
bar();
// ['bar']

// 等待一个实现了 thenable 接口的非期约对象
async function baz(){
    const thenable = {
        then(callback) { callback('baz'); }
    };
    console.log(await thenable);
}
baz();
// baz

// 等待一个期约
async function qux(){
    console.log(await Promise.resolve("qux"));
}
qux();
//qux


    //需要匹配最大负数索引边界，动态变化
    let maxNegativeIndex=negativeInterger.length-1;
    for (let i=0;i<positiveInterger.length-1;i++){
        //两负一正时
        if (maxNegativeIndex===-1) {
            //当正整数遍历完时，退出
            break;
        }
        for (let j=i+1;j<positiveInterger.length;i++){
            //计算两个负数和后取绝对值
            if (maxNegativeIndex===-1) {
                //当正整数遍历完时，退出
                break;
            }
            let PositiveSum=-(positiveInterger[i]+positiveInterger[j]);
            //去找是否有相等的值
            for (let k=maxNegativeIndex;k>=0;k--){
                //因为是排好序的
                if (negativeInterger[k]<PositiveSum) {
                    //如果小于则不存在，退出
                    break;
                }else if(negativeInterger[k]>PositiveSum) {
                    //如果大于，则往前查找，最大正数索引边界减一
                    maxNegativeIndex--;
                }else{
                    //如果相等
                    newArr.push([positive[i],positiveInterger[j],negativeInterger[k]]);
                    //移动最大位，可以避免重复
                    maxNegativeIndex--;
                    break;
                }
            }
        }
    }

async function sleep(delay){
    return new Promise((resolve,reject)=>setTimeout(resolve,delay));
}

async function foo(){
    const t0=Date.now();
    await sleep(1500);  //暂停约 1500 毫秒
    console.log(Date.now()-t0);
}

foo();  //1509

//apply
function bindThis(f, oTarget) {
    return function(){
        return f.apply(oTarget,arguments);
    }
}

//bind
function bindThis(f, oTarget) {
    return f.bind(oTarget);
}

//call
function bindThis(f, oTarget) {
    return function(){
        return f.call(oTarget,...arguments);
    }
}

let str1=[0,1,false, true, undefined, null, NaN, {},{a:1},'a'];

for (let i=0;i<str1.length;i++){
    for (let j=i;j<str1.length;j++){
        console.log(`${str1[i]}===${str1[j]} : ${str1[i]===str1[j]}`);
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    const head=new ListNode();
    let list3=head;
    while(list1!=null && list2!=null){
        if (list1.val<list2.val) {
            list3.next=list1;
            list1=list1.next;
        }else{
            list3.next=list2;
            list2=list2.next;
        }
        list3=list3.next;
    }
    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    list3.next=list1===null ? list2:list1;
    //注意返回的是什么
    return head.next;
};

let str1 = [-9,3];
let str2=[5,7];
let list1=new ListNode();
let list2=new ListNode();
let head1=list1;
let head2=list2;
for (let i=0;i<str1.length;i++){
    list1.val=str1[i];
    list1.next=new ListNode();
    list1=list1.next;
}
//console.log(head1);
for (let i=0;i<str2.length;i++){
    list2.val=str2[i];
    list2.next=new ListNode();
    list2=list2.next;
}
//console.log(head2);

let result=mergeTwoLists(head1,head2);
console.log(result);

function formatDate(date,format) {
    let obj={};
    let items=["yyyy","yy","MM","M","dd","d","HH","H","hh","h","mm","m","ss","s","w"];

    obj[items[0]]=date.getFullYear();  ////yyyy: 年份,  从 Date 对象以四位数字返回年份。
    obj[items[1]]=obj[items[0]].toString().slice(2);  //yy: 年份

    obj[items[3]]=date.getMonth()+1;  //,M: 月份  ,从 Date 对象返回月份 (0 ~ 11)。
    obj[items[2]]=obj[items[3]]<10 ? "0"+""+obj[items[3]] : obj[items[3]];  //MM: 月份，补满两位

    obj[items[5]]=date.getDate();  //d: 日期,  从 Date 对象返回一个月中的某一天 (1 ~ 31)。
    obj[items[4]]=obj[items[5]]<10 ? "0"+""+obj[items[5]] : obj[items[5]];  //dd: 日期，补满两位

    obj[items[7]]=date.getHours();  //H: 24制小时, 返回 Date 对象的小时 (0 ~ 23)。
    obj[items[6]]=obj[items[7]]<10 ? "0"+""+obj[items[7]] : obj[items[7]];  //HH: 24制小时，补满两位
    //
    obj[items[9]]=obj[items[7]]>12 ? obj[items[7]]-12 : obj[items[7]];  //h: 12制小时
    obj[items[8]]=obj[items[9]]<10 ? "0"+""+obj[items[9]] : obj[items[9]];  //hh: 12制小时，补满两位

    obj[items[11]]=date.getMinutes();  //m: 分钟, 返回 Date 对象的分钟 (0 ~ 59)。
    obj[items[10]]=obj[items[11]]<10 ? "0"+""+obj[items[11]] : obj[items[11]];  //mm: 分钟，补满两位

    obj[items[13]]=date.getSeconds();  //s:秒, 返回 Date 对象的秒数 (0 ~ 59)。
    obj[items[12]]=obj[items[13]]<10 ? "0"+""+obj[items[13]] : obj[items[13]];  //ss: 秒，补满两位

    obj[items[14]]= ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]    //w 星期,从 Date 对象返回一周中的某一天 (0 ~ 6)。
    //let milliSecond=date.getMilliseconds();  //返回 Date 对象的毫秒(0 ~ 999)。
    for (let i=0;i<items.length;i++){
        let reg=new RegExp(items[i],"g");
        format=format.replace(reg,obj[items[i]]);
    }
    //console.log(obj);
    return format;

}

let date=new Date(1409894060000);
format="yyyy-MM-dd HH:mm:ss 星期w"
let result=formatDate(date,format);
console.log(result);

function isAvailableEmail(sEmail) {
    // \w  单词字符包括：a-z、A-Z、0-9，以及下划线, 包含 _ (下划线) 字符。
    // n+  匹配任何包含至少一个 n 的字符串
    let reg=/^([\w+\.])+@\w+([.]\w+)+$/;
    return reg.test(sEmail);
}

let str1='fheo221wio@qq.com';
let result=isAvailableEmail(str1);
console.log(result);

function speak(fn, obj) {
    // 方法1 将函数fn直接挂载到obj上
    obj.fn = fn;
    return obj.fn();
    //this的指向是动态变化的,需要把this的指向固定，所以就有了以下三种方法
    //call()、apply()、bind() 都是用来重定义 this 这个对象的
    //call 的参数是直接放进去的
    //apply 的所有参数都必须放在一个数组里面传进去
    //bind 除了返回是函数,它的参数和 call 一样
    return fn.apply(obj);
    return fn.call(obj);
    return fn.bind(obj);
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_VALUE=2**31-1;
    const MIN_VALUE=-(2**31);

    // 考虑被除数为最小值的情况
    if (dividend===MIN_VALUE) {
        if (divisor===1) {
            //直接返回答案-2^31
            return MIN_VALUE;
        }
        if (divisor===-1) {
            //为2^31,产生了溢出。此时我们需要返回2^31-1
            return MAX_VALUE;
        }
    }

    //考虑除数为最小值的情况
    if (divisor===MIN_VALUE) {
        //被除数只有为MIN_VALUE时为1，其他都为0
        return dividend===MIN_VALUE ? 1: 0;
    }

    // 考虑被除数为 0 的情况
    if (dividend===0) {
        return 0;
    }

    // 一般情况，使用类二分查找
    // 将所有的正数取相反数，这样就只需要考虑一种情况
    let rev=false;
    if(dividend>0){
        dividend=-dividend;
        rev=!rev;
    }
    if (divisor>0) {
        divisor=-divisor;
        rev=!rev;
    }

    //类二分查找
    const candidates=[divisor];
    let index=0;
    //注意溢出
    while(candidates[index]>=dividend-candidates[index]){
        //处理的都是负数
        candidates.push(candidates[index]+candidates[index]);
        index++;
    }
    //console.log(candidates);
    let ans=0;
    console.log(ans,dividend);
    for (let i=candidates.length-1;i>=0;--i){
        if (candidates[i]>=dividend) {
            ans+=1<<i;
            dividend-=candidates[i];
            console.log(ans,dividend);

        }
    }
    return rev ? -ans : ans;
};


let str1 = 100000;
let str2 = 33;
let result=divide(str1,str2);
console.log(result);

//原型模式
function createModule(str1, str2) {
    function obj(){};
    //使用函数表达式也可
    //let obj= function() {}
    obj.prototype.greeting=str1;
    obj.prototype.name=str2;
    obj.prototype.sayIt=function(){
        return this.greeting+", "+this.name;
    }
    return new obj();
}

//构造函数模式
function createModule(str1, str2) {
    function obj(){
        this.greeting=str1;
        this.name=str2;
        this.sayIt=function(){
            return this.greeting+", "+this.name;
        }
    }
    return new obj();
}

//工厂模式
function createModule(str1, str2) {
    let o=new Object();
    o.greeting=str1;
    o.name=str2;
    o.sayIt=function(){
         return this.greeting+", "+this.name;
    }
    return o;
}

//字面量模式
function createModule(str1, str2) {
    var obj =
            {
                greeting : str1,
                name : str2,
                sayIt : function(){return this.greeting + ", " + this.name;}
            };
    return obj;    

