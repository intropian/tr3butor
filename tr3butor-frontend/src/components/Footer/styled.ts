import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScFooter = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 20px;
    @media (${device.mobileXXL}) {
      margin-left: 15px;
      font-size: 12px;
      padding: 10px 8px !important;
    }
  }
`
