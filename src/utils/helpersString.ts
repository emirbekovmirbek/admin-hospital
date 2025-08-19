export function getFullName(person: Patient): string {
  const { lastName, firstName, patronymic } = person;
  return [lastName, firstName, patronymic].filter(Boolean).join(' ');
}
