import { Card, Col } from 'antd'

function Designe({title, content}) {

    return (

        <Col span={8}>
            <div style={{ paddingBottom: '8px',paddingTop:'8px'}}>
                <Card title={title} bordered={false}>
                    {content}
                </Card>
            </div>
        </Col>

    )
}

export default Designe