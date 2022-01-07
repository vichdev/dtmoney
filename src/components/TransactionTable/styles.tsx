import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;

export const TableTitle = styled.th`
  color: var(--text-body);
  font-weight: 500;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`;

export const TableWrapper = styled.tbody``;

export const TableContainer = styled.tr``;

export const TitleWrapper = styled.thead``;

export const TableContent = styled.td<{ color?: string }>`
  padding: 1rem 2rem;
  border: 0;
  background: var(--shape);
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "#969CB3")};
  border-radius: 0.25rem;
  &:first-child {
    color: var(--text-title);
  }
`;
