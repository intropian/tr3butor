import styled from 'styled-components'
import { device } from '../../utilits/MediaQuery'

export const ScDaoCardStack = styled.div`
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;
    align-items: center;
    margin-top: 40px;

    & > div {
      margin-bottom: 40px;
    }
  }

  &.horizontal {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    .container {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      -webkit-overflow-scrolling: touch;

      margin-left: calc(-100vw / 2 + 920px / 2);
      margin-right: calc(-100vw / 2 + 920px / 2);
      padding-left: calc(100vw / 2 - 920px / 2);

      @media (${device.tablet}) {
        padding-left: 20px;
        margin-left: -20px;
        margin-right: -40px;
        padding-right: 40px;
        padding-top: 40px;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }
`
