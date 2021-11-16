import React, { useState, useEffect } from 'react';
import {  
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    DialogTitle,
    Typography,
    Button,
    TextField,
    Grid,
    Box,
    MenuItem,
    IconButton
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { Cancel } from '@mui/icons-material';
import { updateRoom, createRoom } from '../state/actions/room';

// import TableSnackBar from './TableSnackBar'

const TableDialog = ({menu, title, isOpen, data, handleClose, isEdit, field, record}) => {
    const [open, setOpen] = useState(false)
    const [recordData, setRecordData] = useState(record)
    
    // const data = useSelector((state) => state.records)
    // const record = currentId ? data.records.find((rec) => rec._id === currentId) : null

    const dispatch = useDispatch()

    useEffect(() => {
        if(data){
            setRecordData(data) 
        }        
        
        if(isOpen){
            setOpen(true)
        } else {
            setOpen(false)
        }
    },[data, isOpen])

    const handleSubmit = () => {
        if(!isEdit){
            if(menu === "room"){
                dispatch(createRoom(recordData))
            }
        } else {
            if(menu === "room"){
                dispatch(updateRoom(recordData[`id`], recordData))
            }
            
        }

        handleClose()
    }

    return (
        <div>
            {/* <TableSnackBar isEdit={isEdit} isSuccess={data.isSuccess}/> */}
            <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <Box display="flex" alignItems="center" marginTop="10px">
                        <Box flexGrow={1} >
                            <Typography variant="h5" fontWeight="bold">
                                {/* {isEdit ? 'Edit Record' : 'Delete Record'} */}
                                {title}
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton onClick={handleClose}>
                                <Cancel color="secondary" fontSize="large"/>
                            </IconButton>
                        </Box>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description">
                        {!isEdit && 'Are you sure want to delete this record ?'}
                    </DialogContentText> */}
                    {/* {isEdit && (
                        
                        <Grid container spacing={2} direction="column">   
                            <Grid item>
                                <TextField disabled value={recordData.uid} variant="outlined"  label="UID"/>
                            </Grid>
                            <Grid item>
                                <TextField disabled value={!recordData.userData ? '' : recordData.userData.name} variant="outlined"  label="Name"/>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" value={recordData.temperature} onChange={e => setRecordData({...recordData, temperature: e.target.value})} type="number" label="Temperature"/>
                            </Grid>
                        </Grid>
                    )} */}
                    <form autoComplete="off" >
                        <Grid container spacing={3} marginTop={1}>

                            {
                                
                                    field.map((item) => { 
                                        if(isEdit){
                                            return(

                                                <Grid item xs={12} >
                                                    <TextField
                                                        name={item.name}
                                                        onChange={e => setRecordData({...recordData, [`${item.name}`] : e.target.value})}
                                                        variant="outlined"
                                                        // error={error}
                                                        required
                                                        fullWidth
                                                        value={recordData[`${item.name}`]}
                                                        label={item.label}
                                                        // autoFocus={autofocus}
                                                        type={item.type}
                                                        select={item.type === "option"}
                                                        disabled={item.editable === false}
                                                    > 

                                                    {item.type === "option" ?
                                                    
                                                        item.option.map((option) => {
                                                            return(
                                                                <MenuItem value={option}>{option}</MenuItem>
                                                            )
                                                        })

                                                        :null

                                                    }

                                                    </TextField>
                                                </Grid>
                                            )
                                        }else{
                                            if(item.creatable){
                                                return(

                                                    <Grid item xs={12} >
                                                        <TextField
                                                            name={item.name}
                                                            onChange={e => setRecordData({...recordData, [`${item.name}`] : e.target.value})}
                                                            variant="outlined"
                                                            // error={error}
                                                            required
                                                            fullWidth
                                                            label={item.label}
                                                            // autoFocus={autofocus}
                                                            type={item.type}
                                                            select={item.type === "option"}
                                                        > 
    
                                                        {item.type === "option" ?
                                                        
                                                            item.option.map((option) => {
                                                                return(
                                                                    <MenuItem value={option}>{option}</MenuItem>
                                                                )
                                                            })
    
                                                            :null
    
                                                        }
    
                                                        </TextField>
                                                    </Grid>
                                                )
                                            }

                                        }
                                            
                                    })

                            }
                        </Grid>
                    </form>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant="contained" color={isEdit ? 'success' : 'primary'}>
                        Save
                    </Button>
                    <Button variant="contained" onClick={handleClose} color= {isEdit ? 'error':'secondary'} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TableDialog