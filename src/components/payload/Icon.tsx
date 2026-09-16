import Image from "next/image";

export function Icon() {
  return (
    <Image
      src="/brand/logo-icon.png"
      alt="Golden Shield"
      width={756}
      height={598}
      style={{ height: "28px", width: "auto" }}
    />
  );
}
