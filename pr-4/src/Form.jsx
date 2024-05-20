import './App.css'
import React, { useState } from 'react'

const Form = () => {
    const [input,setInput]=useState([
        {id : "",name : "",phone : "",salary : ""},
    ]);

    const addmore=()=>{
        let newfild = {id : Date.now(),name : "", phone : "",salary : ""}
        setInput([...input,newfild])
    }

    const removefild=(id)=>{
        setInput(input.filter(val => val.id != id))
    }
  return (
    <div className='form' align="center">
        <h1>Dynamic Form</h1>
        <div className='flex'>
        <p className='mr'>Name</p><p className='mr'>Phone</p><p className='mr'>Salary</p><p>Delet</p>
        </div>
        {
            input.map((item,index)=>{
                return(
                    <form key={item.id}>
                        <input className='input' type="text" placeholder='Enter Youre Name'/>
                        <input className='input' type="number" placeholder='Enter Youre Phone'/>
                        <input className='input' type="number" placeholder='Enter Youre Salary In Rs.'/>
                        {
                            index === 0 ? <button className='btn' disabled onClick={()=>removefild(item.id)}>Delet</button> : <button className='btn' onClick={()=>removefild(item.id)}>Delet</button>
                        }
                    </form>
                )
            })
        }<br/>
        <button className='btna' onClick={() => addmore()}>Add More</button>
    </div>
  )
}

export default Form