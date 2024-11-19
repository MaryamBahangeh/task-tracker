import { forwardRef, LegacyRef, ReactElement } from "react";

import Button, { Variant } from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import styles from "./CreateTaskModal.module.css";

type Props = {};

function CreateTaskModal(
  _: Props,
  ref?: LegacyRef<HTMLDialogElement>,
): ReactElement {
  return (
    <dialog ref={ref} className={styles["create-task-modal"]}>
      <h2>New Task</h2>
      <Input placeholder="Input your task..." />
      <div className={styles.actions}>
        <Button variant={Variant.OUTLINE}>Cancel</Button>
        <Button>Apply</Button>
      </div>
    </dialog>
  );
}

export default forwardRef(CreateTaskModal);
