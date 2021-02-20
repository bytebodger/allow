import { allow } from './allow';

test('aBoolean', () => {
   expect(allow.aBoolean(true)).toBeUndefined();
});
