import React from "react";
import Numbers from "../Numbers/Numbers";
import Circle from "../Circle/Circle";
import Controls from "../Controls/Controls";
import timer from "../../css/components/Timer/Timer.css";
import u from "../../css/utils/utils.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 11,
      seconds: 11,
      prependZeroToMinutes: false,
      prependZeroToSeconds: false,
      timerIsOn: false,
      timerId: null,
    };
  }

  toggleTimerHandler = () => {
    this.setState(
      {
        timerIsOn: !this.state.timerIsOn,
      },
      () => {
        this.tick();
      }
    );
  };

  tick() {
    if (this.state.timerIsOn) {
      const timer = setInterval(this.updateSeconds.bind(this), 1000);
      this.setState({
        timerId: timer,
      });
    }

    if (!this.state.timerIsOn) {
      clearInterval(this.state.timerId);
    }
  }

  updateSeconds() {
    if (this.state.seconds == 0) {
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
    if (this.state.minutes == 0) {
      this.setState({
        minutes: 11,
      });
    } else {
      this.setState({
        minutes: --this.state.minutes,
      });
    }

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
          <Circle />
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
