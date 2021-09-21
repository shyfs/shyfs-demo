import { Square } from '@chakra-ui/layout'
import { Col } from '@friendlyss/react'
import { Shy } from '@shyfs/shyfs-js'
import DownloadProviderIcon from '../../Icons/DownloadProviderIcon'

interface SquareButtonLgProps {
  provider: Shy.FileDownload['provider']
}

const SquareButtonLg: React.FC<SquareButtonLgProps> = ({ provider }) => {
  return (
    <Square
      size={48}
      bgGradient="linear(to-b, gray.700, gray.800)"
      shadow="lg"
      rounded="2xl"
      transition="box-shadow .3s ease-in-out"
      _hover={{ shadow: 'none', bg: 'gray.800' }}
      border="2px solid transparent"
      borderColor="blue.500"
    >
      <Col>
        <DownloadProviderIcon name={provider} />
      </Col>
    </Square>
  )
}

export default SquareButtonLg
