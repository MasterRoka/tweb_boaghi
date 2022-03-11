import { Row } from 'antd';
import Designe from './Designe';

const content = [
    {
        id: 1,
        title: "Card title 1",
        content: "description"
    },
    {
        id: 2,
        title: "Card title 2",
        content: "description"
    }
    ,
    {
        id: 3,
        title: "Card title 3",
        content: "description"
    }
]


function Continut  ()  {
    return (

        <Row gutter={16} >
            {
                content.map((element, i) => {
                    return (
                        <Designe key={element.id} title={element.title} content={element.content}/>
                    )
                })
            }
        </Row>
    )
}
export default Continut