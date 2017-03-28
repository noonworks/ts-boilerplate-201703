/// <reference path="../typings/jslegacy.d.ts" />

export class BarLegacyTS {
  private _bar: BarLegacy;

  constructor() {
    this._bar = new BarLegacy();
  }

  public sayHi(): string {
    return this._bar.sayHi();
  }
}
