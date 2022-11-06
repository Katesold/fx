import { MouseEventHandler } from "react";

export interface StyledButtonProps extends ButtonProps {
    size: string;
    color?: string;
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    disabled?: boolean,
    children: string,
    onClick: MouseEventHandler,
}