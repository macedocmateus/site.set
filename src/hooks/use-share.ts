import type { ShareConfig } from './social-providers'

type UseShareProps = ShareConfig & {
  clipboardTimeOut?: number
}

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeOut = 2000,
}: UseShareProps) => {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  }

  return {}
}
