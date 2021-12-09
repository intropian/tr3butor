import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScInfoStack = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;

  @media (${device.mobileXXL}) {
    display: block;
  }
`
