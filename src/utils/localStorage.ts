export function getUserLocalStorageData() {
    const data = localStorage.getItem("user");
    if (!data) {
        return undefined;
    }

    return JSON.parse(data);
}

export function setUserLocalStorageData(data: any) {
    localStorage.setItem(
        "user",
        JSON.stringify({
            data,
        })
    );
}

export function removeUserLocalStorageData() {
    localStorage.removeItem("user");
}