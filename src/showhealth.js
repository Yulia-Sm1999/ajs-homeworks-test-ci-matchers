export default function showHealth(playersData) {
  playersData.sort((x, y) => y.health - x.health);
  return playersData;
}
// showHealth([
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
// ]);
