import { ReactNode } from "react";

interface Props {
    condition: boolean | undefined | null;
    children: ReactNode;
}

export function RenderIf({ condition, children }: Props) {

    return (
        <>
            {(!!condition && condition) && (
                children
            )}
        </>
    )
}