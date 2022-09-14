# Receipt tracking application

<h3>Built with React.js and styled-components</h3>
<p>I used useContext+useReducer for state managemet. I also tried to separate components and containers using styled components as well as used global styles and props for button component. All of this to make project more organized and its' code less heavy</p>

<h2>Layout</h2>

Since only mobile size design had been provided, I figured to use 2x2 and 3x3 grid for larger screens respectively.

![layout](https://user-images.githubusercontent.com/93702054/190071944-3e027757-6a2b-4e5b-b4ea-eed73c4d2d5b.png)

<h2>Functionalities</h2>
<ul>
  <li>Bottom button adds new receipt component, which is then mapped to the main screen</li>
  <li>Initial row line opens up only after category is selected, as showcased in the instructions</li>
  <li>'Add expense' button adds new expense row upon clicking. Any number of rows is supported</li>
  <li>Input fields update on change. 'Total' sum is both calculated live in receipt and total bottom component</li>
</ul>


<h2>Additional packages used</h2>
<ul>
  <li>react-select (https://www.npmjs.com/package/react-select) - for select tag styling </li>
  <li>react-currency-input-field (https://www.npmjs.com/package/react-currency-input-field) - for currency formating in inputs and totals</li>
</ul>

<h2>Points of improvement / flaws</h2>

<ul>
  <li>Transform to TypeScript</li>
  <li>Try not to use other packages</li>
  <li>I think I kinda messed up useEffect in "ExpenseComponent.js". eslint demands to point out all dependencies in the useEffect dependency array, as it should. However, I dispatch input info right there with a function which results in an endless loop and the infamous blue screen of death, if the function is provided in the dependency. I used one of the solutions from stackoverflow to basically command eslint to shut the hell up with 'eslint-disable-next-line'. Everything works functionality-wise but I am not sure how optimal this is.</li>
</ul>

![itaint2](https://user-images.githubusercontent.com/93702054/190077638-e79807aa-9773-40f4-9b45-00daf9d864c4.png)


