import { Box } from '@chakra-ui/react'
import React from 'react'

interface AppScrollProps {
  onlyHover?: boolean
  bg?: string
  bgHover?: string
}

const AppScroll: React.FC<AppScrollProps> = ({
  children,
  onlyHover,
  bg = 'gray.600',
  bgHover = 'gray.600'
}) => {
  return (
    <Box
      w="100%"
      h="100%"
      pos="absolute"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: 2,
          bg: 'transparent'
          // rounded: 'sm'
        },
        '&::-webkit-scrollbar-track': {
          width: 4,
          py: 2
        },
        '&::-webkit-scrollbar-thumb': {
          background: onlyHover ? 'transparent' : bg,
          rounded: 'lg'
        },
        ':hover&': {
          '&::-webkit-scrollbar-thumb': {
            background: onlyHover ? bgHover : bgHover
          }
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'gray.800'
        }
        // '::-webkit-scrollbar-button': {
        //   height: 1
        // }
      }}
    >
      {children}
    </Box>
  )
}

export default AppScroll
