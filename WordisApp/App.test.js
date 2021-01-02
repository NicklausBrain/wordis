import * as React from 'react';
import renderer from 'react-test-renderer';

import App from './App.tsx';

it(`renders correctly`, () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
