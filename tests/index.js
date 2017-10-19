#!/usr/bin/env node

//

console.log(this);

//

Reset = "\x1b[0m"
BgCyan = "\x1b[46m"
consoleLogItem1 = BgCyan+'%s'+Reset;

//

//process.exit();

//

console.log(consoleLogItem1, '### https://www.npmjs.com/~mozg');

//var mozg_node_framework = require('@mozg/node-framework');
var mozg_node_framework = require("../index");

console.log(mozg_node_framework);

//

console.info(consoleLogItem1, '### https://www.npmjs.com/package/creditcardgenerator');

//var creditcardgenerator = require('creditcardgenerator');
var creditcardgenerator = mozg_node_framework.creditcardgenerator;

var creditcard_json = creditcardgenerator.create('Diners');

console.log(creditcard_json);

var creditcard = creditcard_json.number;

console.log(creditcard);

//

console.info(consoleLogItem1, '### https://www.npmjs.com/package/creditcard-warder');

var cardNumber = '4514166365215946';

var creditcardInfo = require('creditcard-warder');

var brand = creditcardInfo(cardNumber).getBrand();

console.log(brand);

console.info(consoleLogItem1, '### ');


/*

var cardType = {};
// validation
cardType['VI'] = "visa";
cardType['MC'] = "mastercard";
cardType['AE'] = "amex";
cardType['DI'] = "discover";
cardType['JCB'] = "jcb";
cardType['SM'] = "maestro";
// adendo
cardType['DC'] = "dinersclub";
cardType['ELO'] = "elo";
cardType['AU'] = "aura";
cardType['hipercard'] = "hipercard";
cardType['visaelectron'] = "visaelectron";

*/

var cardType = {};
cardType['Amex'] = "376488977091001";
cardType['Visa'] = "4073020000000002";
cardType['MasterCard'] = "5555666677778884";
cardType['Discover'] = "6011000990139424";
cardType['Dinners'] = "36201475131126";
cardType['JCB'] = "3566002020360505";
cardType['ELO'] = "4514166365215946";
cardType['Aura'] = "5078601800003247449";
cardType['Maestro'] = "6759649826438453";
cardType['HiperCard'] = "6062825624254001";
cardType['Hiper(Other)'] = "6370950000000000";

var rules = creditcardInfo().rules;
console.log(rules)

// grab the Array item which matchs
var item = rules.find(item => item.type === 'elo');

// print
console.log(item);
console.log(item.pattern);


var obj = cardType;

console.log('---- Step 1 ----');

Object.keys(obj).forEach(function(key) { // Under ECMAScript 5, you can combine Object.keys() and Array.prototype.forEach():

    console.log('---- Step 2 ----');

    key = key;
    value = obj[key];

    console.log(key, value);

    //var rule = creditcardInfo(value).getRule();
    //console.log(rule);

    brand = creditcardInfo(value).getBrand();
    console.log(brand);

});

//

console.log(consoleLogItem1, '### https://www.npmjs.com/package/cpf_cnpj');

const libCpfCnpj = require("cpf_cnpj");
var CPF = libCpfCnpj.CPF;
var CNPJ = libCpfCnpj.CNPJ;

var isValidCPF = CPF.isValid("532.820.857-96");
console.log(isValidCPF);
var isValidCNPJ = CNPJ.isValid("41.381.074/6738-65");
console.log(isValidCNPJ);

//

console.info(consoleLogItem1, '### https://www.npmjs.com/package/random-natural');

var randomNatural = require('random-natural');

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

var random_number = randomNatural({ min: 1, max: 60 });

console.log(random_number);

//

console.log(consoleLogItem1, '### pci');

var json = '{"error":true,"success":false,"error_messages":"message"}'; // Checkout Nativo
var json = '{"error":"message","redirect":"http:"}'; // IWD_Opc

console.log(json);
console.log(typeof json);

var json = JSON.parse(json);
console.log(json);
console.log(typeof json);


var error_return = false;

if(json.error){
    var error_return = (json.error != "undefined");
    console.log('json.error: ' + error_return);
}
if(json.success){
    var error_return = (json.success == false);
    console.log('json.success: ' + error_return);
}

console.log(error_return);

//

console.log(consoleLogItem1, '### get / set');

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25


//

console.log(consoleLogItem1, '### pagseguro_errors');

var keys = '10001';

var pagseguro_errors = {
    10001:"Tamanho do cartão inválido.",
    10006:"Tamanho do CVV inválido.",
    30400:"Dados do cartão inválidos.",
    30405:"Data de validade incorreta.",
    59001:"ID da sessão web desconhecida",
};

var message = pagseguro_errors[10001];

console.log(message);

console.log(keys);

var message = pagseguro_errors.keys;

console.log(message);

//

console.log(consoleLogItem1, '### debugData');

var debugData = {};

debugData.config = '1';
debugData.casa = 'aaa';

console.log(debugData);

//

console.log(consoleLogItem1, '### FIM');

//
