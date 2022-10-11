import styled, { css } from 'styled-components'

export const GridBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 29.75rem;
  gap: 3.5rem;
  margin-top: 5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media (max-width: 1169px) {
    grid-template-columns: 1fr;
  }
`

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  div.title h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 62.4px;

    ${(props) =>
      css`
        color: ${props.theme.baseTitle};
      `}
  }

  div.title span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    ${(props) =>
      css`
        color: ${props.theme.baseSubtitle};
      `}
  }

  div.icon {
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
  }

  div.iconInfo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  div.mainInfo {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  div.mainInfoWithGap {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: 4rem;
    margin-bottom: 1.25rem;
  }

  div.iconInfo p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20.8px;
  }

  div.cart {
    ${(props) =>
      css`
        background-color: ${props.theme.yellowDark};
      `}

    ${(props) =>
      css`
        color: ${props.theme.white};
      `}
  }

  div.timer {
    ${(props) =>
      css`
        background-color: ${props.theme.yellow};
      `}

    ${(props) =>
      css`
        color: ${props.theme.white};
      `}
  }

  div.package {
    ${(props) =>
      css`
        background-color: ${props.theme.baseText};
      `}

    ${(props) =>
      css`
        color: ${props.theme.white};
      `}
  }

  div.coffee {
    ${(props) =>
      css`
        background-color: ${props.theme.purple};
      `}

    ${(props) =>
      css`
        color: ${props.theme.white};
      `}
  }
`

export const ListCoffees = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  margin-top: 7rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 41.6px;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: 1166px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 864px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 574px) {
      grid-template-columns: 1fr;
    }
  }
`
