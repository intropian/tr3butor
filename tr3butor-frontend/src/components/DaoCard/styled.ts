import styled from 'styled-components'
import { colors } from '../../utilits/Colors'
import { device } from '../../utilits/MediaQuery'

interface Props {
  color?: string;
}

export const ScDaoCard = styled.div<Props>`
  z-index: 1;
  width: 280px;
  height: 280px;
  padding: 30px 20px 20px 30px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.color};
  border-top-left-radius: 70px;
  a{
    text-decoration: none;
  }
  @media (${device.desktop}) {
    width: 240px;
    height: 240px;
  }

  @media (${device.tablet}) { 
    width: 43%;
    height: 43%;
  }

  @media (${device.mobileXXL}) {
    width: 100vw;
    height: 100vw;
  }

  .card-header {
    flex: 1;
  }

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    border-radius: 60px;
    @media (${device.mobileXXL}) {
      width: 60vw;
      height: 60vw;
      margin-bottom: 0;
      border-radius: 260px;
    }
  }

  .card-content {
    padding-right: 45px;

    h4 {
      color: white;
      font-weight: bold;
      padding-bottom: 15px;
      @media (${device.mobileXXL}) {
        font-size: 30px;
      }
    }

    p {
      color: white;
      font-size: 15px;
      line-height: 20px;
      opacity: 0.6;
      @media (${device.mobileXXL}) {
        font-size: 18px;
      }
    }
  }

  span {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0;
    bottom: 0;
    background: #09130e;
    border-radius: 20px 0 0 0;
    border: none;
    transition: all 0.5s;
    text-align: center;

    i {
      transition: all 0.5s;
      font-size: 24px;
      line-height: 20px;
      color: white;
      font-style: normal;
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 30px;
      display: block;
      top: 9px;
      right: 0;
      padding-top: 16px;
    }
    
  }
  &:hover {
    span {
      width: 70px;
      height: 70px;

      i {
        background-color: ${(props) => props.color};
        color: ${colors.dark};
        width: 60px;
        height: 60px;
        font-size: 28px;
        padding-top: 20px;
      }
    }
  }
`
