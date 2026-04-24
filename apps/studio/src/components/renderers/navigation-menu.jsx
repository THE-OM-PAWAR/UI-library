export function renderNavigationMenu({
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
}) {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-4">
      <NavigationMenu viewport>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[320px] gap-1 p-2">
                <li><NavigationMenuLink href="#">Button</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#">Dialog</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#">Tooltip</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="px-4 py-2">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-muted">Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[240px] gap-1 p-2">
                <li><NavigationMenuLink href="#">UI Kit</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#">Icons</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-muted">Pricing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-1 p-2">
                <li><NavigationMenuLink href="#">Starter</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#">Pro</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="rounded-md border border-border px-4 py-2">
              Simple link item
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="rounded-md bg-primary/10 px-4 py-2 text-primary">
              Highlighted item
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs">Compact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[180px] gap-1 p-2">
                <li><NavigationMenuLink href="#">About</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
