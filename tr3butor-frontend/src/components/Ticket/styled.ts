import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'
import { colors } from '../../utilits/Colors'

export const ScTicket = styled.div`
  position: relative;
  border-top-left-radius: 70px;
  margin-bottom: 90px;
  z-index: 1;
  background: ${colors.dark};

  .border {
    border-top-left-radius: 70px;
    position: absolute;
    left: -1px;
    top: -1px;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    z-index: -1;
    background: ${colors.gradient};
  }

  .background {
    border-top-left-radius: 70px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: ${colors.dark};
  }

  .ticket-content {


    padding: 40px 60px;

    h6 {
      font-size: 24px;
      line-height: 30px;
    }

    > div {
      padding-top: 40px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: flex-end;
      @media (${device.mobileXXL}) {
        display: block;
      }

      button:first-child {
        margin-right: 40px;
        @media (${device.tablet}) {
          margin-right: 10px;
        }
      }

      button {
        @media (${device.mobileXXL}) {
          width: 100%;
          text-align: center !important;
          margin-top: 20px;
          padding: 20px 0 !important;
        }
      }
    }

    @media (${device.mobileXL}) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (${device.tablet}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (${device.mobileXL}) {
    height: auto;
    padding-bottom: 40px;
  }
`
