import Image, { type ImageProps } from "next/image";
import { publicPath } from "@/lib/public-path";

export default function SiteImage({ src, ...props }: ImageProps) {
  return <Image {...props} src={typeof src === "string" ? publicPath(src) : src} />;
}
