import { shallow } from 'enzyme';
import { expect } from 'chai';
import MyComponent from '../mycomp'
import MyComponent2 from "../mcomp2"


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