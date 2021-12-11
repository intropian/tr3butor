import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScInfoStack = styled.div`
  gap: 6%;

  > div {
    width: 47%;
    @media (${device.mobileXXL}) {
      width: 100%;
    }
  }

  @media (${device.mobileXXL}) {
    display: block;
  }
`
