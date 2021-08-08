import { Fragment } from 'react'
import Container from '../Container'
import data from './mockedData.json'
import * as S from './styles'

const tableHead = [
  'Id',
  'Company name',
  'Segment',
  'Contract',
  'Renewals',
  'NPS avg',
  'NPS last',
  'NPS first'
];

const Table = () => {
  return (
    <Container>
      <S.TableWrapper>
        {tableHead.map((headitem) => (
          <div className="head" key={headitem}>
            {headitem}
          </div>
        ))}
      </S.TableWrapper>
      <S.TableWrapper>
        {data && data.map((item:any) => (
          <Fragment key={item.id}>
            <div>{item.id}</div>
            <div>{item.companyname}</div>
            <div>{item.segment}</div>
            <div>{item.contract}</div>
            <div>{item.renewals}</div>
            <div>{item.nps.average}</div>
            <div>{item.nps.last}</div>
            <div>{item.nps.first}</div>
          </Fragment>
        ))}
      </S.TableWrapper>
    </Container>
  )
}

export default Table
