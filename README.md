# Getting Started

## [View Live Site Here](https://bretts-movie-search.netlify.app/)

## After forking and cloning this repo to your machine

- Run command `yarn` to install dependencies
- Create .env in root directory using env vars provided in .env.sample
- Replace placehold [API_KEY_GOES_HERE] text with valid API key from movie
  database API

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

## Challenges and How I Overcame Them

My primary challenge on this project was coming up with a simple and robust plan
of action ahead of time to prevent myself from spending way too much time. I
wanted this application to be as "perfect" as possible without going overboard
and sabatoging my 3 hour deadline.

Additional challenges were mostly related to setting up my theming system with
styled-components. It has been quite awhile since I used this library so I
needed to take an online course prior to starting this app to help refresh my
memory. I enjoy styled-components, but think it could be easy for things to
become chaotic without having a consistent process for naming, organizing and
passing around the global theme styles. I am excited to learn more and to become
more proficient with styled-components.

It has also been awhile since I have used Jest. My tests were failing at first,
but luckily my custom context hooks threw errors which informed me that I needed
to bring in both context providers into my test files to wrap the components I
was testing. I'm sure there is a better way, and I look forward to getting my
Jest and testing skills polished and sharp.

## Reasoning Behind Design Decisions

I spent quite a bit of time the day before building this app coming up with a
plan of action which included:

- Which libraries to include
- Folder structure and component hierarchy
- Whether or not to use context or manage state locally per component and
  utilize more prop drilling
- If using context, why, and which contexts were needed
- Taking tutorials to quickly get back up to speed with styled-components
- Revisiting blog posts to refresh my memory on certain tools and patterns
- Plenty of time figuring out the movie db api and messing around with the
  variou endpoints

### Libraries Used

I chose styled-components because I know that is a tool used at Group Nine and I
had enjoyed my limited experience using this library on previous projects.

I pulled in lodash specifically to use one method, the debounce method for
trying to slightly improve the performance of the search component. I wanted to
delay the API requests ever so slightly so that fewer requests were sent. I
would like to spend more time investigating whether or not this method improved
the performance and what can be done to improve upon it.

### Context

I decided to use the context API becuase I wanted my code to be clean and to
avoid prop drilling as much as possible. This was mostly for my own sanity as I
wanted a very simple API for getting and updating values from one location and
felt that a well organized context would save me time over the 3 hours that I
had to build this. Some state was managed locally in the various components
where it made sense, but the movie data and functions for updating it were kept
in the movie-context.

I also created a theme-context for passing down theme data such as colors,
breakpoints, and a few styled components that were to be used in various places.
This was my first time creating a theme context like this and I like the way
that it works. I know that styled-coponents has something similar built in, so
I'm sure it wouldve been more efficient to use the built in ThemeProvider had I
known how it worked. Definitely something I would like to learn more about.

Both contexts export a custom hook called use[ContextName] which exports all of
the data and functions being passed to the parent providor. I like this becuase
I can very easily get the values that I need from this custom hook such as
`const { colors, breakpoints } = useTheme()`. I have been using this pattern
regularly on professional projects and first was introduced to it from Kent C.
Dodds in one of his state management blog posts.

### ENV Vars and CONSTANTS File

I created env vars for a few API endpoints/URLs and accessed these in my
CONSTANTS.js file. This is also a pattern that I have been using lately
professionally. This constants file added a few conditionals for ensuring that
each env var was actually set in the .env and exporting javascript variables for
each one if they exist or throwing helpful error messages if they don't.

### Folder Structure

I know there are a million ways to set up react applications, but I enjoy having
a folder for each component with all files relevant to that component within.
This is helpful for keeping tests or subcomponents organized.

### jsconfig.json

I have used this file in the past for setting up typing and other configuration
options. I only used this on this project for changing the baseURL to be the src
folder which allows me to use absolute imports such as
`import { ComponentName } from 'components/folder/componentName'` (eliminates
'src/'). Obviously not necessary but it is quick to setup and makes me happy to
avoid a few keystrokes.

### Theming

I used the TailwindCSS base theme as a reference for setting up this simple
theme. I used their breakpoints, a few of the colors for the Tailwind color
pallette and was able to more or less take the button styles from previous
projects to speed up the styling process.

### Deploying on Netlify

Netlify is really awesome and incredibly easy to use. It took me five minutes to
deploy this site and setup a workflow for deploying the site when pushing to the
master branch. Seemed like a no brainer.

## Future Improvements

Future improvements that I would've liked to work on:

- Filter component for displaying movies based on certain criterea (rating,
  release year, etc)
- Imporved performance all around. I did not have time to really dig in to the
  consequences of sending an API request on every key stroke. I believe that
  using my debounce method slightly improved this, but would be worth digging
  into a bit more.
- Better styling and animations. I like things to be pretty and fun.
- More featured pagination component.
- Loading and error states. Display these states to the user and ensure there
  are no flashes of content before API response as there is now.
- Some sort of favorites list for selecting/removing movies from your list would
  be fun. Possible with a drag and drop interface on desktop? Over the top, but
  would be a lot of fun.
- Setup linting + formatting with eslint and prettier. I used prettier for
  formatting on this project, but I like having this synced up with eslint
  rules.
- Some basic typing. I enjoy having some basic typing for the added intellisense
  it offers in VS Code.
- More tests. I am admittedly rusty with Jest and did not end up having time to
  add more tests to this application.
- Rebuild this project with a framework like NextJS with movie detail pages.
  Explore how much could be statically renedered at build time.
- Plenty more!

# Thank you so much for the opportunity to interview and build this application! It was a ton of fun and I can't wait to build more awesome things for Group Nine.