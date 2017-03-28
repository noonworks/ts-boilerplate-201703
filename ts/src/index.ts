import * as TSLib from 'tslib';
import * as UseJSLib from 'usejslib';

function initialize(): void {
  const f = new TSLib.Foo();
  console.log(f.sayHello());
  const bl = new UseJSLib.BarLibTS();
  console.log(bl.sayBye());
  console.log('initialized');
}

addEventListener('load', initialize, false);
