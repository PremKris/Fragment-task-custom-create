sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        edit : function(oEvent) {
            debugger
            var editplant = sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[0].mAggregations.items[1].mProperties.value
            var editsbg = sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].mProperties.value
            var editsbu = sap.ui.getCore().byId("Edit--_IDDialog").mAggregations.content[0].mAggregations.items[2].mAggregations.items[1].mProperties.value
            // let arrayData = [plant,sbg,sbu];
            let edittestdata = JSON.stringify({ Plant:editplant, Sbg:editsbg, Sbu:editsbu});
            var url = `/odata/v4/serv/parent('${editplant}')`;
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: edittestdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                    oEvent.oSource.getParent().getParent().getParent().close()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
        },
        Cancelll : function(oEvent) {
            debugger
            oEvent.oSource.getParent().getParent().getParent().close()
                              
        }
    };
});