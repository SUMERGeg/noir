import Link from "next/link";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" onClick={onClick}>
      <span className="brand-name" lang="en">NOIR<span className="brand-period">.</span></span>
      <span className="brand-descriptor" lang="en">DETAILING</span>
      <span className="sr-only"> — главная</span>
    </Link>
  );
}
