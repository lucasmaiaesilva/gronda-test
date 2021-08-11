import styled from 'styled-components'

export const InfoBar = styled.div`
  padding: 1rem 0;
  margin: 2rem 0;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  .title-bar {
    font-size: 1.4rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
    margin: 0;
    }
  }
  .info-block {
    display: flex;
    align-items: center;
    & > span {
      font-size: 1.4rem;
      margin-right: 1rem;
    }
  }
`
