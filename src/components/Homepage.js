import './comp.css';
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ReactPlayer from "react-player";
import { javascriptData } from './data'

const Container = styled.div`
    background: #2B3D52;
    background-attachment: fixed;
    background-size: cover;
    padding: .01%;
    height: 100vh;
`

const Homepage = (props) => {
    const [value, setValue] = useState("")
    const [predict, setPredict] = useState("")
    const [link, setLink] = useState('https://youtu.be/HFZGS7zcccI')
    const [data, setData] = useState(javascriptData)
    const [playing, setplaying] = useState("")

    const handleKeyDown = async (e) => {
        setplaying("")
        if (e.key === 'Tab') {
            e.preventDefault()
            setValue({ text: predict })
            setLink(data[predict])
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            setplaying("playing")
            await setLink(data[predict])
            if(link !== 'https://youtu.be/HFZGS7zcccI' ){
            window.scroll(0,5000)
            }
        }
        if (e.key === "\\") {
            e.preventDefault()
        }
    }

    const change = e => {
        setValue({ text: e.target.value })
        let itemname = Object.keys(data).filter((oneatatime) => {
            if (oneatatime.toLocaleLowerCase().includes(value.text?.toLocaleLowerCase())) {
                return oneatatime
            }
        })
        setPredict(itemname[0])
    }

    const getHighlightedText = () => {
        if (!predict && !value) {
            return <span>Press <b>tab</b> to Autocomplete</span>
        }
        if (!predict) {
            return <span><b>404</b> 😢</span>
        }
        if (value.text?.toLocaleLowerCase() === predict.toLocaleLowerCase()) {
            return <span>Press <b>enter</b> to continue</span>
        }
        const parts = predict?.split(new RegExp(`(${value.text})`, 'gi'));
        return (<span onClick={()=>setValue({text:predict})}>{parts?.map(part => part.toLowerCase() === value.text?.toLowerCase() ? <b>{part}</b> : part)}</span>);
    }

    return (
        <Container >
            <div className="outside">
                {getHighlightedText()}
                <input spellcheck="false"
                    onChange={change}
                    value={value.text}
                    placeholder="Search"
                    onKeyDown={handleKeyDown} />
            </div>
            <ReactPlayer
                url={link}
                className="react-player"
                playing={playing}
                width="100%"
                height="100%"
                controls/>
        </Container>

    )
}

export default Homepage;