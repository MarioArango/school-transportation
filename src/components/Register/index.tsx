'use client'

import { Form, Input, InputNumber, Typography } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons"
import NextButton from "../NextButton";
import "./index.css"
import { useState } from "react";
import { getRules } from "@/utils/helpers";

const { Item } = Form
const { Title } = Typography

type ValuesForm = {
    name: string
    phoneNumber: number
}

export default function Register() {

    const [ link, setLink ] = useState('https://wa.me/51998525652/?text=')

    const [ form ] = Form.useForm()
    const { validateFields } = form
    
    const handleFinish = () => {
        validateFields().then((values: ValuesForm) => {
            const message = `Buen día, soy ${values.name} y mi numeró de contacto es ${values.phoneNumber}, quisiera información del servicio de transporte.`
            const linkPublic = link + encodeURIComponent(message)
            setLink(linkPublic)
            const enlace = document.getElementById("enlace")
            enlace?.click()
        })
    }
    
    return (
        <section className="container-form gx-box-shadow-base">
            <Title level={2} className="gx-text-center"><WhatsAppOutlined className="gx-text-success"/> Contáctanos</Title>
            <Form
                id='form-contact'
                form={form}
                onFinish={handleFinish}
                layout="vertical"

            >
                <Item label="Nombres y Apellidos" name="name" rules={getRules('Debe ingresar su Nombre completo')}>
                    <Input minLength={3}/>
                </Item>
                <Item label="Teléfono" name="phoneNumber" rules={getRules('Debe ingresar su número de teléfono')}>
                    <InputNumber className="gx-w-100" minLength={9} maxLength={9} controls={false}/>
                </Item>
                <Item>
                    <NextButton
                        text="Contactar" 
                        type="primary" 
                        htmlType="submit" 
                        block={true} 
                    />
                </Item>
            </Form>
            <a id='enlace' style={{display: 'none'}} href={link} target="_blank"></a>
        </section>
    )
}