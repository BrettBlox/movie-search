import { createContext, useContext } from 'react'
import styled from 'styled-components'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const colors = {
    grayDark: '#111827',
    grayLight: '#374151',
    white: '#F9FAFB',
    purpleDark: '#312E81',
    purpleLight: '#4338CA',
    shadowDark: 'rgba(49, 46, 129, .6)',
    shadowLight: 'rgba(67, 56, 202, .6)',
  }
  const screens = {
    xs: `320px`,
    sm: `640px`,
    md: `768px`,
    lg: `1024px`,
    xl: `1280px`,
  }
  const breakpoints = {
    xs: `(min-width: 320px)`,
    sm: `(min-width: 640px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 1024px)`,
    xl: `(min-width: 1280px)`,
  }

  /**
   * Styled components used multiple places throughout the app
   * @todo rethink this - rethink props, styles, and reusability. 
   * Should these components live here? Or in separate files?
   */
  const TextStyles = styled.span`
    display: inline-block;
    width: 100%;
    color: ${(props) => (props.color ? props.color : colors.white)};
    text-transform: ${(props) =>
      props.textTransform ? props.textTransform : 'none'};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
    font-weight: ${(props) =>
      props.fontWeight ? props.fontWeight : 'regular'};
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  `

  const ButtonStyles = styled.button`
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 0 20px;
    text-transform: uppercase;
    background-color: ${colors.purpleDark};
    color: ${colors.white};
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s ease;

    &[disabled] {
      cursor: not-allowed;
      background: ${colors.grayLight};
      opacity: 0.25;
    }

    &:not([disabled]):hover {
      background: ${colors.purpleLight};
      transform: scale(1.03);
    }

    &.prev-button svg {
      transform: rotate(180deg);
    }
  `

  const value = {
    colors,
    screens,
    breakpoints,
    TextStyles,
    ButtonStyles,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * Export context as custom hook 
 * Slightly more terse with an an informative error message should 
 * your component not have it's associated provider higher up the tree 
 */
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Theme context must be used inside ThemeProvider!')
  }
  return context
}

export { ThemeProvider, useTheme }
