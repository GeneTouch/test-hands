import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		font-family: Roboto, sans-serif;
		font-style: normal;
		height: 100%;
		background: linear-gradient(180deg, #310050 0%, #000000 100%);
		overflow-y: hidden;
	}
`;
