import Tag from '../Tag';

function DueDate({ dueDate }) {
  const today = new Date();
  const newDueDate = new Date(dueDate);

  const todayMinusDueDate = today - newDueDate;
  const dueDateFormat =
    'D' + Math.floor(todayMinusDueDate / (1000 * 60 * 60 * 24));

  return <Tag tag={dueDateFormat} />;
}

export default DueDate;
