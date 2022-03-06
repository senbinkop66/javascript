var duck = {
   duckSinging: function(){
      console.log( '嘎嘎嘎' );
   }
};
var chicken = {
   duckSinging: function(){
      console.log( '嘎嘎嘎' );
   }
};
var choir = []; // 合唱团
var joinChoir = function( animal ){
   if ( animal && typeof animal.duckSinging === 'function' ){
      choir.push( animal );
      console.log( '恭喜加入合唱团' );
      console.log( '合唱团已有成员数量:' + choir.length );
   }
};
joinChoir( duck ); // 恭喜加入合唱团
joinChoir( chicken ); // 恭喜加入合唱团


var makeSound=function(animal){
   if (animal instanceof Duck){
      console.log("嘎嘎嘎");
   }else if(animal instanceof Chicken){
      console.log("咯咯咯");
   }
};

var Duck = function(){};
var Chicken = function(){};

makeSound(new Duck());
makeSound(new Chicken());

var makeSound=function(animal){
   animal.sound();
};

var Duck = function(){};
Duck.prototype.sound=function(){
   console.log("嘎嘎嘎");
}

var Chicken = function(){};
Chicken.prototype.sound=function(){
   console.log("咯咯咯");
}

makeSound(new Duck());
makeSound(new Chicken());

var Dog = function(){};
Dog.prototype.sound=function(){
   console.log("汪汪汪");
}

makeSound(new Dog());

var googleMap={
   show:function(){
      console.log( '开始渲染谷歌地图' );
   }
};
var baiduMap={
   show:function(){
      console.log( '开始渲染百度地图' );
   }
};
var renderMap=function(map){
   if (map.show instanceof Function) {
      map.show();
   }
}

renderMap(googleMap);
renderMap(baiduMap);

var sosoMap={
   show:function(){
      console.log( '开始渲染搜搜地图' );
   }
};
renderMap(sosoMap);

var myObject=(function(){
   var __name="sven";  //私有（private）变量
   return {
      // 公开（public）方法
      getName:function(){
         return __name;
      }
   }
})();

console.log(myObject.getName());  //sven
console.log(myObject.__name);  //undefined

var Plane=function(){
   this.blood=100;
   this.attackLevel=1;
   this.defenseLevel=1;
};

var plane=new Plane();
plane.blood=500;
plane.attackLevel=10;
plane.defenseLevel=7;

//在不支持 Object.create 方法的浏览器中，则可以使用以下代码：
Object.create=Object.create || function(obj){
   var F=function(){};
   F.prototype=obj;
   return new F();
}

var clonePlane=Object.create(plane);


console.log(clonePlane.blood);  //500
console.log(clonePlane.attackLevel);  //10
console.log(clonePlane.defenseLevel);  //7

function Person( name ){
   this.name = name;
};
Person.prototype.getName = function(){
   return this.name;
};

var a = new Person( 'sven' )
console.log( a.name ); // 输出：sven
console.log( a.getName() ); // 输出：sven
console.log( Object.getPrototypeOf( a ) === Person.prototype ); // 输出：true

function Person( name ){
   this.name = name;
};
Person.prototype.getName = function(){
   return this.name;
};

var objectFactory=function(){
   var obj=new Object();  //从 Object.prototype 上克隆一个空的对象
   var Constructor=[].shift.call(arguments);  //取得外部传入的构造器，此例是 Person
   obj.__proto__=Constructor.prototype;  // 指向正确的原型
   var ret=Constructor.apply(obj,arguments);  //借用外部传入的构造器给 obj 设置属性
   return typeof ret==='object' ? ret : obj;  //确保构造器总是会返回一个对象
};

var a = objectFactory(Person, 'sven' )
console.log( a.name ); // 输出：sven
console.log( a.getName() ); // 输出：sven
console.log( Object.getPrototypeOf( a ) === Person.prototype ); // 输出：true

