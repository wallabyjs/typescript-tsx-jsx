export default React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <div>
                {this.props.children}
                <If condition={this.props.children.length}>
                    <span>IfBlock</span>
                </If>
            </div>
        );
    }

});