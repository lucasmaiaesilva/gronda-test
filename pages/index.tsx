import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Card from '../components/Card'
import InfoBar from '../components/InfoBar'
import Table from '../components/Table'

const Display = styled.section`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3.4rem;
  }
`
type displayCategoryItemProps = {
  current_period: number,
  last_period: number,
}

type dropdownOption = {
  name: string,
  func: Function,
}

export default function Home() {
  const [ filterOption, setFilterOption ] = useState('This Month');
  const [ sortOption, setSortOption ] = useState('id');
  const [ cardsData, setCardsData ] = useState({});
  const [ filteredData, setFilteredData ] = useState([])

  const filterOptions:dropdownOption[] = [
    {
      name: 'This Month',
      func: () => {
        setFilterOption('This Month')
      }
    },
    {
      name: 'Last Month',
      func: () => {
        setFilterOption('Last Month')
      }
    },
    {
      name: 'This Quarter',
      func: () => {
        setFilterOption('This Quarter')
      }
    },
    {
      name: 'Last Quarter',
      func: () => {
        setFilterOption('Last Quarter')
      }
    },
    {
      name: 'This Year',
      func: () => {
        setFilterOption('This Year')
      }
    },
    {
      name: 'Last Year',
      func: () => {
        setFilterOption('Last Year')
      }
    },
  ]

  const sortOptions:dropdownOption[]  = [
    {
      name: 'Id',
      func: () => {
        setSortOption('Id')
      }
    },
    {
      name: 'Segment',
      func: () => {
        setSortOption('Segment')
      }
    },
    {
      name: 'Best NPS avg',
      func: () => {
        setSortOption('Best NPS avg')
      }
    },
    {
      name: 'Worst NPS avg',
      func: () => {
        setSortOption('Worst NPS avg')
      }
    },
  ]

  useEffect(() => {
    fetch(`http://localhost:3000/api/data?test=${filterOption}`)
      .then(res => res.json())
      .then(({ resp }):any => setCardsData(resp))
  }, [filterOption])

  useEffect(() => {
    fetch(`http://localhost:3000/api/filter?test=${sortOption}`)
      .then(res => res.json())
      .then(({ resp }):any => setFilteredData(resp))
  }, [sortOption])

  const cards:Array<string> = Object.keys(cardsData)

  return (
    <>
      <InfoBar
        label="Filter By"
        options={filterOptions}
        selectedValue={filterOption}
      />
      <Container>
        <Display>
          {cards && cards.map((item:string) => {
            const dataItem:displayCategoryItemProps = cardsData[item]
            const { current_period, last_period } = dataItem
            return (
              <Card
                key={item}
                kind={item}
                indicatorValue={current_period}
                indicatorPeriod={`${last_period} Last Period`}
              />
            )
          })}
        </Display>
      </Container>
      <InfoBar
        label="Sort By"
        options={sortOptions}
        selectedValue={sortOption}
      />
      <Table data={filteredData} />
    </>
  )
}

