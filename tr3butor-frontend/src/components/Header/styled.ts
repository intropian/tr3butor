import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScHeader = styled.div`
  padding-bottom: 30px;
  padding-top: 40px;
  margin-left: calc(-100vw / 2 + 920px / 2);
  margin-right: calc(-100vw / 2 + 920px / 2);
  position: relative;
  z-index: 1;

  @media (${device.tablet}) {
    padding-left: 20px;
    margin-left: -20px;
    margin-right: -40px;
    padding-right: 40px;
    padding-top: 40px;
  }

  .top-flex {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;

    @media (${device.tablet}) {
      flex-wrap: wrap;
      width: 100%;
    }

    .account-info {
      font-size: 16px;
    }

    .login-button {
      order: 3;
      @media (${device.tablet}) {
        order: 2;
      }
    }
  }
`
