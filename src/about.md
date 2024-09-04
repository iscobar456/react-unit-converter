# React Unit Converter

Here are some thoughts.

I wanted to become more familiar with React.
I think I found this idea on roadmap.sh. It only took a few days to finish, but I was able to learn a lot.

I used react-router-dom. I found it interesting.

I ran into a few problems.
The first, was with state. I still don't know why, but when I navigated to a converter page using a `<Link>` component,
the props would update, the state would remain the same and it would throw an error, even with a useEffect hook dependent on the props that was supposed to update the state accordingly.
I couldn't find a solution, I ended up working around it elsewhere.
From that experience, I realized state management is complicated, and I need to read more documentation.

The second problem, was with UI design. I have always struggled with design, I tend to overload.
I scrapped the layout and colorscheme today in favor of something simpler. It looks better, but I'm still not super happy with it.
For now, I'm thinking less is better.

The third was trying to get this page to render from a .md file. I realized I'm not familiar with async functions, Web APIs, and some other essential JS features.
