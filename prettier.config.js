module.exports = {
	singleQuote: true,
	semi: false,
	trailingComma: 'es5',
	useTabs: true,
	bracketSpacing: false,
	printWidth: 120,
	// make prettier alaways calculate printWidth based on a tabWidth of 4,
	// instead of inferring from vscode user preference
	tabWidth: 4,
	overrides: [
		{
			files: ['*.yml', '*.yaml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
