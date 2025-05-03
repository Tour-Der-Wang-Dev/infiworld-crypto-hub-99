
import { Image } from "@/components/ui/image";

interface InfiWorldImageProps {
  className?: string;
  alt?: string;
}

const InfiWorldImage = ({ className, alt = "INFIWORLD" }: InfiWorldImageProps) => {
  return (
    <Image
      src="/ChatGPT Image 3 พ.ค. 2568 18_28_43.png"
      alt={alt}
      className={className}
    />
  );
};

export default InfiWorldImage;
