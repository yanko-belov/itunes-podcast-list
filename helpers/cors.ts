export const createCorsSafeUrl = (url: string) =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
