export {};

declare global {
  interface Number {
    toRadians(): number;
    sin(): number;
    cos(): number;
  }
}

if (!Number.prototype.toRadians)
  Object.defineProperty(Number.prototype, "toRadians", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function (): number {
      return (this * Math.PI) / 180;
    },
  });

if (!Number.prototype.sin)
  Object.defineProperty(Number.prototype, "sin", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function (): number {
      return Math.sin(this);
    },
  });

if (!Number.prototype.cos)
  Object.defineProperty(Number.prototype, "cos", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function (): number {
      return Math.cos(this);
    },
  });
