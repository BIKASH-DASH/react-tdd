import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Gift from './Gift';
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Gift/>);


describe('Gift component', () => {

    it('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
