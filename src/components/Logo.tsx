import clsx from "clsx";
import NextImage from "next/image";

interface Props {
  className?: string;
}
export default function Logo({ className }: Props) {
  return (
    <a href="#" className={clsx("flex items-center", className)}>
      <NextImage src="/images/converse-logo.png" width={120} height={48} />
    </a>
  );
}
