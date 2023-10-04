/* eslint-disable react/prop-types */

const TableItem = (props) => {
  return (
    <tr>
        <td className="f" >
            {props.product.title}
        </td>
        <td >
            {props.product.description}
        </td>
        <td >
            {props.product.price}
        </td>
        <td >
            {props.product.category}
        </td>
        <td >
            <img src={props.product.image} className="rounded mx-auto fluid" width="100" height="100" alt='Image not Found'/>
        </td>
        <td>
            <button className="btn fs-4 text-danger" onClick={(()=>{
            {props.handleDelete(props.product)}})}>Borrar</button>
        </td>
    </tr>
  )
}

export default TableItem