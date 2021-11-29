export const declensionOfNumbers = (count, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
};

export const prettifyNumbers = (value) => {
  if (!Number.isInteger(value)) {
    value = Number(value);
  }

  if (Number.isNaN(value)) {
    return '';
  }

  if (value < 10000) {
    return `${value}&nbsp;₽`;
  } else {
    return `${value.toLocaleString('ru-RU')}\xa0₽`;
  }
};
