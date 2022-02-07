import { useEffect, useRef, useState } from "react";
import "./AnimatedNumberItem.scss";

export interface AnimatedNumberItemProps {
  number: number;
  size: number;
  duration?: number;
  direction?: "asc" | "desc";
}

const AnimatedNumberItem: React.FC<AnimatedNumberItemProps> = ({
  number,
  size,
  duration = 200,
  direction = "asc",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(number);
  }, [number]);

  useEffect(() => {
    const $numberWrapper = numberWrapperRef.current;
    if ($numberWrapper) {
      $numberWrapper.style.transform = `translateY(${
        size * (direction === "desc" ? 9 - currentIndex : currentIndex) * -1
      }px)`;
    }
  }, [currentIndex, size, direction]);

  return (
    <div className="AnimatedNumberItem" style={{ height: size }}>
      <div
        ref={numberWrapperRef}
        className="AnimatedNumberItem__wrapper"
        style={{ transitionDuration: `${duration}ms` }}
      >
        {Array.from({ length: 10 }).map((_, number) => (
          <div
            key={number}
            className="AnimatedNumberItem__number"
            style={{
              fontSize: size,
              height: size,
            }}
          >
            {direction === "desc" ? 9 - number : number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedNumberItem;
