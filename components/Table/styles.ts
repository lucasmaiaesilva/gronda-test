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

export const MobileCard = styled.div`
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
  border: 0.1rem solid #DBDBDB;
  padding: 2rem 1.2rem;
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  margin-bottom: 2rem;

  & > * {
    margin: 0;
    padding: 0;
    margin-bottom: .8rem;
  }
  & span {
    font-size: 1.6rem;
    color: #AEAEAE;
    font-weight: 300;
    display: block;
    margin-bottom: 0.2rem;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
