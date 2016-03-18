/**
 * 				Campos editaveis da empresa
 */
				/*
				 * Editables contato
				 */
		    $('#nomecontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'nomecontato',
		        title: 'Nome ',
				value: 'Antonio Alves',
		        placeholder: 'Nome'
		    });
		    $('#telefonecontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'telefonecontato',
		        title: 'Telefone',
				value: '(011)92342-4365',
		        placeholder: 'Telefone'
		    });
		    $('#emailcontato').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'emailcontato',
		        title: 'Email',
				value: 'aalves@asgard.com.br',
		        placeholder: 'Email'
		    });

				/*
				 * Editables empresa
				 */
		    $('#nomeempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'nomeempresa',
		        title: 'Nome empresa',
		        placeholder: 'Empresa',
				value: 'Asgard Comércio Ltda',
		        validate: function (value) {
		            if (value.nomeempresa == '')
		                return 'Nome empresa obrigatório!';
		        }
		    });
		    $('#complementoenderecoempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'complementoenderecoempresa',
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
		    $('#cidadeenderecoempresa').editable({
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
		    $('#estadoenderecoempresa').editable({
//		        url: '/post',
		        value: 'SP',
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
		    $('#paisenderecoempresa').editable({
//		        url: '/post',
		        value: 'SP',
		        source: paises,
		        select2: {
		            width: 200
		        }
		    });
		    $('#cependerecoempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'cependerecoempresa',
		        title: 'CEP',
				value: '04725-200',
		        placeholder: 'CEP'
		    });
		    $('#telefoneempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'telefoneempresa',
		        title: 'Telefone',
				value: '(011)97854-2125',
		        placeholder: 'Telefone'
		    });
		    $('#emailempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'emailempresa',
		        title: 'Email',
				value: 'rh@asgard.com.br',
		        placeholder: 'Email'
		    });
		    $('#cnpjempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'cnpjempresa',
		        title: 'CNPJ',
				value: '52.125,254/0001-45',
		        placeholder: 'CNPJ'
		    });
		    $('#inscricaoestadualempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'inscricaoestadualempresa',
		        title: 'Inscrição Estadual',
				value: 'Isento',
		        placeholder: 'Inscrição Estadual'
		    });
		    $('#ceiempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'ceiempresa',
		        title: 'C.E.I.',
				value: 'Isento',
		        placeholder: 'C.E.I.'
		    });
		    $('#cpfempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'cpfempresa',
		        title: 'CPF',
				value: '',
		        placeholder: 'CPF'
		    });
		    $('#naturezaempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'naturezaempresa',
		        title: 'Natureza',
				value: '2245',
		        placeholder: 'Natureza'
		    });
		    $('#atividadeempresa').editable({
//		        url: '/post',
		        type: 'text',
		        pk: 1,
		        name: 'atividadeempresa',
		        title: 'Atividade Economica',
				value: '4558752',
		        placeholder: 'Atividade Economica'
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
		                var r = e("<div>").text(t.ruaempresa).html() + ", " + e("<div>").text(t.numeroenderecoempresa).html() + ", " +
		                     e("<div>").text(t.bairroenderecoempresa).html();
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
		                this.$input.filter('[name="ruaempresa"]').val(e.ruaempresa);
		                this.$input.filter('[name="numeroenderecoempresa"]').val(e.numeroenderecoempresa);
		                this.$input.filter('[name="bairroenderecoempresa"]').val(e.bairroenderecoempresa)
		            },
		            input2value: function () {
		                return {
		                    ruaempresa: this.$input.filter('[name="ruaempresa"]').val(),
		                    numeroenderecoempresa: this.$input.filter('[name="numeroenderecoempresa"]').val(),
		                    bairroenderecoempresa: this.$input.filter('[name="bairroenderecoempresa"]').val()
		                }
		            },
		            activate: function () {
		                this.$input.filter('[name="ruaempresa"]').focus()
		            },
		            autosubmit: function () {
		                this.$input.keydown(function (t) {
		                    t.which === 13 && e(this).closest("form").submit()
		                })
		            }
		        });
		        t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
		            tpl: '<div class="editable-address"><label><span>Endereço: </span><input type="text" name="ruaempresa" class="input-small"></label></div><div class="editable-address"><label><span>Numero: </span><input type="text" name="numeroenderecoempresa" class="input-small"></label></div><div class="editable-address"><label><span>Bairro: </span><input type="text" name="bairroenderecoempresa" class="input-mini"></label></div>',
		            inputclass: ""
		        });
		        e.fn.editabletypes.address = t
		    })(window.jQuery);

			$('#enderecoempresa').editable({
//		        url: '/post',
		        value: {
		            ruaempresa: "Rua Aberto Brago",
		            numeroenderecoempresa: "235",
		            bairroenderecoempresa: "Butantã"
		        },
		        validate: function (value) {
		            if (value.ruaempresa == '')
		                return 'Endereço obrigatório!';
		        },
		        display: function (value) {
		            if (!value) {
		                $(this).empty();
		                return;
		            }
		            var html = $('<div>').text(value.ruaempresa).html() + ', ' + $('<div>').text(value.numeroenderecoempresa)
		                .html() + ", " + $('<div>').text(value.bairroenderecoempresa).html();
		            $(this).html(html);
		        }
		    });
				
