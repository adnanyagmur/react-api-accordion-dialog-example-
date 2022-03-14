import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//const emails = ["buraya tablo ", "bilgileri gelecek"];

function SimpleDialog(props) {
    const { onClose, selectedValue, open,product } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

/*     const handleListItemClick = (value) => {
        onClose(value); 
    }; */

console.log(props.product)

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Rate</TableCell>
                                <TableCell align="right">Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {/*  {this.props.products.map((product) => ( */}
                                <TableRow
                                   /*  key={product.id} */
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {props.product.title} 
                                    </TableCell>
                                    <TableCell align="right">{props.product.category}</TableCell>
                                    <TableCell align="right">{props.product.description}</TableCell>
                                    <TableCell align="right">{props.product.rating.rate}</TableCell>
                                    <TableCell align="right">{props.product.rating.count}</TableCell>
                                </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogTitle>
            <Button onClick={handleClose}>Cancel </Button>
        </Dialog>
    );
}




SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

 export default function SimpleDialogDemo(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
console.log(props)
    return (
        <div>
            <Typography variant="subtitle1" component="div">

            </Typography>
            <br />
            <Button
                variant="outlined"
                style={{ marginBottom: '0px', marginLeft: '400px' }}   onClick={handleClickOpen}>
                Detay
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                product={props.product}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}

