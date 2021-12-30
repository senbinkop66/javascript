
let person=new Object();
person.name="mane";
person.age=29;
person.job="forward";
person.sayName=function(){
	console.log(this.name);
}

let person={
	name:"mane",
	age:29,
	job:"forward",
	sayName(){
	console.log(this.name);
	}
};

let person={};
Object.defineProperty(person,"name",{
	writable:false,
	value:"Arnold"
});
console.log(person.name);  //Arnold
person.name="mane";
console.log(person.name);  //Arnold

let person={};
Object.defineProperty(person,"name",{
	configurable:false,
	value:"Arnold"
});
console.log(person.name);  //Arnold
delete person.name;
console.log(person.name);  //Arnold

let person={};
Object.defineProperty(person,"name",{
	configurable:false,
	value:"Arnold"
});

Object.defineProperty(person,"name",{
	//TypeError: Cannot redefine property: name
	configurable:true,
	value:"Arnold"
});

let book={
	year_:2017,
	edition:1
};

var firstUniqChar = function(s) {
    let alphas=new Object();
    let indexs=new Object();

	
        if (alphas.hasOwnProperty(s[i])) {
            alphas.s[i]=alphas.s[i]+1;
        }else{
            Object.defineProperty(alphas,s[i],{
                value:1,
                writable:true
            });
        }
	}
    console.log(alphas);
    return -1;
};

Object.defineProperty(book,"year",{
	get(){
		return this.year_;
	},
	set(newValue){
		if (newValue>2017) {
			this.year_=newValue;
			this.edition+=newValue-2017;
		}
	}
});
console.log(book.year_);  //2017
book.year=2021;
console.log(book.year_);  //2021
console.log(book.edition);  //5

let book={};

Object.defineProperties(book,{
	year_:{
		value:2017
	},
	edition:{
		value:1
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if (newValue>2017) {
				this.year_=newValue;
				this.edition+=newValue-2017;
			}
		}
	},
});
console.log(book.year_);  //2017
book.year=2021;
console.log(book.year_);  //2017
console.log(book.edition);  //1

let book={};

Object.defineProperties(book,{
	year_:{
		value:2017
	},
	edition:{
		value:1
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if (newValue>2017) {
				this.year_=newValue;
				this.edition+=newValue-2017;
			}
		}
	},
});

let descriptor=Object.getOwnPropertyDescriptor(book,"year_");
console.log(descriptor.value);  //2017
console.log(descriptor.configurable);  //false
console.log(typeof descriptor.get);  //undefined

descriptor=Object.getOwnPropertyDescriptor(book,"year");  //
console.log(descriptor.value);  //undefined
console.log(descriptor.enumerable);  //false
console.log(typeof descriptor.get);  //function


let book={};

Object.defineProperties(book,{
	year_:{
		value:2017
	},
	edition:{
		value:1
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if (newValue>2017) {
				this.year_=newValue;
				this.edition+=newValue-2017;
			}
		}
	},
});


console.log(Object.getOwnPropertyDescriptors(book));
/*
{
  year_: {
    value: 2017,
    writable: false,
    enumerable: false,
    configurable: false
  },
  edition: { value: 1, writable: false, enumerable: false, configurable: false },
  year: {
    get: [Function: get],
    set: [Function: set],
    enumerable: false,
    configurable: false
  }
}
[Finished in 120ms]
*/

if (someNode.nodeType==Node.ELEMENT_NODE) {
	console.log("Node is an element.");
}

if (someNode.nodeType == 1){
	value = someNode.nodeName; // 会显示元素的标签名
}

let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length;

let arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);

let arrayOfNodes = Array.from(someNode.childNodes);

if (someNode.nextSibling === null){
	console.log("Last node in the parent's childNodes list.");
} else if (someNode.previousSibling === null){
	console.log("First node in the parent's childNodes list.");
}

function Person(){}

console.log(typeof Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype.constructor===Person);
console.log(Person.prototype.__proto__===Object.prototype);
console.log(Person.prototype.__proto__.constructor===Object);
console.log(Person.prototype.__proto__.__proto__===null);
console.log(Person.prototype.__proto__);

let p1=new Person();
let p2=new Person();

console.log(p1!==Person);
console.log(p1!==Person.prototype);
console.log(Person.prototype!==Person);

console.log(p1.__proto__===Person.prototype);
console.log(p1.__proto__.constructor===Person);

console.log(p1.__proto__===p2.__proto__);

console.log(p1 instanceof Person);
console.log(p2 instanceof Person);
console.log(Person.prototype instanceof Object);

