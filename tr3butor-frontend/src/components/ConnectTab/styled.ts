import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScConnectTab = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (${device.mobileXXL}) {
    display: block;
    padding-top: 45px;
    padding-bottom: 45px;
  }

  > div {
    display: grid;
    @media (${device.mobileXXL}) {
      margin-top: 30px;
    }

    button {
      margin-bottom: 30px;
      text-align: right;
      @media (${device.mobileXXL}) {
        width: 100% !important;
      }
    }
  }
`
