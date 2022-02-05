import { Fragment, useMemo } from "react";
import "./AnimatedNumber.scss";
import AnimatedNumberItem from "./AnimatedNumberItem";

export interface AnimatedNumberProps {
  number: number;
  size: number;
  hasComma?: boolean;
  duration?: number;
}

const AnimatedNumber = ({ number, size, hasComma, duration }: AnimatedNumberProps) => {
  const numberArray = useMemo(() => {
    return String(number).split("");
  }, [number]);

  return (
    <div className="ReactAwesomeAnimatedNumber" style={{ height: size }}>
      {numberArray.map((number, index) => (
        <Fragment key={index}>
          {hasComma && (numberArray.length - index) % 3 === 0 && index !== 0 && (
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
            <AnimatedNumberItem number={Number(number)} size={size} duration={duration} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default AnimatedNumber;
