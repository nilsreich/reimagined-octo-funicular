import React from 'react';


class Isoundcloud extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: 3 }

    }
    handleChange = (e) => {
        this.setState({ value: e.taget })
    }

    render() {
        return (
            <div className="flex flex-col h-full overflow-hidden bg-white w-full">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WaRxx94rIgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        );
    }
}

export default Isoundcloud;

