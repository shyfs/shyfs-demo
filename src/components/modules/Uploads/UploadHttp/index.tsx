import { Input } from '@chakra-ui/input'
import { Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import React from 'react'
import HeadersForm from './HeadersForm'

const UploadHttp: React.FC = () => {
  return (
    <Col>
      <Heading size="lg">HTTP Upload</Heading>
      <Col mt={8}>
        <Input
          rounded="2xl"
          border="none"
          _hover={{}}
          _focus={{}}
          _active={{}}
          bg="blue.700"
          shadow="lg"
          placeholder="Url..."
          size="lg"
        />
        <Col mt={4}>
          <HeadersForm />
        </Col>
      </Col>
      <Row mt={4}>
        <Row flex={1} />
        <Button rounded="lg" bg="gray.800" size="lg" shadow="lg">
          Upload File
        </Button>
      </Row>
    </Col>
  )
}

export default UploadHttp
