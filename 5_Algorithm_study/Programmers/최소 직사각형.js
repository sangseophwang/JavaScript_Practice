function solution(sizes) {
  const rotated = sizes.map(([width, height]) =>
    width < height ? [height, width] : [width, height]
  );

  let min = [0, 0];
  rotated.forEach(([width, height]) => {
    if (width > min[0]) min[0] = width;
    if (height > min[1]) min[1] = height;
  });
  return min[0] * min[1];
}
