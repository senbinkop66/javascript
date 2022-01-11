var btn = document.getElementById("myBtn");
var handler=function(){
    console.log("Clicked");
}
btn.attachEvent("onclick",handler);
//
btn.detachEvent("onclick",handler);

var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{

            element["on"+type]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{

            element["on"+type]=null;
        }
    }
};

var btn = document.getElementById("myBtn");
var handler=function(){
    console.log("Clicked");
}
EventUtil.addHandler(btn,"click",handler);
//其他代码
EventUtil.removeHandler(btn,"onclick",handler);

var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    console.log(event.currentTarget===this); // true
    console.log(event.target===this);  //true;
};

var btn = document.getElementById("myBtn");

let handler=function(event){
    switch(event.type){
        case "click":
            console.log("Clicked");
            break;
        case "mouseover":
            event.target.style.backgroundColor="red";
            break;
        case "mouseout":
            event.target.style.backgroundColor="";
            break;
    }
};

btn.onclick=handler;
btn.onmouseover=handler;
btn.onmouseout=handler;

var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    console.log("Clicked");
    event.stopPropagation();
};
document.body.onclick = function(event) {
    console.log("Body clicked");
};

var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{

            element["on"+type]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{

            element["on"+type]=null;
        }
    },
    getEvent:function(event){
        return event ? event : window.event;
    },
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    preventDefault:function(event){
        if (event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    stopPropagation:function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    getRelatedTarget:function(event){
        if (event.relatedTarget) {
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    }
};

var btn = document.getElementById("myBtn");
btn.onclick = function(event) {

    console.log("Clicked");

    event = EventUtil.getEvent(event);

    let target = EventUtil.getTarget(event);
    console.log(target);

    EventUtil.stopPropagation(event);
};

document.body.onclick = function(event) {
    console.log("Body clicked");
};

let link = document.getElementById("myLink");
link.onclick = function(event) {
    console.log("preventDefault");
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};

function ListNode(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head===null) {
        //如果为空
        return head;
    }
    let pre=head;
    let temp=head.val;
    while (head.next){
        if (head.next.val===temp) {
            //如果与前一个结点相同
            head.next=head.next.next;
            //head=head.next;
        }else{
            head=head.next;
            temp=head.val;
        }
    }
    return pre;
};

let str1 = [1,1,2,3,3];
let list1=new ListNode();
let head1=list1;
for (let i=0;i<str1.length;i++){
    list1.val=str1[i];
    list1.next=new ListNode();
    list1=list1.next;
}
//console.log(head1);

window.addEventListener("load",(event)=>{
    console.log("loaded!");
});
let result=deleteDuplicates(head1)
console.log(result);



let image = document.getElementById("myImage");
image.addEventListener("load", (event) => {
    console.log(event.target.src);  //file:///E:/pogject/js/bg2.jpg
});

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len=m+n-1;
    while(m>=1 && n>=1){
        if (nums1[m-1]>=nums2[n-1]) {
            //如果访问到num1元素大于等于比nums2的
            nums1[len--]=nums1[--m];
        }else{
            //如果访问到num1元素小于比nums2的
            nums1[len--]=nums2[--n];
        }
    }
    while(m>=1){
        //n=0时候
        nums1[len--]=nums1[--m];
    }
    while(n>=1){
        //m=0时
        nums1[len--]=nums2[--n];
    }
};

let test =[1,2,3,0,0,0];
let test2=[2,5,6];
//let result=merge(test);
//console.log(result);
merge(test,3,test2,3);
console.log(test);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val,left,right){
    this.val=(val===undefined ? 0 : val);
    this.left=(left===undefined ? null : left);
    this.right=(right===undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result=[];
    let predecessor=null;

    while(root){
        if (root.left) {
            //predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
            predecessor=root.left;
            while(predecessor.right && predecessor.right!==root){
                predecessor=predecessor.right;
            }
            // 让 predecessor 的右指针指向 root，继续遍历左子树
            if (!predecessor.right) {
                predecessor.right=root;
                root=root.left;
            }else{
                //说明左子树已经访问完了，我们需要断开链接
                result.push(root.val);
                predecessor.right=null;
                root=root.right;
            }
        }else{
            //如果没有左孩子，则直接访问右孩子
            result.push(root.val);
            root=root.right;
        }

    }
    return result;
};

let test =[1,null,2,3];

let root=new TreeNode(test[0]);
let result=inorderTraversal(test);
console.log(result);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p===null && q===null) {
        return true;
    }
    if(p===null || q===null) {
        return false;
    }
    let arr1=[p];
    let arr2=[q];

    while(arr1.length>0 && arr2.length>0){
        let node1=arr1.shift();
        let node2=arr2.shift();
        if (node1.val!==node2.val) {
            return false;
        }
        let left1=node1.left,right1=node1.right;
        let left2=node2.left,right2=node2.right;

        if ((!left1)^(!left2) || (!right1)^(!right2)) {
            return false;
        }
        if (left1) {
            arr1.push(left1);
        }
        if (right1) {
            arr1.push(right1);
        }
        if (left2) {
            arr2.push(left2);
        }
        if (right2) {
            arr2.push(right2);
        }
    }
    if (arr1.length===0 && arr2.length===0) {
        return true;
    }else{
        return false;
    }

};

