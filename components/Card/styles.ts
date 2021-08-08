import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2rem 2.2rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 3.8rem;
  color: #fff;
  font-family: sans-serif;
  border-radius: .4rem;

  & > * {
    padding: 0;
    margin: 0;
  }

  .type {
    font-size: 1.4rem;
  }

  .value {
    font-size: 2.2rem;
  }

  .period {
    font-size: 1.4rem;
  }

  background-color: tomato;
`
