import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
  }
`;

export const TableTitle = styled.th`
  color: var(--text-body);
  font-weight: 500;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;

  @media (max-width: 600px) and (min-width: 300px) {
    display: none;
  }
`;

export const TableWrapper = styled.tbody`
  width: 100%;
  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
`;

export const TableContainer = styled.tr`
  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.thead`
  width: 100%;

  @media (max-width: 600px) and (min-width: 300px) {
    display: flex;
    width: 100%;
  }
`;

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

  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
