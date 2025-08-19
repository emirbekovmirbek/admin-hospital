import cls from './seachCard.module.scss';
import { Link } from 'react-router-dom';
import { routePath } from 'utils/routesHelpers.ts';
import Text from 'components/text/Text.tsx';

interface SearchCardProps {
  fullName: string;
  diagnosis?: string;
  id: string;
}
export const SearchCard = ({ fullName, diagnosis, id }: SearchCardProps) => {
  return (
    <div className={cls.card}>
      <Link to={routePath.patient.replace(':id', id)}>{fullName}</Link>
      <div className={cls.desc}>
        <Text
          title={'Диагноз:'}
          text={diagnosis ?? 'нет'}
          textFont={'sem-b-12'}
          textTheme="secondary"
        />
      </div>
    </div>
  );
};
