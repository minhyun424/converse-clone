import clsx from "clsx";

interface Props {
  children: string;
  color?: "white" | "black";
  isMobile?: boolean;
  className?: string;
}

export default function Button({
  children,
  color = "white",
  isMobile = true,
  className,
}: Props) {
  return (
    <button
      className={clsx(
        " py-2 ",
        {
          "bg-white": color === "white",
          "bg-black text-white": color === "black",
        },
        isMobile
          ? "w-full rounded-full font-semibold md:hidden"
          : "hidden border px-14 font-medium md:block",
        className
      )}
    >
      {children}
    </button>
  );
}
