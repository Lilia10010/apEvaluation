import { createGlobalStyle } from "styled-components";
const StyleGlobal = createGlobalStyle`
   @font-face {
   font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }
 
  :root {
    --dark-low: rgba(0,0,0,0.44);
    --dark-medium: rgba(0,0,0,0.60);
    --dark-high: rgba(0,0,0,0.80);
    --magenta: #E63888;
    --light-solid: #FFFFFF;
    --light-high: rgba(255,255,255,0.80);

    --color-logo-primary: #004691;
    --color-logo-secondary: #0E6EB7;
    --color-logo-tertiary: #72217B;
    --color-logo-quaternary: #B12384;

    --box-shadow-primary:  rgba(0, 0, 0, 0.616) 0px 20px 30px -10px;

    --border-radius-container-primary: 10px;

  }
  button {
    cursor: pointer;
  }

  `;

export default StyleGlobal;
