import styled from 'styled-components'

export const DropDownWrapper = styled.div`
  .overlay {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
  }
`

export const Dropdown = styled.div`
  position: relative;

  .dropdown-trigger {
    display: inline-block;
    position: relative;
    &:hover {
      cursor: pointer;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      top: calc(50% - 0.4rem);
      right: 1.8rem;
      border-left: 0.1rem solid #333;
      border-bottom: 0.1rem solid #333;
      transform: rotate(-45deg);
    }

    span {
      font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
      transition: all 200ms ease;
      color: #6e6d7a;
      padding: 1rem 1.6rem;
      padding-right: 3.5rem;
      border-radius: 0.4rem;
      border: 0.1rem solid rgb(110, 109, 122);
      &:hover {
        border-color: rgba(0,0,0,0.1);
      }
    }
  }

  .dropdown-options {
    font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    margin-top: 0.4rem;
    border-radius: 0.4rem;
    border: 0.1rem solid rgba(0,0,0,0.05);
    box-shadow: 0 0.3rem 0.5rem rgba(0,0,0,0.04);
    background: #fff;
    left: 0;
    min-width: 20rem;
    position: absolute;
    top: 3.6rem;
    z-index: 3;

    & ul {
      padding: 0;
      list-style-type: none;
      padding: 1.2rem 0;
      margin: 0;

      li {
        &:hover,
        &:active {
          background-color: #e7e7e9;
          cursor: pointer;
        }
      }

      & li a,
      & li button {
        all: unset;
        display: block;
        padding: 0.8rem 1.5rem;
        font-size: 1.4rem;
        color: #6e6d7a;
        text-decoration: none;
      }
    }
  }
`
