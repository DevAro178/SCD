import React from 'react'

const InputFields = ({label,placeholder,type}) => {
  return (
    <>
      <div class="wrap-input100">
		<input className="input100" placeholder={placeholder} type={type} name={placeholder} required />
		<span class="focus-input100" data-placeholder={placeholder}></span>
	</div><br></br>
    </>
  )
}

export default InputFields
