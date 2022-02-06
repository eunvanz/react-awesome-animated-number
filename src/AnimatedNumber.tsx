import { Fragment, useMemo } from "react";
import AnimatedNumberItem from "./AnimatedNumberItem";
import "./AnimatedNumber.scss";

export interface AnimatedNumberProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
  size: number;
  hasComma?: boolean;
  duration?: number;
}

const AnimatedNumber = ({
  value,
  size,
  hasComma,
  duration,
  style,
  className,
  ...restProps
}: AnimatedNumberProps) => {
  const numberArray = useMemo(() => {
    return String(value).split("");
  }, [value]);

  return (
    <div
      className={
        className
          ? `ReactAwesomeAnimatedNumber ${className}`
          : "ReactAwesomeAnimatedNumber"
      }
      style={{ ...style, height: size }}
      {...restProps}
    >
      {numberArray.map((number, index) => {
        const isMinus = numberArray[0] === "-";
        return (
          <Fragment key={index}>
            {hasComma &&
              (numberArray.length - (isMinus ? 3 : 0) - index) % 3 === 0 &&
              index !== 0 &&
              (isMinus ? index !== 1 : true) && (
                <div
                  className="ReactAwesomeAnimatedNumber__text"
                  style={{
                    fontSize: size,
                    height: size,
                  }}
                >
                  ,
                </div>
              )}
            {number === "-" ? (
              <div
                className="ReactAwesomeAnimatedNumber__text"
                style={{
                  fontSize: size,
                  height: size,
                }}
              >
                -
              </div>
            ) : (
              <AnimatedNumberItem
                number={Number(number)}
                size={size}
                duration={duration}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AnimatedNumber;
