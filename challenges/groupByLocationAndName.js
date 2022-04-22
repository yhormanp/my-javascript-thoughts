const mockupData = [
    {
        id: 1,
        location: 568,
        carrier_name: "UPS",
        carrier_service: "OVERNIGHT",
        carrier_caps: 8,
        cap_met: false,
        min_packages: 2,
      },
      {
        id: 19,
        location: 568,
        carrier_name: "UPS",
        carrier_service: "OVERNIGHT",
        carrier_caps: 18,
        cap_met: true,
        min_packages: 2,
      },
      {
        id: 2,
        location: 808,
        carrier_name: "USPS",
        carrier_service: "GROUND",
        carrier_caps: 74,
        cap_met: false,
        min_packages: 10,
      },
      {
        id: 3,
        location: 568,
        carrier_name: "FEDEX",
        carrier_service: "STANDARD",
        carrier_caps: 16,
        cap_met: false,
        min_packages: 8,
      },
  //   {
  //     id: 4,
  //     location: 1,
  //     carrier_name: "FEDEX",
  //     carrier_service: "GROUND",
  //     carrier_caps: 27,
  //     cap_met: true,
  //     min_packages: 2,
  //   },
  //   {
  //     id: 8,
  //     location: 808,
  //     carrier_name: "FEDEX",
  //     carrier_service: "STANDARD",
  //     carrier_caps: 6,
  //     cap_met: false,
  //     min_packages: 7,
  //   },
  //   {
  //     id: 11,
  //     location: 1,
  //     carrier_name: "UPS",
  //     carrier_service: "GROUND",
  //     carrier_caps: 60,
  //     cap_met: true,
  //     min_packages: 3,
  //   },
  //   {
  //     id: 12,
  //     location: 1,
  //     carrier_name: "USPS",
  //     carrier_service: "GROUND",
  //     carrier_caps: 76,
  //     cap_met: false,
  //     min_packages: 6,
  //   },
  //   {
  //     id: 13,
  //     location: 808,
  //     carrier_name: "UPS",
  //     carrier_service: "STANDARD",
  //     carrier_caps: 53,
  //     cap_met: true,
  //     min_packages: 7,
  //   },
  //   {
  //     id: 14,
  //     location: 599,
  //     carrier_name: "FEDEX",
  //     carrier_service: "GROUND",
  //     carrier_caps: 43,
  //     cap_met: false,
  //     min_packages: 8,
  //   },
];
const groupedInfo = () => {
  let arrangedInfo = {};
  for (let i = 0; i < mockupData.length; i++) {
    if (!arrangedInfo.hasOwnProperty(mockupData[i].location)) {
      arrangedInfo[mockupData[i].location] = [];

      console.log('element created', arrangedInfo[mockupData[i].location])
    }
    console.log('item to add', mockupData[i].location, mockupData[i].carrier_name, arrangedInfo[mockupData[i].location])
    arrangedInfo[mockupData[i].location][mockupData[i].carrier_name]= [...arrangedInfo[mockupData[i].location][mockupData[i].carrier_name] || [], mockupData[i]]
  }
  console.log("eval", arrangedInfo);
  return arrangedInfo;
};

const result = groupedInfo();

// console.log("grouped data", result);

Object.keys(result).map((location) => {
  Object.keys(result[location]).map((carrierName) => {
    console.log("val", location, carrierName, result[location][carrierName]);
  });
});
