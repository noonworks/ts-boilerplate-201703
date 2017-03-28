import { test } from 'ava';
import * as TSLib from 'tslib';

test('say Hello', async t => {
  const f = new TSLib.Foo();
  t.is(f.sayHello(), 'Hello');
});
