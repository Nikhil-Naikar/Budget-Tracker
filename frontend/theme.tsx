import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: '#FFDBB5'
    }
  })
}

const colors = {
  black: '#000000',
  light_brown: '#6C4E31',
  very_light_brown: '#A67B5B',
  dark_brown: '#603F26',
  cream: '#FFDBB5'
}


const theme = extendTheme({styles, colors})
export default theme