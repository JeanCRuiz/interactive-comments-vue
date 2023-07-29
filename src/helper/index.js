export const dateFormatted = (date) => {
  //   const dateObj = new Date(date);

  //   return `${dateObj.getDate()}/${
  //     dateObj.getMonth() + 1
  //   }/${dateObj.getFullYear()}`;

  //   const today = new Date(date);

  const dateFormatted = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return dateFormatted;
};

export const currentId = (data) => {
  const repliesTotal = data.comments.reduce(
    (acc, curr) => acc + curr.replies.length,
    0
  );
  const commentsTotal = data.comments.length;
  const id = commentsTotal + repliesTotal + 1;

  return id;
};