console.log(Person.prototype.isPrototypeOf(p1));
console.log(Person.prototype.isPrototypeOf(p2));

console.log(Object.getPrototypeOf(p1)==Person.prototype);
console.log(Object.getPrototypeOf(p1).name);

let biped = {
	numLegs: 2
};
let person = {
	name: 'Matt'
};
Object.setPrototypeOf(person, biped);
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true

let biped = {
    numLegs: 2
};
let person = Object.create(biped);
person.name = 'Matt';
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true

function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
console.log(person1.hasOwnProperty("name")); // false
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false
delete person1.name;
console.log(person1.name); // "Nicholas"，来自原型
console.log(person1.hasOwnProperty("name")); // false

console.log(person2.hasOwnProperty("age"));
person2.age=30;
console.log(person2.age);
console.log(person2.hasOwnProperty("age"));

function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}

function Person(){}

Person.prototype.name="mane";
Person.prototype.age=19;
Person.prototype.job="forward";
Person.prototype.sayName=function(){
    console.log(this.name);
}

let keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys); // "[constructor,name,age,job,sayName]"
let keys=Object.keys(Person.prototype);
console.log(keys);

let p1=new Person();
p1.name="Arnold";
p1.age=23;

let p1keys=Object.keys(p1);
console.log(p1keys);

let k1=Symbol('k1');
let k2=Symbol('k2');

let o={
    [k1]:'k1',
    [k2]:'k2'
};

console.log(Object.getOwnPropertySymbols(o));
//[ Symbol(k1), Symbol(k2) ]

let k1=Symbol('k1');
let k2=Symbol('k2');

let o={
    1:1,
    first:'first',
    [k1]:'sym1',
    second:'second',
    0:0
};

o[k2]='sym2';
o[3]=3;
o.third='third';
o[2]=2;
console.log(Object.getOwnPropertyNames(o));
//[ '0', '1', '2', '3', 'first', 'second', 'third' ]
console.log(Object.getOwnPropertySymbols(o));
//[ Symbol(k1), Symbol(k2) ]

const o={
    foo:"bar",
    baz:1,
    qux:{}
}

console.log(Object.keys(o));  //[ 'foo', 'baz', 'qux' ]
console.log(Object.values(o));  //[ 'bar', 1, {} ]
console.log(Object.entries(o));  //[ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]

function Person(){}

Person.prototype={
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

function Person(){}

Person.prototype={
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
});

let friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor == Person); // true
console.log(friend.constructor == Object); // false

Person() {}
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["Shelby", "Court"],
    sayName() {
        console.log(this.name);
    }
};

let person1 = new Person();
let person2 = new Person();
person1.friends.push("Van");
console.log(person1.friends); // "Shelby,Court,Van"
console.log(person2.friends); // "Shelby,Court,Van"
console.log(person1.friends === person2.friends); // true

function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};

function SubType(){
    this.subproperty=false;
}
// 继承 SuperType
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function(){
    return this.subproperty;
};

let instance=new SubType();
console.log(instance.getSuperValue());  //true

console.log(instance instanceof Object);  // true
console.log(instance instanceof SuperType);  // true
console.log(instance instanceof SubType);  // true

console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(SuperType.prototype.isPrototypeOf(instance)); // true
console.log(SubType.prototype.isPrototypeOf(instance)); // true

// 覆盖已有的方法
SubType.prototype.getSuperValue=function(){
    return false;
}

function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {}
// 继承 SuperType
SubType.prototype = new SuperType();
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green,black"

function SuperType(name) {
    this.name=name;
}
function SubType() {
    // 继承 SuperType并传参
    SuperType.call(this,"Arnold");
    // 实例属性
    this.age = 23;
}

let instance1 = new SubType();
console.log(instance1.name); //Arnold
console.log(instance1.age); //23

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
let anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});
console.log(anotherPerson.name); // "Greg"

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age){
    SuperType.call(this, name); // 第二次调用 SuperType()
    this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
};

// 空类定义，有效
class Foo {}
// 有构造函数的类，有效
class Bar {
    constructor() {}
}
// 有获取函数的类，有效
class Baz {
    get myBaz() {}
}
// 有静态方法的类，有效
class Qux {
static myQux() {}
}

let Person = class PersonName {
    identify() {
    console.log(Person.name, PersonName.name);
}
}
let p = new Person();
p.identify(); // PersonName PersonName
console.log(Person.name); // PersonName
console.log(PersonName); // ReferenceError: PersonName is not defined

class Animal {}
class Person {
    constructor() {
        console.log('person ctor');
    }
}
class Vegetable {
    constructor() {
        this.color = 'orange';
    }
}
let a = new Animal();
let p = new Person(); // person ctor
let v = new Vegetable();
console.log(v.color); // orange

