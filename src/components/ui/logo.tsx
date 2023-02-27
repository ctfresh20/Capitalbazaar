import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site.settings";
import { useSettings } from "@contexts/settings.context";
import regal from "./Images/logo.jpeg";
const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  const { siteTitle } = useSettings();
  return (
    <Link
      href={siteSettings.logo.href}
      className={cn("inline-flex", className)}
      {...props}
    >
      <span
        className="overflow-hidden relative"
        style={{
          width: siteSettings.logo.width,
          height: siteSettings.logo.height,
        }}
      >
        <Image
          src={regal}
          alt={siteTitle ?? siteSettings.logo.alt}
          layout="fill"
          objectFit="contain"
          loading="eager"
        />
      </span>
    </Link>
  );
};

export default Logo;
