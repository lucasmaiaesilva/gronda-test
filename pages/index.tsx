import styled from 'styled-components'
import Container from '../components/Container'
import Card from '../components/Card'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Display = styled.section`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3.4rem;
  }
`

export default function Home() {
  return (

    <Container>
      <Display>
        <Card indicatorType="Active sourcing" indicatorValue={20} indicatorPeriod="34 Last Period" />
        <Card indicatorType="Active sourcing" indicatorValue={20} indicatorPeriod="34 Last Period" />
        <Card indicatorType="Active sourcing" indicatorValue={20} indicatorPeriod="34 Last Period" />
      </Display>
    </Container>
  )
}

