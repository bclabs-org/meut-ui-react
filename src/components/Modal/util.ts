const getPadding = (customPadding?: string) => {
  if (customPadding) {
    return customPadding;
  }
  return 'px-10 py-8';
};

export default getPadding;
