// const team = ['intelligence', 'force', 'fightingSkills'];

// // TODO !!!
export function filterHeroes(cards, currentTeam) {
  const filters = currentTeam.map(card => card.type);
  const filteredHeroes = cards.filter(card => !filters.includes(card.type));

  return filteredHeroes;
}
