# Feedback

Hey Charlie here, feel free to message me on Slack if you want any clarification on the points below. I will give you both positive and constructive feedback on your project.

---

## Requirements

- Should be built in React - DONE
- Each component should manage is own state - DONE
- The components should be generated using `.map()` - DONE
- At least an employee component - DONE
- Pass data into them via props - DONE
- Don't leave it blank - KINDA DONE

---

## The App

### Positive

- The app looks okay on a large desktop.
  - It is responsive to a degree.
- I am able to increment each employee's tickets, Great!
- The counter will not go below 0, Good catch!
- You are displaying all of the employee's from the data file, Brilliant!
  - I can see you also added the a default count key to each object, nice.
- I love your README, it is always good to keep a brief with a project so you can reference it
  - Once we have it hosted, add a link to the live site

### Constructive

- You need to work on the smaller device styles, it is responsive to a certain degree.
  - When it goes below a certain width the tickets get squished / overflow which you will need to resolve.
- One of the points was 'Don't leave it blank' which technically you have done as you added some styles. I think you should just add a splash of color.
  - Check out [Color hunt](https://colorhunt.co/) it has collections of colors ready for you to use in any of your projects.
  - Add them to your variables and use them.

---

## The Code

### Positive

- The code looks good, in terms of what we have learned you have managed to apply all of it.
  - You have created different components. Which you have exported and then imported into the places that you need them. Nice!
  - On the subject of importing you have imported the data in the App and are using props to give it to the components that need it!
  - You are mapping over the data to create JSX elements. Sweet!
  - You have introduced State and are able to change it. Awesome!
- The `<Counter/>` component makes sense to be its own component, that manages its own state.
  - I like both of your handler functions, saving the new state as variable is a clear label for when you come back to it.
  - As I mentioned earlier you were able to update the data so it contain something you wanted, the count key which you used as the default state.
- So far you are the only one to update this `<title>Ticket Tracker</title>` :).

### Constructive

- You only have 2 commits, try and commit once you finish something small e.g A component, some styling
  - If that doesn't work set a timer after 1 hour commit.
- When you do `.map()` you are not giving each item a key prop. If you open the console you will the error below. Once you add the key prop it will go.

```
react-jsx-dev-runtime.development.js:97 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Employee`. See https://reactjs.org/link/warning-keys for more information.
    at div
    at Employee (http://localhost:3000/static/js/bundle.js:257:5)
    at div
    at div
    at App
```

- I think your `<Employee>` component is misleading, it sounds as if it is one thing when it contains a list of employees. Based on the code I think your `<Employee>` should be something like below. Just the code for one.

```jsx
const Employee = props => {
  const { name, role, count } = props;

  return (
    <div className="employeeBox">
      <h3 className="employee__name">{name}</h3>
      <h3 className="employee__role">{role}</h3>
      {/* I HAVE SIMPLIFIED YOUR COUNTER SEE BELOW*/}
      <Counter defaultCount={count} />
    </div>
  );
};
```

- Then you could create a `<EmployeeList>` that takes the array and creates the employees, or you could do it in the App it is your choice.

```jsx
const listEmployeesJSX = employeesArr.map(employee => (
  <Employee key={"employee" + employee.id} name={employee.name} role={employee.role} count={employee.count} />
));
```

- Why? This would make `<Employee>` reusable, generally components want to be as reusable as possible.

- I like your `<Counter/>` but don't think you should pass in the whole employee object, just the value you need. So the prop could be just `defaultCount` and this is just the value of employee.count not the whole object.
- With the `<Counter/>` you have the `{currentCounter}` on line 22, this is not inside a jsx element. It should be e.g. `<p>{currentCounter}</p>`.

- I am a big fan of `B.E.M` especially when it comes to React. Personally I prefer it rather then using the mix of `B.E.M`,`PascalCasing` and `camelCasing` you are using e.g. `employeeBox`, `employee__name`, `CounterBox`. The point I am making is you want to be consistent so choose **one** and use it through out, do not chop and change.

- If the counter was `B.E.M` it might look like below.

```jsx
// Counter.jsx
return (
  <div className="counter">
    <h3 className="counter__count">Counter</h3>
    {currentCounter}
    <br />
    <div className="counter__buttons">
      <button className="counter__button" type="button" onClick={handleDecrement}>
        -
      </button>
      <button className="counter__button" type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  </div>
);
```

```scss
// Counter.scss
.counter {
  margin: 20px;
  margin-bottom: 0.8rem;
  margin-top: 2rem;
  border: 6px solid $color-black;
  padding: 20px;

  .counter__count {
    margin: 40px;
  }

  .counter__buttons {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-evenly;
  }

  .counter__button {
    background-color: white;
    border: none;
    font-size: 28px;
  }
}
```

---
