import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { useDeleteTreatmentMutation } from 'models/appointment/api.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';

interface DeleteAppointmentProps {
  id: string;
}
export const DeleteAppointment = ({ id }: DeleteAppointmentProps) => {
  const [onDelete, { isLoading }] = useDeleteTreatmentMutation();
  const handleDelete = async () => {
    try {
      await onDelete(id);
      handleNotification('Шаблон удален', 'success');
    } catch (e) {
      handleNotification(errorHandler(e), 'error');
    }
  };
  return (
    <Button
      theme={ButtonTheme.ERROR}
      text="Удалить назначения"
      width={'100%'}
      onClick={handleDelete}
      isLoading={isLoading}
    />
  );
};
