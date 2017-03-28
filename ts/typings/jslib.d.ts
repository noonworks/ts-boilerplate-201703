// Type definitions for jslib.js
declare namespace jslib {
  class BarLib {
    sayBye(): string;
  }
}

declare module 'jslib' {
  export = jslib;
}
