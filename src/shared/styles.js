import { keyframes, css, Global } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        min-height: 100%;
        font-family: sweet-sans-pro, Helvetica, Arial, sans-serif;
        color: #495057;
      }

      a {
        text-decoration: none;
        color: #495057;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
        color: #212529;
      }

      code {
        line-height: 1;
      }

      .tag,
      .deleted,
      .boolean {
        color: #bf616a;
      }
      .attr-name,
      .string {
        color: #ebcb8b;
      }
      .attr-value,
      .inserted {
        color: #a3be8c;
      }
      .punctuation {
        color: #d08770;
      }
      .keyword {
        color: #b48ead;
      }
      .function {
        color: #5e81ac;
      }
      .comment {
        color: #4c566a;
        font-style: italic;
      }

      .keyword,
      .module {
        color: #bf616a;
      }
    `}
  />
);

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

export const Basic = styled('div')`
  ${basicStyles};
`;

export const Combined = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;
export const Animated = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${(props) => props.animation} 0.2s infinite ease-in-out alternate;
`;
