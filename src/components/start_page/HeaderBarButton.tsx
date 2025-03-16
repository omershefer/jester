
export default function HeaderBarButton({
  title,
  onClick,
  active,
  width,
  height,
  ariaLabel,
  ref,
  onKeyDown,
}: {
  title: string;
  onClick?: () => void;
  active?: boolean;
  width?: string;
  height?: string;
  ariaLabel: string;
  ref?: any;
  onKeyDown?: (e: any) => void;
}) {
  return (
    <button
      className={`h-auto w-auto p-1 text-[16px] rounded-xl ${width || ""} ${
        height || ""
      } ${
        active ? "bg-[#00000012]" : "bg-[#00000000]"
      } font-primary font-medium hover:bg-[#00000012] active:backdrop-opacity-70 px-3 py-2 rounded-lg cursor-pointer`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-pressed={active}
      aria-label={ariaLabel}
      ref={ref}
    >
      {title}
    </button>
  );
}