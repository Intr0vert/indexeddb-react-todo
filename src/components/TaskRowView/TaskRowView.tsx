import { bucket, edit, folder } from 'assets';
import './styles.sass';

type TaskRowViewProps = {
  actualCategory?: string;
  categoryId?: number;
  description: string;
  name: string;
  onEdit: () => void;
  onDelete: () => void;
};

export const TaskRowView = ({
  actualCategory,
  categoryId,
  description,
  name,
  onEdit,
  onDelete,
}: TaskRowViewProps) => {
  return (
    <div className={'taskRow'}>
      <div className={'taskRow--left'}>
        <div className={'taskRow--top'}>
          <span className={'taskRow--top--black'}>{name}</span>
          {categoryId && (
            <span className={'taskRow--top--blue'}>
              <img src={folder} alt='' />
              {actualCategory}
            </span>
          )}
        </div>
        <div className={'taskRow--bottom'}>{description}</div>
      </div>
      <div className={'taskRow--right'}>
        <img src={edit} alt='' onClick={onEdit} />
        <img src={bucket} alt='' onClick={onDelete} />
      </div>
    </div>
  );
};
