interface CheckboxPropsType {
    label?: string;
    isDisabled?: boolean;
    isComplete?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onChange?: () => void;
}
declare const Checkbox: ({ label, isDisabled, disabled, isComplete, checked, onChange }: CheckboxPropsType) => JSX.Element;
export default Checkbox;
