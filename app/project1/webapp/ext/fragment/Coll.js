sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Edit",
                name: "project1.ext.fragment.edit",
            }).then(function (oDialog) {
                var a = oEvent.oSource.oParent.mAggregations.cells[0].mProperties.text
                var b = oEvent.oSource.oParent.mAggregations.cells[1].mProperties.text
                var c = oEvent.oSource.oParent.mAggregations.cells[2].mProperties.text
                sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[0].mAggregations.items[1].setValue(a)
                sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].setValue(b)
                sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[2].mAggregations.items[1].setValue(c)
                oDialog.open();
            });
        }
    };
});
