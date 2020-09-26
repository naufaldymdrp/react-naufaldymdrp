import React, { SyntheticEvent, FC } from "react";
import styled from "styled-components/macro";

export const StyledButton = styled.button``;

const Button: FC = (props) => {
  const handleClick = (ev: SyntheticEvent<HTMLButtonElement>) => {
    let { children } = props;
    alert(children?.toString());
  };
  return <StyledButton onClick={handleClick}>{props.children}</StyledButton>;
};

export default Button;
