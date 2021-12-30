/*
export let school4="uestc";

export function teach(){
	console.log("teach something");
}
*/
//生命变量
		let a;
		let b=66,c="mane",d=[];
		{
			let e=2;
			console.log("局部变量e",e);
		}
		let e=3;
		console.log(e);
		{
			let name="ES6";
			function printName(){
				console.log(name);
			}
			printName();
		}
