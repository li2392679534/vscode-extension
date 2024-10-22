/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = activate;
exports.deactivate = deactivate;
// 模块 'vscode' 包含了 VS Code 的可扩展性 API
// 导入该模块并在代码中引用别名 vscode
const vscode = __importStar(__webpack_require__(1));
const fs = __webpack_require__(2);
// 
// 
/**
 * @description 当扩展被激活时调用此方法，扩展在首次执行命令时被激活
 * @param context 上下文对象，用于存储当扩展被激活时需要的数据。
 * @something 1. 输出一条恭喜信息到控制台。
 * 				2. 注册一个命令 howlongplugin.helloWorld，当该命令被执行时，显示一个消息框给用户。
 */
function activate(context) {
    // 使用控制台输出诊断信息（console.log）和错误（console.error）
    // 此行代码仅在扩展被激活时执行一次
    console.log('恭喜，您的扩展 "howlongplugin" 已经激活！');
    // 命令已在 package.json 文件中定义
    // 现在通过 registerCommand 提供命令的实现,返回一个Disposable(可释放)对象
    // command 参数必须与 package.json 中的command字段匹配
    const sayHello_disposable = vscode.commands.registerCommand('How.helloWorld', () => {
        // 每次命令执行时都会执行此处的代码
        // 向用户界面右下角显示一个消息框
        vscode.window.showInformationMessage('这是浩龙在开发中的VSCode插件！');
    });
    const showTime_disposable = vscode.commands.registerCommand('How.showTimer', () => {
        // 每次命令执行时都会执行此处的代码
        // 向用户界面右下角显示一个警告框
        vscode.window.showWarningMessage(`${Date().toLocaleString()}`);
        vscode.window.showTextDocument(fs.readFileSync('./command/showTime.ts'));
    });
    vscode.commands.registerCommand('How.cowsay', async () => {
        // let what = await vscode.window.showInputBox({ placeHolder: 'cow say?' });
        let what = '../README.md';
        if (what) {
            let uri = vscode.Uri.parse(what);
            let doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
            await vscode.window.showTextDocument(doc, { preview: false });
        }
    });
    // 插件context的subscriptions是一个数组，用于存储可释放资源的对象（即实现了 dispose 方法的对象）。
    // 当此扩展被停用时，这些可释放资源将被释放。
    context.subscriptions.push(...[sayHello_disposable, showTime_disposable]);
}
// 当扩展被注销时调用此方法
/**
 * @description 注销函数：定义 deactivate 函数，当扩展被注销时调用。当前没有实现具体逻辑。
 */
function deactivate() { }


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("fs");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map