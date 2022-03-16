const path=require("path");

module.exports={
	entry:"./src/index.js",
	output:{
		filename:"main.js",
		path:path.resolve(__dirname,"dist"),
	},
	module:{
		rules:[
			{test:/\.txt$/,use:'raw-loader'},
			{test:/\.css$/,use:'css-loader'},
			{test:/\.ts$/,use:'ts-loader'},
			],
	},
	plugins:[],
	mode:"production",
};