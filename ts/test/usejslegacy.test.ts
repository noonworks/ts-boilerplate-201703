import { test } from 'ava';
import * as UseJSLegacy from 'usejslegacy';

test('say Hi', async t => {
  const b = new UseJSLegacy.BarLegacyTS();
  t.is(b.sayHi(), 'Hi');
});
