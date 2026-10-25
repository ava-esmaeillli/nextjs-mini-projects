import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const helpLinks = [
  { label: "Track your order", href: "/track-order" },
  { label: "Returns policies", href: "/returns" },
  { label: "Shipping + Delivery", href: "/shipping" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

const socials = [
  { name: "Facebook", href: "#", Icon: FaFacebookF },
  { name: "Pinterest", href: "#", Icon: FaPinterestP },
  { name: "Twitter", href: "#", Icon: FaTwitter },
  { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { name: "YouTube", href: "#", Icon: FaYoutube },
];

export default function Footer({navItems}) {
  return (
    <footer className="w-full max-w-[1920px] bg-white text-secondary px-4 py-4 sm:px-8 lg:px-16 lg:py-5 mx-auto">
      {/* Main */}
      <div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-medium tracking-tight text-secondary">
                MiniStore<span className="text-sky-400">.</span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-6 text-text-secondary">
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>
            <ul className="mt-5 flex items-center gap-4">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-label={item.name}
                    className="flex size-9 items-center justify-center rounded-full transition hover:bg-black/5"
                  >
                    <item.Icon className="size-5 cursor-pointer transition hover:text-primary" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                    <a
                    href={item.href}
                    className="text-xs uppercase tracking-wide text-secondary transition-colors hover:text-primary">
                        {item.title}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & info */}
          <div>
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              Help &amp; Info
            </h3>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                    <a 
                    href={l.href}
                    className="text-xs uppercase tracking-wide text-secondary transition-colors hover:text-primary">
                        {l.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              Contact Us
            </h3>
            <p className="mt-5 max-w-[16rem] text-[13px] leading-5 text-text-secondary">
              Do you have any queries or suggestions?
            </p>
            <a
              href="mailto:yourinfo@gmail.com"
              className="mt-2 block text-[13px] text-secondary transition hover:text-primary"
            >
              yourinfo@gmail.com
            </a>
            <p className="mt-5 max-w-[16rem] text-[13px] leading-5 text-text-secondary">
              If you need support? Just give us a call.
            </p>
            <a
              href="tel:+5511122233344"
              className="mt-2 block text-[13px] text-secondary transition hover:text-primary"
            >
              +55 111 222 333 44
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-center text-xs text-text-secondary sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p>© Copyright 2023 MiniStore. All rights reserved.</p>
          <p>Design by TemplatesJungle</p>
        </div>
      </div>
    </footer>
  );
}
