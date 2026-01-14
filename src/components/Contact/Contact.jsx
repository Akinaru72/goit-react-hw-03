import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contact}>
      <ul className={css.data}>
        <li>
          <IoPersonSharp /> {name}
        </li>
        <li>
          <BsTelephoneFill /> {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
