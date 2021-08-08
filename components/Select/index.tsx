import React, { useState, useEffect, FC } from 'react'
import * as S from './styles'


const Select:FC = () => {
  const [ isOpened, setIsOpened ] = useState(true)

  const handleToggleDropdown = () => {
    setIsOpened(oldState => !oldState)
  }

  useEffect(() => {
    setIsOpened(false)
  }, []);

  return (
    <S.DropDownWrapper>
      {isOpened && (
        <div className="overlay" onClick={handleToggleDropdown} />
      )}

      <S.Dropdown>
        <div className="dropdown-trigger" onClick={handleToggleDropdown}>
          <span>Indicadores</span>
        </div>

        {isOpened && (
          <div className="dropdown-options">
            <ul>
              <li>
                <button>dólar Compra</button>
              </li>
              <li>
                <a href="/dolar-venda">dólar Venda</a>
              </li>

              <li>
                <a href="/selic">selic</a>
              </li>

              <li>
                <a href="/ipca">ipca</a>
              </li>
            </ul>
          </div>
        )}
      </S.Dropdown>
    </S.DropDownWrapper>
  )
}

export default Select
