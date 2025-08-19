import cls from './CardTopTemplate.module.scss';
import { memo } from 'react';
import Icon from 'components/icon/Icon.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';
import Text from 'components/text/Text.tsx';

interface CardTopTemplateProps {
  path?: IconsPath;
  text?: string;
}
const CardTopTemplate = ({
  path = IconsPath.PLUS_ICON,
  text = 'Назначения',
}: CardTopTemplateProps) => {
  return (
    <div className={cls.top}>
      <Icon pathIcon={path} />
      <Text text={text} textFont={'reg-16'} />
    </div>
  );
};
export default memo(CardTopTemplate);
