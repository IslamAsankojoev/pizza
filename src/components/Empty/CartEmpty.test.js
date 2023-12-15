import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'; 
import CartEmpty from './CartEmpty'
import { MemoryRouter } from 'react-router-dom';

test('empty cart test', ()=>{
  render(
    <MemoryRouter>
      <CartEmpty/>
    </MemoryRouter>
  )
  const helloworld = screen.getByText('Вернуться назад')
  expect(helloworld).toBeInTheDocument()
})