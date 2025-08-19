import cls from './sliderBar.module.scss';
import { memo } from 'react';
import classes from 'classnames';
import Text from 'components/text/Text.tsx';

interface SliderBarProps extends Zone {
  value: number;
  color?: 'default' | 'red-zone' | 'yellow-zone' | 'green-zone';
}
const SliderBar = ({ value, start, max, color = 'default' }: SliderBarProps) => {
  const isInfinite = max === 'infinity';
  const computedMax = isInfinite ? Math.max(start + 100, value) : max;
  const percentage = Math.min(100, Math.max(0, ((value - start) / (computedMax - start)) * 100));
  return (
    <div className={cls.wrapper}>
      <div
        className={classes(
          cls.track,
          cls[color],
          { [cls.empty]: value <= start },
          { [cls.filled]: value >= computedMax },
        )}
      >
        <div className={cls.thumb} style={{ left: `${percentage}%` }} />
      </div>
      <Text
        text={`${start}${max === 'infinity' ? '+' : '-' + max}`}
        textFont="reg-12"
        textTheme={'secondary'}
      />
    </div>
  );
};

export default memo(SliderBar);
