import React from 'react'
import FormComponent from "../components/form-components/FormComponent";
let elements = [{
	type: "input",
	label: "User Name",
	className: "user"
},
{
	type: "button",
	label: "submit",
	className: "submit-handel"
}];

const Products = () => {
	return (
		<div>
			{/* <FormComponent type="input" label="username" className="" /> */}
			{elements.map(e => <FormComponent type={e.type} label={e.label} className={e.className} />)}
			{/* {elementGenerator(elements[0])} */}
		</div>
	)
}

export default Products;
