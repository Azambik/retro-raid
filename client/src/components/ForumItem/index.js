import React from "react";
import { Link } from "react-router-dom";
//import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/Globalstate';
//import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function ProductItem(post) {
  const [state, dispatch] = useStoreContext();
  const {
    name,
    createdAt,
    _id,
  } = post;

  return (
    <div className="card px-1 py-1">
      <Link to={`/post/${_id}`}>
          hi
        <p>{name}</p>
        <p>{createdAt}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
