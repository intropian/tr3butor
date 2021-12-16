import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScInfoStack = styled.div`
  column-count: 2;

  @media (${device.mobileXXL}) {
    column-count: 1;
  }
`
