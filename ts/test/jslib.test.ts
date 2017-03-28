import { test } from 'ava';
import * as JSLib from 'jslib';

test('say Bye', async t => {
  const b = new JSLib.BarLib();
  t.is(b.sayBye(), 'Bye');
});