// 类可以像函数一样在任何地方定义，比如在数组中
let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log(`instance ${this.id_}`);
        }
    }
];
function createInstance(classDefinition, id) {
return new classDefinition(id);
}
let foo = createInstance(classList[0], 3141); // instance 3141

// 因为是一个类表达式，所以类名是可选的
let p = new class Foo {
    constructor(x) {
        console.log(x);
    }
}('bar'); // bar
console.log(p); // Foo {}

class Person {
    constructor() {
        // 这个例子先使用对象包装类型定义一个字符串
        // 为的是在下面测试两个对象的相等性
        this.name = new String('Jack');
        this.sayName = () => console.log(this.name);
        this.nicknames = ['Jake', 'J-Dog']
    }
}
let p1 = new Person(),
p2 = new Person();
p1.sayName(); // Jack
p2.sayName(); // Jack
console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName); // false
console.log(p1.nicknames === p2.nicknames); // false
p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];
p1.sayName(); // Jake
p2.sayName(); // J-Dog

class Person {
    constructor() {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance');
    }
    // 在类块中定义的所有内容都会定义在类的原型上
    locate() {
        console.log('prototype');
    }
}
let p = new Person();
p.locate(); // instance
Person.prototype.locate(); // prototype

const symbolKey = Symbol('symbolKey');
class Person {
    stringKey() {
        console.log('invoked stringKey');
    }
    [symbolKey]() {
        console.log('invoked symbolKey');
    }
    ['computed' + 'Key']() {
        console.log('invoked computedKey');
    }
}
let p = new Person();
p.stringKey(); // invoked stringKey
p[symbolKey](); // invoked symbolKey
p.computedKey(); // invoked computedKey

class Person {
    constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance', this);
    }
    // 定义在类的原型对象上
    locate() {
        console.log('prototype', this);
    }
    // 定义在类本身上
    static locate() {
        console.log('class', this);
    }
}
let p = new Person();
p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }
Person.locate(); // class, class Person {}

class Person {
    constructor(age){
        // 添加到 this 的所有内容都会存在于不同的实例上
        this._age=age;
    }
    // 定义在类的原型对象上
    sayAge(){
        console.log(this._age);
    }
    // 定义在类本身上
    static create(){
        // 使用随机年龄创建并返回一个 Person 实例
        return new Person(Math.floor(Math.random()*100));
    }
}

console.log(Person.create()); // Person { _age: 34 }
console.log(Person.create()); // Person { _age: 62 }

class Person {
    sayName() {
        console.log(`${Person.greeting} ${this.name}`);
    }
}
// 在类上定义数据成员
Person.greeting = 'My name is';
// 在原型上定义数据成员
Person.prototype.name = 'Jake';
let p = new Person();
p.sayName(); // My name is Jake

class Person {
    // 在原型上定义生成器方法
    *createNicknameIterator(){
        yield 'Jack';
        yield 'Jake';
        yield 'J-Dog';
    }
    //在类上定义生成器方法
    static *createJobIterator(){
        yield 'Butcher';
        yield 'Baker';
        yield 'Candlestick maker';
    }
}

let jobIter=Person.createJobIterator();
console.log(jobIter.next().value);  //Butcher
console.log(jobIter.next().value);  //Baker
console.log(jobIter.next().value);  //Candlestick maker

let p=new Person();
let nicknameIter=p.createNicknameIterator();
console.log(nicknameIter.next().value);  //Jack
console.log(nicknameIter.next().value);  //Jake
console.log(nicknameIter.next().value);  //J-Dog

class Person {
    constructor(){
        this.nicknames=['Jack', 'Jake', 'J-Dog'];
    }
    *[Symbol.iterator](){
        yield *this.nicknames.entries();
    }
}

let p=new Person();
for (let [idx,nickname] of p){
    console.log(nickname);
}
// Jack
// Jake
// J-Dog

class Person {
    constructor(){
        this.nicknames=['Jack', 'Jake', 'J-Dog'];
    }
    [Symbol.iterator](){
        return this.nicknames.entries();
    }
}

let p=new Person();
for (let [idx,nickname] of p){
    console.log(nickname);
}
// Jack
// Jake
// J-Dog

class Vehicle {}
// 继承类
class Bus extends Vehicle {}

let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

function Person() {}
// 继承普通构造函数
class Engineer extends Person {}

let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true

class Vehicle {
    identifyPrototype(id) {
        console.log(id, this);
    }
    static identifyClass(id) {
        console.log(id, this);
    }
}
class Bus extends Vehicle {}

