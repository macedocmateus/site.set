import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isCurrentPath =
    router.pathname === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  )
}
