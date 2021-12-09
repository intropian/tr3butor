import styled from 'styled-components'

interface Props {
  color: string;
}

export const ScDecorBlocks = styled.div<Props>`
  $randomDuration: random(5);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;

  b {
    display: block;
    position: absolute;
    background: ${(props) => props.color};
    height: 50px;
    width: 50px;
    animation-name: blink;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  &.first {
    b:nth-child(1) {
      right: 50px;
      top: 0;
      border-bottom-right-radius: 10px;
      animation-duration: 2s;
    }

    b:nth-child(2) {
      right: 100px;
      top: 50px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      animation-duration: 2.5s;
    }

    b:nth-child(3) {
      right: 0;
      top: 100px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      animation-duration: 3s;
    }
  }

  &.second {
    b:nth-child(1) {
      right: 50px;
      top: 0;
      border-bottom-left-radius: 10px;
      animation-duration: 2s;
    }

    b:nth-child(2) {
      right: 0;
      top: 50px;
      border-bottom-left-radius: 10px;
      animation-duration: 2.5s;
    }

    b:nth-child(3) {
      right: 0;
      top: 150px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      animation-duration: 3s;
    }
  }

  &.third {
    b:nth-child(1) {
      right: 50px;
      top: 0;
      animation-duration: 2s;
    }

    b:nth-child(2) {
      right: 100px;
      top: 50px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      animation-duration: 2.5s;
    }

    b:nth-child(3) {
      right: 0;
      top: 50px;
      border-bottom-left-radius: 10px;
      animation-duration: 3s;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`
