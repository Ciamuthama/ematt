import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

it('renders App correctly', () => {
  renderer.create(<App />);

});
