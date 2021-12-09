import styled from 'styled-components'

export const ScLogo = styled.div`
  cursor: pointer;
  position: relative;

  .key {
    transition: all 0.5s;
    position: absolute;
    left: 0;
  }

  &:hover {
    .key {
      margin-top: 10px;
    }
  }
`
