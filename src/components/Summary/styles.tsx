import styled from "styled-components";

export const Containter = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SummaryWrapper = styled.div<{
  color?: string;
  textcolor?: string;
}>`
  background: ${(props) => (props.color ? props.color : "#FFFFFF")};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => (props.textcolor ? props.textcolor : "#363F5F")};
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 1rem 1rem;
    width: 100%;
  }
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
