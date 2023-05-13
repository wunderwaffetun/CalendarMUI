import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import BasicTable from './components/Table';

const wareHouses = {
  'initialFirstWareHouse': {
    '2023-05-07': {
      'iron': 24,
      'balk': 18, 
      'velocity': 54 
    },
    '2023-05-08': {
      'iron': 21,
      'balk': 19, 
      'velocity': 52 
    },
    '2023-05-09': {
      'iron': 20,
      'balk': 7, 
      'velocity': 40 
    }
  },
  'initialSecondtWareHouse': {
    '2023-05-07': {
      'bicycle': 24,
      'constructor': 18, 
      'scooter': 54 
    },
    '2023-05-08': {
      'bicycle': 22,
      'constructor': 17, 
      'scooter': 51 
    },
    '2023-05-09': {
      'bicycle': 21,
      'constructor': 16, 
      'scooter': 50 
    }
  }
}



function App() {
  const [ currentDate, setCurrentDate ] = React.useState(dayjs('2023-05-07'))
  const [ currentProducts, setCurrentProducts] = React.useState()

  React.useEffect(() => {
    console.log(currentDate)
    // const date = new Date(currentDate.$d)
    // console.log(date)
    const requestDate = `${currentDate.$y}`+
      `-${(+currentDate.$M + 1) / 10 > .9 ? currentDate.$M + 1: '0'+(currentDate.$M + 1)}`+
      `-${currentDate.$D / 10 > .9 ? currentDate.$D: '0'+currentDate.$D}`
    const newCurrentProductsAtDate = {}
    for (let wareHouse in wareHouses) {
      // console.log(wareHouses[wareHouse][requestDate])
      Object.assign(newCurrentProductsAtDate, wareHouses[wareHouse][requestDate])
    }
    setCurrentProducts(newCurrentProductsAtDate)
  }, [currentDate])

  return (
    <main>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Controlled picker"
          value={currentDate}
          onChange={(newValue) => setCurrentDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
    <BasicTable products={currentProducts} />

    </main>
  );
}

export default App;
