import type { NextPage } from "next";
import styles from "./search.module.css";

type SearchType = {
  placeholder?: string;
};

const Search: NextPage<SearchType> = ({ placeholder = "placeholder" }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchBarField}>
        <div className={styles.placeholder}>{placeholder}</div>
      </div>
      <div className={styles.searchBarIcon}>
        <img
          className={styles.searchBarFragment1Icon}
          alt=""
          src="/search-bar-fragment-11@2x.png"
        />
      </div>
    </div>
  );
};

export default Search;
