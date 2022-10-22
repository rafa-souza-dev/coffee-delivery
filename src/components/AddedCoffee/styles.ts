import styled, { css } from 'styled-components'

export const AddedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  height: 6.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.25rem 0 0.25rem;

  ${(props) =>
    css`
      border-bottom: 1px solid ${props.theme.baseButton};
    `}

  div.leftBox {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  div.leftBox img {
    width: 4rem;
    height: 4rem;
  }

  div.centerBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div.centerBox div.checkoutController {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.selectQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 2rem;
    border-radius: 6px;
    gap: 0.5rem;

    ${(props) =>
      css`
        background-color: ${props.theme.baseButton};
      `}
  }

  div.selectQuantity button.accumulator {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.875rem;
    height: 0.875rem;
    background-color: transparent;
    cursor: pointer;

    ${(props) =>
      css`
        color: ${props.theme.purple};
      `}
  }

  button.buttonRemove {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.6875rem;
    height: 2rem;
    border-radius: 6px;

    cursor: pointer;

    gap: 0.25rem;

    ${(props) =>
      css`
        background-color: ${props.theme.baseButton};
      `}
  }

  button.buttonRemove span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    ${(props) =>
      css`
        color: ${props.theme.baseText};
      `}
  }
`
