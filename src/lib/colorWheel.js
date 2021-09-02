import parseHexCode from "./parseHexCode";
import sum from "./sum";

export function getLocation(hex) {
  const [r, g, b] = parseHexCode(hex);

  // if we treat each color as a vector,
  // and add them all up we get the result
  // red is 0 degrees
  // blue is 120 degrees
  // green is 240 degrees
  const [rx, ry] = polarToRect([r, degToRad(0)]);
  const [gx, gy] = polarToRect([g, degToRad(120)]);
  const [bx, by] = polarToRect([b, degToRad(240)]);

  const result = [sum(rx, gx, bx), sum(ry, gy, by)];

  return result;
}

function polarToRect(polarForm) {
  const [mag, dir] = polarForm;

  const x = mag * Math.cos(dir);
  const y = mag * Math.sin(dir);

  return [x, y];
}

function degToRad(deg) {
  return (deg / 360) * 2 * Math.PI;
}
