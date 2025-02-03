export function calculateAge() {
    const name = prompt('Введите имя');
    const egeYear = prompt('Введите год рождения', 'Например:2000');

    const egeNumber = parseInt(egeYear);
    const currentYear = new Date().getFullYear();
    
    if (egeNumber == NaN) {
      alert('год должен быть числом');
    } else {
      alert(`${name}: ${currentYear - egeNumber}`);
    }
  }