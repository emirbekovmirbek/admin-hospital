import cls from './averageValue.module.css';
import Text from 'components/text/Text.tsx';
import { getAverageValue } from 'utils/chartHelpers.ts';
interface AverageValueProps {
  morning: PeakFlowmetry[];
  event: PeakFlowmetry[];
}
const AverageValue = ({morning, event}: AverageValueProps) => {
  return (
    <div className={cls.average}>
      <div>
        <Text title={'утро:'} titleFont={'reg-16'} text={`${getAverageValue(morning)}л/мн`} textFont={'title-3'}/>
      </div>
      <div>
        <Text title={'вечер:'} titleFont={'reg-16'} text={`${getAverageValue(event)}л/мн`} textFont={'title-3'}/>
      </div>
    </div>
  );
};

export default AverageValue;