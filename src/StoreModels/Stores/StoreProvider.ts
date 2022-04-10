import RootStore from "./RootStore.store";
export const storeProvider=RootStore.create({
    content: [
        {
            id: '1',
            title: "Card title 1",
            content:"content",
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: "Card title 2",
            content:"content",
            seen: false,
            notes: '',
        },
        {
            id: '3',
            title: "Card title 3",
            content: "content",
            seen: false,
            notes: '',
        },


    ]
})

export default storeProvider