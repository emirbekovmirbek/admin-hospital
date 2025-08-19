import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';
import { CardTemplate } from 'components/cardTemplate/CardTemplate.tsx';
import Text from 'components/text/Text.tsx';

interface CardNotFoundProps {
  text: string;
  notFoundText: string;
}
export const CardNotFound = ({ text, notFoundText }: CardNotFoundProps) => {
  return (
    <CardTemplate>
      <CardTopTemplate text={text} />
      <Text title={notFoundText} titleFont={'reg-16'} />
    </CardTemplate>
  );
};
