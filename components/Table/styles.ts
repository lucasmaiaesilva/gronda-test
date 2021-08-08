import styled from 'styled-components'

export const TableWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    & > * {
      text-align: center;
      border-bottom: 0.1px solid #777;
      padding: 2rem 0;
      font-size: 1.2rem;
    }
    & .head {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`
