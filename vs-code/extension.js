"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const child_process = require('child_process');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable_env = vscode.commands.registerCommand('extension.flushEnvironment', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Flushing environment...');
        child_process.exec("python -c \"import microbitide ; microbitide.flash_env.flash_env();\"",function (error, stdout, stderr){
            console.log(stdout);
            if(error){
                vscode.window.showInformationMessage(stderr);
                console.log(stderr);
                return;
            }
            vscode.window.showInformationMessage('Done.');
        });
    });
    let disposable_code = vscode.commands.registerCommand('extension.flushCode', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Flushing code...');
        var b = new Buffer(vscode.window.activeTextEditor.document.getText());
        var s = b.toString('base64');
        child_process.exec("python -c \"import microbitide, tempfile ; microbitide.flash_code.flash_code('"+s+"'); \"",function (error, stdout, stderr){
            console.log(stdout);
            if(error){
                vscode.window.showInformationMessage(stderr);
                console.log(stderr);
                return;
            }
            vscode.window.showInformationMessage('Done.');
        });
    });
    context.subscriptions.push(disposable_env);
    context.subscriptions.push(disposable_code);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    // vscode.window.showInformationMessage('Hello World!');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map