import React from 'react'
import '../stylesheets/statesLine.css'

/**
 * Это компонент, отрисовывающий линию состояний.
 * В этом проекте он просто на абсолютах слева от списка уроков.
 * Но структура классов рассчитана на то, что дальше можно сделать итерируемую линию.
 */
const StatesLine = () => (
    <div className="state-wrapper">
        <div className="state">
            <div className="circle circle-succeed"></div>
            <div className="line line-up line-succeed-rework-up"></div>
        </div>
        <div className="state">
            <div className="line line-down line-succeed-rework-down"></div>
            <div className="circle circle-rework"></div>
            <div className="line line-up line-rework-checking-up"></div>
        </div>
        <div className="state">
            <div className="line line-down line-rework-checking-down"></div>
            <div className="circle circle-checking"></div>
            <div className="line line-up line-checking-waiting-up"></div>
        </div>
        <div className="state">
            <div className="line line-down line-checking-waiting-down"></div>
            <div className="circle circle-waiting"></div>
        </div>
    </div>
);

export default StatesLine;