import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	margin: 0;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

-webkit-tap-highlight-color: transparent;

a:-webkit-any-link {
    color: none;
    text-decoration: none;
}

:root{
    --white: #ffffff;
	--black: #000000;
	--grey-first:#FDFDFD;
	--grey-second:#F5F6FA;
	--grey-third:#F2F2F2;
	--grey-fourth:#E1DCD5;
	--grey-fifth:rgba(247, 247, 247, 0.5);
	--grey-sixth:#333333;
	--orange:#F2994A;
	--yellow-dark:#AA8232;
	--blue-ligth:#009BAA;
	--blue-dark:#00002D;
	--red:#B90032;
    --font-open-sans: "Open Sans";
	--font-playfair: "Playfair Display";
	--font-oswald: "Oswald";
	--font-aktiv: "Aktiv Grotesk";
	--font-allan: "Allan";
	--font-roboto: "Roboto";
}
`

export default GlobalStyle