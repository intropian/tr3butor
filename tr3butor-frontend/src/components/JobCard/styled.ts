import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

interface Props {
  color?: string;
}

export const ScJobCard = styled.div<Props>`
  z-index: 1;
  width: 280px;
  padding: 30px 20px 20px 30px;
  position: relative;
  background: ${(props) => props.color};
  border-top-left-radius: 70px;
  @media (${device.desktop}) {
    width: 240px;
  }

  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    &:hover + span {
      border-radius: 40px;
      right: 5px;
      bottom: 5px;

      i {
        top: 5px;
        right: 5px;
      }
    }
  }

  img {
    border-radius: 30px;
    width: 60px;
    height: 60px;
  }

  @media (${device.tablet}) {
    width: 45vw;
  }

  @media (${device.mobileXXL}) {
    width: 100%;
  }

  .card-header {
    justify-content: start;
    margin-bottom: 20px;

    span {
      padding-left: 10px;
      font-size: 18px;
      font-weight: 700;
      font-family: "JetBrains Mono", monospace;
    }
  }

  .card-content {
    padding-right: 25px;
    padding-bottom: 60px;

    h4 {
      color: white;
      font-weight: bold;
      padding-bottom: 15px;
      @media (${device.mobileXXL}) {
        font-size: 30px;
      }
    }

    p {
      color: white;
      font-size: 15px;
      line-height: 20px;
      opacity: 0.6;
      @media (${device.mobileXXL}) {
        font-size: 18px;
      }
    }
  }

  .button {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0;
    bottom: 0;
    background: #09130e;
    border-radius: 20px 0 0 0;
    border: none;
    transition: all 0.5s;
    text-align: center;

    i {
      transition: all 0.5s;
      font-size: 24px;
      line-height: 20px;
      color: white;
      font-style: normal;
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 30px;
      display: block;
      top: 9px;
      right: 0;
      padding-top: 16px;
    }
  }

  .type {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);

    height: 60px;
    width: calc(50% + 30px);

    border-top-right-radius: 15px;

    div {
      width: calc(100% - 60px);
      text-align: center;

      span {
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: 800;
        font-family: "JetBrains Mono", monospace;
        text-transform: uppercase;
      }
    }

    i {
      text-align: center;
      padding-top: 17px;
      height: 60px;
      width: 60px;
      background: rgba(0, 0, 0, 0.15);

      svg {
        margin: 0 auto;
      }
    }
  }
`
