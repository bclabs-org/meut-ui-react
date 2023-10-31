interface BadgeLabelProps {
    text: string;
    status: 'attention' | 'disabled' | 'warning' | 'information';
    className: string;
}
declare const BadgeLabel: ({ text, status, className }: BadgeLabelProps) => JSX.Element;
export default BadgeLabel;
