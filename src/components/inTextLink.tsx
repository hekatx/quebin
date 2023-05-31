import Link from "next/link";

export function InTextLink(
  props: React.ComponentPropsWithRef<typeof Link> & {
    children: React.ReactNode;
  }
) {
  const { children, ...linkProps } = props;

  return (
    <Link
      className="relative before:bg-opacity-70 before:content-[''] before:bg-sky-500 before:absolute before:left-0 before:bottom-1 before:w-full before:h-1 before:-z-10 hover:before:bottom-0 hover:before:h-full before:transition-all"
      {...linkProps}
    >
      {children}
    </Link>
  );
}
