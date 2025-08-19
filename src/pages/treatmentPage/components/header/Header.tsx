import cls from './header.module.scss';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { Modal } from 'components/modal/Modal.tsx';
import { useToggle } from 'hooks/useToggle.ts';

export const Header = () => {
  const {isShow, handleToggle} = useToggle();
  return (
    <div className={cls.header}>
      <Text title="Медкарта" TitleTag="h1" titleFont={'title-1'} />
      <div>
        <Button theme={ButtonTheme.SECONDARY} text={'История болезни'} width={'fit-content'} onClick={handleToggle} />
        <Button text={'Открыть чат'}  width={'fit-content'}/>
      </div>
      <Modal isShow={isShow}>
        <Button theme={ButtonTheme.SECONDARY} text={'История болезни'} width={'fit-content'} />
        <Button text={'Открыть чат'}  width={'fit-content'} onClick={handleToggle}/>
      </Modal>
    </div>
  );
};