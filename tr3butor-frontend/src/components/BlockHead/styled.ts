import styled from 'styled-components/macro'
import { colors } from '../../utilits/Colors'

export const ScBlockHead = styled.div`
  padding-top: 120px;
  & > h2 {
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  & > h6 { 
    font-weight: bold; 
    font-size: 16px;
    line-height: 30px;
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