let v = new Vehicle();
let b = new Bus();
b.identifyPrototype('bus'); // bus, Bus {}
v.identifyPrototype('vehicle'); // vehicle, Vehicle {}
Bus.identifyClass('bus'); // bus [class Bus extends Vehicle]
Vehicle.identifyClass('vehicle'); // vehicle, class Vehicle {}

class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}
class Bus extends Vehicle {
    constructor() {
        // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
        super(); // 相当于 super.constructor()
        console.log(this instanceof Vehicle); // true
        console.log(this); // Bus { hasEngine: true }
    }
}
new Bus();

class Vehicle {
    static identify() {
        console.log('vehicle');
    }
}
class Bus extends Vehicle {
    static identify() {
        super.identify();
    }
}
Bus.identify(); // vehicle

class Vehicle {
    constructor(){
        console.log(new.target);
        if (new.target===Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
    }
}
class Bus extends Vehicle {
}
new Bus();  //[class Bus extends Vehicle]
new Vehicle();  //Error: Vehicle cannot be directly instantiated

class Vehicle {
    constructor(){
        console.log(new.target);
        if (new.target===Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()');
        }
    }
}

// 派生类
class Bus extends Vehicle {
    foo() {}
}
// 派生类
class Van extends Vehicle {}

new Bus(); // [class Bus extends Vehicle]
new Van(); // Error: Inheriting class must define foo()

class SuperArray extends Array{
    shuffle(){
        //洗牌算法
        for (let i=this.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [this[i],this[j]]=[this[j],this[i]];
        }
    }
}

let a=new SuperArray(1,2,3,4,5);
console.log(a instanceof Array);
console.log(a instanceof SuperArray);
console.log(a); // [1, 2, 3, 4, 5]
a.shuffle();
console.log(a); // [3, 2, 5, 4, 1]

class Vehicle{}

let FooMixin=(Superclass)=>class extends Superclass{
    foo(){
        console.log("foo");
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
};
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
};

class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))){}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz

class Vehicle{}

let FooMixin=(Superclass)=>class extends Superclass{
    foo(){
        console.log("foo");
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
};
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
};

function mix(BaseClass,...Mixins){
    return Mixins.reduce((accumulator,current)=>current(accumulator),BaseClass);
}

class Bus extends mix(Vehicle,FooMixin,BarMixin,BazMixin){}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            if (board[i][j]!==".") {
                for(let k=j+1;k<9;k++){
                    if (board[i][j]===board[i][k]) {
                        return false;
                    }
                }
                for(let k=i+1;k<9;k++){
                    if (board[i][j]===board[k][j]) {
                        return false;
                    }
                }
                let start1=Math.floor(i/3)*3;
                let start2=Math.floor(j/3)*3;
                for (let m=start1;m<start1+3;m++){
                    for (let n=start2;n<start2+3;n++){
                        if (i!==m && j!==n) {
                            if (board[i][j]===board[m][n]){
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
};

let str1 = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let result=isValidSudoku(str1);
//console.log(typeof result);
console.log(result);


function insert(arr, item, index) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if (i===index) {
            newArr.push(item);
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

let test=[1,3,4,5,3,6];
let result=insert(test,'a',3);
console.log(result);

let num = 1;
let obj = {};
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined
let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}

let arr = ['foo', 'bar', 'baz'];

// for-of 循环
for (let el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c); // foo, bar, baz

// 扩展操作符
let arr2 = [...arr];
console.log(arr2); // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3); // ['foo', 'bar', 'baz']

// Set 构造函数
let set = new Set(arr);
console.log(set); // Set(3) {'foo', 'bar', 'baz'}

// Map 构造函数
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]

let map = new Map(pairs);
console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }

// 可迭代对象
let arr = ['foo', 'baz'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
// 在数组中间插入值
arr.splice(1, 0, 'bar');
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: false, value: 'baz' }
console.log(iter.next()); // { done: true, value: undefined }


// 这个类实现了可迭代接口（Iterable）
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo' };
            }
        }
    }
}
let f = new Foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]()); // { next: [Function: next] }
// Array 类型实现了可迭代接口（Iterable）
// 调用 Array 类型的默认迭代器工厂函数
// 会创建一个 ArrayIterator 的实例
let a = new Array();
// 打印出 ArrayIterator 的实例
console.log(a[Symbol.iterator]()); // Object [Array Iterator] {}

class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.count=1;
        this.limit=limit;
    }

    next(){
        if (this.count<=this.limit) {
            return {done:false,value:this.count++};
        }else{
            return {done:true,value:undefined};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);
}


