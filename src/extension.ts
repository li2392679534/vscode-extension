// 模块 'vscode' 包含了 VS Code 的可扩展性 API
// 导入该模块并在代码中引用别名 vscode
import * as vscode from 'vscode';

// 
// 
/**
 * @description 当扩展被激活时调用此方法，扩展在首次执行命令时被激活
 * @param context 上下文对象，用于存储当扩展被激活时需要的数据。
 * @something 1. 输出一条恭喜信息到控制台。
 * 				2. 注册一个命令 howlongplugin.helloWorld，当该命令被执行时，显示一个消息框给用户。 
 */
export function activate(context: vscode.ExtensionContext) {

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
    });

	// 插件context的subscriptions是一个数组，用于存储可释放资源的对象（即实现了 dispose 方法的对象）。
	// 当此扩展被停用时，这些可释放资源将被释放。
    context.subscriptions.push(...[sayHello_disposable,showTime_disposable]);
}

// 当扩展被注销时调用此方法
/**
 * @description 注销函数：定义 deactivate 函数，当扩展被注销时调用。当前没有实现具体逻辑。
 */
export function deactivate() {}