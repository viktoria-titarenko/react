import React, { useState } from 'react'

const Table = () => {

    const names = ['Иванов Иван', 'Сидоров Алексей', 'Иванов Матвей', 'Виктория Титаренко','Елесеев Артур']

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {names.map(n => <RowWithDeleteButton rowtext={n} key={n}/>)}
                </tbody>
            </table>
        </>
    )
}

const RowWithDeleteButton = (props) => {

    const [display, setDisplay] = useState('');
    const [opacity, setOpacity] = useState(1);

    const deleteButtonClickHandler = () => {
        setOpacity(0);

        setTimeout(() => {
            setDisplay('none')
        }, 1000)
    }

    return (
            <tr style={{transition: '1s', display, opacity}}>
                <td scope={"row"}>{props.rowtext}</td>
                <td>
                    <button onClick={deleteButtonClickHandler}>DELETE</button>
                </td>
            </tr>
    )
}

export default Table;