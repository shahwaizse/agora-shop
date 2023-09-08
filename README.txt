So many new things! The concept of type safety in Javascript was so foreign to me, probably because I'm a noob who liked that JS allowed me to mess up (like stuffing data into a wrong structure) with the program still somehow working. But after having worked with type checking, type safety, and contextual hints and auto-completion, I can confidently say that Typescript is ❤️ and I'm never going back to regular JS if I can help it.

Same thing with Tailwind. It makes the code look VERY ugly and it was difficult to start using it at first, but the amount of speed with which I was able to move when I wasn't worrying about creating CSS files and having to come up with CSS variable names is absolutely crazy! Shoutout to tailwindcomponents.com/cheatsheet for being incredibly intuitive and having a button to collapse all categories.

Client side routing with React Router made the app so much faster because of no full page refreshes. Definitely need to look into advanced routing concepts.

// technologies used

React | Tailwind | Typescript | Vite | React Router


// concepts learned during agora (aka stuff that gave me a headache to figure out) //

how to pass functions as props in typescript (interfaces, writing the name of the function instead of directly invoking it)
typescript interfaces (useful when defining types for react props and writing safe code with complex objects in general)
IIFE (immediately invoked function expressions, really useful when you need to have an if-else statement in jsx)
ternary operators (solves the same problem as IIFE, but IMO a bit cumbersome to write well)
setting a div's height to 80% of the screen height can be done through classname="w-[80vh]"


// stuff left to do //

check if amount is illegal value (buying -5 shirts doesn't make a lot of sense)
check if item is already in cart, display popup if yes (or alternatively, add the amount to the one already present in cart)


// future plans //

user accounts
progress saving
checkout functionality (send users an email regarding info of their purchase through a free email api or something)

