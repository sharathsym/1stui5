sap.ui.jsview("zemp.ZEMP", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zemp.ZEMP
	*/ 
	getControllerName : function() {
		return "zemp.ZEMP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zemp.ZEMP
	*/ 
	createContent : function(oController) {
		jQuery.sap.require("sap.ui.table.Table");
		  
		var oTable = new sap.ui.table.Table({
			width : "100%",
			height : "100%",
//			rowHeight : 100,
			selectionMode : sap.ui.table.SelectionMode.None
			});
		
		oTable.addColumn(new sap.ui.table.Column({
			width : "5%",
			flexible : false,
			label : new sap.ui.commons.Label({
			text : "Employee Name"
			}),
			template : new sap.ui.commons.TextView({
			text : "{Ename}"
			}),
			}));			
		
		oTable.addColumn(new sap.ui.table.Column({
			width : "5%",
			flexible : false,
			label : new sap.ui.commons.Label({
			text : "Employee Position"
			}),
			template : new sap.ui.commons.TextView({
			text : "{ObjectKey}"
			}),
			}));	
		
		oTable.addColumn(new sap.ui.table.Column({
			width : "80px",
			flexible : true,
			template : new sap.ui.commons.Image({
			height : "80px",
				src : {
                path: "Pernr",
                 formatter : function(fValue){
                 var path = "/sap/opu/odata/sap/zemp_srv/EMPDATASet('"+fValue+"')/$value";
                 return path;
                   }}
			})
			}));

		var aFilters = [];  
		var aValues = jQuery.sap.getUriParameters().get("Pernr", true);
		for(i in aValues){
		var sValue = aValues[i];
		}
		var oFilter = new sap.ui.model.Filter("Pernr", sap.ui.model.FilterOperator.EQ, sValue); 
		aFilters.push(oFilter);
		
		oTable.bindRows({path: "/EMPDATASet", filters: oFilter });
		return oTable;
	}

});
