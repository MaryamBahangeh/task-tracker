import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";

import Input from "../Input/Input.tsx";
import Select from "../Select/Select.tsx";

import IconButton from "../IconButton/IconButton.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

import { FILTER_SELECT_OPTIONS } from "../../select-options/filter-select-options.ts";

import styles from "./toolbar.module.css";
import { Filters } from "../../App.tsx";

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export default function Toolbar({ filters, setFilters }: Props): ReactElement {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilters((old) => ({ ...old, name: e.target.value }));
  };

  return (
    <div className={styles.toolbar}>
      <Input
        className={styles.input}
        icon={<MingcuteSearchLine />}
        value={filters.name}
        onChange={inputChangeHandler}
      />
      <Select options={FILTER_SELECT_OPTIONS} />
      <IconButton icon={<MingcuteMoonLine />} />
    </div>
  );
}
