const iconMap = {
  lock: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
      focusable="false"
    >
      <path
        d="M7 10V7a5 5 0 0 1 10 0v3h.5A2.5 2.5 0 0 1 20 12.5v7A2.5 2.5 0 0 1 17.5 22h-11A2.5 2.5 0 0 1 4 19.5v-7A2.5 2.5 0 0 1 6.5 10H7Zm2 0h6V7a3 3 0 0 0-6 0v3Zm3 4a1.5 1.5 0 1 0-.001 3.001A1.5 1.5 0 0 0 12 14Z"
        fill="currentColor"
      />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" focusable="false">
      <path
        d="M12 2.5 13.58 8h5.92l-4.781 3.468 1.83 5.868L12 15.8 7.451 17.336l1.83-5.868L4.5 8h5.92Z"
        fill="currentColor"
      />
    </svg>
  ),
  lifebuoy: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" focusable="false">
      <path
        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm6.934 9h-3.05a3.986 3.986 0 0 0-1.384-3.043l2.157-2.157A8.03 8.03 0 0 1 18.934 11Zm-4.949 0h-4a2 2 0 1 1 4 0Zm-6.969 0H3.966a8.03 8.03 0 0 1 2.279-5.2l2.156 2.157A3.986 3.986 0 0 0 6.016 11Zm0 2a3.986 3.986 0 0 0 2.385 3.786l-2.156 2.157A8.03 8.03 0 0 1 3.966 13Zm6.969 0a2 2 0 1 1-2-2h2Zm1.949 0h3.05a8.03 8.03 0 0 1-2.277 5.2l-2.157-2.157A3.986 3.986 0 0 0 12.884 13Zm-.641-9.757A8.007 8.007 0 0 1 16.8 5.116l-2.24 2.24a4 4 0 0 0-2.316-1.113Zm-.482 17.514a8.007 8.007 0 0 1-4.543-1.873l2.24-2.24a4 4 0 0 0 2.303 1.123Zm1.123-2.303 2.24 2.24a8.007 8.007 0 0 1-4.543 1.873v-3.11a4 4 0 0 0 2.303-1.123Zm-.112-12.074 2.24-2.24a8.007 8.007 0 0 1 1.873 4.543h-3.11a4 4 0 0 0-1.003-2.303Z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" focusable="false">
      <path
        d="M20.5 4h-17A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 20.5 4ZM20 6.118v.132l-7.934 6.344a1 1 0 0 1-1.132 0L3 6.25v-.132Zm-17 11.764V8.29l6.894 5.508a3 3 0 0 0 3.212 0L22 8.29v9.592Z"
        fill="currentColor"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" focusable="false">
      <path
        d="M12 2 4 5.5v6c0 5.25 3.3 10.21 8 12 4.7-1.79 8-6.75 8-12v-6Zm0 2.09 6 2.58v4.83c0 4.12-2.53 8.13-6 9.72-3.47-1.59-6-5.6-6-9.72v-4.83Zm-1.06 10.16-2.12-2.12 1.41-1.41 1.41 1.41 4.24-4.24 1.41 1.41Z"
        fill="currentColor"
      />
    </svg>
  ),
} as const;

export type IconBadgeVariant = keyof typeof iconMap;

type IconBadgeProps = {
  variant: IconBadgeVariant;
};

const IconBadge = ({ variant }: IconBadgeProps) => {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white shadow-[0_10px_24px_rgba(59,130,246,0.25)]">
      {iconMap[variant]}
    </span>
  );
}

export default IconBadge;
