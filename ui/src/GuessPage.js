import React from 'react'
import CustomBar from './CustomBar'
import { Grid, TextField } from "@mui/material";

function GuessPage() {
  return (
    <div style={{ backgroundColor: "#303030", height: "100vh", padding: 20 }}>
        <Grid container justifyContent="center" alignItems="center" direction="column" p={2}>
            <TextField label="Guess" InputLabelProps={{
    style: { color: '#999999' },
  }}
                sx={{
                    margin: "20px",
                    width: "300px",
                    caretColor: "white",
                    input: { color: "white" },
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                },
                }}>

            </TextField>
            <CustomBar percent="50%" word="deneme1"></CustomBar>
            <CustomBar percent="30%" word="deneme2"></CustomBar>
            <CustomBar percent="75%" word="deneme3"></CustomBar>
            <CustomBar percent="50%" word="deneme4"></CustomBar>
            <CustomBar percent="100%" word="deneme5"></CustomBar>
        </Grid>
    </div>
  )
}

export default GuessPage