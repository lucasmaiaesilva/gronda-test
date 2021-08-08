import React, { FC } from 'react'
import * as S from './styles'

type CardProps = {
  indicatorType: string,
  indicatorValue: number,
  indicatorPeriod: string
}

const Card: FC<CardProps> = ({
  indicatorType,
  indicatorValue,
  indicatorPeriod
}) => {
  return (
    <S.CardContainer>
      <h1 className="type">{indicatorType}</h1>
      <h2 className="value">{indicatorValue}</h2>
      <p className="period">{indicatorPeriod}</p>
    </S.CardContainer>
  )
}

export default Card

