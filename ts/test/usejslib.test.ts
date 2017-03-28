import { test } from 'ava';
import * as UseJSLib from 'usejslib';

test('say Bye', async t => {
  const b = new UseJSLib.BarLibTS();
  t.is(b.sayBye(), 'Bye');
});
