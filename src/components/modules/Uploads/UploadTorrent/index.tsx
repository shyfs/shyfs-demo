import { Button, Heading, Input } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { Shy } from '@shyfs/shyfs-js'
import React, { useState } from 'react'
import { useDispatcher } from '../../../../hooks/helpers/useDispatcher'
import { shy } from '../../../../services/clients/shy'
import TorrentFiles from './TorrentFiles'

const UploadTorrent: React.FC = () => {
  const [magnet, setMagnet] = useState('')
  const [metadata, setMetadata] = useState<Shy.Responses.TorrentMetadata>()
  const [fileIndex, setFileIndex] = useState<number>()

  const searchMagnetUri = useDispatcher(async () => {
    return shy.uploads.torrent().metadata(magnet).then(setMetadata)
  }, [magnet])
  const upload = useDispatcher(async () => {
    if (fileIndex === undefined) return
    return shy.uploads.torrent().upload({
      torrent: {
        index: fileIndex,
        magnet
      },
      from: 'torrent',
      path: `shy-tester/${Date.now()}`
    })
  }, [fileIndex, magnet])

  return (
    <Col>
      <Heading size="lg">Torrent Upload</Heading>
      <Col mt={8}>
        <Input
          rounded="2xl"
          border="none"
          _hover={{}}
          _focus={{}}
          _active={{}}
          bg="blue.700"
          shadow="lg"
          placeholder="Magnet..."
          size="lg"
          value={magnet}
          onChange={(e) => setMagnet(e.target.value)}
        />
      </Col>
      {metadata && (
        <Col mt={4}>
          <TorrentFiles metadata={metadata} onChange={setFileIndex} />
        </Col>
      )}
      <Row mt={4}>
        <Row flex={1} />
        <Button
          rounded="lg"
          bg="gray.800"
          size="lg"
          shadow="lg"
          isDisabled={magnet === ''}
          onClick={fileIndex !== undefined ? upload.call : searchMagnetUri.call}
          isLoading={
            fileIndex !== undefined ? upload.isLoading : searchMagnetUri.isLoading
          }
        >
          {fileIndex !== undefined ? 'Upload' : 'Search Magnet Link'}
        </Button>
      </Row>
    </Col>
  )
}

export default UploadTorrent
