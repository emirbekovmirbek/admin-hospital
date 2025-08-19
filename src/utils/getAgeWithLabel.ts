import { getAge } from 'utils/dayHelpers.ts';

export const getAgeWithLabel = (birthDate: string): string => {
  const age = getAge(birthDate);

  const getYearsLabel = (age: number): string => {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return 'лет';
    }

    if (lastDigit === 1) {
      return 'год';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'года';
    }

    return 'лет';
  };

  return `${age} ${getYearsLabel(age)}`;
};
