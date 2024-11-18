import { ReactElement } from "react";
import { SelectOption } from "../../types/select-option.ts";

type Props = {
  options: SelectOption[];
};

export default function Select({ options }: Props): ReactElement {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
