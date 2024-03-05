const root = document.querySelector('#root');

const h1Styling = {
    fontSize: '50px'
}

const pStyling = {
    fontSize: '24px'
}

const inlineStyling = {
    fontSize: '24px',
    paddingLeft: '15px',
    letterSpacing: '1px',
    fontWeight: '500'
}

const anchorStyling = {
    fontSize: '26px'
}

const h1 = React.createElement('h1',{style : h1Styling},"Topics covered");
const p = React.createElement('p',{style : pStyling},"The following is a list of all the topics we cover in the MDN learning area");
const a1 = React.createElement('a',{ href: 'https://example.com',style: anchorStyling},"Getting started with the web");
const p1 = React.createElement('p',{style : inlineStyling},"Provides a practical introduction to web development for complete begineers.");
const div1 = React.createElement('div',null,a1,p1);

const a2 = React.createElement('a',{ href: 'https://example.com',style: anchorStyling},"HTML -- Structuring the web");
const p2 = React.createElement('p',{style : inlineStyling},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
const div2 = React.createElement('div',null,a2,p2);

const a3 = React.createElement('a',{ href: 'https://example.com',style: anchorStyling},"CSS -- Styling the web");
const p3 = React.createElement('p',{style : inlineStyling},"CSS is the language that we used to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");
const div3 = React.createElement('div',null,a3,p3);

const innerDiv = React.createElement('div',null,h1,p,div1,div2,div3);
ReactDOM.render(innerDiv,root);