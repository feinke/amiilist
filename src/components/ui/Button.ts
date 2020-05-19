import styled from "styled-components";
import { color } from "./Utils";

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  background: ${color.primary};
  padding: 0.5em 1.5em;
  color: ${color.white};
  &:hover {
    background: ${color.secondary};
  }
  &:disabled {
    background: ${color.gray};
  }
`;

export const ButtonLink = styled.a`
  background: transparent;
  color: ${color.primary};
  text-decoration: none;
  font-size:14px;
  &:hover {
    background: transparent;
    color: ${color.secondary};
  }
`;
