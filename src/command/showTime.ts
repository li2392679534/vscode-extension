import * as vscode from 'vscode';

export const showTime = ()=>{
     // 向用户界面右下角显示一个警告框
     vscode.window.showWarningMessage(`${Date().toLocaleString()}`);
};