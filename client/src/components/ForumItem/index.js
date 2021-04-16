import React from "react";
import { Link } from "react-router-dom";
//import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/Globalstate';
//import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

function ForumItem(posts) {
  const [state, dispatch] = useStoreContext();
  const {
    name,
    createdAt,
    _id,
  } = posts;
console.log(posts);
  return (
    <div className="card px-1 py-1">
      <Link to={`/posts/${_id}`}>
        <div>
        <p>{name}</p>
        <p>{createdAt}</p>
        </div>
      </Link>
    </div>
  );
}

export default ForumItem;
