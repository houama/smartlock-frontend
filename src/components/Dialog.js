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
import { updateRoom, createRoom, deleteRoom } from '../state/actions/room';
import { updateNode, createNode, deleteNode } from '../state/actions/node';

// import TableSnackBar from './TableSnackBar'

const TableDialog = ({menu, title, isOpen, data, handleClose, isEdit, isDelete, field, record}) => {
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
        if(isDelete){
            if(menu === "room"){
                dispatch(deleteRoom(data[0]))
            }else if(menu === "node"){
                dispatch(deleteNode(data[0]))
            }
        }else if(!isEdit){
            if(menu === "room"){
                dispatch(createRoom(recordData))
            }else if(menu === "node"){
                dispatch(createNode(recordData))
            }
        }else {
            if(menu === "room"){
                dispatch(updateRoom(recordData[`id`], recordData))
            }else if(menu === "node"){
                dispatch(updateNode(recordData[`id`], recordData))
            }
            
        }

        handleClose()
    }

    console.log(data)

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
                    {
                        isDelete ?
                        <DialogContentText id="alert-dialog-description">
                            Are you sure want to delete {data[1]} ?
                        </DialogContentText>

                        :

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
                    }


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant="contained" color={isEdit ? 'success' : 'primary'}>
                        {isDelete ? "Delete" : isEdit ? "Save" : "Create"}
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