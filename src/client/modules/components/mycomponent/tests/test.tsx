import { shallow } from 'enzyme';
import { expect } from 'chai';

const MyComponent = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

});

describe('<MyComponent />', () => {

    it('renders children when passed in', () => {
        const wrapper = shallow(
            <MyComponent>
                <div className="unique" />
            </MyComponent>
        );
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });

});