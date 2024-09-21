import { Button, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { marked } from "marked";
import DOMPurify from 'dompurify';
import { FlexRow } from "../../../components/BaseComponents";


export default function UserProfilePage() {
    const [value, setValue] = useState('')
    const [selectedContentKey, setSelectedContentKey] = useState('')
    const [deleteModelVisible, setDeleteModelVisible] = useState(false)

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
            label: 'Markdown'
        },
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
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <StyledContentMenu 
                            items={contentMenuItems}
                            mode="horizontal"
                            selectedKeys={[selectedContentKey]}
                            onClick={clickMenuItem}
                        />
                        <div >
                            <Button type="primary" style={{marginRight: 20, marginTop: 10}}>
                                Сохранить
                            </Button>
                            <Button type="primary" danger style={{marginRight: 20}}>
                                Удалить
                            </Button>
                        </div>
                    </div>
                    {selectedContentKey === '1' ? 
                        <StyledTextArea
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            autoSize={true}
                            variant={"borderless"}
                            placeholder="Пишите..."
                        /> : 
                        <MarkdownContainer dangerouslySetInnerHTML={{ __html: getSanitizedHTML()}} />
                    }
                    
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


const StyledContentMenu = styled(Menu)`
    width: 200px;
    border: none;
    border-radius: 20px;
`


const MarkdownContainer = styled.div`
    padding: 20px 30px;

`