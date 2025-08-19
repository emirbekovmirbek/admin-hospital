export function getInitials(fullName: string): string {
  if (fullName.length === 0) {
    return '';
  }
  const parts = fullName.trim().split(/\s+/);
  const firstInitial = parts[0][0].toUpperCase(); // Первая буква имени
  const middleInitial = parts.length > 1 ? parts[1][0].toUpperCase() : '';
  return `${firstInitial}${middleInitial}`;
}
