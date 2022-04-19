import React, { useState } from 'react'

function Form({ setPictures }) {

const [form, setForm] = useState({webformatURL: '', tags: '', views: 0, likes: 0, user:'', amount: 0})
const { webformatURL, tags, views, likes, user, amount } = form

const updateForm = (e) => {
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})
}

const handleSubmit = async (e) => {
    e.preventDefault();
    let req = await fetch('http://localhost:8000/pictures', {
        method: 'POST',
        headers: {'CONTENT-TYPE':'application/json'},
        body: JSON.stringify(form)
      })
    let res = await req.json()
    // console.log("res is", res, typeof res)
     
    setPictures((prevState) => { return [...prevState, res]})
    setForm({webformatURL: '', tags: '', views: 0, likes: 0, user:'', amount: 0})
    
}

    return (
        <form onSubmit={handleSubmit} className="new-picture-form">
          <input type="text" onChange={(e) => updateForm(e)} name="webformatURL" placeholder="Image URL" value={webformatURL} />
          <input type="text" onChange={(e) => updateForm(e)} name="tags" placeholder="Tags" value={tags}/>
          <input type="number" onChange={(e) => updateForm(e)} name="amount" placeholder="Price in Eth" value={amount}/>
          <input type="text" onChange={(e) => updateForm(e)} name="user" placeholder="Created By" value={user}/> 
          <input type="submit" value="Create your own NFT" />
        </form>
      );
}
export default Form