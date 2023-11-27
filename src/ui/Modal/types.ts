type ModalButtonProps = {
  type?: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
};

export type ModalProps = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  isOpenModal?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  buttons?: ModalButtonProps[];
  modalType?: string;
  styleSubtitle?: object;
};
