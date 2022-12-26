import React, { useState } from "react";

const Buttons = () => {

    const [currentAnecdote, setCurrentAnecdote] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState(new Date());

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const clickHandler = () => {
        setInterval(() => {
            setTimer(new Date());
        }, 1000);
        setTimeout(() => {
            setCurrentAnecdote(anecdoteList[randomIntFromInterval(0, anecdoteList.length - 1)])
            setDisabled(false);
        }, 10000)
        setTimer(new Date());
        setDisabled(true);
    }

    const anecdoteList = [
        'Колобок повесился',
        'Русалка утонула',
        'Второе сентября, начало первого урока, учительница говорит: - Дети, у вас есть еще вопросы? Вовочка: - А когда каникулы?',
        '- Мамочка, мамочка! Там на улице такая машина, такая машина - огромная как дом! Нет, как два дома! - Доченька, я тебе миллион миллиардов раз говорила - никогда не преувеличивай! ',
        'Медведь погнался за зайцем, но быстро утомился. Сел и думает: - Хорошо, что ещё я за ним погнался, а если бы он за мной?',
        
    ];

    return (
        <>
            <button onClick={clickHandler} disabled={disabled}>Анекдот</button>
            {currentAnecdote}
            <p style={{display: (!disabled ? 'none' : 'flex')}}>{timer.toLocaleTimeString()}</p>
        </>
    )
}

export default Buttons