import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 40rem 28rem;
  margin-top: 2.5rem;

  span.title {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.baseSubtitle};
      `}
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div.inputBox {
    width: 100%;
    height: 23.25rem;
    padding: 2.5rem;

    border-radius: 6px;

    ${(props) =>
      css`
        background-color: ${props.theme.baseCard};
      `}
  }

  div.inputBox div.titleContainer {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  div.inputBox div.titleContainer div.titleBox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.inputBox div.titleContainer div.titleBox strong {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  div.inputBox div.titleContainer span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    margin-left: 2rem;
  }

  div.inputContainer {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  div.inputContainer input {
    outline: 0;
    height: 2.625rem;

    margin-bottom: 0.5rem;

    ${(props) =>
      css`
        background-color: ${props.theme.baseInput};
        border: 1px solid ${props.theme.baseButton};
      `}

    border-radius: 4px;
    padding: 0.75rem;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  div.inputContainer input.normal {
    width: 12.5rem;
  }

  div.inputContainer input.optional {
    width: 21.75rem;
    flex: 1;
  }

  div.inputContainer input.big {
    width: 100%;
  }

  div.inputContainer input.small {
    width: 3.75rem;
    flex: 1;
  }

  div.inputContainer input.city {
    width: 17.25rem;
  }
`

export const FormSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
