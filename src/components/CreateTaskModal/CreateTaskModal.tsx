import { ForwardedRef, forwardRef, ReactElement, useRef } from "react";

import useMergedRef from "@react-hook/merged-ref";

import Button, { Variant } from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import styles from "./CreateTaskModal.module.css";

type Props = { createTask: (name: string) => void };

function CreateTaskModal(
  { createTask }: Props,
  ref?: ForwardedRef<HTMLDialogElement>,
): ReactElement {
  const otherRef = useRef<HTMLDialogElement>(null);
  const multiRef = useMergedRef(ref ?? null, otherRef);

  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = (): void => {
    if (!otherRef?.current) {
      return;
    }

    otherRef.current.close();
  };

  const cancelButtonClickHandler = (): void => {
    closeModal();
  };

  const applyButtonClickHandler = (): void => {
    if (!inputRef.current) {
      return;
    }

    createTask(inputRef.current.value);

    closeModal();
  };

  return (
    <dialog ref={multiRef} className={styles["create-task-modal"]}>
      <h2>New Task</h2>
      <Input ref={inputRef} placeholder="Input your task..." />
      <div className={styles.actions}>
        <Button variant={Variant.OUTLINE} onClick={cancelButtonClickHandler}>
          Cancel
        </Button>
        <Button onClick={applyButtonClickHandler}>Apply</Button>
      </div>
    </dialog>
  );
}

export default forwardRef(CreateTaskModal);
