export class MultiDutInfo {
  id: string;
  primaryInfo: string;
  secondaryInfo: string;
  ascanRssiInfo: string;
  childInfo?: MultiDutInfo[];
}

export const multiDutData: MultiDutInfo[] = [
  {
    id: '1',
    primaryInfo: 'ED:DA:85:71:DA:4C',
    secondaryInfo: 'FriendlyName1',
    ascanRssiInfo: '-92',
    childInfo: 
    [
      {
        id: '2',
        primaryInfo: '',
        secondaryInfo: 'Adv Data: 0x67 0x42 0x30 0x36 0x25 0x68 0x41 0x33 0x4c 0x45 0x74 0x55 0x23 0x73 0x3c 0x60 0x21 0x2f 0x74',
        ascanRssiInfo: 'Ch37: -91',  
      },
      {
        id: '3',
        primaryInfo: '',
        secondaryInfo: 'Rsp Data: 0x3f 0x2d 0x42 0x3d 0x54',
        ascanRssiInfo: 'Ch38: -93', 
      },
      {
        id: '4',
        primaryInfo: '',
        secondaryInfo: '',
        ascanRssiInfo: 'Ch39: -91', 
      }
    ]         
  },
  {
    id: '5',
    primaryInfo: 'F0:81:D0:6B:6E:E8',
    secondaryInfo: 'FriendlyName2',
    ascanRssiInfo: '-77',
    childInfo: 
    [
      {
        id: '6',
        primaryInfo: '',
        secondaryInfo: 'Adv Data: 0x2d 0x46 0x2c 0x27 0x4a 0x36 0x7a 0x51 0x2d 0x48 0x28 0x5e 0x33',
        ascanRssiInfo: 'Ch37: -77',
      },
      {
        id: '7',
        primaryInfo: '',
        secondaryInfo: 'Rsp Data: 0x6e 0x26 0x4d 0x4c 0x67 0x63 0x5c 0x5e 0x3e 0x75',
        ascanRssiInfo: 'Ch38: -75', 
      },
      {
        id: '8',
        primaryInfo: '',
        secondaryInfo: '',
        ascanRssiInfo: 'Ch39: -77',
      }
    ]         
  },
  {
    id: '9',
    primaryInfo: 'F0:81:D0:6B:6E:E8',
    secondaryInfo: 'FriendlyName2',
    ascanRssiInfo: '-77', 
    childInfo: 
    [
      {
        id: '10',
        primaryInfo: '',
        secondaryInfo: 'Adv Data: 0x2d 0x46 0x2c 0x27 0x4a 0x36 0x7a 0x51 0x2d 0x48 0x28 0x5e 0x33',
        ascanRssiInfo: 'Ch37: -77',
      },
      {
        id: '11',
        primaryInfo: '',
        secondaryInfo: 'Rsp Data: 0x6e 0x26 0x4d 0x4c 0x67 0x63 0x5c 0x5e 0x3e 0x75',
        ascanRssiInfo: 'Ch38: -75',
      },
      {
        id: '12',
        primaryInfo: '',
        secondaryInfo: '',
        ascanRssiInfo: 'Ch39: -77',
      }
    ]         
  }
];