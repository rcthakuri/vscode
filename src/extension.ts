// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mm-terminal-automation" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.startMMTerminals', () => {
		// Terminal 1: runserver, run mrun1
		const term1 = vscode.window.createTerminal({ name: 'runserver' });
		term1.show();
		term1.sendText('./bin/manage runserver 0.0.0.0:8000');

		// Terminal 2: frontend, run yrd
		const term2 = vscode.window.createTerminal({ name: 'frontend' });
		term2.show();
		term2.sendText('yarn install;yarn dev');

		// Terminal 3: test
		const term3 = vscode.window.createTerminal({ name: 'test' });
		term3.show();

		// Terminal 4: misc
		const term4 = vscode.window.createTerminal({ name: 'misc' });
		term4.show();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
