import { commerce } from "../lib/commerce";

export async function loadData() {
    try {
        const { data } = await commerce.products.list();
        // console.log("data in loadData(actions): ", data.rows);
        return {
            type: "LOAD_DATA",
            payload: data,
        };
    } catch (err) {
        console.log("err in loadData(actions): ", err);
    }
}
