import axios from 'axios'


export const getProducts = async (id) => {
    const get = {
        method:"GET",
        url:(id ? `http://localhost:3002/products${id}` : `http://localhost:3002/products`)
    }
    let products = await axios(get)
    return products.data
}

export const postProducts = async (body) => {
    const post = {
        method:"POST",
        url:`http://localhost:3002/products`,
        data:body
    }
    let posted = await axios(post)
    return posted.data
}

export const deleteProduct = async (id) => {
    const deletes = {
        method:"DELETE",
        url:`http://localhost:3002/products${id}` 
    }
    let deleted = await axios(deletes)
    return deleted.data
}

export const editProduct = async (id,body) => {
    const edits = {
        method:"PUT",
        url:`http://localhost:3002/products${id}` 
    }
    let edited = await axios(edits)
    return edited.data
}

export const getReviews = async (id) =>{
    const gets = {
        method : "GET",
        url : (id ?`http://localhost:3002/reviews/${id}` :`http://localhost:3002/reviews`)
    }
    let reviews = await axios(gets)
    return reviews.data
}
export const postReviews = async (id,body) =>{
    const posts = {
        method : "POST",
        url : `http://localhost:3002/reviews/${id}`,
        data : body
    }
    let newReview = await axios (posts)
    return newReview.data
}
export const deleteReviews = async (id) =>{
    const deletes = {
        method : "DELETE",
        url : `http://localhost:3002/reviews/${id}`,
    }
    let deleted = await axios(deletes)

}
export const editReviews = async (id,body) =>{
    const puts = {
        method : "PUT",
        url : `http://localhost:3002/reviews/${id}`,
        data : body
    }
    let editReview = await axios(puts)
    return editReview.data

}