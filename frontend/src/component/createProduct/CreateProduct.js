import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createProduct } from '../../actions/productActions'
import { clearErrors } from '../../actions/userActions'
import { NEW_PRODUCT_RESET } from '../../constant/ProductConstant'

import Button from '@mui/material/Button';

const CreateProduct = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error, success, loading } = useSelector(state => state.newProduct)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct(name, description, price, stock))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (success) {
            alert.success("Product created Successfullly")
            navigate("/")
            dispatch({ type: NEW_PRODUCT_RESET })
        }
    }, [navigate, dispatch, alert, error, success])

    return (
        <Fragment>
            <h1><center>Create Product</center></h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label><center>Product Name</center></label>

                    <input
                        className='text'
                        type="text"
                        placeholder="Product Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label><center>Product Description</center></label>

                    <textarea
                        className='text'
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        cols="30"
                        rows="1"
                    ></textarea>
                </div>
                <div>
                    <label><center>Product Price</center></label>

                    <input
                        className='text'
                        type="number"
                        placeholder="Price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>


                <div>
                    <label><center>Product Stock</center></label>

                    <input
                        className='text'
                        type="number"
                        placeholder="Stock"
                        required
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={loading ? true : false}
                >
                    Create
                </Button>
            </form>
        </Fragment>
    )
}

export default CreateProduct