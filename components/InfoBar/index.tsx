import * as S from './styles'
import Container from '../Container'
import Select from '../Select'

type InfoBarProps = {
  label: string,
  options: any,
  selectedValue: string
}

const InfoBar = ({ label, options, selectedValue }:InfoBarProps) => (
  <Container>
    <S.InfoBar>
      <div className="info-block">
        <span>{label}</span>
        <Select options={options} selectedValue={selectedValue} />
      </div>
    </S.InfoBar>
  </Container>
)

export default InfoBar
