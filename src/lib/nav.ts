const uk = [
    {
        "country": "England",
        "regions": [
            {
                "name": 'North England',
                "subregions": [
                    ['Cheshire', 'Cumbria', 'Durham County', 'East Riding of Yorkshire', 'Greater Manchester', 'Lancashire', 'Merseyside'],
                    ['North Yorkshire', 'Northumberland', 'South Yorkshire', 'Tyne and Wear', 'West Yorkshire']
                ]
            },
            {
                "name": 'Central England',
                "subregions": [
                    ['Bedfordshire', 'Cambridgeshire', 'Derbyshire', 'Herefordshire', 'Leicestershire', 'Lincolnshire', 'Norfolk'],
                    ['Northamptonshire', 'Nottinghamshire', 'Rutland', 'Shropshire', 'Staffordshire', 'Suffolk', 'Warwickshire'],
                    ['West Midlands County', 'Worcestershire']
                ]
            },
            {
                "name": 'South England',
                "subregions": [
                    ['Berkshire', 'Bristol County', 'Buckinghamshire', 'City of London County', 'Cornwall', 'Devon', 'Dorset'],
                    ['East Sussex', 'Essex', 'Gloucestershire', 'Greater London', 'Hampshire', 'Hertfordshire', 'Isle of Wight'],
                    ['Kent', 'Oxfordshire', 'Somerset', 'Surrey', 'West Sussex', 'Wiltshire']
                ]
            }
        ]
    },
    {
        "country": 'Scotland',
        "regions": [
            {
                "name": 'North Scotland',
                "subregions": [
                    ['Aberdeen City', 'Aberdeenshire', 'Angus', 'Dundee City', 'Highland', 'Moray', 'Na h-Eileanan an Iar'],
                    ['Orkney Islands', 'Perth and Kinross', 'Shetland Islands']
                ]
            },
            {
                "name": 'Central Scotland',
                "subregions": [
                    ['Argyll and Bute', 'City of Edinburgh', 'Clackmannanshire', 'East Ayrshire', 'East Dunbartonshire', 'East Lothian', 'East Renfrewshire'],
                    ['Falkirk Borough', 'Fife', 'Glasgow City', 'Inverclyde', 'Midlothian', 'North Ayrshire', 'North Lanarkshire'],
                    ['Renfrewshire', 'South Lanarkshire', 'Stirling County', 'West Dunbartonshire', 'West Lothian']
                ]
            },
            {
                "name": 'South Scotland',
                "subregions": [
                    ['Dumfries and Galloway', 'Scottish Borders', 'South Ayrshire']
                ]
            }
        ]
    },
    {
        "country": 'Wales',
        "regions": [
            {
                "name": 'North Wales',
                "subregions": [
                    ['Conwy County', 'Denbighshire', 'Flintshire', 'Gwynedd', 'Isle of Anglesey', 'Wrexham County'],
                ]
            },
            {
                "name": 'Central Wales',
                "subregions": [
                    ['Ceredigion', 'Powys']
                ]
            },
            {
                "name": 'South Wales',
                "subregions": [
                    ['Blaenau Gwent County', 'Bridgend County', 'Caerphilly County', 'Cardiff County', 'Carmarthenshire', 'Merthyr Tydfil County', 'Monmouthshire'],
                    ['Neath Port Talbot', 'Newport Borough', 'Pembrokeshire', 'Rhondda Cynon Taf', 'Swansea County', 'Torfaen', 'Vale of Glamorgan'],
                ]
            }
        ]
    }
];

function getCountries() {
    return uk.map(entry => entry.country);
}


 function getSubregions(country: string) {
    return uk.find(entry => entry.country === country)!
        .regions.flatMap(region =>
        region.subregions.flatMap(subregionGroup =>
            subregionGroup.map(subregion => ({
                name: subregion,
                href: `/${country.toLowerCase()}/${region.name.toLowerCase()}/${subregion.toLowerCase()}`
            }))
        )
    );
}

export {
    getCountries,
    getSubregions,
};