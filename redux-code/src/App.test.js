import { render, screen } from '@testing-library/react';
import App from './App';

// window.fetch = jest.fn(() =>{
//   const user = {name: "Priya", email:"test@test.com"}
//   return Promise.resolve ({
//     json: () =>Promise.resolve(user),
//   });
// });

test('renders App compopnent', async() => {
  render(<App />);
  screen.debug();
  const userName = await screen.findByText("Priya");

  expect(userName).toBeInTheDocument();
  
  //Explore various methods in screen
  // const linkElement = screen.getByText("Hello World");
  const linkElement = screen.getByText(/Hello World/);
  expect(linkElement).toBeInTheDocument();
  const listElement = screen.getByRole('list');
  const listItem = screen.getAllByRole('listitem');
  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItem.length).toEqual(4);
  });
