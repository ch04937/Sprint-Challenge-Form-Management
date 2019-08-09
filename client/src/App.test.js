import React from 'react';
import ReactDOM from 'react-dom';
import App, {add} from './App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


describe('<App /> ', ()=>{

  it('renders without crashing component', ()=>{
    render(<App/>)

  })

  it('display greeting', ()=>{
    const x = render(<App/>)
    const compare = x.getAllByText(/Welcome/i)
  })
  describe('add()', () => {
    it('shoudl return the sum of numbers passed', () => {
      expect(add(2,3)).toBe(5);
  })
    
  })
})