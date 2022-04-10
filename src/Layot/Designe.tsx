import {Card, Checkbox, Col, Input} from 'antd'
import {observer} from "mobx-react-lite";
import {IContentModel} from "../interfaces/interface";
import {useEffect} from "react";

export const Designe=observer(({content}:{content:IContentModel}) => {
    const {title,contents,notes,changeNotes,isSeen,changeSeen,seen} =content
    useEffect(()=>{
        if(isSeen) {
            alert(`Ati apasat pe --> ${ title }`)
        }
    },[isSeen])

    return (

        <Card title={title} bordered={false}>
            {contents}
            <Input value={notes}
                   placeholder={notes}
                   onChange={(e)=>changeNotes(e.target.value)}
            />
            <Checkbox defaultChecked={ seen } checked={seen} onChange={(e)=>changeSeen(e.target.checked)}/>

        </Card>

    )
})