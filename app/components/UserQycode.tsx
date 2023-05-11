import React, { useState } from "react";
import { useMaskStore } from "../store/mask";
import styles from "./UserQycode.module.scss";

const UserQycode = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue === "123") {
      const { removeMask } = useMaskStore.getState();
      removeMask(styles["UserQycode"]);
    }
  };

  return (
    <div className={`${styles.UserQycode} ${styles.overlay}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Enter invitation code"
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserQycode;
