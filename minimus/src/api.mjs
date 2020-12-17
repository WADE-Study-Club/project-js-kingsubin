import { nanoid } from "https://cdn.skypack.dev/nanoid";
import { saveItem } from "./storage.mjs";

export async function postLogin({ email, password }) {
    const userId = nanoid();
    const response = await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: userId,
            email,
            password
        })
    });

    saveItem({ key:  "user", value: userId});
    await response.json();
}

export async function getLogin() {
    const response = await fetch("http://localhost:5500");
    const data = await response.json();
    return data;
}