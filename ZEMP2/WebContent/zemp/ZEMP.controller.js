sap.ui.controller("zemp.ZEMP", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemp.ZEMP
*/
	onInit: function() {
		
		var sServiceUrl = "/sap/opu/odata/sap/zemp_srv/";
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true, sServiceUrl.user, sServiceUrl.password );
		oModel.setCountSupported(false); 
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemp.ZEMP
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemp.ZEMP
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemp.ZEMP
*/
//	onExit: function() {
//
//	}

});