import styled from 'styled-components'

export const Avatar = styled.img `
width: 150px;
border-radius: ${p => p.theme.radii.round};
`

export const Name = styled.p `
padding-top: ${p => p.theme.space[4]}px;
font-family: ${p => p.theme.fonts.heading};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.accent};
line-height: ${p => p.theme.lineHeights.body};
` 

export const Info = styled.p `
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};
`
export const Stats = styled.ul`
  height: 80px;
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
   
  background-color: ${p => p.theme.colors.bgaccent};
  border-top:  ${p => p.theme.borders.normal};
  border-bottom:  ${p => p.theme.borders.normal};
  border-color:  ${p => p.theme.colors.border}
`
export const StatsItem = styled.li ` 
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :nth-child(2) {
    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.normal};
    border-color:  ${p => p.theme.colors.border};
  }
`;

export const Label = styled.span `
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.text};
`

export const Quantity = styled.span `
    font-family: ${p => p.theme.fonts.heading};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWeights.bold};
`