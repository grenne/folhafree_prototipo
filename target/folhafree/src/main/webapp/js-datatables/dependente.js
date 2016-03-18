			    /**
			     * 			adendo a lista de dependente
			     */


				/* Formatting function for row details - modify as you need */
				function formatDependente ( d ) {
				    // `d` is the original data object for the row
				    return '<table cellpadding="5" cellspacing="0" border="0" class="table table-hover table-condensed">'+
				        '<tr>'+
				            '<td>Ações:</td>'+
				            '<td>'+d.acoes+'</td>'+
				        '</tr>'+
				    '</table>';
				};
				
				/* BASIC datatables*/

				var responsiveHelper_dependentes_list = undefined;
				
				var breakpointDefinition = {
					tablet : 1024,
					phone : 480
				};
			     
				/* dependentes list  */
			    var dependentes_table = $('#dependentes_list').DataTable({
			    	//"bFilter": false,
			    	//"bInfo": false,
			    	//"bLengthChange": true,
			    	//"bAutoWidth": true,
			    	//"bPaginate": false,
			    	//"bStateSave": true // saves sort state using localStorage
					"sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
							"t"+
							"<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
					"autoWidth" : true,
					"preDrawCallback" : function() {
						// Initialize the responsive datatables helper once.
						if (!responsiveHelper_dependentes_list) {
							responsiveHelper_dependentes_list = new ResponsiveDatatablesHelper($('#dependentes_list'), breakpointDefinition);
						}
					},
					"rowCallback" : function(nRow) {
						responsiveHelper_dependentes_list.createExpandIcon(nRow);
					},
					"drawCallback" : function(oSettings) {
						responsiveHelper_dependentes_list.respond();
					},		
			        "ajax": "data/dependentes.json",
			        "charset" : "UTF-8",
			        "bDestroy": true,
			        "iDisplayLength": 15,
			        "columns": [
			            {
			                "class":          'details-control',
			                "orderable":      false,
			                "data":           null,
			                "defaultContent": ''
			            },
			            { "data": "nome" },
			            { "data": "sexo" },
			            { "data": "nascimento" },
			            { "data": "tipodependencia" },
			        ],
			        "order": [[1, 'asc']],
			        "fnDrawCallback": function( oSettings ) {
				       runAllCharts()
				    }
				
			    });

				// Add event listener for opening and closing details
			    $('#dependentes_list tbody').on('click', 'td.details-control', function () {
			        var tr = $(this).closest('tr');
			        var row = dependentes_table.row( tr );
			 
			        if ( row.child.isShown() ) {
			            // This row is already open - close it
			            row.child.hide();
			            tr.removeClass('shown');
			        }
			        else {
			            // Open this row
			            row.child( formatDependente(row.data()) ).show();
			            tr.addClass('shown');
			        }
			    });
			    
			    // Apply the filter
			    $("#dependentes_list thead th input[type=text]").on( 'keyup change', function () {
			    	
			        dependentes_table
			            .column( $(this).parent().index()+':visible' )
			            .search( this.value )
			            .draw();
			            
			    } );
			    /* end dependentes list */   