var a = new Object();
console.log ( a.__proto__=== Object.prototype ); // 输出：true

var obj={name:"mane"};

var A=function(){};
A.prototype=obj;

var a=new A();
console.log(a.name);  //mane
console.log(a.__proto__);  //{ name: 'mane' }

var A=function(){};
A.prototype={name:"Arnold"};

var B=function(){};
B.prototype=new A();

var b=new B();
console.log(b.name);  //Arnold

class Animal {
   constructor(name) {
      this.name = name;
   }
   getName() {
      return this.name;
   }
}
class Dog extends Animal {
   constructor(name) {
      super(name);
   }
   speak() {
      return "woof";
   }
}
var dog = new Dog("Scamp");
console.log(dog.getName() + ' says ' + dog.speak());

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows===1) {return s;}
    let n=s.length;
    //每一个周期需要2n-2个
    let cycles=2*numRows-2;
    let ans=[];
    //第一行
    for(let i=0;i<n;i+=cycles){
      ans.push(s[i]);
    }
    //中间部分
    for(let j=1;j<numRows-1;j++){
      for(let i=0;i<n;i+=cycles){
         if (i+j<n) {
            ans.push(s[i+j]);
         }
         if (i+cycles-j<n) {
            ans.push(s[i+cycles-j])
         }
         
      }
    }
    //最后一行
    for(let i=numRows-1;i<n;i+=cycles){
      ans.push(s[i]);
    }
    return ans.join("");
};

let str1 = "basanaadsfenafdrrgeana";
let result=convert(str1,3);
console.log(result);

var obj={
   a:1,
   getA:function(){
      console.log(this===obj);  //true
      console.log(this.a);  //1
   }
}
obj.getA();

    window.name="globalName";
    var obj={
       name:"Arnold",
       getName:function(){
          return this.name;
       }
    }
    var getName=obj.getName;
    console.log(getName());  //globalName
var MyClass=function(){
   this.name="Arnold";
};

var obj=new MyClass();
console.log(obj.name);  // Arnold

var MyClass=function(){
   this.name="Arnold";
   return {
      name:"Alice"
   }
};

var obj=new MyClass();
console.log(obj.name);  // Alice

var MyClass=function(){
   this.name="Arnold";
   return "Alice";  //返回 string 类型
};

var obj=new MyClass();
console.log(obj.name);  // Arnold

var obj1={
   name:"Arnold",
   getName:function(){
      return this.name;
   }
}

var obj2={
   name:"Alice",
}

console.log(obj1.getName());  // Arnold
console.log(obj1.getName.call(obj2));  // Alice
console.log(obj1.getName.apply(obj2));  // Alice

var obj={
   name:"Arnold",
   getName:function(){
      return this.name;
   }
}

console.log(obj.getName());  // Arnold

var getName2=obj.getName;
console.log(getName2());  // undefined

Function.prototype.bind=function(){
    var self=this;  //保存原函数
    var context=[].shift.call(arguments);  //需要绑定的 this 上下文
    var args=[].slice.call(arguments);  //剩余的参数转成数组
    return function(){  // 返回一个新的函数
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)));  // 执行新的函数的时候，会把之前传入的 context当作新函数体内的 this
        //并且组合两次分别传入的参数，作为新函数的参数
    }
};

var obj={
    name:"Arnold"
};

var func=function(a,b,c,d){
    console.log(this.name);  //Arnold
    console.log([a,b,c,d]);  //[ 1, 2, 3, 4 ]
}.bind(obj,1,2);

func(3,4);

var A=function(name){
   this.name=name;
};
var B=function(){
   A.apply(this,arguments);
}

B.prototype.getName=function(){
   return this.name;
}

var b=new B("Alison");
console.log(b.getName());  //Alison

