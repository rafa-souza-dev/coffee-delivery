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
`

export const FormSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
