import { createGlobalStyle } from 'styled-components/macro'
import { device } from '../utilits/MediaQuery'
import { colors } from '../utilits/Colors'

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100%;
    animation: fadeInAnimation ease-in 250ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    font-weight: 300;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 30px;
    background: ${colors.dark};
    padding: 0;
    margin: 0;

    &.no-scroll {
      overflow: hidden;
    }
  }


  a {
    color: #ffffff;
    transition: all 0.5s;

    &.active,
    &:hover {
      color: ${colors.activeColor};
    }

    &.disabled-link {
      pointer-events: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'JetBrains Mono', monospace;
  }

  .cover {
    overflow-x: hidden;

    .content {
      width: 920px;
      margin: 0 auto;
      @media (${device.desktop}) {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  button, a {
    cursor: pointer;
  }

  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  //ANIMATION CHANGE PAGE
   .fade-enter {
     opacity: 0;
     z-index: 1;
   }
 
   .fade-enter.fade-enter-active {
     opacity: 1;
     transition: opacity 500ms;
   }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
