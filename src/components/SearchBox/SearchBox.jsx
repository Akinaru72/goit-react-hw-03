import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchbox}>
      <p>Find contacts by Name</p>
      <input
        className={css.inputfield}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
