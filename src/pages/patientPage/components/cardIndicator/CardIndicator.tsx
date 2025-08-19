import cls from './cardIndicator.module.scss';
import { CardTemplate } from 'components/cardTemplate/CardTemplate.tsx';
import Text from 'components/text/Text.tsx';
import SliderBar from 'components/sliderBar/SliderBar.tsx';
import { FilterButton } from 'components/filterButton/FilterButton.tsx';
import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';
import Select from 'components/select/Select.tsx';
import { useState } from 'react';

const ranges: Zone[] = [
  {
    start: 0,
    max: 49,
  },
  {
    start: 50,
    max: 99,
  },
  {
    start: 100,
    max: 'infinity',
  },
];
// interface CardIndicatorProps {
//   id: string;
//   idTreatment: string | null;
// }
export const CardIndicator = () => {
  const [selected, setSelected] = useState<Zone | null>();
  return (
    <CardTemplate className={cls.wrapper}>
      <CardTopTemplate text={'Показатели'} />
      <Text className={cls.text} text={'Статус <sup>+7</sup>'} textFont={'reg-12'} />
      <div className={cls['range-container']}>
        {ranges.map(item => (
          <SliderBar key={item.start} {...item} value={22} color="red-zone" />
        ))}
      </div>
      <div className={cls['filter-date']}>
        <FilterButton text={'сегодня'} isActive={false} />
        <FilterButton text={'неделя'} isActive={true} />
        <FilterButton text={'месяц'} isActive={false} />
        <FilterButton text={'полгода'} isActive={false} />
      </div>
      <Select
        getOptionValue={option => option.start.toString()}
        value={selected}
        options={ranges}
        formatOptionLabel={option => option.start}
        onChange={option => setSelected(option)}
      />
    </CardTemplate>
  );
};
