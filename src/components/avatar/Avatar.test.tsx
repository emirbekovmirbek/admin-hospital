import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import cls from './avatar.module.scss';
import Avatar from 'components/avatar/Avatar.tsx';

describe('Avatar', () => {
  const fullName = 'Testov Test Testovich';
  it('avatar circle with text', () => {
    render(<Avatar fullName={fullName} width={'20px'} height={'20px'} type={'circle'} />);
    const avatar = screen.getByRole('img', { name: fullName });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('--avatar-width: 20px');
    expect(avatar).toHaveClass(cls.circle);
    expect(avatar.querySelector('img')).not.toBeInTheDocument();
    expect(avatar.querySelector('p')).toBeInTheDocument();
  });
  it('avatar square with img', () => {
    render(
      <Avatar
        fullName={fullName}
        link={'/vite.svg'}
        width={'40px'}
        height={'40px'}
        type={'square'}
      />,
    );
    const avatar = screen.getByRole('img', { name: fullName });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('--avatar-width: 40px');
    expect(avatar).toHaveClass(cls.square);
    expect(avatar.querySelector('img')).toBeInTheDocument();
    expect(avatar.querySelector('p')).not.toBeInTheDocument();
  });
});
