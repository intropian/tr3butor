import styled from 'styled-components'
import { colors } from '../../utilits/Colors'
import { device } from '../../utilits/MediaQuery'

interface Props {
  color?: string;
}

export const ScJobHeader = styled.div<Props>`
  background: ${(props) => props.color};
  position: relative;
  z-index: 1;
  padding-bottom: 40px;
  margin: 0 calc(-100vw / 2 + 920px / 2) 40px;
  @media (${device.tablet}) {
    padding-left: 20px;
    margin-left: -20px;
    margin-right: -40px;
    padding-right: 40px;
    padding-top: 40px;
  }

  .container {
    position: relative;
    width: 920px;
    min-height: 220px;
    margin: 0 auto;
    @media (${device.tablet}) {
      width: 100%;
    }

    .type {
      background: rgba(0, 0, 0, 0.25);

      height: 60px;
      width: 150px;

      div {
        width: 90px;
        text-align: center;

        span {
          display: block;
          width: 100%;
          font-size: 16px;
          font-weight: 800;
          font-family: "JetBrains Mono", monospace;
          text-transform: uppercase;
        }
      }

      i {
        text-align: center;
        padding-top: 17px;
        height: 60px;
        width: 60px;
        background: rgba(0, 0, 0, 0.15);

        svg {
          margin: 0 auto;
        }
      }
    }

    .description {
      margin-top: 30px;
      align-items: flex-start;
      @media (${device.mobileXXL}) {
        display: block;
      }

      .text {
        width: 70%;
        font-weight: bold;
        font-size: 26px;
        font-family: "JetBrains Mono", monospace;
        @media (${device.mobileXXL}) {
          width: 100%;
        }
      }

      .control {
        button {
          @media (${device.mobileXXL}) {
            margin-top: 25px;
            width: 100%;
          }

          svg {
            margin-top: 12px;
            @media (${device.tablet}) {
              margin-top: 10px;
            }
            @media (${device.mobileXXL}) {
              margin-top: 5px;
            }
          }

          &:hover {
            color: ${colors.dark} !important;

            svg,
            path {
              fill: ${colors.dark} !important;
            }
          }
        }

        .tab {
          margin-top: 30px;

          span {
            font-weight: 200;
            font-size: 18px;
            line-height: 30px;
          }

          p {
            font-weight: 200;
            font-size: 24px;
            line-height: 30px;
          }
        }
      }
    }

    .info {
      margin-top: 40px;
      justify-content: flex-start;

      @media (${device.mobileXXL}) {
        width: 100%;
        display: inline-block;
      }

      .top {
        align-items: flex-start;
        flex-wrap: nowrap;
        max-width: 70%;
        @media (${device.mobileXXL}) {
          justify-content: left;
          flex-wrap: wrap;
          max-width: 100%;
        }
      }

      img {
        margin-right: 10px;
        height: 40px;
        width: 40px;
        border-radius: 30px;
      }

      h3 {
        margin-top: 10px;
        font-weight: bold;
        font-size: 20px;
        line-height: 10px;
      }

      span {
        font-size: 14px;
        font-family: "JetBrains Mono", monospace;
        line-height: 20px;
      }

      .buttons {
        width: 30%;
        text-align: right;
        @media (${device.mobileXXL}) {
          width: 100%;
          text-align: center;
          margin-top: 40px;
          margin-left: 0;
        }

        button {
          margin-right: 10px;

          &:hover {
            border-color: ${colors.activeColor} !important;
          }
        }
      }
    }

    .statistics {
    }
  }
`
