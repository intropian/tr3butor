import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'
import { colors } from '../../utilits/Colors'

export const ScDaoCardStack = styled.div`
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;
    align-items: center;
    margin-top: 40px;

    & > div {
      margin-bottom: 40px;
    }
  }

  &.horizontal {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    .container {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      -webkit-overflow-scrolling: touch;

      margin-left: calc(-100vw / 2 + 920px / 2);
      margin-right: calc(-100vw / 2 + 920px / 2);
      padding-left: calc(100vw / 2 - 920px / 2);

      @media (${device.tablet}) {
        padding-left: 20px;
        margin-left: -20px;
        margin-right: -40px;
        padding-right: 40px;
        padding-top: 40px;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }
`
export const ScDaoCardAdd = styled.div`
  width: 280px;
  height: 280px;
  padding: 30px 20px 20px 30px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.color};
  border-top-left-radius: 70px;
  background: ${colors.dark};
  margin-left: 1px;

  &:before {
    content: "";
    border-top-left-radius: 70px;
    position: absolute;
    left: -1px;
    top: -1px;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    z-index: -1;
    background: ${colors.gradient};
  }

  a {
    text-decoration: none;
    z-index: 2;
  }

  @media (${device.desktop}) {
    width: 240px;
    height: 240px;
  }

  @media (${device.tablet}) {
    width: 43%;
  }

  @media (${device.mobileXXL}) {
    width: calc(100% - 2px);
    height: 100vw;
  }

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

  a {
    padding: 30px 20px 20px 30px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  i {
    background: ${colors.dark};
    display: block;
    padding: 35px 34px;
    width: 90px;
    margin-bottom: 21px;
    border-radius: 60px;
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 20px;

    @media (${device.mobileXXL}) {
      width: 60vw;
      height: 60vw;
      border-radius: 260px;
      padding: 28vw 25vw;
      font-size: 100px;
    }

    &:before {
      content: "";
      border-radius: 70px;
      position: absolute;
      left: -1px;
      top: -1px;
      height: calc(100% + 2px);
      width: calc(100% + 2px);
      z-index: -1;
      background: ${colors.gradient};
      @media (${device.mobileXXL}) {
        border-radius: 260px;
      }
    }
  }
`
