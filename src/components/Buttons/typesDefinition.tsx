import React from "react";

export type TPrButtonProps = TScButtonProps & { name: string };

export type TScButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

