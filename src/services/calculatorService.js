const advantages = ['intelligence', 'force', 'fight'];

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
