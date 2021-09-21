import { Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { BoxFile, Col, Row } from '@friendlyss/react'
import { Shy } from '@shyfs/shyfs-js'
import { shy } from '../../../../services/clients/shy'

interface UploadLocalProps {
  onUpload?: (file: Shy.File) => void
}

const UploadLocal: React.FC<UploadLocalProps> = ({ onUpload }) => {
  return (
    <Col>
      <Heading size="lg">Local Upload</Heading>
      <Row mt={8}>
        <BoxFile
          input={{
            onChange: (e) => {
              const [file] = Array.from(e.target.files || [])

              shy.uploads
                .local()
                .upload({
                  file,
                  from: 'local',
                  path: `shy-tester/${Date.now()}`
                })
                .then(onUpload)
            }
          }}
        >
          <Button rounded="lg" bg="gray.800" size="lg" shadow="lg">
            Upload File
          </Button>
        </BoxFile>
      </Row>
    </Col>
  )
}

export default UploadLocal
