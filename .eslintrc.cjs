module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"brace-style": ["error", "allman"],
		"curly": "error",
		"indent": ["error", "tab"],
		"quotes": ["error", "single"],
		"semi": ["error", "never"]
	},
};