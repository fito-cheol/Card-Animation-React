import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize},
  :root {
    /* ...example */
    --mui-palette-primary-main: #1976d2;
    --mui-palette-primary-light: #42a5f5;
    --mui-palette-primary-dark: #1565c0;
    --mui-palette-primary-contrastText: rgb(46, 38, 61);
    /* ...other variables */
  
    --border-color: rgb(46, 38, 61, 0.12);
  }
  

  :is(.border) {
      border-width: 1px
    }
    
  :is(.border-bs) {
      border-block-start-width: 1px
  }

  :is(.inline-end-4) {
    inset-inline-end: 1rem;
  }

  :is(.block-start-4) {
    inset-block-start: 1rem;
  }
  
  :is(.absolute) {
    position: absolute;
  }
  :is(.select-none) {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
  }

  p {
    margin-bottom: 0.1em;
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, header, hgroup, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin:0;
    padding:0;
    vertical-align:baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block}
  #root {width: 100%;}
  html { font-size: 100%; }
  body {line-height:1; width: 100%; height: 100%; font-size: 1.6rem;}
  ol, ul {list-style:none}
  blockquote, q {quotes:none}
  blockquote:after, blockquote:before, q:after, q:before {content:"";content:none}
  table {border-collapse:collapse;border-spacing:0}

  *, :after, :before  {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border-width: 0;
    border-style: solid;
    border-color: var(--border-color, currentColor)
  }

  // input
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 10px 15px;
    margin-bottom: 4px;
    font-size: 14px;

  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-top: 4px;
    color: black;
    font-size: 12px;
    font-weight: 200;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }
  
  p.error {
    color: red;
    margin-top: 2px;
    margin-bottom: 0;
    font-size: .75rem
  }

`;

export default GlobalStyle;
