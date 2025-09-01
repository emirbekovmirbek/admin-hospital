import cls from './textAccordion.module.scss';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextAccordion from './TextAccordion.tsx';

describe('TextAccordion', () => {
  it('text accordion short',() => {
    render(<TextAccordion text={'Lorem ipsum dolor sit'}/>);
    const div = screen.getByTestId('accordion');
    expect(div.querySelector('p')).toBeInTheDocument();
    expect(div.querySelector('button')).not.toBeInTheDocument();
  });
  it('text accordion long',async () => {
    render(<TextAccordion text={'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.'}/>);
    const div = screen.getByTestId('accordion');
    const icon = screen.getByTestId('icon');
    const user  = userEvent.setup();
    await user.click(icon);
    expect(icon).toBeInTheDocument();
    expect(div).toHaveClass(cls.showAll);
  });
});
