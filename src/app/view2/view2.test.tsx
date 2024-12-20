import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import View2 from './view2';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders View2 component', () => {
  const wrapper = render(<View2 />);
  expect(wrapper).toBeTruthy();
});