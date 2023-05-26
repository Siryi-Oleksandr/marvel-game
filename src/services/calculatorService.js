export function calculateTotalPowerHero(hero) {
  const { characteristics } = hero;
  let totalPower = 0;
  const values = Object.values(characteristics);
  for (const value of values) {
    totalPower += value;
  }
  return totalPower;
}

export function calculateTotalPowerTeam(team) {
  return team.reduce((totalPower, hero) => {
    const heroTotalPower = calculateTotalPowerHero(hero);
    totalPower += heroTotalPower;
    return totalPower;
  }, 0);
}

// const advantages = ['intelligence', 'force', 'fightingSkills'];

// export function findAdvantages(hero) {
//   const { characteristics } = hero;
//   let heroAdvantage = null;
//   let quantity = 0;
//   advantages.forEach(advantage => {
//     if (!characteristics.hasOwnProperty(advantage)) {
//       return;
//     }
//     if (characteristics[advantage] > quantity) {
//       heroAdvantage = advantage;
//       quantity = characteristics[advantage];
//     }
//   });
//   return heroAdvantage;
// }
