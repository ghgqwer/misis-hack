import {Button, Form, Input, message, Typography} from 'antd'
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import { FlexColumn } from '../BaseComponents';

export default function RegisterForm () {
    const form = Form.useForm()
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    // async function registerSubmit() {
    //     try {
    //         const values = await form[0].validateFields();
    //         const response = await registerUser(values).then(r => r)

    //         localStorage.setItem('user_id', response.data.new_user.id)

    //         messageApi.open({
    //             type: "success",
    //             content: response.data.message
    //         })

    //         navigate('posts')
    //     } catch (error) {
    //         messageApi.open({
    //             type: "error",
    //             content: error.response.data.detail,
    //         })
    //     }
    // }

    return (
        <Container>
            {contextHolder}
            <StyledTitle
                level={1}
            >
                Регистрация
            </StyledTitle>
            <Form form={form[0]}>
                <Form.Item
                    name="username"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свое имя!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Имя пользователя"
                        size={'large'}

                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свою почту!',
                            type: 'email'
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="Почта"
                        size={'large'}

                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свой пароль!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Пароль"
                        size={'large'}
                    />
                </Form.Item>
                <Form.Item>
                    <FlexColumn>
                        <StyledButton
                            type="primary"
                            htmlType="submit"
                            className="register-form-button"
                            size={'large'}
                            // onClick={registerSubmit}
                        >
                            Зарегистрироваться
                        </StyledButton>
                        <a onClick={() => navigate('/login')}>Войти</a>
                    </FlexColumn>
                </Form.Item>
            </Form>
       </Container>
    )
}

const Container = styled.div`
    width: 350px;
`

const StyledTitle = styled(Typography.Title)`
    margin-top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-bottom: 10px;
`