(function(){
   Array.prototype.push.call(arguments,4);
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);

var a={};

Array.prototype.push.call(a,"first");

console.log(a.length);  //1
console.log(a[0]);  //first
console.log(a);  //{ '0': 'first', length: 1 }

var a=1;

Array.prototype.push.call(a,"first");

console.log(a.length);  //undefined
console.log(a[0]);  //undefined
console.log(a);  //1

var func=function(){
   var a=1;
   console.log(a);
}
func();  //1
console.log(a);  //ReferenceError: a is not defined
var a=1;
var func1=function(){
   var b=2;
   var func2=function(){
      var c=2;
      console.log(a);  // 1
      console.log(b);  //2
   }
   func2();
   console.log(c);  //ReferenceError: c is not defined
}
func1();  //1
var func=function(){
   var a=1;
   return function(){
      a++;
      console.log(a);
   }
};

var f=func();

f();  //  2
f();  //  3
f();  //  4
f();  //  5

    var Type={};
    for(var i=0,type;type=['String', 'Array', 'Number'][i++];){
        (function(type){
            Type['is'+type]=function(obj){
                return Object.prototype.toString.call(obj)==='[object '+type+']';
            }
        })(type);
    }
    console.log(Type.isArray([]));  //true
    console.log(Type.isString("str"));  //true

var mult=function(){
   var a=1;
   for(var i=0;i<arguments.length;i++){
      a=a*arguments[i];
   }
   return a;
};

console.log(mult(1,2,3,4));  //24

var cache={};

var mult=function(){
   var args=Array.prototype.join.call(arguments,",");
   if (cache[args]) {
      return cache[args];
   }
   var a=1;
   for(var i=0;i<arguments.length;i++){
      a=a*arguments[i];
   }
   return cache[args]=a;
};

console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4));  //24
console.log(cache);  //{ '1,2,3,4': 24 }
console.log(mult(1,2,3,4,5));  //120
console.log(cache);  //{ '1,2,3,4': 24, '1,2,3,4,5': 120 }

var mult=(function(){
   var cache={};
   var calculate=function(){
      //封闭 calculate 函数
      var a=1;
      for(var i=0;i<arguments.length;i++){
         a=a*arguments[i];
      }
      return a;
   };
   return function(){
      var args=Array.prototype.join.call(arguments,",");
      if (args in cache) {
         return cache[args];
      }
      return cache[args]=calculate.apply(null,arguments);
   }
})();

console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4,5));  //120

var extent=function(){
   var value=0;
   return {
      call:function(){
         value++;
         console.log(value);
      }
   }
};

var extent=extent();
extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
var extent={
   value:0,
   call:function(){
      this.value++;
      console.log(this.value);
   }
};

extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
var Extent=function(){
   this.value=0;
};
Extent.prototype.call=function(){
   this.value++;
   console.log(this.value);
};

var extent=new Extent();
extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
var Tv={
    open:function(){
        console.log("打开电视机");
    },
    close:function(){
        console.log("关闭电视机");
    }
};
var OpenTvCommand=function(receiver){
    this.receiver=receiver;
};

OpenTvCommand.prototype.execute=function(){
    this.receiver.open();  //执行命令，打开电视机
};
OpenTvCommand.prototype.undo=function(){
    this.receiver.close();  //撤销命令，关闭电视机
};

var setCommand=function(command){
    document.getElementById("execute").onclick=function(){
        command.execute();  //输出：打开电视机
    }
    document.getElementById("undo").onclick=function(){
        command.undo();  //输出：关闭电视机
    }
};

setCommand(new OpenTvCommand(Tv));
var createCommand=function(receiver){
    var execute=function(){
        return receiver.open();  //执行命令，打开电视机
    };
    var undo=function(){
        return receiver.close();  //执行命令，关闭电视机
    };
    return {
        execute:execute,
        undo:undo
    }
};

var setCommand=function(command){
    document.getElementById("execute").onclick=function(){
        command.execute();  //输出：打开电视机
    }
    document.getElementById("undo").onclick=function(){
        command.undo();  //输出：关闭电视机
    }
};

