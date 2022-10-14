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

  div.titleContainer {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  div.titleContainer div.titleBox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.titleContainer div.titleBox strong {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  div.titleContainer span {
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

  div.paymentMethodBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    height: 12.9375rem;
    padding: 2.5rem;

    border-radius: 6px;

    ${(props) =>
      css`
        background-color: ${props.theme.baseCard};
      `}
  }

  div.paymentMethodBox div.methodSelect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  div.paymentMethodBox div.methodSelect button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    height: 3.1875rem;
    width: 100%;

    ${(props) =>
      css`
        background-color: ${props.theme.baseButton};
      `}

    border: 0;
    border-radius: 6px;
  }

  div.paymentMethodBox div.methodSelect button p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
  }
`

export const FormSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonSelect = styled.button`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 0 0 0 1rem;
  gap: 0.75rem;

  height: 3.1875rem;
  width: 100%;
  border: 0;
  border-radius: 6px;

  ${(props) =>
    css`
      background-color: ${props.theme.baseButton};
    `}

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19.2px;

    ${(props) =>
      css`
        color: ${props.theme.baseText};
      `}
  }
`