let test =[1,null,2,3];

let root=new TreeNode(test[0]);
let result=inorderTraversal(test);
console.log(result);

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path=path.split("/")
    let result=[];
    path.forEach((item)=>{
        if (item!=="" && item!==".") {
            //对于「空字符串」以及「一个点」，我们实际上无需对它们进行处理
            if (item==="..") {
                //当我们遇到「两个点」时，需要将目录切换到上一级，因此只要栈不为空，我们就弹出栈顶的目录
                result.pop();
            }else{
                //当我们遇到「目录名」时，就把它放入栈。
                result.push(item);
            }
        }
    });
    //console.log(path);
    return "/"+result.join("/");
};

//let test = "/a/./b/../../c/";
let test = "/../";
let result=simplifyPath(test);
console.log(result);




    let div=document.getElementById("myDiv");
    div.addEventListener("click",(event)=>{
        let pageX=event.pageX,pageY=event.pageY;
        if (pageX===undefined) {
            pageX=event.clientX+(document.body.scrollLeft || document.documentElement.scrollLeft);
        }
        if (pageY===undefined) {
            pageY=event.clientY+(document.body.scrollTop || document.documentElement.scrollTop);
        }
        console.log(`Client coordinates: ${event.clientX}, ${event.clientY}`);
        console.log(`Page coordinates: ${pageX}, ${pageY}`);
    });

    let div=document.getElementById("myDiv");
    div.addEventListener("click",(event)=>{
        let keys=new Array();
        if (event.shiftKey) {
            keys.push("shift");
        }
        if (event.ctrlKey) {
            keys.push("ctrl");
        }
        if (event.altKey) {
            keys.push("alt");
        }
        if (event.metaKey) {
            keys.push("meta");
        }
        console.log("keys: "+keys.join(","));
        //console.log(event);
        let {ctrlKey,altKey,shiftKey,metaKey}=event;
        console.log("ctrlKey:"+ctrlKey+",altKey:"+altKey+",shiftKey:"+shiftKey+",metaKey:"+metaKey);
    });


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val,left,right){
    this.val=(val===undefined ? 0 : val);
    this.left=(left===undefined ? null : left);
    this.right=(right===undefined ? null : right);
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return helper(nums,0,nums.length-1);
};
function helper(nums,left,right){
    if (left>right) {
        return null;
    }
    // 总是选择中间位置右边的数字作为根节点
    let mid=(left+right+Math.round(Math.random()))>>1;
    let root=new TreeNode(nums[mid]);
    root.left=helper(nums,left,mid-1);
    root.right=helper(nums,mid+1,right);
    return root;
}

let test =[-10,-3,0,5,9,11];
let result=sortedArrayToBST(test);
console.log(result);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root===null) {
        return true;
    }
    let leftDeep=maxDepth(root.left);
    let rightDeep=maxDepth(root.right);
    if (Math.abs(leftDeep-rightDeep)>1) {
        //左右子树高度差的绝对值不超过 1
        return false;
    }
    
    let leftIsBalance=isBalanced(root.left);
    let rightIsBalance=isBalanced(root.right);
    
    if (leftIsBalance && rightIsBalance) {
        //左右子树也必需是平衡二叉树
        return true;
    }else{
        return false;
    }
};

var maxDepth = function(root) {
    if (root===null) { return 0; }
    if (root.left===null && root.right===null) {
        return 1;
    }else{
        return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
    }
};

var isBalanced = function(root) {
    return getHeight(root)>=0;
};

function getHeight(root){
    if (root===null) {
        return 0;
    }
    let leftHeight=getHeight(root.left);
    let rightHeight=getHeight(root.right);
    if (leftHeight===-1  || rightHeight===-1 || Math.abs(leftHeight-rightHeight)>1) {
        //只要遇到不平衡时就返回-1，整棵树也是不平衡的
        return -1;
    }else{
        //平衡时
        return Math.max(leftHeight,rightHeight)+1;
    }
}


