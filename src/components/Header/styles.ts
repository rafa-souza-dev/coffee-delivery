import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.5rem;
  }

  div img {
    height: 2.5rem;
    width: 5.3125rem;
  }

  div ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  div ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  div ul li button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 6px;

    height: 2.375rem;
    width: 2.375rem;

    ${(props) =>
      css`
        background-color: ${props.theme.yellowLight};
      `}

    ${(props) =>
      css`
        color: ${props.theme.yellowDark};
      `}
  }

  div ul > li:first-child {
    gap: 0.25rem;
    border-radius: 6px;
    height: 2.375rem;
    padding: 0 0.5rem;

    ${(props) =>
      css`
        background-color: ${props.theme.purpleLight};
      `}

    ${(props) =>
      css`
        color: ${props.theme.purpleDark};
      `}
  }

  div ul > li:first-child span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 18.2px;
  }
`
