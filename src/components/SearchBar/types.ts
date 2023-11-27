import { TextFieldProps } from '@mui/material';

export type SearchBarProps = TextFieldProps & {
  value: string;
  onTextChange: (value: string) => void;
  placeholder: string;
  handleClear: () => void;
};
