import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "mm-terminal-automation" is now active!');

	const disposable = vscode.commands.registerCommand('extension.startMMTerminals', () => {
		// First, dispose of all existing terminals
		vscode.window.terminals.forEach(term => term.dispose());

		// Terminal 1: runserver
		const term1 = vscode.window.createTerminal({ name: 'runserver' });
		// term1.show();
		term1.sendText('./bin/manage runserver 0.0.0.0:8000');

		// Terminal 2: frontend
		const term2 = vscode.window.createTerminal({ name: 'frontend' });
		// We want to make this terminal visible & active to users
		term2.show();
		term2.sendText('yarn install; yarn dev');

		// Terminal 3: test
		const term3 = vscode.window.createTerminal({ name: 'test' });
		// term3.show();

		// Terminal 4: misc
		const term4 = vscode.window.createTerminal({ name: 'misc' });
		// term4.show();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