setCommand(createCommand(Tv));

var getUserInfo = function( userId, callback ){
   $.ajax( 'http://xxx.com/getUserInfo?' + userId, function( data ){
      if ( typeof callback === 'function' ){
         callback( data );
      }
   });
}
getUserInfo( 13157, function( data ){
   alert ( data.userName );
});

var appendDiv=function(){
   for(var i=0;i<100;i++){
      var div=document.createElement("div");
      div.innerHTML=i;
      document.body.appendChild(div);
      div.style.display="none";
   }
}
appendDiv();

var appendDiv=function(callback){
   for(var i=0;i<100;i++){
      var div=document.createElement("div");
      div.innerHTML=i;
      document.body.appendChild(div);
      if (typeof callback==="function") {
         callback(div);
      }
   }
}
appendDiv(function(node){
   node.style.display="none";
});

//从小到大排列
let result=[1,4,3,2].sort(function(a,b){
   return a-b;
});
console.log(result);

//从大到小排列
result=[1,4,3,2].sort(function(a,b){
   return b-a;
});
console.log(result);

var isString=function(obj){
   return Object.prototype.toString.call(obj)==="[object String]";
};
var isArray=function(obj){
   return Object.prototype.toString.call(obj)==="[object Array]";
};
var isNumber=function(obj){
   return Object.prototype.toString.call(obj)==="[object Number]";
};

var isType=function(type){
   return function(obj){
      return Object.prototype.toString.call(obj)==='[object '+ type +']';
   }
};
var isString=isType("String");
var isArray=isType("Array");
var isNumber=isType("Number");

console.log(isArray([12,3,4]));

var Type={};
for(var i=0,type;type=[ 'String', 'Array', 'Number' ][ i++ ];){
   (function(type){
      Type['is'+type]=function(obj){
         return Object.prototype.toString.call(obj)==='[object '+ type +']';
      }
   })(type);
};

console.log(Type.isArray([12,3,4]));
console.log(Type.isNumber([12,3,4]));

var getSingle=function(fn){
   var ret;
   return function(){
      return ret || (ret=fn.apply(this,arguments));
   };
};

var getScript=getSingle(function(){
   return document.createElement("script");
});

var script1=getScript();
var script2=getScript();
console.log(script1===script2);

Function.prototype.before=function(beforefn){
   var __self=this;  // 保存原函数的引用
   return function(){  // 返回包含了原函数和新函数的"代理"函数
      beforefn.apply(this,arguments);  // 执行新函数，修正 this
      return __self.apply(this,arguments);  // 执行原函数
   }
};

Function.prototype.after=function(afterfn){
   var __self=this;  // 保存原函数的引用
   return function(){  //
      var ret=__self.apply(this,arguments);
      afterfn.apply(this,arguments);  // 
      return ret;
   }
};

var func=function(){
   console.log(2);
}

func=func.before(function(){
   console.log(1);
}).after(function(){
   console.log(3);
});

func();
var monthlyCost=0;
var cost=(function(){
   var args=[];
   return function(){
      if (arguments.length===0) {
         var money=0;
         for(var i=0;i<args.length;i++){
            money+=args[i];
         }
         return money;
      }else{
         [].push.apply(args,arguments);
      }
   }
})();

cost( 100 ); // 未真正求值
cost( 200 ); // 未真正求值
cost( 300 ); // 未真正求值

console.log(cost());  //600

var currying=function(fn){
   var args=[];
   return function(){
      if (arguments.length===0) {
         return fn.apply(this,args);
      }else{
         [].push.apply(args,arguments);
         return arguments.callee;
      }
   }
};
var cost=(function(){
   var money=0;
   return function(){
      for(var i=0;i<arguments.length;i++){
         money+=arguments[i];
      }
      return money;
   }
})();

