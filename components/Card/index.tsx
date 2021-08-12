import React, { FC } from 'react'
import cardEnum from './cardEnum.json'
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
  const typedKind = kind as keyof typeof cardEnum;
  return (
    <S.CardContainer
      background={cardEnum[typedKind].background}
      backgroundGradient={cardEnum[typedKind].backgroundGradient}
    >
      <h1 className="type">{cardEnum[typedKind].title}</h1>
      <h2 className="value">{indicatorValue}</h2>
      <p className="period">{indicatorPeriod}</p>
    </S.CardContainer>
  )
}

export default Card

