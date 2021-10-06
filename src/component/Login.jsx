import { Modal } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 7,
};
function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <Button variant="contained" onClick={handleOpen} style={{ margin: "5px" }}>Login</Button>
        <Modal open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Please Login!!!</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="" className="form-control" id="floatingInput" placeholder="0123456789" />
                    <label for="floatingInput">Contact Number</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <input class="btn btn-primary" style={{marginTop:"30px",marginLeft:"100px"} } type="submit" value="Submit" ></input>
            </Box>
        </Modal>
    </>)
}
export default Login;