class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true,value:undefined};
                }
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);  //1,2,3,4,5
}

for (let i of c1){
    console.log(i);  //1,2,3,4,5
}

class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true};
                }
            },
            return(){
                console.log("exiting early");
                return {done:true};
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    if (i>2) {
        break;
    }
    console.log(i);
}
/*
1
2
exiting early
*/

let c2=new Counter(5);
try{
    for (let i of c2){
        if (i>2) {
            throw "err";
        }
        console.log(i);
    }
}catch(e){}
/*
1
2
exiting early
*/

let c3=new Counter(5);
//解构
let [a,b]=c3;  //exiting early


// 生成器函数声明
function* generatorFn() {}
// 生成器函数表达式
let generatorFn = function* () {}
// 作为对象字面量方法的生成器函数
let foo = {
    * generatorFn() {}
}
// 作为类实例方法的生成器函数
class Foo {
    * generatorFn() {}
}
// 作为类静态方法的生成器函数
class Bar {
    static * generatorFn() {}
}

function * generatorFn(){}

const g=generatorFn();

console.log(g);  //Object [Generator] {}
console.log(g.next());  //{ value: undefined, done: true }

function * generatorFn(){}

console.log(generatorFn);  //[GeneratorFunction: generatorFn]
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]
console.log(generatorFn());  //Object [Generator] {}
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]
const g=generatorFn();
console.log(g===g[Symbol.iterator]());  //true

function * generatorFn(){
    yield 'foo';
    yield 'bar';
    return "baz";
}

const g=generatorFn();
console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next());  //{ value: 'bar', done: false }
console.log(g.next());  //{ value: 'baz', done: true }
console.log(g.next());  //{ value: undefined, done: true }

function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}
for (const x of generatorFn()) {
    console.log(x);  //1,2,3
}

function* nTimes(n) {
    while(n--){
        yield;
    }
}
for (let _ of nTimes(5)) {
    console.log("foo");  //foo foo foo foo foo
}

function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let g=generatorFn("a");

g.next("b");  //a
g.next("c");  //c
g.next("d");  //d

function* generatorFn(initial) {
    return yield 'foo';
}

let g=generatorFn();

console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next("bar"));  //{ value: 'bar', done: true }
console.log(g.next("baz"));  //{ value: undefined, done: true }

function* generatorFn() {
    for (let i = 0;;++i) {
        yield i;
    }
}
let generatorObject = generatorFn();
console.log(generatorObject.next().value); // 0
console.log(generatorObject.next().value); // 1
console.log(generatorObject.next().value); // 2
console.log(generatorObject.next().value); // 3
console.log(generatorObject.next().value); // 4
console.log(generatorObject.next().value); // 5
//...

function* nTimes(n) {
    let i = 0;
    while(n--) {
        yield i++;
    }
}
for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2

function* range(start, end) {
    while(end > start) {
        yield start++;
    }
}
for (const x of range(4, 7)) {
    console.log(x);
}
// 4
// 5
// 6

function* zeroes(n) {
    while(n--) {
    yield 0;
    }
}
console.log(Array.from(zeroes(8))); // [0, 0, 0, 0, 0, 0, 0, 0]

//等价的 generatorFn：
function* generatorFn() {
    yield* [1, 2];
    yield *[3, 4];
    yield * [5, 6];
}

let generatorObject = generatorFn();
for (let x of generatorFn()) {
    console.log(x);
}

function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
}
function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
}
for (const x of outerGeneratorFn()) {
    console.log('value:', x);
}
// value: foo
// iter value: bar

