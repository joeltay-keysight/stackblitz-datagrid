export const macAddress = ['mac1', 'mac2', 'mac3', 'mac4'];
export const deviceNames = ['dev1', 'dev2', 'dev3', 'dev4'];
export const dutStatus = ['stat1', 'stat2', 'stat3', 'stat4'];
export const advData = ['adv1', 'adv2', 'adv3', 'adv4'];
export const respData = ['resp1', 'resp2', 'resp3', 'resp4'];
export const rssi = ['rssi1', 'rssi2', 'rssi3', 'rssi4'];
export const rssiChl = ['rssiChl1', 'rssiChl2', 'rssiChl3', 'rssiChl4'];
export const perSupport = ['perSupport1', 'perSupport2', 'perSupport3', 'perSupport4'];
export const advertisingInterval = ['advInt1', 'advInt2', 'advInt3', 'advInt4'];
export const quality = ['quality1', 'quality2', 'quality3', 'quality4'];
export const txPower = ['txPower1', 'txPower2', 'txPower3', 'txPower4'];
export const txPowerChl = ['txPowerChl1', 'txPowerChl2', 'txPowerChl3', 'txPowerChl4'];
export const activeScan = ['activeScan1', 'activeScan2', 'activeScan3', 'activeScan4'];
export const perChl = ['perChl1', 'perChl2', 'perChl3', 'perChl4'];
export const le1m = ['le1m1', 'le1m2', 'le1m3', 'le1m4'];
export const le2m = ['le2m1', 'le2m2', 'le2m3', 'le2m4'];
export const les2 = ['les21', 'les22', 'les23', 'les24'];
export const les8 = ['les81', 'les82', 'les83', 'les84'];



export interface formattedInfo {
  id: string;
  primaryInfo: string;
  secondaryInfo: string;
  ascanRssiInfo: string;
  childInfo?: formattedInfo[];
}