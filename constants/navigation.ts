export interface NavItem {
  title: string;
  href: string;
}

export const navigation: NavItem[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang Kami",
    href: "/about",
  },
  {
    title: "Produk & Bisnis",
    href: "/products",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Kontak",
    href: "/contact",
  },
];