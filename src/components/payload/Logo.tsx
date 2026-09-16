import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/brand/logo-full.png"
      alt="Golden Shield Security Services"
      width={678}
      height={260}
      priority
      style={{ height: "48px", width: "auto" }}
    />
  );
}
