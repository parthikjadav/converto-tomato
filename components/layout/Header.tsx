"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ImageIcon, FileImage, Image } from "lucide-react";
import { cn } from "@/lib/utils";

const converterGroups = {
  svg: [
    {
      title: "SVG to PNG",
      href: "/convert/svg-to-png",
      description: "Rasterize vector graphics to PNG",
      icon: FileImage,
    },
    {
      title: "SVG to JPG",
      href: "/convert/svg-to-jpg",
      description: "Rasterize vector graphics to JPG",
      icon: ImageIcon,
    },
    {
      title: "SVG to WebP",
      href: "/convert/svg-to-webp",
      description: "Rasterize to modern WebP format",
      icon: Image,
    },
    {
      title: "SVG to AVIF",
      href: "/convert/svg-to-avif",
      description: "Rasterize to next-gen AVIF format",
      icon: Image,
    },
    {
      title: "SVG to ICO",
      href: "/convert/svg-to-ico",
      description: "Create favicons from vector graphics",
      icon: ImageIcon,
    },
  ],
  jpg: [
    {
      title: "JPG to PNG",
      href: "/convert/jpg-to-png",
      description: "Add transparency support to JPG images",
      icon: FileImage,
    },
    {
      title: "JPG to WebP",
      href: "/convert/jpg-to-webp",
      description: "Convert JPG to modern WebP format",
      icon: Image,
    },
    {
      title: "JPG to AVIF",
      href: "/convert/jpg-to-avif",
      description: "Next-gen format with superior compression",
      icon: Image,
    },
    {
      title: "JPG to SVG",
      href: "/convert/jpg-to-svg",
      description: "Create scalable vector graphics",
      icon: FileImage,
    },
    {
      title: "JPG to ICO",
      href: "/convert/jpg-to-ico",
      description: "Create favicons and icons from JPG",
      icon: ImageIcon,
    },
  ],
  png: [
    {
      title: "PNG to JPG",
      href: "/convert/png-to-jpg",
      description: "Convert PNG to JPG for smaller file sizes",
      icon: ImageIcon,
    },
    {
      title: "PNG to WebP",
      href: "/convert/png-to-webp",
      description: "Convert PNG to WebP with transparency",
      icon: Image,
    },
    {
      title: "PNG to AVIF",
      href: "/convert/png-to-avif",
      description: "Next-gen format with transparency",
      icon: Image,
    },
    {
      title: "PNG to SVG",
      href: "/convert/png-to-svg",
      description: "Create scalable vector graphics",
      icon: FileImage,
    },
    {
      title: "PNG to ICO",
      href: "/convert/png-to-ico",
      description: "Create favicons with transparency",
      icon: ImageIcon,
    },
  ],
  webp: [
    {
      title: "WebP to PNG",
      href: "/convert/webp-to-png",
      description: "Convert WebP to PNG for compatibility",
      icon: FileImage,
    },
    {
      title: "WebP to JPG",
      href: "/convert/webp-to-jpg",
      description: "Convert WebP to JPG for universal support",
      icon: ImageIcon,
    },
    {
      title: "WebP to AVIF",
      href: "/convert/webp-to-avif",
      description: "Modern to next-gen format",
      icon: Image,
    },
    {
      title: "WebP to SVG",
      href: "/convert/webp-to-svg",
      description: "Create scalable vector graphics",
      icon: FileImage,
    },
    {
      title: "WebP to ICO",
      href: "/convert/webp-to-ico",
      description: "Create favicons from WebP images",
      icon: ImageIcon,
    },
  ],
};

const allConverters = [
  ...converterGroups.svg,
  ...converterGroups.jpg,
  ...converterGroups.png,
  ...converterGroups.webp,
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl">🍅</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Converto</span>
              <span className="text-xs text-muted-foreground leading-tight">
                Tomato
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {/* SVG Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">SVG</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      {converterGroups.svg.map((converter) => (
                        <li key={converter.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={converter.href}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {converter.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* JPG Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">JPG</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      {converterGroups.jpg.map((converter) => (
                        <li key={converter.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={converter.href}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {converter.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* PNG Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">PNG</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      {converterGroups.png.map((converter) => (
                        <li key={converter.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={converter.href}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {converter.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* WebP Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">WebP</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      {converterGroups.webp.map((converter) => (
                        <li key={converter.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={converter.href}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {converter.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/compress"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Compress
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link href="/convert/png-to-jpg">Convert now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col p-0"
            >
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🍅</span>
                  <span>Converto Tomato</span>
                </SheetTitle>
              </SheetHeader>
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col space-y-6">
                  {/* JPG Converters */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1">
                      From JPG
                    </h3>
                    {converterGroups.jpg.map((converter) => {
                      const Icon = converter.icon;
                      return (
                        <Link
                          key={converter.href}
                          href={converter.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">
                              {converter.title}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {converter.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* PNG Converters */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1">
                      From PNG
                    </h3>
                    {converterGroups.png.map((converter) => {
                      const Icon = converter.icon;
                      return (
                        <Link
                          key={converter.href}
                          href={converter.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">
                              {converter.title}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {converter.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* WebP Converters */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1">
                      From WebP
                    </h3>
                    {converterGroups.webp.map((converter) => {
                      const Icon = converter.icon;
                      return (
                        <Link
                          key={converter.href}
                          href={converter.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">
                              {converter.title}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {converter.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="border-t" />

                  {/* Other Links */}
                  <div className="space-y-2">
                    <Link
                      href="/compress"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
                    >
                      Compress Images
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
                    >
                      About
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Fixed Bottom CTA */}
              <div className="border-t px-6 py-4 bg-background">
                <div className="space-y-2">
                  <Button asChild>
                    <Link href="/convert/png-to-jpg">Convert now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
