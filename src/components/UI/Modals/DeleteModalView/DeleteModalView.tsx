import './styles.sass';

type DeleteModalViewProps = {
  text: string;
};

export const DeleteModalView = ({ text }: DeleteModalViewProps) => (
  <div className={'deleteModal--wrapper'}>
    Вы уверены, что хотите удалить {text}?
  </div>
);