function* nTimes(n) {
    if (n>0) {
        yield * nTimes(n-1);
        yield n-1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2

class Node{
    constructor(id){
        this.id=id;
        this.neighbors=new Set();
    }
    connect(node){
        if (node!==this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size){
        this.nodes=new Set();
        //创建节点
        for (let i=0;i<size;++i){
            this.nodes.add(new Node(i));
        }
        // 随机连接节点
        const threshold=1/size;
        for (let x of this.nodes){
            for (let y of this.nodes){
                if (Math.random()<threshold) {
                    x.connect(y);
                }
            }
        }
    }
    // 这个方法仅用于调试
    print(){
        for (let node of this.nodes){
            let ids=[...node.neighbors].map((n)=>n.id).join(",");
            console.log(`${node.id}:${ids}`);
        }
    }
}

const g = new RandomGraph(6);
g.print();
/*
0:2,3
1:2,3
2:0,1,5,3
3:1,0,2
4:
5:2
*/

function* generatorFn() {}
const g = generatorFn();
console.log(g); // Object [Generator] {}
console.log(g.next); // [Function: next]
console.log(g.return); // [Function: return]
console.log(g.throw); // [Function: throw]

function* generatorFn() {
    for (const x of [1, 2, 3]) {
        try {
            yield x;
        } catch(e) {}
    }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1}
g.throw('foo');
console.log(g.next()); // { done: false, value: 3}

// 字符串会被拆分为单字符数组
console.log(Array.from("Arnold"));  //[ 'A', 'r', 'n', 'o', 'l', 'd' ]

// 可以使用 from()将集合和映射转换为一个新数组
let m=new Map().set(1,2).set(3,4);
let s=new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(m));  //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s));  //[ 1, 2, 3, 4 ]

// Array.from()对现有数组执行浅复制
let a1=[1,2,3,4];
let a2=Array.from(a1);
console.log(a2);  //[ 1, 2, 3, 4 ]
console.log(a1===a2);  //false

// 可以使用任何可迭代对象
let iter={
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(Array.from(iter));  //[ 1, 2, 3, 4 ]

// arguments 对象可以被轻松地转换为数组
function getArgsArray(){
    return Array.from(arguments);
}
console.log(getArgsArray(1,2,3,4));  //[ 1, 2, 3, 4 ]

// from()也能转换带有必要属性的自定义对象
let arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 4
};
let arrayLikeObject2 = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5
};
console.log(Array.from(arrayLikeObject));  //[ 1, 2, 3, 4 ]
console.log(Array.from(arrayLikeObject2));  //[ 1, 2, 3, 4 ,5 ]

let a1=[1,2,3,4];

let a2=Array.from(a1,x=>x*2);
console.log(a2);  //[ 2, 4, 6, 8 ]

let a3=Array.from(a1,function(x){
    return x**this.exponent
},{exponent:2});
console.log(a3);  //[ 1, 4, 9, 16 ]

let a1=[1,2,3,4];

console.log(Array.of(a1));  //[ [ 1, 2, 3, 4 ] ]
console.log(Array.of(1,2,3,4));  //[ 1, 2, 3, 4 ]
console.log(Array.of(undefined));  //[ undefined ]

let colors = ["red", "blue", "green"]; 
if (Array.isArray(colors)){
	// 操作数组
	console.log(colors);
}

const a = ["foo", "bar", "baz", "qux"];

//
let aKeys=Array.from(a.keys());
let aValues=Array.from(a.values());
let aEntries=Array.from(a.entries());

console.log(aKeys);  //[ 0, 1, 2, 3 ]
console.log(aValues);  //[ 'foo', 'bar', 'baz', 'qux' ]
console.log(aEntries);  //[ [ 0, 'foo' ], [ 1, 'bar' ], [ 2, 'baz' ], [ 3, 'qux' ] ]

const a = ["foo", "bar", "baz", "qux"];
for (const [idx, element] of a.entries()) {
	console.log(idx);
	console.log(element);
}

console.log(zeroes);  //[ 0, 0, 0, 6, 6 ]

// 用 7 填充索引大于等于 1 且小于 3 的元素
zeroes.fill(7,1,3);
console.log(zeroes);  //[ 0, 7, 7, 6, 6 ]

// 用 8 填充索引大于等于 1 且小于 4 的元素
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
//zeroes.fill(8,1,4);
zeroes.fill(8,-4,-1);
console.log(zeroes);  //[ 0, 8, 8, 8, 6 ]

const zeroes = [0, 0, 0, 0, 0];
// 索引过低，忽略
zeroes.fill(1, -10, -6);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引过高，忽略
zeroes.fill(1, 10, 15);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引反向，忽略
zeroes.fill(2, 4, 2);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引部分可用，填充可用部分
zeroes.fill(4, 3, 10)
console.log(zeroes); // [0, 0, 0, 4, 4]

let ints;
let reset=()=>ints=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  //重置函数
reset();

// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在源索引或目标索引到达数组边界时停止
console.log(ints);  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
ints.copyWithin(5);
console.log(ints);  //[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
reset();

// 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
ints.copyWithin(0,5);
console.log(ints);  //[5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
reset();

// 从 ints 中复制索引 0 开始到索引 3 结束的内容
// 插入到索引 4 开始的位置
ints.copyWithin(4,0,3);
console.log(ints);  //[0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();

// JavaScript 引擎在插值前会完整复制范围内的值
// 因此复制期间不存在重写的风险
ints.copyWithin(2, 0, 6);
console.log(ints);  //[0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
reset();

// 支持负索引值，与 fill()相对于数组末尾计算正向索引的过程是一样的
ints.copyWithin(-4, -7, -3);
console.log(ints); // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6]

let ints,
reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引过低，忽略
ints.copyWithin(1, -15, -12);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset()
// 索引过高，忽略
ints.copyWithin(1, 12, 15);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引反向，忽略
ints.copyWithin(2, 4, 2);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引部分可用，复制、填充可用部分
ints.copyWithin(4, 7, 10)
console.log(ints); // [0, 1, 2, 3, 7, 8, 9, 7, 8, 9];

let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // [ 'red', 'blue', 'green' ]
console.log(colors); //[ 'red', 'blue', 'green' ]
alert(colors);  // red,blue,green

let colors = ["red", "green", "blue"];
console.log(colors.join(",")); // red,green,blue
console.log(colors.join("||")); // red||green||blue

function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}

