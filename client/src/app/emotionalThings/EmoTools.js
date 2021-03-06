import styled from '@emotion/styled/macro'
import { keyframes } from '@emotion/core'
import WebFont from 'webfontloader'
import styledMap from 'styled-map'
import { Field } from 'formik'
import { Link } from 'react-router-dom'
import { slideInLeft } from 'react-animations'

WebFont.load({
  google: {
    families: ['Oxygen', 'Varela Round', 'Righteous', 'sans-serif'],
  },
})

export const styleVariables = {
  mainFontColor: '#22282e',
  mainBackgroundColor: '#edf1f2',
  mainBrandColor: '#797564',
  secondaryFontColor: '#6e89a0',
  secondaryBackgroundColor: '#81a2a6',
  mainFontFamily: `'Oxygen', 'sans-serif'`,
  secondaryFontFamily: `'Varela Round', 'sans-serif'`,
  fontSizeH1: '2.4rem',
  fontSizeH2: '2rem',
  fontSizeH3: '1.8rem',
  fontSizeH4: null,
  fontSizeH5: null,
  fontSizeH6: null,
  fontSizeH7: null,
  fontSizeP: '1.6rem',
  fontSizeSmall: '1.2rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

//set main background colour
document.body.style.backgroundColor = styleVariables.mainBackgroundColor

const flexDirectionMap = styledMap`
  fdcr: column-reverse;
  fdrr: row-reverse;
  fdc: column;
  fdr: row;
`
const justifyContentMap = styledMap`
  jcse: space-evenly;
  jcsa: space-around;
  jcsb: space-between;
  jcc: center;
  jcfe: flex-end;
  jcfs: flex-start;
`
const alignItemsMap = styledMap`
  aib: baseline;
  ais: stretch;
  aic: center;
  aife: flex-end;
  aifs: flex-start;
`
const alignContentMap = styledMap`
  acs: stretch;
  acse: space-evenly;
  acsa: space-around;
  acsb: space-between;
  acc: center;
  acfe: flex-end;
  acfs: flex-start;
`
const colorMap = styledMap`
  secondaryColor: ${styleVariables.secondaryBackgroundColor};
  brandColor: ${styleVariables.mainBrandColor};
  mainColor: ${styleVariables.mainBackgroundColor};
  default: white;
`

export const FlexContainer = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  align-items: ${alignItemsMap};
  align-content: ${alignContentMap};
  flex-wrap: ${styledMap`fw: wrap;`};
  background-color: ${colorMap};
  margin: ${props => props.m};
  border-radius: ${props => props.br};
  box-shadow: ${props =>
    props.shadow === 'y' ? styleVariables.boxShadow : 'none'};
  height: ${props => props.height};
  padding: ${props => props.p};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  position: relative;
`

export const ImageW100 = styled.img`
  max-width: 100%;
  border-radius: ${props => props.round};
  margin: ${props => props.m};
`

export const H1 = styled.h1`
  font-size: ${styleVariables.fontSizeH1};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
  margin: ${props => props.m};
`
export const H2 = styled.h2`
  font-size: ${styleVariables.fontSizeH2};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
  margin: ${props => props.m};
  width: ${props => props.width};
`
export const H3 = styled.h3`
  font-size: ${styleVariables.fontSizeH3};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.textAlign};
  margin: ${props => props.m};
`

export const P = styled.p`
  font-size: ${styleVariables.fontSizeP};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${props => props.textAlign};
  margin: ${props => props.m};
`

export const EmoField = styled(Field)`
  margin: 15px 0;
  height: 40px;
  min-width: 300px;
  font-size: ${styleVariables.fontSizeSmall};
  border-radius: 10px;
  border: lightslategrey 1px solid;
  margin: ${props => props.m};
`
export const Button = styled.button`
  width: 40%;
  height: 40px;
  color: white;
  background-color: #3498db;
  border-radius: 15px;
  font-size: ${styleVariables.fontSizeSmall};
  margin: ${props => props.m};
  border: none;
  &:hover {
    background-color: #2980b9;
  }
`
export const EmoLink = styled(Link)`
  text-decoration: none;
`
const slideAnimation = keyframes`${slideInLeft}`

export const EmoTitle = styled(H1)`
  font-family: 'Righteous';
  color: rgb(91, 56, 170);
  background-color: #313639;
  padding: 5px;
  animation: 1s ${slideAnimation};
`
export const TitleBackground = styled.div`
  background-color: #313639;
`
