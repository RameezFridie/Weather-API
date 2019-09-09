import React from 'react';

class Form extends React.Component {
    render() {
        return (
            // Main div wrapper
            <div>
                {/* Form to accept user input */}
                <form onSubmit={this.props.get_weather}>
                    <input type="text" name="city" placeholder="city"/>
                    {/* Button to change state */}
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form