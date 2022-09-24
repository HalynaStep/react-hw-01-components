import styled from 'styled-components'
 
export const Item = styled.div `
  display: flex;
  padding: ${p => p.theme.space[3]}px;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.normal};
  margin-bottom: ${p => p.theme.space[2]}px;
`
export const Avatar = styled.img `
height: 80px;
margin-right: ${p => p.theme.space[4]}px;
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.md};
border-color: ${p => p.theme.colors.border};
`
export const Name = styled.p `

font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.accent};

`

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.md};
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${p =>
    p.status ? p.theme.colors.online : p.theme.colors.offline};
`;

