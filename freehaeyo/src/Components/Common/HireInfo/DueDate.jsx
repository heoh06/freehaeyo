import Tag from '../Tag';

function DueDate({ createdAt }) {
  const today = new Date();
  const createdAtDate = new Date(createdAt);

  const todayMinusCreatedAt = today - createdAtDate;
  const dueDate = 'D' + Math.floor(todayMinusCreatedAt / (1000 * 60 * 60 * 24));

  console.log(dueDate);
  return <Tag tag={dueDate} />;
}

export default DueDate;
