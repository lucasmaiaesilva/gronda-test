import styled from 'styled-components'

export const InfoBar = styled.div`
  padding: 1rem 0;
  margin: 2rem 0;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
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
