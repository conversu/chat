import { isMobileDevice } from "@functions/utils";



export function useBrowserHead() {

    const hideBrowserHeader = (id?: string) => {
        if (isMobileDevice()) {
            const element = document.getElementById(id ?? "page-end");
            element?.scrollIntoView({ behavior: 'instant', block: 'end' });
        }
    }

    return {
        hideBrowserHeader
    }
}