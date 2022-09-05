import React, { Fragment, useEffect } from 'react'
import { Link, } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { clearErrors, getAllProduct } from '../../actions/productActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const GetAllProduct = () => {
    const dispatch = useDispatch()
    const { error, products } = useSelector((state) => state.products)
    console.log(products)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getAllProduct())
    }, [dispatch, error])

    return (
        <Fragment>
            <Link to="/" style={{ "textDecoration": "none", "textTransform": "capitalize", "fontSize": "20px", "marginTop": "50px" }}>Back</Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Stock</TableCell>
                            <TableCell align="left">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.stock}</TableCell>
                                <TableCell align="left">
                                    <Link to={`/update/${row._id}`} style={{ "textDecoration": "none" }}>
                                        Update
                                    </Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default GetAllProduct