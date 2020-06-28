import React from "react";
import Numbers from "../Numbers/Numbers";
import Circle from "../Circle/Circle";
import Controls from "../Controls/Controls";
import timer from "../../css/components/Timer/Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 1,
      seconds: 10,
      prependZeroToMinutes: false,
      prependZeroToSeconds: false,
      timerIsOn: false,
      timerId: null,
      isActive: false,
      isRunning: false,
      isFinished: false,
    };
  }

  toggleTimerHandler = () => {
    if (!this.state.isFinished) {
      this.setState(
        {
          timerIsOn: !this.state.timerIsOn,
        },
        () => {
          this.tick();
        }
      );
    }
  };

  tick() {
    if (this.state.timerIsOn) {
      const timer = setInterval(this.updateSeconds.bind(this), 1000);
      this.setState({
        timerId: timer,
        isActive: true,
        isRunning: true,
      });
    }

    if (!this.state.timerIsOn) {
      clearInterval(this.state.timerId);
      this.setState({
        isRunning: false,
      });
    }
  }

  updateSeconds() {
    if (this.state.seconds == 0 && this.state.minutes == 0) {
      this.setState({
        timerIsOn: false,
        isFinished: true,
      });
    } else if (this.state.seconds == 0) {
      this.setState({
        seconds: 59,
        prependZeroToSeconds: false,
      });
    } else {
      this.setState({
        seconds: --this.state.seconds,
      });
    }

    if (this.state.seconds == 59) {
      this.updateMinutes();
    }

    if (this.state.seconds < 10) {
      this.setState({
        prependZeroToSeconds: true,
      });
    }
  }

  updateMinutes() {
    this.setState(
      {
        minutes: --this.state.minutes,
      },
      () => {
        this.checkZeroToMinutes();
      }
    );
  }

  checkZeroToMinutes() {
    if (this.state.minutes < 10) {
      this.setState({
        prependZeroToMinutes: true,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={timer.container}>
          <Circle
            isActive={this.state.isActive}
            isRunning={this.state.isRunning}
          />
          <div className={timer.countdown}>
            <Numbers
              prependZero={this.state.prependZeroToMinutes}
              numbers={this.state.minutes}
            />
            <div className={timer.colon}>:</div>
            <Numbers
              prependZero={this.state.prependZeroToSeconds}
              numbers={this.state.seconds}
            />
          </div>
          <Controls
            timerIsOn={this.state.timerIsOn}
            click={this.toggleTimerHandler}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
