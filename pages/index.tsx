import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Card from '../components/Card'
import InfoBar from '../components/InfoBar'
// import Table from '../components/Table'

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

// type displayCategoryProps = {
//   active_source: displayCategoryItemProps,
//   nps: displayCategoryItemProps,
//   weekly_active: displayCategoryItemProps,
// }

// type displayDataProps = {
//   data: displayCategoryProps
// }

type dropdownOption = {
  name: string,
  func: Function,
}

export default function Home({ data }:any) {
  const [ filterOption, setFilterOption ] = useState('This Month');
  const [ sortOption, setSortOption ] = useState('id');

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
    fetch(`http://localhost:3000/api/filter?test=${sortOption}`)
      .then(res => res.json())
      .then(data => console.log({ data }))
  }, [sortOption])

  const cards:Array<string> = Object.keys(data)

  return (
    <>
      <InfoBar
        label="Filter By"
        options={filterOptions}
        selectedValue={filterOption}
      />
      <Container>
        <Display>
          {cards.map((item:string) => {
            const dataItem:displayCategoryItemProps = data[item]
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
      {/* <Table /> */}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/data')
  const { resp } = await res.json()

  return {
    props: {
      data: resp,
    },
    revalidate: 3600 * 24,
    // daily revalidating data to make sure that will be exists only
    // one request per day on this endpoint
  };
};
