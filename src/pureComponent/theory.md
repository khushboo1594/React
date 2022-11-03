# What are pure components?
A pure component implememnts shouldComponentUpdate method with a shallow comparision of props and state.  
SC of prevState with currState  | if anyone of them is true it re-renders
SC of prevProps with currProps  |
# What is the difference between a regular component class and a pure component class? And when should you use which?
~ A regular component class does not implememnt shouldComponentUpdate method. it always returns true by default. 
~ whereas a pure component implememnts shouldComponentUpdate method with a shallow comparision of props and state.  
<!-- -------------------------------------------------------------------------------------------------------------------------------------- -->
Pure component is useful for performance optimization. It does not re-renders unnecessarily.

# Regular component
a regular component does not implements should component update. it always returns true by default.

# Pure component
a pure component implements should component update with shallow comparision of props and state. if here is a difference then only the component will re-render.

# Shallow comparision
> for 2 primitive types:
it will return true if they have the same value and same type.
Ex: string 'khushboo' --SC-- string 'khushboo'returns true

> complex types - objects, arrays
the comparision will return true only when the reference is same. 
var a = [1,2,3];
var b = [1,2,3];
var c = a;
console.log(a===b); // false
console.log(a===c); // true

<!-- -------------------------------------------------------------------------------------------------------------------------------------- -->
## NOTES
Always return something if you want to change something rather than changing the prop and state jo k object ho because those reference kbhi change nahi hota so it will assume it to be not changed and will not render it.Samajh lo you are adding values in an array prop by pushing and in a pure component. So it will not get re-rendered as the reference is still the same.
---------------------------------------------------------------------------------------------------------------------------------------------
When you have made parent component as pure component make sure to make all child components also as pure to avoid  unexpected behaviour.
When dealing with pure components never mutate the state always return a new state.
---------------------------------------------------------------------------------------------------------------------------------------------
Pure components keval class me kaam karte hai. Functional component k liye we have to use React.memo