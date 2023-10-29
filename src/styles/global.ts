import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
    background-color: black;
    background-image: url(https://images5.alphacoders.com/120/1200979.jpg);
    color: white;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
}
body *{
  font-family: 'Libre Baskerville', serif;
}

`
