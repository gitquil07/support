import React, { useState } from "react";
import { getListCopy } from "utils/functions";

interface AddRemoveHookProps<Type> {
    list: Type[]
    add: (e: React.MouseEvent<HTMLButtonElement>) => void
    remove: (e: React.MouseEvent<HTMLButtonElement>, idx: number) => void,
    setList: (arg: Type[]) => void,
    handleBlur: (e: React.FocusEvent<HTMLInputElement>, idx: number) => void
}

export function useAddRemove<Type>(val: Type[]): AddRemoveHookProps<Type>{

    const [list, setList] = useState<Type[]>(val);

    const add: (event: React.MouseEvent<HTMLButtonElement>) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {

        const listCopy: Type[] = getListCopy<Type>(list);
        
        listCopy.push(val[0]);
        
        setList(listCopy);

        event.preventDefault();

    }

    const remove: (event: React.MouseEvent<HTMLButtonElement>, idx: number) => void = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
        
        let listCopy: Type[] = getListCopy<Type>(list);

        listCopy = listCopy.filter((i, index) => index !== idx);

        setList(listCopy);

        event.preventDefault();

    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>, idx: number): void => {

        const listCopy: Type[] = getListCopy<Type>(list);

        listCopy[idx] = {...listCopy[idx], [e.target.name]: e.target.value};
        
        setList(listCopy);

    }

    return {
        list,
        add,
        remove,
        setList,
        handleBlur
    }

}