var cost=currying(cost);  //转化成 currying 函数
cost( 100 ); // 未真正求值
cost( 200 ); // 未真正求值
cost( 300 ); // 未真正求值

console.log(cost());  //600


var obj1={
   name:"Arnold"
};
var obj2={
   getName:function(){
      return this.name;
   }
};

console.log(obj2.getName.call(obj1));  //Arnold

(function(){
   Array.prototype.push.call(arguments,4);  //arguments 借用 Array.prototype.push 方法
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);
Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};
var push=Array.prototype.push.uncurrying();
(function(){
   push(arguments,4);
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);

Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};

for ( var i = 0, fn, ary = [ 'push', 'shift', 'forEach' ]; fn = ary[ i++ ]; ){
   Array[fn]=Array.prototype[fn].uncurrying();
}

var obj={
   "length":3,
   "0":1,
   "1":2,
   "2":3
};

Array.push( obj, 4 ); // 向对象中添加一个元素
console.log( obj.length ); // 输出：4
var first = Array.shift( obj ); // 截取第一个元素
console.log( first ); // 输出：1
console.log( obj ); // 输出：{0: 2, 1: 3, 2: 4, length: 3}
Array.forEach( obj, function( i, n ){
   console.log( n ); // 分别输出：0, 1, 2
});

Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};

var call=Function.prototype.call.uncurrying();
var fn=function(name){
   console.log(name);
};
call(fn,window,"Arnold");  //Arnold

var apply = Function.prototype.apply.uncurrying();
var fn2 = function( name ){
    console.log( this.name ); // 输出："sven"
    console.log( arguments ); // 输出: [1, 2, 3]
};
apply( fn2, { name: 'sven' }, [ 1, 2, 3 ] );

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
   if (num2.length>num1.length) {
      [num1,num2]=[num2,num1];
   }
   let m=num1.length-1;
   let n=num2.length-1;
   num1=num1.split("");
   let e=0;
   while(n>=0){
      let plus=e+Number(num1[m])+Number(num2[n]);
      num1[m]=plus>9 ? plus-10 : plus;
      e=plus>9 ? 1 : 0;
      m--;
      n--;
   }
   while(m>=0 && e>0){
      let plus=e+Number(num1[m]);
      num1[m]=plus>9 ? plus-10 : plus;
      e=plus>9 ? 1 : 0;
      m--;
   }
   if (e>0) {
      num1.unshift(1);
   }
   return num1.join("");

};

let num1 = "456", num2 = "77000";
let result=addStrings(num1,num2);
console.log(result);
var throttle=function(fn,interval){
   var __self=fn,  // 保存需要被延迟执行的函数引用
      timer,  // 定时器
      firstTime=true;  //是否是第一次调用
   return function(){
      var args=arguments,__me=this;
      if (firstTime) {  // 如果是第一次调用，不需延迟执行
         __self.apply(__me,args);
         return firstTime=false;
      }
      if (timer) {  // 如果定时器还在，说明前一次延迟执行还没有完成
         return false;
      }
      timer=setTimeout(function(){  // 延迟一段时间执行
         clearTimeout(timer);
         timer=null;
         __self.apply(__me,args);
      },interval || 500)
   };
};

window.onresize=throttle(function(){
   console.log(1);
},500);

var arr=[];

for(var i=0;i<1000;i++){
    arr.push(i);
}

var renderFriendList=function(data){
    for ( var i = 0;i<data.length; i++ ){
        var div = document.createElement( 'div' );
        div.innerHTML = i;
        document.body.appendChild( div );
    }
};

renderFriendList(arr);

