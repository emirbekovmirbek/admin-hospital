import cls from './textAccordion.module.scss';
import { memo, useState, useRef, useEffect } from 'react';
import Icon from 'components/icon/Icon.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';
import classes from 'classnames';

interface TextAccordionProps {
  text: string;
  className?: string;
}
const TextAccordion = ({ className, text }: TextAccordionProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);
  const [isShowAll, setIsShowAll] = useState(false);
  const isLong = text.length > 52;
  // const partOfText = text.slice(0, isLong ? 52 : text.length);
  const handleToggle = () => setIsShowAll(!isShowAll);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isShowAll]);
  return (
    <div data-testid="accordion" className={classes(className ?? '', cls.accordion, { [cls.showAll]: isShowAll })}>
      {isLong && <Icon pathIcon={IconsPath.CHEVRON_ICON} onClick={handleToggle} />}
      <p
        ref={ref}
        style={{
          height: isShowAll ? `${height}px` : '20px',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default memo(TextAccordion);
