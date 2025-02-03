export function calculateCredit() {
    const age = prompt('Сколько вам полных лет?');
    let creditAmount;
  
    if (isNaN(age) || age < 0) {
      alert('Ошибка: пожалуйста, введите возраст в виде числа');
    } else {
      if (age < 18) {
        alert('Видимо вам кредит пока не нужен. Всего доброго!');
      } else if (age >= 18 && age <= 21) {
        creditAmount = prompt('Мы можем вам выдать максимум 50 000. \n Введите число кратное 1000.');
        if (isNaN(creditAmount) || creditAmount < 0) {
          alert('Ошибка: пожалуйста, введите сумму кредита в виде числа');
        } else if (creditAmount <= 50000) {
          let availableCredit = Math.floor(creditAmount / 1000) * 1000;
          if (availableCredit === creditAmount) {
            alert('Мы можем выдать ' + availableCredit);
          } else {
            alert('Вы ввели число не кратное 1000. Мы можем выдать ' + availableCredit);
          }
        } else {
          alert('Максимальная сумма кредитования для Вас 50 000');
        }
      } else if (age >= 22 && age <= 35) {
        creditAmount = prompt('Мы можем вам выдать максимум 400 000. \n Введите число кратное 1000.');
        if (isNaN(creditAmount) || creditAmount < 0) {
          alert('Ошибка: пожалуйста, введите сумму кредита в виде числа');
        } else if (creditAmount <= 400000) {
          let availableCredit = Math.floor(creditAmount / 1000) * 1000;
          if (availableCredit === creditAmount) {
            alert('Мы можем выдать ' + availableCredit);
          } else {
            alert('Вы ввели число не кратное 1000. Мы можем выдать ' + availableCredit);
          }
        } else {
          alert('Максимальная сумма кредитования для Вас 400 000');
        }
      } else if (age >= 36 && age <= 65) {
        creditAmount = prompt('Мы можем вам выдать максимум 1 000 000. \n Введите число кратное 1000.');
        if (isNaN(creditAmount) || creditAmount < 0) {
          alert('Ошибка: пожалуйста, введите сумму кредита в виде числа');
        } else if (creditAmount <= 1000000) {
          let availableCredit = Math.floor(creditAmount / 1000) * 1000;
          if (availableCredit === creditAmount) {
            alert('Мы можем выдать ' + availableCredit);
          } else {
            alert('Вы ввели число не кратное 1000. Мы можем выдать ' + availableCredit);
          }
        } else {
          alert('Максимальная сумма кредитования для Вас 1 000 000');
        }
      } else {
        alert('Видимо вам кредит не нужен. Всего доброго!');
      }
    }
  }