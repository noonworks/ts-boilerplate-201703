import * as TSLib from 'tslib';

function initialize(): void {
  const f = new TSLib.Foo();
  console.log(f.sayHello());
  console.log('initialized');
}

addEventListener('load', initialize, false);
