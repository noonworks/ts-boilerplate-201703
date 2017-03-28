import * as JSLib from 'jslib';

export class BarLibTS {
  private _bar: JSLib.BarLib;

  constructor() {
    this._bar = new JSLib.BarLib();
  }

  public sayBye(): string {
    return this._bar.sayBye();
  }
}
