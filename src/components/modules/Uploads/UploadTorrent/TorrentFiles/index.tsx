import { SimpleGrid, Square, Text } from '@chakra-ui/layout'
import { Col, Row } from '@friendlyss/react'
import { Shy } from '@shyfs/shyfs-js'
import { useState } from 'react'
import { helpers } from '../../../../../services/helpers'

interface TorrentFilesProps {
  metadata: Shy.Responses.TorrentMetadata
  onChange?: (fileIndex: number) => void
}

const TorrentFiles: React.FC<TorrentFilesProps> = ({ metadata, onChange }) => {
  const [fileIndex, setFileIndex] = useState<number>()

  return (
    <Col>
      <SimpleGrid gap={2}>
        {metadata.files.map((file, keyFile) => (
          <Row
            key={`file${keyFile}`}
            bg="gray.700"
            shadow="lg"
            rounded="xl"
            p={2}
            role="group"
            alignItems="center"
            userSelect="none"
            cursor="pointer"
            onClick={() => {
              setFileIndex(() => keyFile)
              onChange?.(keyFile)
            }}
          >
            <Square
              size={5}
              rounded="xl"
              bg={fileIndex === keyFile ? 'blue.500' : 'gray.800'}
              mx={2}
              _groupHover={{ bg: 'blue.500' }}
            ></Square>
            <Col flex={1} pl={2}>
              <Text fontSize="xs">{file.name}</Text>
              <Text fontSize="xs" color="gray.100">
                {helpers.niceBytes(file.size)}
              </Text>
            </Col>
          </Row>
        ))}
      </SimpleGrid>
    </Col>
  )
}

export default TorrentFiles
