import cls from './chartPatient.module.css';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CardTemplate } from 'components/cardTemplate/CardTemplate.tsx';
import { getChartDto } from 'utils/chartHelpers.ts';
import AverageValue from 'pages/patientPage/components/averageValue/AverageValue.tsx';
import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';
import { FilterButton } from 'components/filterButton/FilterButton.tsx';
import { useFetchPeakflowQuery } from 'models/patient/api.ts';
import { Loader } from 'components/loader/Loader.tsx';
import Text from 'components/text/Text.tsx';
import { getDateToString, getSubtract, today } from 'utils/dayHelpers.ts';
import { textSymptom, textWellBeingStatus } from 'utils/text.ts';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface ChartPatientProps {
  id: string;
}
const LIST_OF_DATES = [
  {
    text: 'сегодня',
    date: getDateToString(today, 'YYYY-MM-DD'),
  },
  {
    text: 'неделя',
    date: getSubtract(today, 'week'),
  },
  {
    text: 'месяц',
    date: getSubtract(today, 'month'),
  },
  {
    text: 'полгода',
    date: getSubtract(today, 'month', 6),
  },
];
const ChartPatient = ({ id }: ChartPatientProps) => {
  const [from, setFrom] = useState(LIST_OF_DATES[1].date);
  const { data: dataPealFlow, isFetching } = useFetchPeakflowQuery({
    patientId: id,
    from,
    to: getDateToString(today, 'YYYY-MM-DD'),
  });
  const { morning, event } = getChartDto(dataPealFlow?.data ?? []);
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
      yAxisKey: 'value',
      xAxisKey: 'dateTime',
    },
    layout: {},
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: context => {
            const item = context.raw as PeakFlowmetry;
            return [
              `Значение: ${item.value} л/м`,
              `Симптом: ${item.symptom ? textSymptom[item.symptom] : '-'}`,
              `Самочувствие: ${item.status ? textWellBeingStatus[item.status] : '-'}`,
              `Комментарий: ${item.comment}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          autoSkip: true,
          // callback: function(_, index) {
          //   const dateStr = this.chart.data.labels?.[index] as string;
          //   return getDateToString(dateStr, 'MMM');
          // }
        },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        display: false,
        max: (dataPealFlow?.maxValue ?? 1) + 20,
      },
    },
  };
  const data: ChartData<'bar', PeakFlowmetry[]> = {
    labels: [],
    datasets: [
      {
        label: 'Утро',
        data: morning,
        // backgroundColor: value => {
        //   const indication = value.raw as PeakFlowmetry;
        //   return chartHelpersBackground(indication.value, 300, 400, 'day');
        // },
        backgroundColor: 'rgba(92, 214, 174, 0.4)',
        barThickness: 12,
      },
      {
        label: 'Вечер',
        data: event,
        // backgroundColor: value => {
        //   const indication = value.raw as PeakFlowmetry;
        //   return chartHelpersBackground(indication.value, 300, 400, 'night');
        // },
        backgroundColor: 'rgba(92, 214, 174, 1)',
        barThickness: 12,
      },
    ],
  };
  const minWidth = `${Math.max(Math.max(morning.length, event.length) * 40, 350)}px`;
  if (isFetching) {
    return (
      <CardTemplate className={cls.card}>
        <CardTopTemplate text={'Пикфлуометрия'} />
        <Loader isShow={true} />
        <div className={cls['filter-date']}>
          {LIST_OF_DATES.map(item => (
            <FilterButton
              key={item.text}
              text={item.text}
              isActive={item.date === from}
              onClick={() => setFrom(item.date)}
            />
          ))}
        </div>
      </CardTemplate>
    );
  }
  return (
    <CardTemplate className={cls.card}>
      <CardTopTemplate text={'Пикфлуометрия'} />
      {dataPealFlow?.data?.length ? (
        <>
          <AverageValue morning={morning} event={event} />
          <div style={{ overflowX: 'auto'}}>
            <div style={{ minWidth }}>
              <Bar data={data} options={options} className={cls.canvas} />
            </div>
          </div>
        </>
      ) : (
        <Text className={cls.notfound} text={'Показаний нет'} />
      )}
      <div className={cls['filter-date']}>
        {LIST_OF_DATES.map(item => (
          <FilterButton
            key={item.text}
            text={item.text}
            isActive={item.date === from}
            onClick={() => setFrom(item.date)}
          />
        ))}
      </div>
    </CardTemplate>
  );
};

export default ChartPatient;
