/// <reference path="../typings/jslegacy.d.ts" />
import { test } from 'ava';

test('say Hi', async t => {
  const b = new BarLegacy();
  t.is(b.sayHi(), 'Hi');
});
