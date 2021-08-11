import * as S from './styles'
import Container from '../Container'
import Select from '../Select'

type InfoBarProps = {
  label: string,
  options: any,
  selectedValue: string,
  titleBar?: string,
}

const InfoBar = ({ label, options, selectedValue, titleBar }:InfoBarProps) => (
  <Container>
    <S.InfoBar>
      <div className="title-bar">
        {titleBar ?? ''}
      </div>
      <div className="info-block">
        <span>{label}</span>
        <Select options={options} selectedValue={selectedValue} />
      </div>
    </S.InfoBar>
  </Container>
)

export default InfoBar
