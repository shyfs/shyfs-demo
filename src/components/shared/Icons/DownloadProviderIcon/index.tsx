import { Heading, Image, Square } from '@chakra-ui/react'
import { Shy } from '@shyfs/shyfs-js'
import { FiHardDrive } from 'react-icons/fi'

interface DownloadProviderIconProps {
  name: Shy.FileDownload['provider']
  size?: number
  iconSize?: number
  fontSize?: number
}

const DownloadProviderIcon: React.FC<DownloadProviderIconProps> = ({
  name,
  size = 32,
  iconSize = 40,
  fontSize = 32
}) => {
  return (
    <Square size={size} rounded="sm" userSelect="none">
      {name === 'torrent' && (
        <Image
          w="100%"
          h="100%"
          objectFit="contain"
          src="https://cdn2.iconfinder.com/data/icons/circular-icon-set/256/Torrent.png"
        />
      )}
      {name === 'http' && (
        <Square w="100%" h="100%" rounded="sm">
          <Heading fontSize={fontSize}>HTTP</Heading>
        </Square>
      )}
      {name === 'local' && (
        <Square w="100%" h="100%" rounded="sm">
          <Heading size="xs">
            <FiHardDrive size={iconSize} />
          </Heading>
        </Square>
      )}
    </Square>
  )
}

export default DownloadProviderIcon
