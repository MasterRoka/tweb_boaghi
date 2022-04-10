import { Row } from 'antd';
import {Designe} from './Designe';
import {IContentModel} from "../interfaces/interface";
import {useRootStore} from "../index";

function Continut  ()  {
    const {content} = useRootStore()
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} >
                {content.map((content:IContentModel) => {
                    return (
                        <Designe key={content.id} content={content}/>
                    )
                } )}

            </Row>

        </div>

    )
}
export default Continut