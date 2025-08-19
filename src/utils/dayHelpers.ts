import dayjs, { ManipulateType, OpUnitType } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ru');

export const getDate = (
  dayString: string | undefined | null,
  format: string = 'DD.MM.YYYY',
): Date | undefined => {
  if (!dayString) {
    return undefined;
  }
  const parsed = dayjs(dayString, format);
  return parsed.isValid() ? parsed.toDate() : undefined;
};
export const isAfterEvent = (dayString: string | undefined | null): boolean => {
  const timeOnly = dayjs(dayString).format('HH:mm');
  const borderTime = '15:00';
  return timeOnly < borderTime;
};

export const today = dayjs().toDate();

export const getDateToString = (
  date: Date | string | null | undefined,
  format: string = 'DD.MM.YYYY',
): string => {
  const convertedDayjs = date instanceof Date ? dayjs(date) : dayjs(date, 'DD.MM.YYYY');
  return convertedDayjs.isValid() ? convertedDayjs.format(format) : '';
};
export const getTimeToString = (
  date: Date | string | null | undefined,
  format: string = 'HH:mm',
): string => {
  const convertedDayjs = date instanceof Date ? dayjs(date) : dayjs(date, 'HH:mm');
  return convertedDayjs.isValid() ? convertedDayjs.format(format) : '';
};
export const getDateFromTime = (time: string, baseDate: Date = new Date()): Date | null => {
  const [hours, minutes] = time.split(':').map(Number);
  if (isNaN(hours) || isNaN(minutes)) return null;
  return dayjs(baseDate)
    .set('hour', hours)
    .set('minute', minutes)
    .set('second', 0)
    .set('millisecond', 0)
    .toDate();
};
export const getDateToISO = (
  date: Date | string | null | undefined,
  tz: string = 'Asia/Bishkek',
): string => {
  const convertedDayjs = dayjs(date);
  return convertedDayjs.isValid() ? convertedDayjs.tz(tz).format() : '';
};

export const isSameDate = (
  firstDate: Date | string | null,
  secondDate: Date | string | null,
  type: OpUnitType = 'date',
) => {
  return dayjs(firstDate).isSame(secondDate, type);
};

export const endDate = (date: Date | string | null, endType: OpUnitType = 'day') =>
  dayjs(date).endOf(endType).toDate();

export const getAge = (date: Date | string | null | undefined) => {
  const birthDate = dayjs(date);
  return dayjs().diff(birthDate, 'year');
};

export const getSubtract = (
  date: Date | string | null,
  unit: ManipulateType,
  count: number = 1,
  format: string = 'YYYY-MM-DD',
) => {
  const subtract = dayjs(date).subtract(count, unit);
  return subtract.format(format);
};