function isLeaf(node){
    if (node.left===null && node.right===null) {
        return true;
    }else{
        return false;
    }
}

var minDepth = function(root) {
    if (root===null){
        //如果结点为空
        return 0;
    }else if (root.left===null && root.right===null){
        //如果没有子树，则深度为1
        return 1;
    }else if (root.left===null && root.right!==null) {
        //如果只存在右子树
        return 1+minDepth(root.right);
    }else if (root.left!==null && root.right===null) {
        //如果只存在左子树
        return 1+minDepth(root.left);
    }else{
        //左右子树都存在
        return 1+Math.min(minDepth(root.left),minDepth(root.right));
    }
};

var minDepth = function(root) {
    if (root===null) {
        return 0;
    }
    let count=0;
    let arr=[root];

    while(true){
        let len=arr.length;
        count++;
        while(len>0){
            let node=arr.shift();
            if (node.left===null && node.right===null) {
                //当在一层遇到叶子结点，则退出循环,返回深度
                return count;
            }
            if (node.left!==null) {
                arr.push(node.left);
            }
            if (node.right!==null) {
                arr.push(node.right);
            }
            len--;
        }
    }
};

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDeep=0;
    let count=0;
    for (let i=s.length-1;i>=0;i--){
        if (s[i]===")") {
            count++;
            maxDeep=count>maxDeep ? count : maxDeep;
        }
        if (s[i]==="(") {
            count--;
        }
    }
    return maxDeep;
};

let test = "(1)+((2))+(((((4)((()))))((3))))";
let result=maxDepth(test)
console.log(result);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root===null) {
        return false;
    }
    let result=[root];
    while(result.length>0){
        let len=result.length;
        while(len>0){
            let node=result.shift();
            if (node.left!==null) {
                node.left.val+=node.val;
                result.push(node.left);
            }
            if (node.right!==null) {
                node.right.val+=node.val;
                result.push(node.right);
            }
            if (node.left===null && node.right===null) {
                if (node.val===targetSum) {
                    return true;
                }
            }
            len--;
        }
    }
    return false;
};


    class CookieUtil{
        static get(name){
            //查找名字匹配的
            let cookieName=`${encodeURIComponent(name)}=`;
            //计算开始起点
            let cookieStart=document.cookie.indexOf(cookieName);
            let cookieValue=null;

            if (cookieStart>-1) {
                //计算当前name的cookie值
                let cookieEnd=document.cookie.indexOf(";",cookieStart);
                if (cookieEnd===-1) {
                    //如果这是最好一个值
                    cookieEnd=document.cookie.length;
                }
                cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
            }
            return cookieValue;
        }
        static set(name,value,expires,path,domain,secure){
            let cookieText=`${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
            if (expires instanceof Date) {
                cookieText+=`; expires=${expires.toGMTString()}`;
            }
            if (path) {
                cookieText+=`; path=${path}`;
            }
            if (domain) {
                cookieText+=`; domain=${domain}`;
            }
            if (secure) {
                cookieText+=`; secure`;
            }
            document.cookie=cookieText;
        }

        static unset(name,path,domain,secure){
            CookieUtil.set(name,"",new Date(0),path,domain,secure);
        }
    }

    // 设置 cookie
    CookieUtil.set("name","Alice");
    CookieUtil.set("book","python");
    //读取 cookie
    console.log(CookieUtil.get("name"));
    console.log(CookieUtil.get("book"));
    // 删除 cookie
    CookieUtil.unset("name");
    CookieUtil.unset("book");
    // 设置有路径、域和过期时间的 cookie
    CookieUtil.set("address","here","/books/projs/", "www.wrox.com",new Date("January 1, 2023"))
     //删除刚刚设置的 cookie
    CookieUtil.unset("name", "/books/projs/", "www.wrox.com");
    // 设置安全 cookie
    CookieUtil.set("name","java",null,null,null,true);

// 使用方法存储数据
    //sessionStorage.setItem("name","Alice");
    // 使用属性存储数据
    //sessionStorage.age=18;
    // 使用方法取得数据
    let name = sessionStorage.getItem("name");
    let age=sessionStorage.getItem("age");
    console.log(name,age);
    // 使用属性取得数据
    let book = sessionStorage.book;

    sessionStorage.book="javascript";
    for (let i=0;i<sessionStorage.length;i++){
        let key=sessionStorage.key(i);
        let value=sessionStorage.getItem(key);
        console.log(`${key}=${value}`);
    }

