
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchWithRetry } from '@/lib/utils/fetchWithRetry'

export const fetchProducts = createAsyncThunk('product/fetchProducts', 
    async ({ storeId }, thunkAPI) => {
        try {
            const { data } = await fetchWithRetry('/api/products' + (storeId ? `?storeId=${storeId}` : ''))
            return data.products
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
    },
    reducers: {
        setProduct: (state, action) => {
            state.list = action.payload
        },
        clearProduct: (state) => {
            state.list = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.list = action.payload
        })
    }
})

export const { setProduct, clearProduct } = productSlice.actions

export default productSlice.reducer