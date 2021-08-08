import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  padding: 2rem 2.2rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 3.8rem;
  color: #fff;
  font-family: sans-serif;
  border-radius: .4rem;
  overflow: hidden;

  & > * {
    padding: 0;
    margin: 0;
  }

  .type {
    font-size: 1.6rem;
  }

  .value {
    font-size: 2.8rem;
  }

  .period {
    font-size: 1.4rem;
  }

  &:before,
  &:after {
    content: "";
    border-radius: 50%;
    background-color: white;
    position: absolute;
    opacity: 0.5;
  }

  &:before {
    width: 20rem;
    height: 20rem;
    right: -5rem;
    bottom: -9rem;
  }

  &:after {
    width: 13rem;
    height: 13rem;
    top: -4rem;
    right: -6rem;
  }

  background-color: tomato;
`
