import type { IButtonProps } from 'native-base';
interface GdButtonProps extends IButtonProps {
    onClick?: () => void;
    buttonText: string;
}
export declare const GdButton: ({ onClick, buttonText }: GdButtonProps) => JSX.Element;
export {};
