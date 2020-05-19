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

export const ButtonLink = styled(Button)`
  background: transparent;
  color: ${color.primary};
  &:hover {
    background: transparent;
    color: ${color.secondary};
  }
`;
