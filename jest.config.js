module.exports = {
	clearMocks: true,
	setupFiles: ['dotenv-flow/config'],
	setupFilesAfterEnv: ['./setupTests.ts'],
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
	transform: {
		'^.+\\.(j|t)sx?$': 'babel-jest',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
}
