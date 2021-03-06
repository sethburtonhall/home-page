import Typography from "typography"
import funstonTheme from "typography-theme-funston"
funstonTheme.baseLineHeight = "1.5"
funstonTheme.baseFontSize = "18px"

funstonTheme.overrideThemeStyles = () => {
  return {
    h1: {
      marginBottom: `5px`,
    },
    h6: {
      fontSize: `13px`,
    },
    p: {
      margin: `10px 0 0 0`,
      textAlign: `justify`,
      marginBottom: `30px`,
    },
    a: {
      textDecoration: `none`,
      fontWeight: `bold`,

      "&:hover": {
        textDecoration: `underline`,
      },
    },
  }
}

const typography = new Typography(funstonTheme)

export default typography
