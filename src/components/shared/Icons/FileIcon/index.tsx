import { useMemo } from 'react'
import { GoFileMedia, GoFile, GoFilePdf, GoFileZip } from 'react-icons/go'
import { FaFileVideo } from 'react-icons/fa'

interface FileIconProps {
  size?: number
  mimeType?: string
}

const FileIcon: React.FC<FileIconProps> = ({ size = 26, mimeType }) => {
  const Component = useMemo(() => {
    if (!mimeType) return GoFile

    if (mimeType.startsWith('video')) {
      return FaFileVideo
    }

    if (mimeType.startsWith('image')) {
      return GoFileMedia
    }

    if (mimeType === 'application/pdf') {
      return GoFilePdf
    }

    if (mimeType === 'application/zip') {
      return GoFileZip
    }

    return GoFile
  }, [mimeType])

  return <Component size={size} />
}

export default FileIcon
