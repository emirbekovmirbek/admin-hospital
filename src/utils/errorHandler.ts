import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null;
}
function isCommonErrorType(error: unknown): error is CommonRes {
  return typeof error === 'object' && error != null && 'status' in error;
}
export function errorHandler(error: unknown, defaultMessage: string = 'Ошибка неизвестна') {
  if (isFetchBaseQueryError(error)) {
    if (isCommonErrorType(error.data)) {
      return error.data.message;
    }
  }
  return defaultMessage;
}
