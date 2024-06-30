import CookieProvider from "@/wrappers/CookieProvider";

export default function RootLayout({ children }) {
  return <CookieProvider>{children}</CookieProvider>;
}
