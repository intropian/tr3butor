import styled from 'styled-components'
import { colors } from '../../utilits/Colors'

export const ScInfoBlock = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  align-items: stretch;
  overflow: ellipsis;

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

  p {
    font-weight: 200;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 40px;
  }
  li {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
