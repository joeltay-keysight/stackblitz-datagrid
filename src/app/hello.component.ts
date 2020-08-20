import { Component, Input, OnInit } from '@angular/core';
import {multiDutData, MultiDutInfo} from './Data/dummydata';
import {macAddress, dutStatus, advData, respData, rssi, rssiChl, perSupport, advertisingInterval, quality,     txPower, txPowerChl, activeScan, perChl, le1m, les2, le2m, les8, deviceNames} from './Data/dummyMultiInfo';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;




  ngOnInit()
  {  
      console.log('this is a tesxtlodd');
      console.log(multiDutData);
      console.log(typeof(multiDutData));
      var s = multiDutData;
      console.log(`The size is ${ s }`);
      var d = multiDutData.pop();
      console.log(deviceNames);
    


    for(let i = 0; i < 16; i++)
    {
      if (i < macAddress.length)
      {
        let rssiChlList, txPowerValue, txPowerChlList, activeScanChlList, le1mValue, le2mValue, les2Value, les8Value, activeScanValue;

        if ((le1m.length > 0) && (le2m.length > 0)  
          && (les2.length > 0) && (les8.length > 0))
        {
            le1mValue = le1m[i];
            le2mValue = le2m[i];
            les2Value = les2[i];
            les8Value = les8[i];
        }
        else{
            le1mValue = 'NaN';
            le2mValue = 'NaN';
            les2Value = 'NaN';
            les8Value = 'NaN';
        }

        if (rssiChl.length > 0)
        {
            rssiChlList = rssiChl[i].split(',');
        }

        if (txPower[i] != 'NaN')
        {
            let tmp = +txPower[i];
            txPowerValue = tmp.toFixed(2).toString();
        }
        else
        {
            txPowerValue = txPower[i];
        }

        if (txPowerChl.length > 0)
        {
            txPowerChlList = txPowerChl[i].split(',');
        }

        if (activeScan[i] != 'NaN')
        {
            let tmp = +activeScan[i];
            activeScanValue = tmp.toFixed(2).toString();
        }
        else
        {
            activeScanValue = activeScan[i];
        }

        if (perChl.length > 0)
        {
            activeScanChlList = perChl[i].split(',');
            activeScanChlList = this.replaceArrayString(activeScanChlList, '9.91E+37', 'NaN');
        }


        let multiDutData2 = new MultiDutInfo();
        multiDutData2.id = i.toString();
        multiDutData2.primaryInfo = macAddress[i];
        console.log(`ID ${multiDutData2.id}`);
        console.log(`MacAddress ${multiDutData2.primaryInfo}`);





      }
    }
  }

  replaceArrayString(value: string[], delimeter: string, replaceTo : string)
  {
      for (let i = 0; i < value.length; i++)
      {
          value[i] = value[i].replace(delimeter, replaceTo);
      }
      
      return value;
  }
}


