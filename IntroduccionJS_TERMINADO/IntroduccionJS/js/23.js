const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
    break;
    case 'cheque':
        console.log('Pagaste con efectivo');
    break;
    default:
        console.log('Aun no paga');
    break
}