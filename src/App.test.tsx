import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('render', async () => {
  render(<App />);
});
