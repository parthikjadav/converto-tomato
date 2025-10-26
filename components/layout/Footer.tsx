"use cache";

import Link from "next/link";
import { Github, Mail } from "lucide-react";

const footerLinks = {
  converters: [
    { name: "JPG to PNG", href: "/convert/jpg-to-png" },
    { name: "JPG to WebP", href: "/convert/jpg-to-webp" },
    { name: "PNG to JPG", href: "/convert/png-to-jpg" },
    { name: "PNG to WebP", href: "/convert/png-to-webp" },
    { name: "WebP to PNG", href: "/convert/webp-to-png" },
    { name: "WebP to JPG", href: "/convert/webp-to-jpg" },
  ],
  company: [{ name: "About", href: "/about" }],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/parthikjadav" },
  { name: "Email", icon: Mail, href: "mailto:jadavparthik56@gmail.com" },
];

export default async function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🍅</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Converto
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Tomato
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Fast, secure, and free image conversion tools. Convert your images
              instantly in your browser.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-md bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Converters Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Converters</h3>
            <ul className="space-y-3">
              {footerLinks.converters.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Converto Tomato. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for image conversion
          </p>
        </div>
      </div>
    </footer>
  );
}
