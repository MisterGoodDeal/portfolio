export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen w-full dark text-foreground bg-background overflow-x-hidden">
      {/* <div className="flex justify-center items-center w-full">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#00163b"
          pillColor="#01112b"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#fff"
        />
      </div>
      ;{" "} */}
      <main className="w-full flex-grow dark text-foreground bg-background">
        {children}
      </main>
      {/* <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer> */}
    </div>
  );
}
