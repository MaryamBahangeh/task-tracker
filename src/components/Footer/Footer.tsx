import { ReactElement, useRef } from "react";

import CreateTaskModal from "../CreateTaskModal/CreateTaskModal.tsx";

import IconButton, { Shape, Size } from "../IconButton/IconButton.tsx";
import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);

  const createButtonClickHandler = (): void => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current.showModal();
  };

  return (
    <footer className={styles.footer}>
      <IconButton
        icon={<MingcuteAddLine />}
        shape={Shape.CIRCLE}
        size={Size.LARGE}
        onClick={createButtonClickHandler}
      />
      <CreateTaskModal ref={modalRef} />
    </footer>
  );
}
