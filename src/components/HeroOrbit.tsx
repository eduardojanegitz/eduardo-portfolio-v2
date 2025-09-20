import { PropsWithChildren } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldorbit = false,
  shouldspin = false,
  orbitduration,
  spinduration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldorbit?: boolean;
  shouldspin?: boolean;
  spinduration?: string;
  orbitduration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldorbit === true && "animate-spin")}
        style={{
          animationDuration: orbitduration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldspin === true && "animate-spin")}
            style={{ animationDuration: spinduration }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
