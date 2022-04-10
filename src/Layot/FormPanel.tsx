
import {Form, Input, Button, Menu} from 'antd';
import {useState} from "react";
export const FormPanel =() =>{
    const[message,setmessage]=useState('')
    const[newuser,setnewuser]=useState('')
    const[Studile,setStudile]=useState('')
    const[anii,setanii]=useState('')

    const ShowResult =()=>{
        alert("Message:"+message+"\n"+"Newuser:"+newuser+"\n"+"Studile:"+Studile+"\n"+"Anii:"+anii)
        console.log("Message:"+message+"\n"+"Newuser:"+newuser+"\n"+"Studile:"+Studile+"\n"+"Anii:"+anii)
    }
    return(
        <Form
            name="wrap"
            labelCol={{ flex: '150px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
        >
            <Form.Item
                       label="Message" name="Message" rules={[{ required: true }]}>
                <Input value={message} onChange={(e )=> setmessage(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                       label="Newuser" name="Newuser" rules={[{ required: true }]}>
                <Input value={newuser}  onChange={(e )=> setnewuser(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Studile"  name="Studile"   rules={[{ required: true }]}>
                <Input   value={Studile} onChange={(e )=> setStudile(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                       label="anii"  name="anii"   rules={[{ required: true }]}>
                <Input  type="number" value={anii} onChange={(e )=> setanii(e.target.value)}
                />
            </Form.Item>
            <Form.Item label=" ">

                <Button
                        onClick={ShowResult}  type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>
        </Form>
    )
}

