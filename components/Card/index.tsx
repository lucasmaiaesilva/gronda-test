import React, { FC } from 'react'
import cardEnum from './cardEnum'
import * as S from './styles'

type CardProps = {
  indicatorValue: number,
  indicatorPeriod: string,
  kind: string
}

const Card: FC<CardProps> = ({
  indicatorValue,
  indicatorPeriod,
  kind
}) => {
  return (
    <S.CardContainer kind={kind}>
      <h1 className="type">{cardEnum[kind].title}</h1>
      <h2 className="value">{indicatorValue}</h2>
      <p className="period">{indicatorPeriod}</p>
    </S.CardContainer>
  )
}

export default Card

