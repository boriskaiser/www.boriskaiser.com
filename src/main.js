var React = require('React');

var Logo = require('./logo');

var goldColor = '#e4bc82';
var stageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    boxShadow: 'inset 0 0 0 5px ' + goldColor
};

var Stage = React.createClass({
    render: function () {
        return (
            <div className="stage" style={stageStyle}>
                <a href="mailto:mail@boriskaiser.com">
                    <Logo fill={goldColor}/>
                </a>
            </div>
        );
    }
});

window.addEventListener('load', function () {
    document.body.style.margin = 0;

    React.render(
        <Stage/>,
        document.body
    );
});