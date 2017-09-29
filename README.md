[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"
![valid XHTML][checkmark]

[git-download]: https://git-scm.com/downloads
[npm-download]: https://nodejs.org/en/download/

# @mozg/node-framework

## Sinopse

Javascript Library

## Requerimentos

Ter instalado o [git][git-download] e [npm][npm-download]

## Requerimento pacote

	# https://www.npmjs.com/package/chalk
	# https://www.npmjs.com/package/commander
	# https://www.npmjs.com/package/express
	# https://www.heroku.com/nodejs

    sudo npm cache clean

    sudo npm install -g n

    sudo n latest

    node --version

    sudo npm update -g

    -

    sudo npm install --global gulp-cli

    gulp --version

    sudo npm install -g browserify

    sudo npm install -g exorcist

    sudo npm install -g uglify-js

    -

    which node

    node --version

    which npm

    npm --version

    npm config list

    npm list --global

    npm list

	npm whoami

    -

    cd ./pasta/

    npm init --yes

    npm ls

    npm install --save cpf_cnpj
    npm install --save smart-utils
    npm install --save random-item
    npm install --save random-year
    npm install --save random-month
    npm install --save random-natural
    npm install --save random-fullname
    npm install --save creditcard-info

    npm update

	npm pack

    node index.js

    node tests/index.js



## Testando pacote local

	# https://docs.npmjs.com/cli/pack

    cd /home/marcio/dados/public_html/git/automatic/node-framework

	npm update

	npm pack

	-

	cd /home/marcio/dados/public_html/git/automatic/magento-base

	npm install /home/marcio/dados/public_html/git/automatic/node-framework/mozg-node-framework-1.0.0.tgz

	browserify -r cpf_cnpj -r smart-utils -r random-item -r random-year -r random-month -r random-natural -r random-fullname -r random-firstname -r random-lastname -r creditcard-info -r @mozg/node-framework > /home/marcio/dados/public_html/git/automatic/magento-base/js/mozg_base/bundle.js

## Iniciando publicação do pacote

	# https://docs.npmjs.com/getting-started/publishing-npm-packages

	cd /home/marcio/dados/public_html/git/automatic/node-framework
	npm init
	npm adduser
	npm publish

## Instalação - Atualização - Desinstalação - Desativação

Este módulo destina-se a ser instalado usando o [NPM][npm-download]

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

	npm install --save mozg-node-framework

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor no diretório do seu projeto

	npm update

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	npm uninstall --save mozg-node-framework

# Mozg\Customer

## Para formulário sem suporte a auto-preenchimento

    Deve executar no firebug que deve dar o devido suporte ao formulário

    //
    (function() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://raw.githubusercontent.com/fnando/cpf_cnpj.js/master/build/cpf_cnpj.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })();

    //

    function randomnumber() {
        var randomnumber = Math.floor((Math.random() * 9) + 1);
        //console.log(randomnumber);

        return randomnumber;
    }

    //

    function randomiza(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    function gerarCEP() {

        num_cep = 20;
        cep = new Array(num_cep);

        cep[0] = '08215-430';
        cep[1] = '08250-580';
        cep[2] = '08210-510';
        cep[3] = '08210-000';
        cep[4] = '08290-630';
        cep[5] = '08210-570';
        cep[6] = '08215-630';
        cep[7] = '08270-001';
        cep[8] = '08220-831';
        cep[9] = '08215-070';
        cep[10] = '08210-610';
        cep[11] = '08210-050';
        cep[12] = '08210-120';
        cep[13] = '08295-480';
        cep[14] = '08295-380';
        cep[15] = '08295-410';
        cep[16] = '08275-001';
        cep[17] = '08215-290';
        cep[18] = '08215-540';
        cep[19] = '08215-000';
        cep[20] = '08295-420';

        return cep[randomiza(num_cep)];
    }

    //

    function fakeData_Event(event) {
        var element = event.element();
        if (event.shiftKey) {

            jQuery.ajax({
                url: 'https://api.randomuser.me/',
                dataType: 'json',
                success: function(data) {
                    console.log(data);

                    result = data.results[0];

                    console.log(result.gender);
                    console.log(result.name.first);
                    console.log(result.name.last);

                    $('billing:firstname').value = capitalise(result.name.first);
                    $('billing:lastname').value = capitalise(result.name.last);

                    if (result.gender == 'male') {
                        idx_gender = 1;
                    } else {
                        idx_gender = 2;
                    }

                    if ($('billing:gender')) {
                        $('billing:gender').options[idx_gender].selected = "selected";
                    }

                    if ($('billing:email')) {
                        $('billing:email').value = result.name.first + result.name.last + '@gmail.com';
                    }

                }
            });

            var generate_cpf = CPF.generate(true);

            var generate_cnpj = CNPJ.generate(true);

            var _cpf = generate_cpf;
            var _cnpj = generate_cnpj;

            $('billing:firstname').value = 'Simon';
            $('billing:lastname').value = 'Belmont';

            if ($('billing:company')) {
                $('billing:company').value = 'ACME Corporation S.A.';
            }

            if ($('billing:day')) {
                $('billing:day').value = '25';
                $('billing:month').value = '12';
                $('billing:year').value = '1990';
            }

            if ($('billing:gender')) {
                $('billing:gender').options[1].selected = "selected";
            }

            if ($('billing:taxvat')) {
                $('billing:taxvat').value = _cpf;
            }

            if ($('cpf')) {
                $('cpf').value = _cpf;
            }

            if ($('rg')) {
                $('rg').value = _cpf;
            }

            if ($('cnpj')) {
                $('cnpj').value = _cnpj;
            }

            if ($('billing:email')) {
                $('billing:email').value = cleanString(_cpf) + '@' + cleanString(_cpf) + '.com.br';
            }

            $('billing:customer_password').value = '123456';
            $('billing:confirm_password').value = '123456';

            $('billing:postcode').value = gerarCEP();

            if ($('rua')) {
                $('rua').value = 'rua';
                $('numero').value = '1';
                $('complemento').value = 'ap. 23 A';
            }

            $('billing:telephone').value = '(11) ' + '2' + randomnumber() + randomnumber() + randomnumber() + '-' + randomnumber() + randomnumber() + randomnumber() + randomnumber();

            if ($('billing:fax')) {
                $('billing:fax').value = '(11) ' + '2' + randomnumber() + randomnumber() + randomnumber() + '-' + randomnumber() + randomnumber() + randomnumber() + randomnumber();
            }

            if ($('billing:company')) {
                $('billing:company').triggerEvent('keypress');
            }

            $('billing:postcode').triggerEvent('blur');
        }
    }

    if ($('billing:city')) {
        $('billing:city').addEventListener("dblclick", fakeData_Event);
    }



## Contribuintes

Equipe Mozg

:cat2:
