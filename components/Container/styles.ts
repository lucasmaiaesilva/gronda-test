import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 34px;
  padding-right: 34px;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1500px;
  }
`;
