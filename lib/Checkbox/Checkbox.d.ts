interface CheckboxPropsType {
    label?: string;
    isDisabled?: boolean;
    disabled?: boolean;
    isChecked?: boolean;
    checked?: boolean;
    onChange?: () => void;
}
declare const Checkbox: ({ label, isDisabled, disabled, isChecked, checked, onChange }: CheckboxPropsType) => JSX.Element;
export default Checkbox;
