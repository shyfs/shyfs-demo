import { Img } from '@chakra-ui/image'
import { Heading, SimpleGrid, Square } from '@chakra-ui/layout'
import { BoxFile, Col, ContainerScreen, Row } from '@friendlyss/react'
import AppScroll from '../../../shared/Scrolls/AppScroll'
import Logo from '../../../../assets/img/logo-transparent.png'
import SquareButtonLg from '../../../shared/Buttons/SquareButtonLg'
import { Button } from '@chakra-ui/button'
import { shy } from '../../../../services/clients/shy'

const IndexMasterPage: React.FC = () => {
  return (
    <ContainerScreen>
      <AppScroll>
        <Col h={500}>
          <Col
            w="98%"
            h="100%"
            mx="auto"
            pos="relative"
            bgGradient="linear(to-b, blue.800, blue.600)"
            roundedBottom="2xl"
          >
            <Col pt={20} mx="auto" userSelect="none">
              <Square size={64} mx="auto">
                <Img src={Logo} w="100%" h="100%" objectFit="contain" />
              </Square>
              <Heading size="2xl">Shy File System</Heading>
            </Col>
            <Row pos="absolute" bottom={-24} w="100%" left={0}>
              <SimpleGrid columns={3} w={1100} maxW="100%" mx="auto" mt={10}>
                <Col alignItems="center">
                  <SquareButtonLg provider={'local'} />
                </Col>
                <Col alignItems="center">
                  <SquareButtonLg provider={'http'} />
                </Col>
                <Col alignItems="center">
                  <SquareButtonLg provider={'torrent'} />
                </Col>
              </SimpleGrid>
            </Row>
          </Col>
        </Col>
        <Col mt={28}>
          <Col mx="auto" w={1100} maxW="100%" bg="blue.500" rounded="2xl" p={4}>
            <Heading size="lg">Local Upload</Heading>
            <Row my={4}>
              <BoxFile
                input={{
                  onChange: (e) => {
                    const [file] = Array.from(e.target.files || [])
                    console.log(file)
                    shy.uploads
                      .local()
                      .upload({
                        file,
                        from: 'local',
                        path: '/VSFSDDD/folder2/fileName'
                      })
                      .then((res) => {
                        console.log('response', res)
                      })
                  }
                }}
              >
                <Button rounded="lg" bg="gray.800" size="lg" shadow="lg">
                  Upload File
                </Button>
              </BoxFile>
            </Row>
          </Col>
        </Col>
      </AppScroll>
    </ContainerScreen>
  )
}

export default IndexMasterPage
