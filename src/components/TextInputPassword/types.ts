export type TextInputPasswordType = {
  label: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  helperText?: string | boolean; 
  isError?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
