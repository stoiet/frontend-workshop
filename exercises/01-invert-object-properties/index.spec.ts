import { object } from './object';
import { invertObjectProperties } from './';

describe('[01] #invertObjectProperties', () => {

  it('should invert object keys and values', () => {
    expect(invertObjectProperties(object)).toEqual({
      '1': 'first',
      '2': 'second',
      'true': 'third'
    });
  });

});
