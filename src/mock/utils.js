import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

export const generateRandomText = (messages) => {
  if (!messages.length) {return '';}

  const randomIndex = getRandomInteger(0, messages.length - 1);

  return messages[randomIndex];
};

export const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));
