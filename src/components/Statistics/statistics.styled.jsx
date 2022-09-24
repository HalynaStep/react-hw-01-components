import styled from 'styled-components'

export const Title = styled.h2 `
padding-top: ${p => p.theme.space[5]}px;
padding-bottom: ${p=> p.theme.space[5]}px;
text-align: center;
color:  ${p => p.theme.colors.accent};
`
export const StatList = styled.ul `
display: flex;

`
export const Item = styled.li `
  height: 80px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p=> p.theme.space[2]}px;

  background-color: ${p => p.backgroundColor};
`;

export const Label = styled.span `
font-size: ${p => p.theme.fontSizes.m};
`
export const Percentage = styled.span `
font-size: ${p => p.theme.fontSizes.l};
`