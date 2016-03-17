/**
 * 				Campos editaveis da funcionario
 */
				/*
				 * Editables contato
				 */
		    $('#celularcontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'celularcontato',
		        title: 'Celular ',
				value: '(011)98756-3178',
		        placeholder: 'Nome'
		    });
		    $('#telefonecontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'telefonecontato',
		        title: 'Telefone',
				value: '(011)2342-4365',
		        placeholder: 'Telefone'
		    });
		    $('#emailcontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'emailcontato',
		        title: 'Email',
				value: 'aferreira@asgard.com.br',
		        placeholder: 'Email'
		    });

				/*
				 * Editables funcionario
				 */
		    $('#nomefuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'nomefuncionario',
		        title: 'Nome funcionario',
		        placeholder: 'funcionario',
				value: 'Amanda Ferreira',
		        validate: function (value) {
		            if (value.nomefuncionario == '')
		                return 'Nome funcionario obrigatório!';
		        }
		    });
		    $('#complementoenderecofuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'complementoenderecofuncionario',
		        title: 'Complemento endereço',
				value: '',
		        placeholder: 'Complemento'
		    });
		    var cidades = [];
		    $.each({
		        "São Paulo" : "São Paulo",
		        "Carapicuiba" : "Carapicuiba",
		        "Jundiai" : "Jundiai",
		        "Campinas" : "Campinas",
		        "São Roque" : "São Roque",
		        "Valinhos" : "Valinhos",
		        "Itatiaia" : "Itatiaia",
		        "Rio de Janeiro" : "Rio de Janeiro",
		        "Goiania" : "Goiania"
		    }, function (k, v) {
		        cidades.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#cidadeenderecofuncionario').editable({
//		        url: '/post',
		        value: 'São Paulo',
		        source: cidades,
		        select2: {
		            width: 200
		        }
		    });
		        
		    var estados = [];
		    $.each({
		        "SP" : "SP",
		        "GO" : "GO",
		        "RJ" : "RJ",
		        "RN" : "RN",
		        "ES" : "ES",
		        "MG" : "MG",
		        "RS" : "RS",
		        "AM" : "AM",
		        "PA" : "PA"
		    }, function (k, v) {
		        estados.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#estadoenderecofuncionario').editable({
//		        url: '/post',
		 //       value: 'SP',
		        source: estados,
		        select2: {
		            width: 200
		        }
		    });

		    var paises = [];
		    $.each({
		        "Brasil" : "Brasil",
		        "Argentina" : "Argentina",
		        "Equador" : "Equador",
		        "Bolivia" : "Bolivia",
		        "Colombia" : "Colombia",
		        "Chile" : "Chile"
		    }, function (k, v) {
		        paises.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#paisenderecofuncionario').editable({
//		        url: '/post',
		        value: 'SP',
		        source: paises,
		        select2: {
		            width: 200
		        }
		    });
		    $('#cependerecofuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'cependerecofuncionario',
		        title: 'CEP',
				value: '04725-200',
		        placeholder: 'CEP'
		    });
		    $('#telefonefuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'telefonefuncionario',
		        title: 'Telefone',
				value: '(011)97854-2125',
		        placeholder: 'Telefone'
		    });
		    $('#emailfuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'emailfuncionario',
		        title: 'Email',
				value: 'rh@asgard.com.br',
		        placeholder: 'Email'
		    });
		    $('#primeiroemprego').editable({
//		        url: '/post',
		        pk: 1,
		        limit: 3,
		        source: [{
		            value: 1,
		            text: 'Sim'
		        }, {
		            value: 2,
		            text: 'Não'
		        }],
		        placeholder: 'Primeiro Emprego'
		    });
		    $('#refuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'refuncionario',
		        title: 'Registro',
				value: '040.012',
		        placeholder: 'Registro'
		    });
		    $('#dataadmissaofuncionario').editable({
//		        url: '/post',
		        datepicker: {
		            todayBtn: 'linked'
		        },
		        name: 'dataadmissaofuncionario',
		        title: 'Admissão',
				value: '25/09/2005',
		        placeholder: 'Admissão'
		    });
		    $('#cpffuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'cpffuncionario',
		        title: 'CPF',
				value: '',
		        placeholder: 'CPF'
		    });
		    $('#horasmensais').editable({
//		        url: '/post',
		        pk: 1,
		        name: 'horasmensais',
		        title: 'Horas Mensais',
				value: '220',
		        placeholder: 'Horas Mensais'
		    });
		    $('#horassemanais').editable({
//		        url: '/post',
		        pk: 1,
		        name: 'horassemanais',
		        title: 'Horas Semanais',
				value: '40',
		        placeholder: 'Horas Semanais'
		    });
		    var cargos = [];
		    $.each({
		        "001" : "Analista RH",
		        "002" : "Supervisor Qualidade",
		        "003" : "Operador de Maquina",
		        "004" : "Programador",
		        "005" : "Montador",
		        "006" : "Supervisor Jr"
		    }, function (k, v) {
		    	cargos.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#cargofuncionario').editable({
//		        url: '/post',
		        value: 'Analista RH',
		        source: cargos,
		        select2: {
		            width: 200
		        }
		    });
		    var tipos = [];
		    $.each({
		        "ME" : "Mensalista",
		        "HO" : "Horista"
		    }, function (k, v) {
		    	tipos.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#tipofuncionario').editable({
//		        url: '/post',
		        value: 'Mensalista',
		        source: tipos,
		        select2: {
		            width: 200
		        }
		    });
		    var centroscusto = [];
		    $.each({
		        "0300A" : "TI",
		        "0400a" : "Contabilidade",
		        "0500A" : "RH",
		        "0600A" : "Operação",
		        "0700A" : "Qualidade",
		        "0800A" : "Infra"
		    }, function (k, v) {
		    	centroscusto.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#centrocustofuncionario').editable({
//		        url: '/post',
		        value: 'RH',
		        source: centroscusto,
		        select2: {
		            width: 200
		        }
		    });
		    var maoobra = [];
		    $.each({
		        "DI" : "Direta",
		        "IN" : "Indireta"
		    }, function (k, v) {
		    	maoobra.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#maoobrafuncionario').editable({
//		        url: '/post',
		        value: 'Direta',
		        source: maoobra,
		        select2: {
		            width: 200
		        }
		    });
		    var sindicatos = [];
		    $.each({
		        "001" : "SINDPD",
		        "002" : "Sindicato Administradores"
		    }, function (k, v) {
		    	sindicatos.push({
		            id: k,
		            text: v
		        });
		    });
		    $('#sindicatofuncionario').editable({
//		        url: '/post',
		        value: 'SINDPD',
		        source: sindicatos,
		        select2: {
		            width: 200
		        }
		    });
		    $('#turnofuncionario').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'turnofuncionario',
		        title: 'Turno',
				value: 'Diurno 08:00 a 17:00',
		        placeholder: 'Turno'
		    });
		    (function (e) {
		        "use strict";
		        var t = function (e) {
		            this.init("address", e, t.defaults)
		        };
		        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput);
		        e.extend(t.prototype, {
		            render: function () {
		                this.$input = this.$tpl.find("input")
		            },
		            value2html: function (t, n) {
		                if (!t) {
		                    e(n).empty();
		                    return
		                }
		                var r = e("<div>").text(t.ruafuncionario).html() + ", " + e("<div>").text(t.numeroenderecofuncionario).html() + ", " +
		                     e("<div>").text(t.bairroenderecofuncionario).html();
		                e(n).html(r)
		            },
		            html2value: function (e) {
		                return null
		            },
		            value2str: function (e) {
		                var t = "";
		                if (e)
		                    for (var n in e)
		                        t = t + n + ":" + e[n] + ";";
		                return t
		            },
		            str2value: function (e) {
		                return e
		            },
		            value2input: function (e) {
		                if (!e)
		                    return;
		                this.$input.filter('[name="ruafuncionario"]').val(e.ruafuncionario);
		                this.$input.filter('[name="numeroenderecofuncionario"]').val(e.numeroenderecofuncionario);
		                this.$input.filter('[name="bairroenderecofuncionario"]').val(e.bairroenderecofuncionario)
		            },
		            input2value: function () {
		                return {
		                    ruafuncionario: this.$input.filter('[name="ruafuncionario"]').val(),
		                    numeroenderecofuncionario: this.$input.filter('[name="numeroenderecofuncionario"]').val(),
		                    bairroenderecofuncionario: this.$input.filter('[name="bairroenderecofuncionario"]').val()
		                }
		            },
		            activate: function () {
		                this.$input.filter('[name="ruafuncionario"]').focus()
		            },
		            autosubmit: function () {
		                this.$input.keydown(function (t) {
		                    t.which === 13 && e(this).closest("form").submit()
		                })
		            }
		        });
		        t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
		            tpl: '<div class="editable-address"><label><span>Endereço: </span><input type="text" name="ruafuncionario" class="input-small"></label></div><div class="editable-address"><label><span>Numero: </span><input type="text" name="numeroenderecofuncionario" class="input-small"></label></div><div class="editable-address"><label><span>Bairro: </span><input type="text" name="bairroenderecofuncionario" class="input-mini"></label></div>',
		            inputclass: ""
		        });
		        e.fn.editabletypes.address = t
		    })(window.jQuery);

			$('#enderecofuncionario').editable({
//		        url: '/post',
		        value: {
		            ruafuncionario: "Rua Aberto Brago",
		            numeroenderecofuncionario: "235",
		            bairroenderecofuncionario: "Butantã"
		        },
		        validate: function (value) {
		            if (value.ruafuncionario == '')
		                return 'Endereço obrigatório!';
		        },
		        display: function (value) {
		            if (!value) {
		                $(this).empty();
		                return;
		            }
		            var html = $('<div>').text(value.ruafuncionario).html() + ', ' + $('<div>').text(value.numeroenderecofuncionario)
		                .html() + ", " + $('<div>').text(value.bairroenderecofuncionario).html();
		            $(this).html(html);
		        }
		    });
				
