import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import UserEvent from '@testing-library/user-event';

// window.fetch = jest.fn(() =>{
//   const user = {name: "Priya", email:"test@test.com"}
//   return Promise.resolve ({
//     json: () =>Promise.resolve(user),
//   });
// });

// describe("Testing APP Component",()=>{
// test('renders App compopnent', async() => {
//   render(<App />);
//   screen.debug();
//   const userName = await screen.findByText("Priya");

//   expect(userName).toBeInTheDocument();
  
//   //Explore various methods in screen
//   // const linkElement = screen.getByText("Hello World");
//   const linkElement = screen.getByText(/Hello World/);
//   expect(linkElement).toBeInTheDocument();
//   const listElement = screen.getByRole('list');
//   const listItem = screen.getAllByRole('listitem');
//   expect(listElement).toBeInTheDocument();
//   expect(listElement).toHaveClass('animals');
//   expect(listItem.length).toEqual(4);
//   });

// test('Loading Test appearing..',async()=>{
//   render(<App/>);
//   const loadingText = screen.getByText('Loading...');
//   expect(loadingText).toBeInTheDocument();
//   await waitForElementToBeRemoved(()=>screen.getByText('Loading...'));
// });
// })

test('Test increment button', ()=> {
  render (<App/>);
  const counter = screen.getByTestId("counter");
  // const incrementButton = screen.getByText("Increment");
  const incrementButton = screen.getByTestId("increment");

  UserEvent.click(incrementButton);
  UserEvent.click(incrementButton);

  expect(counter.textContent).toEqual('2');
});

test('Test decrement button', ()=> {
  render (<App/>);
  const counter = screen.getByTestId("counter");
  const decrementButton = screen.getByText("Decrement");
  const incrementButton = screen.getByText("Increment");

  UserEvent.click(incrementButton);
  expect(counter.textContent).toEqual('1');
  UserEvent.click(incrementButton);
  expect(counter.textContent).toEqual('2');
  UserEvent.click(decrementButton);

  expect(counter.textContent).toEqual('1');
});