import React from "react"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Select,
  MenuItem,
} from "@material-ui/core"

export default function Form({
  formLabel,
  values,
  labels,
  currentValue,
  onChange,
}) {
  return (
    <div className="card container-small">
      <FormControl>
        <FormLabel>{formLabel}</FormLabel>
        <Select value={currentValue} onChange={onChange}>
          {values.map((value, index) => {
            return (
              <FormControlLabel
                key={`${value}_${index}`}
                value={values[index]}
                control={<MenuItem />}
                label={labels[index]}
              />
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
