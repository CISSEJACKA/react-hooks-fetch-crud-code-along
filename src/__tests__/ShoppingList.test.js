// src/__tests__/ShoppingList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingList from '../../components/ShoppingList'; // Adjusted import path

test('displays all the items from the server after the initial render', async () => {
  render(<ShoppingList />);
  const yogurt = await screen.findByText(/Yogurt/);
  expect(yogurt).toBeInTheDocument();
  const pomegranate = await screen.findByText(/Pomegranate/);
  expect(pomegranate).toBeInTheDocument();
});

// Other tests go here...






