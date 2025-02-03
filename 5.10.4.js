export function formattedAge() {
    const name = prompt('Введите имя');
    const egeYear = prompt('Введите год рождения', 'Например:2000');
  
    const egeNumber = parseInt(egeYear);
    const currentYear = new Date().getFullYear();
    const age = currentYear - egeNumber;
    const ageRemainder = age % 10;
  
    if (isNaN(egeNumber)) { 
      alert('год должен быть числом');
    } else {
      switch (ageRemainder) {
        case 1:
          alert(`${name}: ${age} год`); 
          break;
        case 2:
        case 3:
        case 4:
          alert(`${name}: ${age} года`);
          break;
        default:
          alert(`${name}: ${age} лет`);}
    }
  }