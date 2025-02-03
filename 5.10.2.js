export function validatePromoCode() {
    const promocode = prompt('Введите промкод');
    const code = promocode.toLowerCase();
    
    if (code === 'скидка') {
      alert('промокод применён');
    } else {
      alert('промокод не работает');
    }
  }