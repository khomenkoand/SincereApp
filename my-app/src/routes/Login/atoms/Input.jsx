import { TextField } from "@material-ui/core";

const Input = ({ label, value, type, handleChange, autoFocus }) => (
  <TextField
    variant="outlined"
    margin="normal"
    label={label}
    value={value}
    type={type}
    onChange={handleChange}
    size="small"
    color="primary"
    fullWidth
    autoFocus={autoFocus}
    required
  />
);

export default Input;
