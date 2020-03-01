import React from 'react';
import timer from '../../css/components/Timer/Timer.css';
import Btn from '../../css/components/Btn/Btn.css';
import Circle from '../Circle/Circle';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: 10,
            seconds: 10,
            minutesDOM: '10',
            secondsDOM: '10'
        };
    }


    toggleTimerHandler = () => {

    };

    updateSeconds() {
        this.setState({
            ...this.state,
            seconds: --this.state.seconds,
            secondsDOM: `${this.state.seconds}`
        })

        if (this.state.seconds == 59) {
            this.updateMinutes();
        }

        if (this.state.seconds < 10) {
            this.setState({
                ...this.state,
                secondsDOM: `0${this.state.seconds}`
            })
        }

        if(this.state.seconds == 0) {
            this.setState({
                ...this.state,
                seconds: 60
            })
        }
    }

    updateMinutes() {
        this.setState({
            ...this.state,
            minutes: --this.state.minutes
        })
        
        if (this.state.minutes < 10) {
            this.setState({
                ...this.state,
                minutesDOM: `0${this.state.minutes}`
            })
        }

        if (this.state.minutes == 0) {
            this.setState({
                ...this.state,
                minutes: 60
            })
        }
    }

    componentDidMount() {
        const timerInterval = setInterval(() => {
            this.updateSeconds();
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className={timer.container}>
                    <Circle />
                    <div className={timer.countdown}>
                        <span className={timer.minutes} ref={el => this.minutesEl = el}>{this.state.minutesDOM}</span>
                        <span className={timer.colon}>:</span>
                        <span className={timer.seconds} ref={this.setSeconds}>{this.state.secondsDOM}</span>
                    </div>
                    <div className={timer.controls}>
                        {/* this button is part of the timer controls and the fact that semantically it is a button
                        doesn't make it an instance of the button component
                        button components are those used for call to actions of that have a more tradional use and look
                        on a conventional layout. */}
                        <button className={timer.button} onClick={this.toggleTimerHandler}>
                            <svg className={timer.play} width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M27 20.5L15.75 26.9952L15.75 14.0048L27 20.5Z" fill="#FF3D00"/>
                                <circle cx="20" cy="20" r="19.5" stroke="#E5E5E5"/>
                            </svg>
                            <svg className={timer.pause} width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" stroke="#E5E5E5"/>
                                <rect x="15" y="13" width="4" height="14" fill="#FF3D00"/>
                                <rect x="21" y="13" width="4" height="14" fill="#FF3D00"/>
                                </svg>
                            <span className={timer.label}>Start</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;