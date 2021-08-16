export const COLORS = ["#55a84f", "#a3c853", "#ffea00", "#f29c33", "#e93f33", "#af2d24"];


export function getColorCode(aqi) {
  if (aqi > 0 & aqi < 51) {
    return COLORS[0]
  } else if (aqi > 50 & aqi <= 100) {
    return COLORS[1]
  } else if (aqi > 100 & aqi <= 200) {
    return COLORS[2]
  } else if (aqi > 200 & aqi <= 300) {
    return COLORS[3]
  } else if (aqi > 300 & aqi <= 400) {
    return COLORS[4]
  } else if (aqi > 400 & aqi <= 500) {
    return COLORS[5]
  }
}