import styled from 'styled-components'

export const Table = styled.table`
  table-layout: fixed;
  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-left: auto;
  max-width: 600px;
  text-align: center;
  border-collapse: collapse;
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  th {
    width: calc(600px / 3);
  }
  th,
  td {
    padding: ${p => p.theme.space[4]}px;
    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.easy};
  }
  thead tr {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondary};
  }
  tbody tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};

  }
  tbody tr:nth-child(even) {
    background-color: ${p => p.theme.colors.bgaccent};
    color: ${p => p.theme.colors.text};
  }
`;
