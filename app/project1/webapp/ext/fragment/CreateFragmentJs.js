// FOR CREATE'S SAVE AND CANCEL BUTTON.
sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    return {
        save : function(oEvent) {
            debugger
            var plant1 = sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[0].mAggregations.items[1].mProperties.value
            var sbg = sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].mProperties.value
            var sbu = sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[2].mAggregations.items[1].mProperties.value
            // let arrayData = [plant,sbg,sbu];
            let testdata = JSON.stringify({ Plant:plant1, Sbg:sbg, Sbu:sbu });
            $.ajax({
                url: '/odata/v4/serv/parent',
                type: 'POST',
                contentType: 'application/json',
                data: testdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                    oEvent.oSource.getParent().getParent().getParent().close()//For closing the pop up
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })

            // var settings = {
            //     url: "/odata/v4/serv/parent",
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json"
            //     },
            //     data: JSON.stringify(arrayData)
            // }


            // return new Promise((resolve, reject) => {
            //     $.ajax(settings)
            //         .done((results, textStatus, request) => {
            //             debugger
            //             resolve(results.ID);
            //         })
            //         .fail((err) => {
            //             debugger
            //             reject(err);
            //         })
            //     })
        },
        cancell : function(oEvent) {
            debugger
           oEvent.oSource.getParent().getParent().getParent().close()
                              
        }
    };
});
