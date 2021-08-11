import React, { useState, FC } from 'react'
import * as S from './styles'

type SelectProps = {
  options: any,
  selectedValue: string
}


const Select:FC<SelectProps> = ({ options, selectedValue }) => {
  const [ isOpened, setIsOpened ] = useState(false)

  const handleToggleDropdown = () => {
    setIsOpened(oldState => !oldState)
  }

  const handleClick = (callback:Function) => {
    setIsOpened(false)
    callback()
  }

  return (
    <S.DropDownWrapper>
      {isOpened && (
        <div className="overlay" onClick={handleToggleDropdown} />
      )}

      <S.Dropdown>
        <div className="dropdown-trigger" onClick={handleToggleDropdown}>
          <span>{selectedValue}</span>
        </div>

        {isOpened && (
          <div className="dropdown-options">
            <ul>
              {options.map((option:any) => (
                <li key={option.name}>
                  <button onClick={() => handleClick(option.func)}>
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </S.Dropdown>
    </S.DropDownWrapper>
  )
}

export default Select
