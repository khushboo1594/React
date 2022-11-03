# What are pure components?
# What is the difference between a regular component class and a pure component class? And when should you use which?
~ A regular component class does not implememnt shouldComponentUpdate method. it always returns true by default. 
~ whereas a pure component implememnts shouldComponentUpdate method with a shallow comparision of props and state.  

