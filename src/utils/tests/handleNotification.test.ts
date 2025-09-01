import { describe, it, expect, vi, beforeEach } from 'vitest';
import { toast } from 'react-toastify';
import { handleNotification } from '../notificationHelpers.ts';

vi.mock('react-toastify', () => {
  return {
    toast: {
      success: vi.fn(),
      error: vi.fn(),
      warning: vi.fn(),
      info: vi.fn(),
    },
  };
});

describe('handleNotification', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должен вызвать toast.info по умолчанию', () => {
    handleNotification('Hello');
    expect(toast.info).toHaveBeenCalledWith('Hello', undefined);
  });

  it('должен вызвать toast.success', () => {
    handleNotification('OK!', 'success', { autoClose: 2000 });
    expect(toast.success).toHaveBeenCalledWith('OK!', { autoClose: 2000 });
  });

  it('должен вызвать toast.error', () => {
    handleNotification('Error message', 'error');
    expect(toast.error).toHaveBeenCalledWith('Error message', undefined);
  });

  it('должен вызвать toast.warning', () => {
    handleNotification('Be careful', 'warning');
    expect(toast.warning).toHaveBeenCalledWith('Be careful', undefined);
  });
});
