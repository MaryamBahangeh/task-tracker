import { ReactElement } from "react";

import Input from "../Input/Input.tsx";
import Select from "../Select/Select.tsx";

import IconButton from "../IconButton/IconButton.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

import { FILTER_SELECT_OPTIONS } from "../../select-options/filter-select-options.ts";

import styles from "./toolbar.module.css";

export default function Toolbar(): ReactElement {
  return (
    <div className={styles.toolbar}>
      <Input className={styles.input} icon={<MingcuteSearchLine />} />
      <Select options={FILTER_SELECT_OPTIONS} />
      <IconButton icon={<MingcuteMoonLine />} />
    </div>
  );
}
