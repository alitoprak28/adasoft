import type { ReactNode, SVGProps } from "react";

// Stroke icons drawn on a 24px grid. They inherit color from `currentColor`.
const paths = {
  web: <><rect x="3" y="4" width="18" height="15" rx="2.5" /><path d="M3 8.5h18M6.5 6.25h.01M9 6.25h.01M7 13h6M7 15.5h10" /></>,
  cart: <><path d="M5.5 7.5h13l-1.2 12.5H6.7L5.5 7.5z" /><path d="M9 7.5V7a3 3 0 0 1 6 0v.5" /></>,
  mobile: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  game: <><path d="M7 8h10a4.5 4.5 0 0 1 4.4 5.4l-.7 3.4a2.5 2.5 0 0 1-4.3 1.2L14.2 16H9.8L7.6 18a2.5 2.5 0 0 1-4.3-1.2l-.7-3.4A4.5 4.5 0 0 1 7 8z" /><path d="M8 10.8v3.4M6.3 12.5h3.4M15.5 11.5h.01M17.5 13.5h.01" /></>,
  ai: <><path d="M11 3.5l1.9 4.9 4.9 1.9-4.9 1.9L11 17.1l-1.9-4.9-4.9-1.9 4.9-1.9L11 3.5z" /><path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" /></>,
  palette: <><path d="M12 3a9 9 0 0 0 0 18c1.2 0 1.9-1 1.5-2-.4-1.1.4-2.2 1.6-2.2H17a4 4 0 0 0 4-4C21 7.3 17 3 12 3z" /><circle cx="7.5" cy="11.5" r="1.1" /><circle cx="10" cy="7.3" r="1.1" /><circle cx="14.8" cy="7.3" r="1.1" /></>,
  megaphone: <><path d="M3.5 10v4a1 1 0 0 0 1 1h2.5l5 4V5L7 9H4.5a1 1 0 0 0-1 1z" /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" /></>,
  server: <><rect x="3.5" y="4" width="17" height="6.5" rx="1.6" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" /><path d="M7 7.25h.01M7 16.75h.01M11 7.25h6M11 16.75h6" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4M8 13.5h3" /></>,
  calendarCheck: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4M8.5 14.5l2 2 4-4" /></>,
  star: <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.5z" />,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 13a8 8 0 0 0 14.3 4.9L20 16" /><path d="M4 4v4h4M20 20v-4h-4" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.3 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.3-3.5-8.5s1-6 3.5-8.5z" /></>,
  bed: <><path d="M3 7v12M21 19v-6a3 3 0 0 0-3-3h-8v6M3 16h18" /><circle cx="6.5" cy="12" r="1.9" /></>,
  home: <><path d="M4 11l8-6 8 6v9H4v-9z" /><path d="M10 20v-5h4v5" /></>,
  building: <><path d="M4 20h16M6 20V9l6-4 6 4v11" /><path d="M10 20v-4h4v4M9.5 11.5h.01M14.5 11.5h.01" /></>,
  cap: <><path d="M3 9l9-4 9 4-9 4-9-4z" /><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4M21 9v5" /></>,
  health: <><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /><path d="M8.5 11.5h2l1-2 1.5 4 1-2h1.5" /></>,
  car: <><path d="M4.5 16.5h15v-4l-2.2-5H6.7l-2.2 5v4z" /><path d="M4.5 12.5h15M7.5 16.5v2M16.5 16.5v2M8 14.5h.01M16 14.5h.01" /></>,
  cup: <><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z" /><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v3M11 3.5v3M14 3.5v3" /></>,
  truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  store: <><path d="M4 10v10h16V10" /><path d="M3 6.5L4.5 3h15L21 6.5V8a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V6.5zM10 20v-5h4v5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chat: <path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z" />,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z" /><path d="M9.5 9.5c.3 1.9 2.1 3.8 4 4.2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
  phone: <path d="M5 4h3.5l2 5-2.4 1.5a11 11 0 0 0 5.4 5.4L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" /><path d="M10 19.5a2 2 0 0 0 4 0" /></>,
  user: <><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" /><path d="M9 8h6M9 12h6" /></>,
  lifebuoy: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="M6 6l3.5 3.5M14.5 14.5L18 18M18 6l-3.5 3.5M9.5 14.5L6 18" /></>,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type IconProps = { name: IconName; size?: number; strokeWidth?: number } & Omit<SVGProps<SVGSVGElement>, "name">;

export function Icon({ name, size = 24, strokeWidth = 1.8, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
