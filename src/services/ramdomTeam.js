export function getRandomTeam(heroes, userTeam = []) {
  // Check if there are at least 3 available heroes
  if (heroes.length < 3) {
    return console.error('Not enough available heroes to form a team.');
  }

  const filters = userTeam.map(hero => hero.name);
  const filteredHeroes = heroes.filter(hero => !filters.includes(hero.name));

  // Randomly select 3 heroes from the filteredHeroes array
  const randomTeam = [];
  while (randomTeam.length < 3) {
    const randomIndex = Math.floor(Math.random() * filteredHeroes.length);
    const randomHero = filteredHeroes[randomIndex];
    randomTeam.push(randomHero);
    filteredHeroes.splice(randomIndex, 1);
  }

  return randomTeam;
}
