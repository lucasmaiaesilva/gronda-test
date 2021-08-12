import { Fragment } from 'react'
import Container from '../Container'
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

type NpsOptions = {
  average: string,
  last: string,
  first: string,
}

type TableItem = {
  id: number,
  companyname: string,
  segment: string,
  contract: string,
  renewals: string,
  nps: NpsOptions,
}

type TableProps = {
  data: TableItem[],
}

const Table = ({ data }:TableProps) => {
  return (
    <Container>
      {data && data.map((item:any) => (
        <S.MobileCard key={item.id}>
          <div>
            <span>id: </span>
            {item.id}
          </div>
          <div>
            <span>company name: </span>
            {item.companyname}
          </div>
          <div>
            <span>segmant: </span>
            {item.segment}
          </div>
          <div>
            <span>contract: </span>
            {item.contract}
          </div>
          <div>
            <span>renewals: </span>
            {item.renewals}
          </div>
          <div>
            <span>NPS avg: </span>
            {item.nps.average}
          </div>
          <div>
            <span>NPS last: </span>
            {item.nps.last}
          </div>
          <div>
            <span>NPS first: </span>
            {item.nps.first}
          </div>

        </S.MobileCard>
      ))}
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
