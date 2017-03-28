import * as TSLib from 'tslib';
import * as UseJSLib from 'usejslib';
import * as UseJSLegacy from 'usejslegacy';

function initialize(): void {
  const f = new TSLib.Foo();
  console.log(f.sayHello());
  const bs = new UseJSLegacy.BarLegacyTS();
  console.log(bs.sayHi());
  const bl = new UseJSLib.BarLibTS();
  console.log(bl.sayBye());
  console.log('initialized');
}

addEventListener('load', initialize, false);
