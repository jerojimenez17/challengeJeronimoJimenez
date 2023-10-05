/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const TableItem = (props) => {
  const { deleteItem } = useContext(ProductContext);
  return (
    <tr>
      <td className="f">{props.product.title}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>{props.product.category}</td>
      <td>
        <img
          src={props.product.image}
          className="rounded mx-auto fluid"
          width="100"
          height="100"
          alt="Image not Found"
        />
      </td>
      <td>
        <button
          className="btn fs-5 font-weight-bold text-danger "
          onClick={() => {
            {
              deleteItem(props.product);
            }
          }}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
