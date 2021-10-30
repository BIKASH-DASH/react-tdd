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
        const Id = 1 ;
        beforeEach(()=>{
            wrapper.find('.button-newGift').simulate('click');
        })

        afterEach(()=>{
            wrapper.setState({gifts:[]})
        })

        it('should add a new gift ', () => {    
            expect(wrapper.state().gifts).toEqual([{"id": Id}])
        });
    
        it('should render list ', () => {      
            expect(wrapper.find('.gift-list').children().length).toEqual(1)
        });

        it('should create a gift components', () => {
            expect(wrapper.find('Gift').exists()).toBe(true);
        });

        describe('And the user need to remove the added Gift ', () => {
            
            beforeEach(()=>{
               wrapper.instance().removeGifts(Id)
            })

            it('should removed the gift from State', () => {
                expect(wrapper.state().gifts).toEqual([])
            });

        });
        
    });
    
})

