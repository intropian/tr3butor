import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: -4px;
  order: 2;
  @media (${device.tablet}) {
    order: 3;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
  }

  li {
    position: relative;

    a {
      text-decoration: none;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      margin-right: 40px;
      @media (${device.mobileXXL}) {
        font-size: 14px;
      }
    }

    span {
      position: absolute;
      right: 32px;
      top: -10px;
      font-size: 12px;
      opacity: 0.3;
      @media (${device.mobileXXL}) {
        right: 22px;
      }
    }

    &.extra-margin {
      a {
        margin-right: 60px;
        cursor: not-allowed;
        @media (${device.mobileXXL}) {
          margin-right: 40px;
        }
      }
    }
  }
`
