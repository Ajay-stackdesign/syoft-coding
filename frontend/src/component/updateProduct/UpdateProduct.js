import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateProduct } from '../../actions/productActions'
import { clearErrors } from '../../actions/userActions'
import { useParams } from "react-router-dom"
import "./UpdateProduct.scss"

import Button from '@mui/material/Button';
import { UPDATE_PRODUCT_RESET } from '../../constant/ProductConstant'

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, product: products } = useSelector((state) => state.single);

    const { loading, isUpdated, product } = useSelector(state => state.updateProduct)
    const alert = useAlert()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct(name, description, price, stock))
    }

    // console.log(id)
    const params = useParams()
    console.log(params.id)
    // const productId = product.find((p) => p._id === Number(id));
    // const productId = match.params.id


    useEffect(() => {
        if (products.id === params.id) {
            // dispatch(getSingleProduct(productId));
            // } else {
            setName(products.name)
            setDescription(products.description)
            setPrice(products.Price)
            setStock(products.stock)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success("Product Updated Successfully");
            navigate("/")
            dispatch({ type: UPDATE_PRODUCT_RESET });
        }
    }, [alert, dispatch, error, isUpdated, navigate, params.id, product, products.Price, products.description, products.id, products.name, products.stock])
    return (
        <Fragment>
            <h1><center>Update Product</center></h1>
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
                    Update
                </Button>
            </form>
        </Fragment>
    )
}

export default UpdateProduct