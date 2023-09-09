import React from 'react'
import { Box,Checkbox,FormControl, InputLabel, MenuItem, Select,FormControlLabel  } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'

import '../investor/company.css'


const Investor = () => {


  return (
    <main>

        


       

        <Box
            component= "form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
              }}
        >
            <InputLabel  className=' text-white' >Program Feedback :</InputLabel>
            <TextField  
            id="outlined-basic" 
            label="Comments" 
            variant="outlined"
            inputProps={{style:{color:'white'}}}
            />

            <InputLabel id="demo-simple-select-label"  className=' text-white'>Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select" 
                label="Age"
                
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            

            <InputLabel id="demo-simple-select-label"  className=' text-white'>Are you intrested in Ic Program?</InputLabel>
            <FormControlLabel
                control={<Checkbox style={{ color: 'white' }} />}
                label="No"
                labelPlacement="end"
            />
            <FormControlLabel
                control={<Checkbox style={{ color: 'white' }} />}
                label="Yes"
                labelPlacement="end"
            />

        </Box>



        
    </main>
  )
}

export default Investor
