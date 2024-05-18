const starFull = <i class="fa-solid fa-star" />;
const starEmpty = <i class="fa-regular fa-star" />;

const createStarsNote = (length) => {
  const fullStarLength = length;
  const emptyStarLength = Math.abs(length - 5);

  return [
    ...new Array(fullStarLength).fill(starFull),
    ...new Array(emptyStarLength).fill(starEmpty),
  ];
};

export default createStarsNote;
