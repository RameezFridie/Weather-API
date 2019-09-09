import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            // Main div wrapper
            <div className="weather__info">
                {
                    // Props taken from states
                    this.props.city && this.props.country &&
                    <div>
                        {/* Weather class */}
                        <p className="weather__key">
                            City:
                                <span className="weather__value"> { this.props.city }</span>
                        </p>
                        <p className="weather__key">
                              Country:
                                <span className="weather__value"> { this.props.country }</span>
                        </p>
                    </div>
                }

                {
                    // Props taken from states
                    // If this props are attained the display the values in a paragraph tag with its labels
                    this.props.temp && this.props.max && this.props.min &&
                    <div>
                        <p className="weather__key">
                            Current Temperature:
                                <span className="weather__value"> { this.props.temp }</span>
                        </p>
                        <p className="weather__key">
                            Maximum Temperature:
                                <span className="weather__value"> { this.props.max }</span>
                        </p>
                        <p className="weather__key">
                            Minimum Temperature:
                                <span className="weather__value"> { this.props.min }</span>
                        </p>
                    </div>
                }

                {
                    // If this props are attained the display the values in a paragraph tag with its labels
                    this.props.humidity && this.props.description &&
                    <div>
                        <p className="weather__key">
                            Humidity:
                                <span className="weather__value"> { this.props.humidity }</span>
                        </p>
                        <p className="weather__key">
                            Description:
                                <span className="weather__value"> { this.props.description }</span>
                        </p>
                    </div>
                }

                {
                    // If this props are attained the display the values in a paragraph tag with its labels
                    this.props.error &&
                    <div >
                        Error:
                             <span className="weather__error"> { this.props.error } </span>
                    </div>
                }
            </div>
        )
    }
}

export default Weather