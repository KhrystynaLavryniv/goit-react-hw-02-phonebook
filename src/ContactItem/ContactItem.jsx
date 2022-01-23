import React from "react";
import { Item, ItemBtn } from "./ContactItem.style";

function ContactItem({ id, name, number, onClick }) {
  return (
    <Item>
      {name}:{number}
      <ItemBtn type="button" id={id} onClick={onClick}>
        Delete
      </ItemBtn>
    </Item>
  );
}
export default ContactItem;
