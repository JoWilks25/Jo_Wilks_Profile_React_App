import styled from "styled-components";


export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterCard = styled.div`
  width: 50vw;
  height: 50vh;
`

interface RowProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
  flexDirection?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding || '1rem'};
`

interface ColumnProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
  alignItem?: string;
  flexDirection?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItem }) => alignItem || 'center'};
  padding: ${({ padding }) => padding || '1rem'};
`