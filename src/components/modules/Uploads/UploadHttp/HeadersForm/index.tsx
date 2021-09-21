import { Heading, Input, Square } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { useEffect, useCallback, useState } from 'react'

import { BsPlus, BsX } from 'react-icons/bs'

export interface HeaderRow {
  key: string
  value: string
}

interface HeadersFormProps {
  onChange?: (headers: HeaderRow[]) => void
}

const HeadersForm: React.FC<HeadersFormProps> = ({ onChange }) => {
  const [headers, setHeaders] = useState<HeaderRow[]>([])

  useEffect(() => {
    onChange?.(headers)
  }, [headers])

  const add = useCallback((header: HeaderRow) => {
    setHeaders((oldHeaders) => [...oldHeaders, header])
  }, [])

  const remove = useCallback((index: number) => {
    setHeaders((oldHeaders) => oldHeaders.filter((_, key) => key !== index))
  }, [])

  const edit = useCallback(
    (index: number, field: keyof HeaderRow, value: string) => {
      setHeaders((oldHeaders) => {
        return oldHeaders.map((header, key) => {
          if (key !== index) return header

          return {
            ...header,
            [field]: value
          }
        })
      })
    },
    []
  )

  return (
    <Col>
      <Row mb={2} alignItems="center">
        <Heading size="xs" letterSpacing={2} userSelect="none" flex={1}>
          Headers
        </Heading>
        <Square
          size={8}
          rounded="sm"
          bg="darken.100"
          cursor="pointer"
          userSelect="none"
          onClick={() => {
            add({ key: '', value: '' })
          }}
        >
          <BsPlus size={22} />
        </Square>
      </Row>
      <Col
        border="1px solid transparent"
        borderColor="darken.100"
        borderBottomWidth={0}
        rounded="md"
      >
        {headers.map((header, keyHeader) => (
          <Row
            h={8}
            key={`header${keyHeader}`}
            borderBottom="1px solid transparent"
            borderColor="darken.100"
          >
            <Row
              w={'30%'}
              h="100%"
              borderRight="1px solid transparent"
              borderColor="darken.100"
            >
              <Input
                w="100%"
                h="100%"
                variant="unstyled"
                placeholder="Name"
                px={2}
                value={header.key}
                onChange={(e) => {
                  edit(keyHeader, 'key', e.target.value)
                }}
              />
            </Row>
            <Row flex={1} h="100%">
              <Input
                w="100%"
                h="100%"
                variant="unstyled"
                placeholder="Value"
                px={2}
                value={header.value}
                onChange={(e) => {
                  edit(keyHeader, 'value', e.target.value)
                }}
              />
            </Row>
            <Square
              size={6}
              bg="darken.100"
              border="1px solid transparent"
              borderColor="darken.100"
              cursor="pointer"
              m={1}
              userSelect="none"
              transition="transform .1s ease-in-out"
              _active={{ transform: 'scale(0.9)' }}
              rounded="md"
              onClick={() => {
                remove(keyHeader)
              }}
            >
              <BsX size={22} />
            </Square>
          </Row>
        ))}
      </Col>
    </Col>
  )
}

export default HeadersForm
