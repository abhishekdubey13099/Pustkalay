import { useEffect } from "react";


export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Pustkalay`;
    }, [title]);

    return null;
}
