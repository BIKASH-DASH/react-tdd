import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<App/>);

describe('App components', () => {
    
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should initialize the empty list of gift', () => {
        expect(wrapper.state().gifts).toEqual([])
    });    
    
    describe('when Clicking the `Add Gift` button', () => {
        beforeEach(()=>{
            wrapper.find('.button-newGift').simulate('click');
        })

        afterEach(()=>{
            wrapper.setState({gifts:[]})
        })

        it('should add a new gift ', () => {    
            expect(wrapper.state().gifts).toEqual([{"id": 1}])
        });
    
        it('should render list ', () => {      
            expect(wrapper.find('.gift-list').children().length).toEqual(1)
        });
        
    });
    
})

