// projects.ts
export interface Project {
  title: string;
  content: string;
  teaser: string;
  images: string[]
  imageDesc: string[]
}

// export interface ProjectImage {
//   imageLocation: string, 
//   imageDescription: string
// }

// projects.jsx
const projects: Project[] = [
  {
      title: "Stock Market Lightsaber",
      content: "As a fan of Star Wars with an interest in the current market performance of various stocks, I created a visual indicator of the current performance of my stock portfolio. Using the free version of the Python API from <a href = 'https://finnhub.io/'> Finnhub</a>, I wrote a program to continuously look up the value of a portfolio (stored as a JSON file). Based on whether the current portfolio value is greater than the portfolio value at close of the previous day, I determine whether my day value has increased (green) or decreased (red). If I'm having internet connectivity problems, or if there is a different error, I set the color to blue to indicate no current results.",
      teaser: "Green Means Good",
      images: ["/img/lightsaber/blue.png", "/img/lightsaber/yellow.png", "/img/lightsaber/red.png", "/img/lightsaber/testing.png"], 
      imageDesc: ["Lightsaber Blue", "Lightsaber Yellow", "Lightsaber Red", "Test Setup"]
    },
    {
      title: "Metro Board",
      content: "verall this was a great project to learn a bit about controlling a LED matrix sign. Additionally, the established code base helped with the baseline functionality so that I could focus more on making it special and unique with the packaging, aesthetics, and additional Easter eggs.",
      teaser: "Are you going to be late?",
      images: ["/img/metroBoard/benchTest.png", "/img/metroBoard/installed.png", "/img/metroBoard/powerWiring.png", "/img/metroBoard/plugInsert.png", "/img/metroBoard/piCarriage.png", "/img/metroBoard/initialSetup.png"],
      imageDesc: ["Bench Test Setup", "Installed Board", "Direct Power Wiring", "Plug Insert", "RaspberryPi Carriage Setup", "Living Room Test"]
    },
    {
      title: "Personal Portfolio Website",
      content: "This is the website. Enjoy!",
      teaser: "You're looking at it",
      images: ["/img/headshot.png"],
      imageDesc: ["Explore The Website!"]
    },
    {
      title: "Swift App",
      content: "Designed and built a responsive portfolio website using React and Tailwind CSS to showcase projects and experience.",
      teaser: "InterOut",
      images: ["/img/interOut/newWorkout.png", "/img/interOut/sharableWorkout.png", "/img/interOut/sharingPage.png", "/img/interOut/workoutExample.png"],
      imageDesc: ["Workout Creation", "Sharable Workout QR Codes", "Sharing Page for Peer-Peer", "Example Workout Page"]
    }
  ];
  
  export default projects;