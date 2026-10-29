const P = {
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  plane: "M2 14l8-2 4-9 2 1-2 8 6 2v2l-7-1-2 5h-2v-5l-7-1z",
  flame: "M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z",
  cross: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
  cog: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
  leaf: "M5 19c0-9 5-14 15-14 0 10-5 15-14 15M5 19l8-8",
  network: "M12 6v4M12 10H5v4M12 10h7v4M3 14h4v4H3zM17 14h4v4h-4zM10 2h4v4h-4z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  camera: "M3 7h4l2-3h6l2 3h4v12H3zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
  building: "M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M3 21h18",
  brush: "M4 4h16v6H4zM12 10v4M10 14h4v7h-4z",
  clipboard: "M8 4h8v3H8zM6 5H5v16h14V5h-1M9 12h6M9 16h6",
  users: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 1 0 0-5M21 19c0-2-1.5-3.5-3.5-4",
  truck: "M2 6h12v10H2zM14 9h4l3 3v4h-7M7 19a1.5 1.5 0 1 0 0-.01M17 19a1.5 1.5 0 1 0 0-.01",
  monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
  pin: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  lock: "M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4M12 15v2",
  cube: "M12 2l9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10",
  check: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6",
  ruler: "M3 17L17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2",
  handshake: "M11 17l2 2a1 1 0 1 0 3-3M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7-.9l.5.3a2 2 0 0 0 1.4.3L21 4M21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8",
  hub: "M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 9.5V4M12 14.5V20M9.8 10.8L5 8M14.2 13.2L19 16M9.8 13.2L5 16M14.2 10.8L19 8M12 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM4 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM4 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
  video: "M3 7h12v10H3zM15 11l6-3v8l-6-3z",
  buildings: "M5 21V3h9v18M14 8h5v13M8 7h3M8 11h3M8 15h3M3 21h18",
  bank: "M3 9l9-6 9 6zM5 10v8M9 10v8M15 10v8M19 10v8M3 21h18",
  cart: "M3 4h3l2.5 11h9L20 7H7M10 20a1 1 0 1 0 0-.01M17 20a1 1 0 1 0 0-.01",
  factory: "M3 21V10l6 4v-4l6 4V6h3v15zM7 17h2M12 17h2",
  arrow: "M5 12h14M13 6l6 6-6 6",
  quote: "M9 7H5v6h4v4H5M19 7h-4v6h4v4h-4",
  chevron: "M6 9l6 6 6-6",
  left: "M15 6l-6 6 6 6",
  right: "M9 6l6 6-6 6",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5v.01",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
};

export default function Icon({ name, size = 28, sw = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name] || P.cog} />
    </svg>
  );
}
