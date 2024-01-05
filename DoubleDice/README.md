# DoubleDice Component

The `DoubleDice` component generates two random numbers between 1 and 3 and compares them. If the numbers match, it displays "You Win!" in green text; otherwise, it displays "You Lose :(" in red text.

## How it Works

The `DoubleDice` component performs the following steps:

1. Generates two random numbers, `num1` and `num2`, between 1 and 3 using `Math.floor(Math.random() * 3) + 1`.
2. Determines the result by comparing `num1` and `num2`. If they match, it sets the `result` to "You Win!" and `isWinner` to `true`.
3. Adjusts the display color based on the result using inline styles:
   - If it's a win (`isWinner` is `true`), the text color is set to green.
   - Otherwise, the text color is set to red.

## Component Rendering

The component renders the following elements:

- A `div` with the class `DoubleDice` and dynamic inline styles based on the result.
  - Inside the `div`, an `h2` tag displaying the `result` ("You Win!" or "You Lose :(") in the determined color.
  - Two `p` tags displaying the generated `num1` and `num2`.

## Example Usage

```javascript
import DoubleDice from './DoubleDice';

function App() {
  return (
    <div>
      <h1>Double Dice Game</h1>
      <DoubleDice />
    </div>
  );
}

export default App;
