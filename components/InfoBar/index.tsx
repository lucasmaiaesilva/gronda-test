import * as S from './styles'
import Container from '../Container'
import Select from '../Select'

const InfoBar = () => (
  <Container>
    <S.InfoBar>
      <div className="info-block">
        <span>Filter By: </span>
        <Select />
      </div>
    </S.InfoBar>
  </Container>
)

export default InfoBar
