console.log("hellor world 外联");
// alert("弹窗");
var x;
let y = 5;
const PI = 3.14;
console.log(x,y,PI);
let str = "字符串";
console.log(str);
let empty_value = null;
console.log(empty_value);

let age = 18;
if (age > 18) {
    console.log("你已成年");
} else {
    console.log("未成年");
}

// let time = 12;
// if (time < 12) {
//     alert("上午好");
// }else if (time < 18) {
//     alert("下午好");
// }else{
//     alert("晚上好");
// }

console.log("for 循环");
for (let i = 0; i < 10; ++i) {
    console.log(i);
}
console.log("while 循环");
let count = 0;
while (count < 10) {
    count++;
    if(count == 3)continue;
    if(count == 5)break;
    console.log(count);
}

function hello() {
    console.log("hello world 函数");
}
function hello_return(params) {
    return "hello world 返回"
}
hello();
console.log(hello_return());

function hello_name(name){
    console.log("hello"+name);
}

hello_name("YU");

// 事件