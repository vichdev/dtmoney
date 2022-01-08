import styled, { keyframes } from "styled-components";

export const OpenModalAnimation = keyframes`
0% {filter: brightness(0.5)}
50% {opacity: 0.8}
100% {opacity: 1}
`;

export const ModalWrapper = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) and (min-width: 300px) {
    overflow-y: hidden;
    position: fixed;
  }
`;

export const Modal = styled.form`
  width: 500px;
  height: 500px;
  background: var(--background);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;
  position: relative;
  padding: 1.5rem;
  animation-name: ${OpenModalAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 600px) and (min-width: 300px) {
    width: 300px;
    height: 300px;
    overflow-y: hidden;
    position: fixed;
  }
`;

export const ModalTitle = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const ModalInputs = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }
  &:focus {
    border-color: #121212;
  }
  & + input {
    margin-top: 1rem;
  }
  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    height: 300px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 0 1.5 rem;
  height: 4rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: 0;
  margin-top: 1.5rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    height: 300px;
  }
`;

export const CloseModal = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonTypeWrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
`;

const colors = {
  green: "#94e7ba",
  red: "#ee8193",
};

export const TransactionButton = styled.button<{
  color?: string;
  isActive?: boolean;
  activeColor: "green" | "red";
}>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: border-color 0.5s;

  &:hover {
    border-color: #121212;
  }
  &:focus {
    border-color: #121212;
  }

  img {
    width: 28px;
    height: 28px;
    margin-left: 1rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  @media (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    height: 40px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
