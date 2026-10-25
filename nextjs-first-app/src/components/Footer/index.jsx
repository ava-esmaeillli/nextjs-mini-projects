import {
  FaTelegramPlane ,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const helpLinks = [
  { label: "کجاست سفارشم؟", href: "/track-order" },
  { label: "شرایط مرجوعی", href: "/returns" },
  { label: "ارسال و تحویل", href: "/shipping" },
  { label: "تماس با ما", href: "/contact" },
  { label: "سوال‌های پرتکرار", href: "/faqs" },
];

const socials = [
  { name: "تلگرام", href: "#", Icon: FaTelegramPlane },
  { name: "اینستاگرام", href: "#", Icon: FaInstagram },
  { name: "واتساپ", href: "#", Icon: FaWhatsapp },
];

export default function Footer({navItems}) {
  return (
    <footer className="w-full max-w-[1920px] flex flex-col gap-8 bg-white text-secondary px-4 pt-4 sm:px-8 lg:px-16 lg:pt-5 mx-auto">
      <div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-medium tracking-tight text-secondary">
                مینی‌استور<span className="text-sky-400">.</span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-6 text-text-secondary">
              مینی‌استور، جایی که گوشی و ساعت هوشمند رو با کیفیت عالی و قیمت خوب پیدا می‌کنی.
            </p>
            <ul className="mt-5 flex items-center gap-1">
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

          <div>
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              دسترسی سریع
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

          <div>
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              کمک و راهنما
            </h3>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((item) => (
                <li key={item.label}>
                    <a 
                    href={item.href}
                    className="text-xs uppercase tracking-wide text-secondary transition-colors hover:text-primary">
                        {item.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[15px] uppercase tracking-wide text-secondary">
              باهامون در ارتباط باش
            </h3>
            <p className="mt-5 max-w-[16rem] text-[13px] leading-5 text-text-secondary">
              سوال یا پیشنهادی داری؟ بگو، خوشحال می‌شیم بشنویم.
            </p>
            <a
              href="mailto:yourinfo@gmail.com"
              className="mt-2 block text-[13px] text-secondary transition hover:text-primary"
            >
              itsavaesmaeili@gmail.com
            </a>
            <p className="mt-5 max-w-[16rem] text-[13px] leading-5 text-text-secondary">
              کمک لازم داشتی؟ یه زنگ بزن، در خدمتیم.
            </p>
            <a
              href="tel:+989960564595"
              className="mt-2 block text-[13px] text-secondary transition hover:text-primary"
            >
              +98 996 056 4595
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-center text-xs text-text-secondary sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p>© مینی‌استور. همه‌ی حقوق محفوظ است.</p>
          <p>طراحی: Ava Esmaeili</p>
        </div>
      </div>
    </footer>
  );
}
