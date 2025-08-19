import {memo, ReactNode} from 'react';
import classes from 'classnames';
import {TextFont, TextTagType, TextTheme, TitleTag} from './textType';
import cls from './text.module.scss';


interface TextProps {
  children?: ReactNode;
  textFont?: TextFont;
  titleFont?: TextFont;
  TextTag?: TextTagType;
  TitleTag?: TitleTag;
  className?: string;
  classNameTitle?: string;
  textTheme?: TextTheme;
  text?:string | number;
  title?:string | number;
}

const Text = (props: TextProps) => {
  const {
    children,
    textFont = 'reg-14',
    titleFont = 'reg-14',
    TextTag = 'p',
    textTheme = 'primary',
    className,
    text,
    title,
    TitleTag = 'h3',
    classNameTitle,
  } = props;
  if(text) {
    return (
      <>
        {title &&  <TitleTag className={classes(cls[titleFont], cls.title, classNameTitle ?? '')}>{title}</TitleTag>}
        <TextTag className={classes(cls[textFont],  cls[textTheme], className ?? '')} dangerouslySetInnerHTML={{__html: text}}/>
      </>
    );
  }
  return (
    <>
      {title &&  <TitleTag className={classes(cls[titleFont], cls.title, classNameTitle ?? '')}>{title}</TitleTag>}
      {children && <TextTag className={classes(cls.text, cls[textFont], cls[textTheme], className ?? '')}>
        {children}
      </TextTag>}
    </>
  );
};
export default memo(Text);