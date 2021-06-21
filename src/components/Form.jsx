import React from 'react'

const Form = (props) => {
    return (
      <>
 <div class="mb-4">
    <label for="exampleInputEmail1" className="form-label">{props.label}</label>
    <input type={props.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.placeholder}/>
  </div>
      </>
    )
}

export default Form;
