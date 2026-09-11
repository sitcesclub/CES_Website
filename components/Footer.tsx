import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Events", href: "/events" },
    { label: "Achievements", href: "/achievements" },
    { label: "Members", href: "/members" },
    { label: "Alumni", href: "/alumni" },
    { label: "Talks", href: "/talks" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "WhatsApp", href: "https://whatsapp.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Linktree", href: "https://linktr.ee" },
  ];

  const resourceLinks = [
    { label: "Magazine", href: "#" },
    { label: "Brochure", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12">

          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="text-white font-bold text-xl tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
              CES
            </Link>
            <div className="text-sm space-y-1">
              <p className="text-slate-300 font-medium">Computer Engineers' Society</p>
              <p className="text-xs text-slate-500">Siliguri Institute of Technology</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 CES. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for developers, by developers.
          </p>
        </div>

      </div>
    </footer>
  );
}
