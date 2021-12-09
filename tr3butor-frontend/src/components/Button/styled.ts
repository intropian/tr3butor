import styled from 'styled-components'
import { colors } from '../../utilits/Colors'
import { device } from '../../utilits/MediaQuery'

export const ScButton = styled.button`
  border-radius: 30px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: white;
  border: 1px solid #57575a;
  background: none;
  padding: 10px 20px 10px 20px;
  border-image-slice: 1;
  transition: all 0.5s;
  position: relative;

  svg,
  polygon,
  path {
    transition: all 0.5s;
  }

  &.tr3butor-button--primary {
    font-weight: 500;
    font-size: 24px;
    color: white;
    line-height: 28px;
    background: ${colors.dark};
    padding: 16px 30px 16px 30px;
    border: none;

    &:before {
      content: "";
      border-radius: 30px;
      position: absolute;
      left: -1px;
      top: -1px;
      height: calc(100% + 2px);
      width: calc(100% + 2px);
      z-index: -1;
      background: ${colors.gradient};
    }

    &:hover {
      background: none;
      color: white;
    }

    &.tr3butor-button--right {
      padding: 16px 30px 16px 93px;
      text-align: right;
      @media (${device.tablet}) {
        padding: 10px 30px 10px 93px;
      }
      @media (${device.mobileXXL}) {
        font-size: 16px;
        padding: 10px 15px 10px 63px;
        svg {
          width: 25px;
          height: 23px;
          margin-top: 4px;
        }
      }
    }

    &.tr3butor-button--simplify {
      background: none;
      border: 1px solid white;

      &:before {
        content: none;
      }

      &:hover {
        background: white;
        color: ${colors.dark};
      }
    }

    > svg,
    .identicon {
      position: absolute;
      left: 25px;
      top: 14px;
      @media (${device.tablet}) {
        top: 9px;
      }
    }

    @media (${device.tablet}) {
      font-size: 16px;
    }
  }

  &:hover {
    color: ${colors.activeColor};
  }

  &.tr3butor-button--only-icon {
    padding: 11px 11px !important;

    &:hover {
      border-color: ${colors.activeColor};

      svg,
      polygon,
      path {
        fill: ${colors.activeColor} !important;
      }
    }
  }
`
