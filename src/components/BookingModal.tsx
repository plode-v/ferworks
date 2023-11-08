import React, { useContext, useState } from 'react'
import { Modal, Box } from '@mui/material'

interface Props {
    buttonClass: string
    buttonString: string
}

const BookingModal = ({ buttonClass, buttonString }: Props ) => {

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


  return (
    <>
        <button onClick={handleOpen} className={buttonClass}>{buttonString}</button>
        <Modal
            open={open}
            onClose={handleClose}
            className='h-full w-full'
        >
            <Box
            
            sx={{
                backgroundColor: "white",
                position: "absolute",
                left: '50%',
                top: "50%",
                transform: "translate(-50%, -50%)",
                height: "80%",
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: '10px'
            }}>
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1x-PROK0Jar6kki9QfC3sCXBzpME9PIcCy9vGABtD0dIKWWZ46FEwlg2o4NvbzWtuDnKWXiwT7?gv=true" 
                    width="100%" 
                    height="100%" 
                />
            </Box>
        </Modal>
    </>
  )
}

export default BookingModal