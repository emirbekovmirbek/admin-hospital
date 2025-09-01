import cls from './appLinks.module.scss';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import { routePath } from 'utils/routesHelpers.ts';

describe('AppLink', () => {
  it('appLink at the document', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppLink to={routePath.patient}>Пациент</AppLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Пациент' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(cls.app_link);
  });
  it('applink in active', () => {
    render(
      <MemoryRouter initialEntries={[routePath.patient]}>
        <AppLink to={routePath.patient}>Пациент</AppLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Пациент' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(cls.active);
  });
});
