import styled from 'styled-components'
import { colors } from '../../utilits/Colors'

export const ScInfoBlock = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: inline-block;
  width: 100%;

  .content-block {
    padding-left: 120px;
  }

  h4 {
    font-size: 24px;
    line-height: 30px;
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 20px;
  }

  p,li,a,span,strong, div {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 20px;
  }
  li {
    word-break: break-word;
    margin-left: 30px;
  }
`