var timeChunk=function(arr,fn,count){
    var obj,t;
    var len=arr.length;
    var start=function(){
        for(var i=0;i<Math.min(count || 1,arr.length);i++){
            var obj=arr.shift();
            fn(obj);
        }
    };
    return function(){
        t=setInterval(function(){
            if (arr.length===0) {  // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        },200);  // 分批执行的时间间隔，也可以用参数的形式传入
    };
};


var arr=[];

for(var i=0;i<1000;i++){
    arr.push(i);
}

var renderFriendList=timeChunk(arr,function(n){
    var div = document.createElement( 'div' );
    div.innerHTML = n;
    document.body.appendChild( div );
},8);

renderFriendList();

var addEvent = function( elem, type, handler ){
   if ( window.addEventListener ){
      return elem.addEventListener( type, handler, false );
   }
   if ( window.attachEvent ){
      return elem.attachEvent( 'on' + type, handler );
   }
};

var addEvent=function(elem,type,handler){
    if (window.addEventListener) {
        addEvent=function(elem,type,handler){
            elem.addEventListener(type,handler,false);
        }
    }else if (window.attachEvent) {
        addEvent=function(elem,type,handler){
            elem.attachEvent('on'+type,handler);
        }
    }
    addEvent(elem,type,handler);
};

var div = document.getElementById( 'div1' );
addEvent( div, 'click', function(){
    console.log(1);
});

addEvent( div, 'click', function(){
    console.log(2);
});

var Singleton=function(name){
   this.name=name;
}

Singleton.instance=null;

Singleton.prototype.getName=function(){
   console.log(this.name);
}
Singleton.getInstance=function(name){
   if (!this.instance) {
      this.instance=new Singleton(name);
   }
   return this.instance;
}

var a=Singleton.getInstance("Alison");
var b=Singleton.getInstance("Arnold");

console.log(a===b);  //true

var Singleton=function(name){
   this.name=name;
}

Singleton.prototype.getName=function(){
   console.log(this.name);
}
Singleton.getInstance=(function(){
   var instance=null;
   return function(name){
      if (!instance) {
         instance=new Singleton(name);
      }
      return instance;
   }
   
})();

var CreateDiv=(function(){
    var instance;
    var CreateDiv=function(html){
        if (instance) {
            return instance;
        }
        this.html=html;
        this.init();
        return instance=this;
    };
    CreateDiv.prototype.init=function(){
        var div=document.createElement("div");
        div.innerHTML=this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();

var a=new CreateDiv("div1");
var b=new CreateDiv("div2");
console.log(a===b);  //true

var CreateDiv=function(html){
    this.html=html;
    this.init();
};
CreateDiv.prototype.init=function(){
    var div=document.createElement("div");
    div.innerHTML=this.html;
    document.body.appendChild(div);
};

var ProxySingltonCreateDiv=(function(){
    var instance;
    return function(html){
        if (!instance) {
            instance=new CreateDiv(html);
        }
        return instance;
    }
})();

var a=new ProxySingltonCreateDiv("div1");
var b=new ProxySingltonCreateDiv("div2");
console.log(a===b);  //true

var namespace1={
   a:function(){
      console.log(1);
   },
   b:function(){
      console.log(2);
   }
};

var MyApp={};
MyApp.namespace=function(name){
   var parts=name.split(".");
   var current=MyApp;
   for(var p in parts){
      if (!current[parts[p]]) {
         current[parts[p]]={};
      }
      current=current[parts[p]];
   }
};

MyApp.namespace("event");
MyApp.namespace("dom.style");

console.dir(MyApp); 
//{ namespace: [Function (anonymous)], event: {}, dom: { style: {} } }

var createLoginLayer=(function(){
    var div;
    return function(){
        if (!div) {
            div=document.createElement("div");
            div.innerHTML='我是登录浮窗';
            div.style.display="none";
            document.body.appendChild(div);
        }
        return div;
    }
})();

document.getElementById("loginBtn").onclick=function(){
    var loginLayer=createLoginLayer();
    loginLayer.style.display="block";
}

var getSingle=function(fn){
    var result;
    return function(){
        return result || (result=fn.apply(this,arguments));
    }
};

var createLoginLayer=function(){
    var div=document.createElement("div");
    div.innerHTML='我是登录浮窗';
    div.style.display="none";
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer=getSingle(createLoginLayer);

document.getElementById("loginBtn").onclick=function(){
    var loginLayer=createSingleLoginLayer();
    loginLayer.style.display="block";
}

var createSingleIframe=getSingle(function(){
    var iframe=document.createElement("iframe");
    document.body.appendChild(iframe);
    return iframe;
});
document.getElementById("iframeBtn").onclick=function(){
    var iframe=createSingleIframe();
    iframe.src="https://translate.google.cn/";
}

var getSingle=function(fn){
    var result;
    return function(){
        return result || (result=fn.apply(this,arguments));
    }
};


var bindEvent=getSingle(function(){
    document.getElementById("div1").addEventListener("click",function(){
        console.log("Clicked");
    });
    return true;
});

var render=function(){
    console.log("开始渲染列表");
    bindEvent();
};

render();
render();
render();

var calculateBonus = function( performanceLevel, salary ){
   if ( performanceLevel === 'S' ){
      return salary * 4;
   }
   if ( performanceLevel === 'A' ){
      return salary * 3;
   }
   if ( performanceLevel === 'B' ){
      return salary * 2;
   }
};
calculateBonus( 'B', 20000 ); // 输出：40000
calculateBonus( 'S', 6000 ); // 输出：24000

var performanceS=function(){};
performanceS.prototype.calculate = function( salary ){
   return salary * 4;
};

var performanceA=function(){};
performanceA.prototype.calculate = function( salary ){
   return salary * 3;
};

var performanceB=function(){};
performanceB.prototype.calculate = function( salary ){
   return salary * 2;
};

//接下来定义奖金类 Bonus：
var Bonus=function(){
   this.salary=null;  // 原始工资
   this.strategy=null;  //绩效等级对应的策略对象
}
Bonus.prototype.setSalary=function(salary){
   this.salary=salary;  // 设置员工的原始工资
}
Bonus.prototype.setStrategy = function( strategy ){
   this.strategy = strategy;  // 设置员工绩效等级对应的策略对象
};

Bonus.prototype.getBonus=function(){  // 取得奖金数额
   if (!this.strategy) {
      throw new Error("未设置strategy属性");
   }
   return this.strategy.calculate(this.salary);  // 把计算奖金的操作委托给对应的策略对象
}

var bonus=new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());  // 设置策略对象
console.log( bonus.getBonus() ); // 输出：40000

bonus.setStrategy( new performanceA() ); // 设置策略对象
console.log( bonus.getBonus() ); // 输出：30000




import axios from 'axios';

// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345').then(function(response){
   console.log(response);
}).catch(function(error){
   console.log(error);
});

// 上面的请求也可以这样做
axios.get('/user',{
   params:{
      ID:12345
   }
}).then(function(response){
   console.log(response);
}).catch(function(error){
   console.log(error);
});

function getUserAccount(){
   return axios.get("user/12345");
}
function getUserPermission(){
   return axios.get("user/12345/permissions")
}
axios.all([getUserAccount(),getUserPermission()])
   .then(axios.spread(function(acct,prems){
      // 两个请求现在都执行完成//
   }));

// 发送 POST 请求
axios({
   method:'post',
   url:'/url/12345',
   data:{
      firstName:"sadio",
      lastName:"mane"
   }
})


import axios from 'axios';
import fs from 'fs';


// 获取远端图片
axios({
   method:'get',
   url:'http://guolab.whu.edu.cn/geptop/image/fasta_protein.png',
   responseType:'stream'
}).then((response)=>{
   response.data.pipe(fs.createWriteStream("./test1.jpg"));
   console.log("success");
});


var tween={
   linear:function(t,b,c,d){
      return c*t/d+b;
   },
   easeIn:function(t,b,c,d){
      return c*(t/=d)*t+b;
   },
   strongEaseIn: function(t, b, c, d){
      return c * ( t /= d ) * t * t * t * t + b;
   },
   strongEaseOut: function(t, b, c, d){
      return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
   },
   sineaseIn: function( t, b, c, d ){
      return c * ( t /= d) * t * t + b;
   },
   sineaseOut: function(t,b,c,d){
      return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
   }
};

var Animate=function(dom){
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};

Animate.prototype.start=function(propertyName,endPos,duration,easing){
  this.startTime=+new Date;  //动画启动时间
  this.startPos=this.dom.getBoundingClientRect()[propertyName];  //dom 节点初始位置
  this.propertyName=propertyName;  //dom 节点需要被改变的 CSS 属性名
  this.endPos=endPos;  //dom 节点目标位置
  this.duration=duration;  //动画持续事件
  this.easing=tween[easing];  //缓动算法

  var self=this;
  var timeId=setInterval(function(){  //启动定时器，开始执行动画
    if (self.step()===false) {
      clearInterval(timeId);  //如果动画已结束，则清除定时器
    }
  },200);
};

Animate.prototype.step=function(){
  var t=+new Date;  //取得当前时间
  if (t>=this.startTime+this.duration) {  //(1)
    this.update(this.endPos);  //更新小球的 CSS 属性值
    return false;
  }
  var pos=this.easing(t-this.startTime,this.startPos,this.endPos-this.startPos,this.duration);  //pos 为小球当前位置
  this.update(pos);  //更新小球的 CSS 属性值
};

Animate.prototype.update=function(pos){
  this.dom.style[this.propertyName]=pos+"px";
};

var div = document.getElementById( 'div' );
var animate = new Animate( div );
//animate.start( 'left', 500, 1500, 'strongEaseOut' );
animate.start( 'top', 200, 1500, 'sineaseIn' );

var strategies={
  isNonEmpty:function(value,errorMessage){
    if (value==="") {
      return errorMessage;
    }
  },
  minLength:function(value,length,errorMessage){
    if (value.length<length) {
      return errorMessage;
    }
  },
  isMobile:function(value,errorMessage){
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMessage;
    }
  },
};

var Validator=function(){
  this.cache=[];  //保存校验规则
};

Validator.prototype.add = function( dom, rule, errorMsg ){
  var ary = rule.split( ':' ); // 把 strategy 和参数分开
  this.cache.push(function(){ // 把校验的步骤用空函数包装起来，并且放入 cache
    var strategy = ary.shift(); // 用户挑选的 strategy
    ary.unshift( dom.value ); // 把 input 的 value 添加进参数列表
    ary.push( errorMsg ); // 把 errorMsg 添加进参数列表
    return strategies[ strategy ].apply( dom, ary );
  });
};
Validator.prototype.start = function(){
  for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
    var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
    if ( msg ){ // 如果有确切的返回值，说明校验没有通过
      return msg;
    }
  }
};

var validateFunc=function(){
  var validator=new Validator();  //创建一个 validator 对象
  //添加一些校验规则
  validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' );
  validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' );
  validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确' );
  var errorMsg = validator.start(); // 获得校验结果
  return errorMsg; // 返回校验结果
}

var registerForm = document.getElementById( 'registerForm' );
registerForm.onsubmit = function(){
    var errorMsg = validateFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
      alert ( errorMsg );
      return false; // 阻止表单提交
    }
};

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
   let m=a.length;
   let n=b.length;
   if (m!==n) {
      return Math.max(m,n);
   }
   while(m>0){
      m--;
      if (a[m]!==b[m]) {
         return Math.max(m+1,n-m-1);
      }
   }
   return -1;
};

let a = "aba", b = "cdc";
let result=findLUSlength(a,b);
console.log(result);

var myImage=(function(){
  var imaNode=document.createElement("img");
  document.body.appendChild(imaNode);
  return {
    setSrc:function(src){
      imaNode.src=src;
    }
  }
})();

myImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png")


