/* eslint-disable react/prop-types */
import TableItem from "./TableItem";
const ProductTable = (props) => {
  return (
    <div className="table-responsive-md">
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <TableItem
              key={product.id}
              product={product}
              handleDelete={props.handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
