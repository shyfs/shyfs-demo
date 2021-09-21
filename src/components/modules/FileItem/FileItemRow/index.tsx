import { Circle, Heading, Text } from '@chakra-ui/layout'
import { Col, Row } from '@friendlyss/react'

const FileItemRow: React.FC = () => {
  return (
    <Row p={4} rounded="2xl" bg="gray.900" shadow="lg">
      <Circle
        size={14}
        border="4px solid transparent"
        borderColor="lighten.50"
      ></Circle>
      <Col pl={4} flex={1}>
        <Heading size="md">Filename.mp4</Heading>
        <Text fontSize="xs" color="gray.400">
          10MB
        </Text>
      </Col>
      <Text fontSize="xs" color="gray.400">
        uploading
      </Text>
    </Row>
  )
}

export default FileItemRow
