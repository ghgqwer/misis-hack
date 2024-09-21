import { Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { marked } from "marked";
import DOMPurify from 'dompurify';


export default function UserProfilePage() {
    const [value, setValue] = useState('')
    const [selectedContentKey, setSelectedContentKey] = useState('')

    const manuItems = [
        {
            key: '1',
            label: 'Файл №1'
        },
        {
            key: '2',
            label: 'Файл №2'
        },
        {
            key: '3',
            label: 'Файл №3'
        },
        {
            key: '4',
            label: 'Файл №4'
        },
        {
            key: '5',
            label: 'Файл №5'
        },
        {
            key: '6',
            label: 'Файл №6'
        },
        {
            key: '7',
            label: 'Файл №7'
        },
        {
            key: '8',
            label: 'Файл №8'
        },
        {
            key: '9',
            label: 'Файл №9'
        },
        {
            key: '10',
            label: 'Файл №10'
        },
        {
            key: '11',
            label: 'Файл №11'
        }
    ];

    const contentMenuItems = [
        {
            key: '1',
            label: 'Текст'
        }, 
        {
            key: '2',
            label: 'markdown'
        }
    ]

    const getSanitizedHTML = () => {
        return DOMPurify.sanitize(marked(value));
    }

    function clickMenuItem(item: {key: string, label: string}) {
        setSelectedContentKey(item.key)
    }


    return (
        <Container>
            <StyledMenu 
                mode="vertical"
                items={manuItems}
            />
            <Wrapper>
                <StyledContent>
                    <StyledMenu 
                        items={contentMenuItems}
                        mode="horizontal"
                        selectedKeys={[selectedContentKey]}
                        onClick={clickMenuItem}
                        
                    />
                    <StyledTextArea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        autoSize={true}
                        variant={"borderless"}
                    />
                    <div dangerouslySetInnerHTML={{ __html: getSanitizedHTML()}} />
                </StyledContent>
            </Wrapper>
        </Container>
        
    )
}


const StyledMenu = styled(Menu)`
    width: 256px;
    height: 100vh;
`


const StyledContent = styled(Content)`
    width: 1200px;
    background: #17191b;
    height: 100%;
    border-radius: 20px;   
`


const Wrapper = styled.div`
    padding: 50px;

`

const StyledTextArea = styled(TextArea)`
    font-size: 20px;
    font-weight: 400;
    padding: 20px 30px;
`


const Container = styled.div`
    display: flex;
    flex-direction: row;
`