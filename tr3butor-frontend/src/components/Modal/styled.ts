import styled from 'styled-components/macro'
import { device } from '../../utilits/MediaQuery'
import { colors } from '../../utilits/Colors'

export const ScModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  z-index: 100;
  left: 0;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  animation: 0.1s modalAppearance ease;
  @keyframes modalAppearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .overflowContent {
    overflow-y: scroll;
    max-height: calc(100vh - 195px);
    box-sizing: border-box;
  }

  @media (${device.tablet}) {
    height: calc(100% - 56px);
  }
`

export const ScModalBackground = styled.div`
  top: 0;
  position: fixed;
  left: 0;
  width: 100%;
  background: rgba(9, 19, 14, 0.5);
  backdrop-filter: blur(10px);
  height: 100%;
  transition: 1s ease;
`

export const ScModalContent = styled.div`
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
  max-width: 620px;
  top: 0;
  box-sizing: border-box;
  padding: 5px;
  @media (${device.tablet}) {
    position: absolute;
    max-width: calc(100% - 10px);
  }
`

export const ScModal = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px 0 0 0;
  color: ${colors.dark};
  padding: 20px;

  .modal-header {
    padding-bottom: 40px;

    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 40px;
    }
  }

  .modal-body {
    .wallet-key {
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
    }

    .favorite-daos {
      padding-top: 40px;

      ul {
        list-style: none;
        margin: 0;
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        li {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: left;
          align-items: center;
          margin-bottom: 20px;

          img {
            width: 45%;
            margin-right: 10px;
          }

          span {
            font-size: 16px;
          }
        }
      }
    }

    &.images {
      img {
        margin-bottom: 20px;
      }
    }
  }
`
