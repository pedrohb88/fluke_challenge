function printCircle(radius) {
  const size = {x: radius * 2 + 1, y: radius * 2 + 1};
  const center = {x: size.x / 2, y: size.y / 2};

  let output = '';

  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      const distBetweenPointAndCenter = Math.sqrt(
        Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2),
      );

      if (distBetweenPointAndCenter <= radius) {
        output += '~~';
      } else {
        output += '  ';
      }
    }
    output += '\n';
  }

  console.log(output);
}

let radius = parseInt(process.argv[2], 10);

if (!radius || !(radius >= 1 && radius <= 100)) {
  console.log('Raio inválido');
} else {
  printCircle(radius);
}
