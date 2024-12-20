import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import View1 from './view1';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders View1 component', () => {
  const wrapper = render(<View1 />);
  expect(wrapper).toBeTruthy();
});