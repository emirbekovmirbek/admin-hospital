import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { createElement } from 'react';

vi.mock('components/icon/Icon.tsx', () => {
  return {
    default: (props: { onClick?: () => void }) =>
      createElement('button', {
        type: 'button',
        'data-testid': 'icon',
        onClick: props.onClick,
      }),
  };
});