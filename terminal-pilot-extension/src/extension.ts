import * as vscode from 'vscode';

interface TerminalConfig {
	command: string;
	show: boolean;
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Terminal Pilot is now active!');

	const disposable = vscode.commands.registerCommand('extension.terminalPilot', () => {
		// Dispose of all existing terminals
		vscode.window.terminals.forEach(term => term.dispose());

		// Read the terminal configuration from the user's settings
		const config = vscode.workspace.getConfiguration('terminal-pilot');
		const terminalConfigs: { [terminalName: string]: TerminalConfig } | undefined = config.get('terminals');

		// If no terminal configuration is set, show an error and return.
		if (!terminalConfigs || Object.keys(terminalConfigs).length === 0) {
			vscode.window.showErrorMessage('Terminal Pilot: No terminal configurations found in settings.');
			return;
		}

		// Iterate over each terminal configuration and create the terminals.
		for (const terminalName in terminalConfigs) {
			if (Object.prototype.hasOwnProperty.call(terminalConfigs, terminalName)) {
				const termConfig = terminalConfigs[terminalName];
				const terminal = vscode.window.createTerminal({ name: terminalName });
				
				// Show the terminal if the "show" flag is true.
				if (termConfig.show) {
					terminal.show();
				}
				
				// Send the command if provided.
				if (termConfig.command && termConfig.command.trim() !== "") {
					terminal.sendText(termConfig.command);
				}
			}
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
