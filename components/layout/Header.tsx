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
  ],
};

const allConverters = [
  ...converterGroups.jpg,
  ...converterGroups.png,
  ...converterGroups.webp,
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
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
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Converters</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid grid-cols-3 gap-4">
                        {/* JPG Converters */}
                        <div>
                          <h4 className="mb-3 text-sm font-semibold text-primary">From JPG</h4>
                          <ul className="space-y-2">
                            {converterGroups.jpg.map((converter) => {
                              const Icon = converter.icon;
                              return (
                                <li key={converter.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={converter.href}
                                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="flex items-center gap-2 mb-1">
                                        <Icon className="h-3 w-3 text-primary" />
                                        <div className="text-sm font-medium">{converter.title}</div>
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {converter.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* PNG Converters */}
                        <div>
                          <h4 className="mb-3 text-sm font-semibold text-primary">From PNG</h4>
                          <ul className="space-y-2">
                            {converterGroups.png.map((converter) => {
                              const Icon = converter.icon;
                              return (
                                <li key={converter.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={converter.href}
                                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="flex items-center gap-2 mb-1">
                                        <Icon className="h-3 w-3 text-primary" />
                                        <div className="text-sm font-medium">{converter.title}</div>
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {converter.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* WebP Converters */}
                        <div>
                          <h4 className="mb-3 text-sm font-semibold text-primary">From WebP</h4>
                          <ul className="space-y-2">
                            {converterGroups.webp.map((converter) => {
                              const Icon = converter.icon;
                              return (
                                <li key={converter.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={converter.href}
                                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="flex items-center gap-2 mb-1">
                                        <Icon className="h-3 w-3 text-primary" />
                                        <div className="text-sm font-medium">{converter.title}</div>
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {converter.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
