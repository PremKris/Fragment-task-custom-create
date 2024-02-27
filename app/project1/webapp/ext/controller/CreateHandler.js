sap.ui.define([
    "sap/m/MessageBox"
], function(MessageBox) {
    'use strict';
    return {
        CreateHandlerMethod: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "project1.ext.fragment.CreateFragment",
            }).then(function (oDialog) {
                debugger                
                var now = new Date();
                var randomNum = '';
                randomNum += Math.round(Math.random() * 9);
                randomNum += Math.round(Math.random() * 9);
                randomNum += now.getTime();
                sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[0].mAggregations.items[1].setValue(randomNum)
                oDialog.open();
            });
        }
    };
});
