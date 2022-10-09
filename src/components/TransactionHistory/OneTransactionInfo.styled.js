import styled from 'styled-components';

export const TransactionRow = styled.tr`
  padding: 10px;
  width: 100px;
  /* background-color: whitesmoke; */
  &:nth-child(even) {
    background-color: lavender;
  }
  &:nth-child(odd) {
    background-color: beige;
  }
`;

export const TransactionCell = styled.td`
  border: 1px solid grey;
  padding: 10px;
`;
