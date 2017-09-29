'use strict';

module.exports = {
  create: create
};

function create(issuer) {
  issuer = issuer ? issuer : 'visa';
  var number;

  // https://www.nilsonreport.com/upload/Purchase_Transactions_Worldwide_2014.jpg
  if (issuer.match(/^v/i)) {
    issuer = 'Visa';
    number = '4' + randomInt(14);
  } else if (issuer.match(/^master/i)) {
    issuer = 'MasterCard';
    number = '5' + randomInt(1, 1, 5) + randomInt(13);
  } else if (issuer.match(/union/i)) {
    issuer = 'China UnionPay';
    number = '62' + randomInt(13);
  } else if (issuer.match(/^ame/i)) {
    issuer = 'American Express';
    number = '3' + (randomInt(1, 0, 1) === '0' ? '4' : '7') + randomInt(12);
  } else if (issuer.match(/^dine/i)) {
    issuer = 'Diners Club';
    var prefix = [300, 301, 302, 303, 304, 305, 309, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399];
    number = prefix[randomInt(1, 0, 36)] + randomInt(10);
  } else if (issuer.match(/^dis/i)) {
    issuer = 'Discover Card';
    var r = randomInt(1, 0, 3);
    switch (r) {
      case '0':
        number = '6011' + randomInt(11);
        break;
      case '1':
        number = '622' + randomInt(1, 126, 925) + randomInt(9);
        break;
      case '2':
        number = '64' + randomInt(1, 4, 9) + randomInt(12);
        break;
      default:
        number = '65' + randomInt(13);
        break;
    }
  } else if (issuer.match(/^j/i)) {
    issuer = 'JCB';
    number = '35' + randomInt(1, 28, 89) + randomInt(11);
  }

  var number_reverse_list = number.split('').reverse();

  var sum = 0;
  var pos = 0;

  while (pos < number.length) {
    var odd = number_reverse_list[pos] * 2;
    if (odd > 9) {
      odd -= 9;
    }

    sum += odd;

    if (pos != (number.length - 1)) {
      sum += parseInt(number_reverse_list[pos + 1]);
    }

    pos += 2;
  }

  number = number + (((Math.floor(sum / 10) + 1) * 10 - sum) % 10);

  return {
    issuer: issuer,
    number: number
  };
}

function randomInt(count, low, high) {
  if (low === undefined)
    low = 0;

  if (high === undefined)
    high = 9;

  var rtn = '';
  for (var i = 0; i < count; i++) {
    rtn += Math.floor(Math.random() * (high - low + 1) + low).toString();
  }
  return rtn;
}
