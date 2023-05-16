const advantages = ['intelligence', 'force', 'fightingSkills'];

export function findAdvantages(hero) {
  const { characteristics } = hero;
  let heroAdvantage = null;
  let quantity = 0;
  advantages.forEach(advantage => {
    if (!characteristics.hasOwnProperty(advantage)) {
      return;
    }
    if (characteristics[advantage] > quantity) {
      heroAdvantage = advantage;
      quantity = characteristics[advantage];
    }
  });
  return heroAdvantage;
}

export function calculateTotalPower(hero) {
  const { characteristics } = hero;
  let totalPower = 0;
  const values = Object.values(characteristics);
  for (const value of values) {
    totalPower += value;
  }
  return totalPower;
}
