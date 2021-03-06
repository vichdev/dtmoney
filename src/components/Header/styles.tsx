import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: var(--blue);
`;
export const Header = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  padding: 2rem 2rem 12rem;
  align-items: center;
  justify-content: space-between;

  svg {
    display: none;
  }

  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    justify-content: space-around;

    svg {
      display: block;
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export const LogoImg = styled.img``;

export const HeaderButton = styled.button`
  font-size: 1rem;
  color: #fff;
  background: var(--blue-light);
  border: 0;
  box-shadow: 0px 0px 3px 1px black;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 600px) and (min-width: 300px) {
    display: none;
  }
`;