let colors = ["red", "green", "blue"];

let removed=colors.splice(0,1);  //删除第一项
console.log(colors); //[ 'green', 'blue' ]
console.log(removed); //[ 'red' ]

removed=colors.splice(1,0,"yellow","orange"); //在位置 1 插入两个元素
console.log(colors); //[ 'green', 'yellow', 'orange', 'blue' ]
console.log(removed); //[]

removed=colors.splice(1,1,"red","purple");  //插入两个值，删除一个元素
console.log(colors); //[ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(removed); //[ 'yellow' ]

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(numbers.indexOf(4));  //3
console.log(numbers.lastIndexOf(4));  //5
console.log(numbers.includes(4));  //true

console.log(numbers.indexOf(4,4));  //5
console.log(numbers.lastIndexOf(4,4));  //3
console.log(numbers.includes(4,7));  //false

let person = { name: "Nicholas" };
let people = [{ name: "Nicholas" }];
let morePeople = [person];

console.log(people.indexOf(person));  //-1
console.log(morePeople.indexOf(person));  //0
console.log(people.includes(person));  //false
console.log(morePeople.includes(person));  //true

const people = [
	{
		name: "Matt",
		age: 27
	},
	{
		name: "Nicholas",
		age: 29
	}
];
console.log(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27}
console.log(people.findIndex((element, index, array) => element.age < 28));
// 0

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach((item,index,array)=>{
	if (item>4) {
		console.log(item);
	}
});  //5

numbers.forEach(function(item,index,array){
	if (item>this.value) {
		console.log(item);
	}
},{value:3});  //4,5,4

let numbers = [1, 2, 3, 4, 5];

let sum=numbers.reduce((prev,cur,index,array)=>prev+cur);
console.log(sum);  //15

let mul=numbers.reduce((prev,cur,index)=>prev*cur);
console.log(mul);  //120

let buf=new ArrayBuffer(16);  // 在内存中分配 16 字节
console.log(buf.byteLength);  //16

let buf=new ArrayBuffer(16);  // 在内存中分配 16 字节

//DataView 默认使用整个 ArrayBuffer
let fullDataView=new DataView(buf);
console.log(fullDataView.byteOffset);  //0
console.log(fullDataView.byteLength);  //16
console.log(fullDataView.buffer===buf);  //true

// 构造函数接收一个可选的字节偏移量和字节长度
// byteOffset=0 表示视图从缓冲起点开始
// byteLength=8 限制视图为前 8 个字节
const firstHalfDataView = new DataView(buf, 0, 8);
console.log(firstHalfDataView.byteOffset); // 0
console.log(firstHalfDataView.byteLength); // 8
console.log(firstHalfDataView.buffer === buf); // true

// 如果不指定，则 DataView 会使用剩余的缓冲
// byteOffset=8 表示视图从缓冲的第 9 个字节开始
// byteLength 未指定，默认为剩余缓冲
const secondHalfDataView = new DataView(buf, 8);
console.log(secondHalfDataView.byteOffset); // 8
console.log(secondHalfDataView.byteLength); // 8
console.log(secondHalfDataView.buffer === buf); // true

let buf=new ArrayBuffer(2);  // // 在内存中分配两个字节并声明一个 DataView
let view=new DataView(buf);

// 说明整个缓冲确实所有二进制位都是 0
// 检查第一个和第二个字符
console.log(view.getInt8(0));  //0
console.log(view.getInt8(1));  //0

// 检查整个缓冲
console.log(view.getInt16(0));  //0

// 将整个缓冲都设置为 1
// 255 的二进制表示是 11111111（2^8 - 1）
view.setUint8(0,255);
console.log(view.getInt8(0));  //-1

// DataView 会自动将数据转换为特定的 ElementType
// 255 的十六进制表示是 0xFF
view.setUint8(1,0xFF);
console.log(view.getInt8(1));  //-1

