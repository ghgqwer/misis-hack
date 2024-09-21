import { Layout, Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function MainPage () {
    const [selectedKey, setSelectedKey] = useState(window.location.pathname.split('/')[1])
    const navigate = useNavigate();
    const menuItems = [
        {
            key: 'files',
            label: 'Файлы'
        },
        {
            key: 'teams',
            label: 'Команды'
        },
        {
            key: 'ideas',
            label: 'Идеи'
        }
    ]

    function clickMenuItem(item: {key: string, label: string}) {
        navigate(`/${item.key}`)
        setSelectedKey(item.key)
    }

    return (
        <StyledLayout>
            <StyledHeader>
                <div>LOGO</div>
                <StyledMenu 
                    items={menuItems}
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    onClick={clickMenuItem}
                />
                <div>PROFILE</div>
            </StyledHeader>
            <Outlet />
        </StyledLayout>
    )
}


const StyledHeader = styled(Header)`
    background: #17191b;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledMenu = styled(Menu)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const StyledLayout = styled(Layout)`
    background: #1e2022;
`