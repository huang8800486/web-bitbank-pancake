import styled, { css } from 'styled-components'
import { getMedia } from '../styleds'

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  background-image: url('/images/bitbank/banner.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
`
export const BannerImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/bitbank/banner.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`
