import { getDateToString, isAfterEvent } from 'utils/dayHelpers.ts';

const backgrounds: Record<ZoneName, Record<DayAndNight, string>> = {
  red: {
    day: 'rgba(254, 231, 231, 1)',
    night: 'rgba(247, 110, 110, 1)',
  },
  green: {
    day: 'rgba(92, 214, 174, 0.4)',
    night: 'rgba(92, 214, 174, 1)',
  },
  yellow: {
    day: 'rgba(250, 219, 158, 1)',
    night: 'rgba(245, 184, 61, 1)',
  },
};
export const chartHelpersBackground = (
  value: number | null,
  yellow: number,
  green: number,
  dayAndNight: DayAndNight,
) => {
  if (value == null) {
    return '';
  }
  const isYellow = yellow <= value;
  const isGreen = green <= value;
  if (isYellow && isGreen) {
    return backgrounds.green[dayAndNight];
  } else if (isYellow) {
    return backgrounds.yellow[dayAndNight];
  }
  return backgrounds.red[dayAndNight];
};
export const getChartDto = (data: PeakFlowmetry[]) => {
  return data.reduce(
    (acc, item) => {
      const isAfter = isAfterEvent(item.dateTime);
      if (isAfter) {
        acc.event.push({ ...item, dateTime: `${getDateToString(item.dateTime)}` });
      } else {
        acc.morning.push({ ...item, dateTime: `${getDateToString(item.dateTime)}` });
      }
      return acc;
    },
    {
      morning: [] as PeakFlowmetry[],
      event: [] as PeakFlowmetry[],
    },
  );
};

export const getAverageValue = (data: PeakFlowmetry[]): number => {
  const validValues = data.map(d => d.value).filter((v): v is number => v != null);
  const sum = validValues.reduce((acc, val) => acc + val, 0);
  return validValues.length ? Math.ceil(sum / validValues.length) : 0;
};
