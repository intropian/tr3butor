import styled from 'styled-components'
import { colors } from '../../utilits/Colors'

export const ScJobCardStack = styled.div`
  h2 {
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  h6 {
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
