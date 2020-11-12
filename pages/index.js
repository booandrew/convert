import styled from "styled-components";
import MainLayout  from '../components/main-layout'
import { ModalWindowConsumer } from '../context/context';



export default function Index() {

    return (
        <MainLayout>
            <h1>Главная</h1>
            <p>Рассчет кросс курса, позволяющий автоматически<br /> осуществлять конвертацию доллара и евро в рубли</p>
            <CustomSelect>
                <option>Выберите курс</option>
                <option>Apples</option>
                <option>Bananas</option>
                <option>Grapes</option>
                <option>Oranges</option>
            </CustomSelect>
        </MainLayout>
    )
}

const CustomSelect = styled.select`
    display: block;
    color: #000;
    font-size: 16px;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 30%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: none;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: rgba(9, 19, 33, 0.0638304);
`