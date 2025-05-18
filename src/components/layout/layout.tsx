type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1 className="relative flex min-h-screen flex-col dark">
        <main className="flex-1 flex flex-col mb-12">{children}</main>
      </h1>
    </div>
  )
}
