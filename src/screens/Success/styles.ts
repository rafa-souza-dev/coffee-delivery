import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 32.875rem 1fr;
  gap: 6.375rem;

  div.leftBox {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  div.leftBox div.titleContainer {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  div.leftBox div.titleContainer h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.yellowDark};
      `}
  }

  div.leftBox div.titleContainer p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    ${(props) =>
      css`
        color: ${props.theme.baseSubtitle};
      `}
  }

  div.leftBox div.addressContainer {
    height: 16.875rem;
    padding: 2.5rem;
  }
`
