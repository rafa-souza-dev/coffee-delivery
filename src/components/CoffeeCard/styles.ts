import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  padding: 0 1.5rem;

  ${(props) =>
    css`
      background-color: ${props.theme.baseCard};
    `}

  img {
    margin-top: -1.25rem;
  }

  div.categories {
    display: flex;
    gap: 0.25rem;
  }

  span.title {
    /* width: 5.0625rem; */
    padding: 0.25rem 0.5rem;
    height: 1.3125rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      css`
        background-color: ${props.theme.yellowLight};
      `}

    ${(props) =>
      css`
        color: ${props.theme.yellowDark};
      `}
    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    border-radius: 100px;

    margin-top: 0.75rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    ${(props) =>
      css`
        color: ${props.theme.baseSubtitle};
      `}

    margin-top: 1rem;
  }

  p.textInfo {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    ${(props) =>
      css`
        color: ${props.theme.baseLabel};
      `}

    margin-top: 0.8rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.4375rem;
    margin-top: 2.0625rem;
  }

  footer div.priceContainer {
    display: flex;
    align-items: center;
    height: 1.9375rem;
    width: 4.1875rem;
    gap: 0.2rem;
  }

  footer div.priceContainer p.priceSymbol {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  footer div.priceContainer p.priceSymbol {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.baseText};
      `}
  }

  footer div.priceContainer span.priceValue {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.baseText};
      `}
  }

  footer div.accumulatorContainer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  footer div.accumulatorContainer div.selectQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;
    gap: 0.5rem;

    ${(props) =>
      css`
        background-color: ${props.theme.baseButton};
      `}
  }

  footer div.accumulatorContainer div.selectQuantity button.accumulator {
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

  footer div.accumulatorContainer div.selectQuantity p.quantity {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.baseTitle};
      `}
  }

  footer div.accumulatorContainer div.iconCart {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;

    ${(props) =>
      css`
        background-color: ${props.theme.purple};
      `}

    ${(props) =>
      css`
        color: ${props.theme.baseCard};
      `}
  }
`
