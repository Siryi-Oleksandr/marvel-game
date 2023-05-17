export function getRandomTeam(heroes) {
  // Перевіряємо, чи масив має більше трьох елементів
  if (heroes.length <= 3) {
    return heroes; // Повертаємо весь масив, якщо його довжина менша або рівна 3
  }

  const result = [];
  const indices = new Set(); // використовуємо Set для збереження тільки унікальних індексів

  // Генеруємо три випадкових індекси
  while (indices.size < 3) {
    const randomIndex = Math.floor(Math.random() * heroes.length);
    indices.add(randomIndex);
  }

  // Додаємо об'єкти з випадковими індексами в результат
  indices.forEach(index => {
    result.push(heroes[index]);
  });

  return result;
}