// 现在，缓冲里都是 1 了
// 如果把它当成二补数的有符号整数，则应该是-1
console.log(view.getInt16(0)); // -1


// 创建一个 12 字节的缓冲
let buf=new ArrayBuffer(12);

// 创建一个引用该缓冲的 Int32Array
let ints=new Int32Array(buf);
//这个定型数组知道自己的每个元素需要 4 字节
// 因此长度为 3
console.log(ints.length);  //3

// 创建一个长度为 6 的 Int32Array
let ints2=new Int32Array(6);
// 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
console.log(ints2.length);  //6
// 类似 DataView，定型数组也有一个指向关联缓冲的引用
console.log(ints2.buffer.byteLength);  //24

// 创建一个包含[2, 4, 6, 8]的 Int32Array
let ints3=new Int32Array([2,4,6,8]);
console.log(ints3.length);  //4
console.log(ints3.buffer.byteLength);  //16
console.log(ints3[2]);  //6

// 通过复制 ints3 的值创建一个 Int16Array
let ints4=new Int16Array(ints3);
// 这个新类型数组会分配自己的缓冲
// 对应索引的每个值会相应地转换为新格式
console.log(ints4.length);  //4
console.log(ints4.buffer.byteLength);  //8
console.log(ints4[2]);  //6

// 基于普通数组来创建一个 Int16Array
let ints5=Int16Array.from([3,5,7,9]);
console.log(ints5.length);  //4
console.log(ints5.buffer.byteLength);  //8
console.log(ints5[2]);  //7

// 基于传入的参数创建一个 Float32Array
let float1=Float32Array.of(3.14,2.718,1.618);
console.log(float1.length);  //3
console.log(float1.buffer.byteLength);  //12
console.log(float1[2]);  //1.6180000305175781

console.log(Int16Array.BYTES_PER_ELEMENT);  //2
console.log(Int32Array.BYTES_PER_ELEMENT);  //4

let ints6=new Int32Array(1);
let float2=new Float64Array(1);
console.log(ints6.BYTES_PER_ELEMENT);  //4
console.log(float2.BYTES_PER_ELEMENT);  //8

let ints7=new Int32Array(4);
console.log(ints7[0]);  //0
console.log(ints7[1]);  //0
console.log(ints7[2]);  //0
console.log(ints7[3]);  //0

const ints = new Int16Array([1, 2, 3]);
for (let int of ints){
	console.log(int);  //1,2,3
}

console.log(Math.max(...ints)); //3

// 创建长度为 8 的 int16 数组
const container = new Int16Array(8);

// 把定型数组复制为前 4 个值
// 偏移量默认为索引 0
container.set(Int8Array.of(1,2,3,4));
console.log(container); //Int16Array(8) [1, 2, 3, 4, 0, 0, 0, 0 ]

// 把普通数组复制为后 4 个值
// 偏移量 4 表示从索引 4 开始插入
container.set([5,6,7,8],4);
console.log(container); //Int16Array(8) [1, 2, 3, 4, 5, 6, 7, 8 ]

// 溢出会抛出错误
container.set([5,6,7,8], 7);
// RangeError: offset is out of bounds

let source=Int16Array.of(2,4,6,8);

// 把整个数组复制为一个同类型的新数组
let fullCopy=source.subarray();
console.log(fullCopy);  //Int16Array(4) [ 2, 4, 6, 8 ]

// 从索引 2 开始复制数组
let halfCopy=source.subarray(2);
console.log(halfCopy);  //Int16Array(2) [ 6, 8 ]

// 从索引 1 开始复制到索引 3
let partialCopy =source.subarray(1,3);
console.log(partialCopy);  //Int16Array(2) [ 4, 6 ]

// 第一个参数是应该返回的数组类型
// 其余参数是应该拼接在一起的定型数组
function typedArrayConcat(typedArrayConstructor,...typedArrays){
	// 计算所有数组中包含的元素总数
	let numElements=typedArrays.reduce((x,y)=>(x.length || x) +y.length);
	// 按照提供的类型创建一个数组，为所有元素留出空间
	let resultArray=new typedArrayConstructor(numElements);
	// 依次转移数组
	let currentOffset=0;
	typedArrays.map(x=>{
		resultArray.set(x,currentOffset);
		currentOffset+=x.length;
	});
	return resultArray;
}

let concatArray=typedArrayConcat(Int32Array,Int8Array.of(1,2,3),
	Int16Array.of(4,5,6),Float32Array.of(7,8,9));

console.log(concatArray);  //Int32Array(9) [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(concatArray instanceof Int32Array); //true

