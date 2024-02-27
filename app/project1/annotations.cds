using serv as service from '../../srv/service';

annotate service.parent with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Plant',
            Value : Plant,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Sbg',
            Value : Sbg,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Sbu',
            Value : Sbu,
        },
    ]
);
annotate service.parent with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Plant',
                Value : Plant,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Sbg',
                Value : Sbg,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Sbu',
                Value : Sbu,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
