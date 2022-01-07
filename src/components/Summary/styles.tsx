import styled from "styled-components";

export const Containter = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const SummaryWrapper = styled.div<{
  color?: string;
  textcolor?: string;
}>`
  background: ${(props) => (props.color ? props.color : "#FFFFFF")};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => (props.textcolor ? props.textcolor : "#363F5F")};
`;

export const SummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const SummaryTitle = styled.p``;

export const SummaryIcon = styled.img``;
