import Text from "@/elements/Text";
import ImageWrapper2 from "@/elements/ImageWrapper2";
import ImageWrapper from "@/elements/ImageWrapper";

export default function Card({
  src,
  alt,
  imgSize,
  txtSize,
  children,
  txtColor,
  line_height,
  fontWeight,
  center,
  gradient,
  row,
}) {
  return gradient ? (
    <div
      className={` ${
        center ? "text-center flex flex-col items-center" : null
      }`}
    >
      <div
        className={` relative h-[66px] w-[66px] rounded-full
            ${
              gradient == "blue"
                ? "bg-gradient-radial from-blue via-blue-100 to-transparent"
                : null
            }
            ${
              gradient == "pink"
                ? "bg-gradient-radial from-pink via-pink-100 to-transparent"
                : null
            }
            ${
              gradient == "yellow"
                ? "bg-gradient-radial from-yellow via-yellow-100 to-transparent"
                : null
            }
            ${
              gradient == "purple"
                ? "bg-gradient-radial from-purple via-purple-100 to-transparent"
                : null
            }
        `}
      >
        <div className="absolute lg:top-[30px] lg:-left-[25px] top-[20px] -left-[15px] ">
          <ImageWrapper2 src={src} alt={alt} size={imgSize} />
        </div>
      </div>
      <div className="py-9">
        <Text
          size={txtSize}
          color={txtColor}
          line_height={line_height}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      </div>
    </div>
  ) : row ? (
    <div className="flex">
      <div className="w-6 pt-2 box-border">
        <ImageWrapper2 src={src} alt={alt} size={imgSize} />
      </div>
      <div className="pl-3 lg:pl-10">
        <Text
          size={txtSize}
          color={txtColor}
          line_height={line_height}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      </div>
    </div>
  ) : (
    <div
      className={`flex lg:flex-col items-start ${center ? "text-center flex flex-col items-center" : null}`}
    >
      {/* <ImageWrapper src={src} alt={alt} size={imgSize} /> */}
      <div><ImageWrapper2 src={src} alt={alt} size={imgSize} /></div>
      <div className="lg:py-3 px-2 lg-px-0">
        <Text
          size={txtSize}
          color={txtColor}
          line_height={line_height}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      </div>
    </div>
  );
}
