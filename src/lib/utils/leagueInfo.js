/*   STEP 1   */
export const leagueID = "785220608354058240"; // your league ID
export const leagueName = "FLEX:FantasyLeague of EXathletes"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to FLEX, the Fantasy League of EX-athletes. This is a 12-team league that was formed in 2013 by a group of high school buddies who wanted to continue their friendship and connection beyond high school after life in The Woodlands, Texas. This league is considered a money league, and all owners are expected to pay their league fee before the draft begins. This league is designed to be a competition between owners, but it is not a cut-throat league where anything goes. The rules described in the constitution are designed to act as a guideline for overall league play, and any disputes will be handled by the executive committee of the league. Please remember that the overall goal of this league is to have fun and enjoy the game of football and camaraderie.</p>
  <p>There have been some new faces throughout the years as some managers have also left but, despite that, the league has only gotten stronger. With more passionate managers, the competition has become more intense and more difficult each year.</p>
  <p>While the ultimate prize is bragging rights and sending obnoxious texts to the rest of the league for the next year, the champion manager also walks away with $280.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Comissioner Greene",
      "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Houston, TX", // (optional)
      "bio": "Commissioner since 2013",
      "photo": "/managers/jb (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Tyler Bateman", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/tyler (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 515, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Draft Runningbacks early.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tyler Bateman",
      "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Tomball, TX", // (optional)
      "bio": "Player since 2013",
      "photo": "/managers/tyler (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Commissioner Greene", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jb (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 167, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bryce Greene",
      "tookOver": 2016, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Houston, TX", // (optional)
      "bio": "Player since 2016",
      "photo": "/managers/bryce (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Zach Weidert", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/zach (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4199, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Playing waivers wins championships",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Sam Osina",
      "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Spring, TX", // (optional)
      "bio": "Player since 2013",
      "photo": "/managers/sam (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Ethan Shuey", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ethan (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6955, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bryon Makel",
      "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Spring, TX", // (optional)
      "bio": "Player since 2019",
      "photo": "/managers/bryon (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Mitchell Graham", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/mitch (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6828, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Myca Mackelveen",
      "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Overseas (probably)", // (optional)
      "bio": "Player since 2015",
      "photo": "/managers/myca (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Ryan Kerr", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ryan (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2309, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Chance Givens",
      "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Austin, TX", // (optional)
      "bio": "Player since 2013, took a break for 2014, then came back in 2015",
      "photo": "/managers/chance (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "James Ford", // Can be anything (usually your rival's name)
        link: 12, // manager array number within this array, or null to link back to all managers page
        image: "/managers/james (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2078, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Mitchell Graham",
      "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Palmdale, CA", // (optional)
      "bio": "Player since 2021",
      "photo": "/managers/mitch (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Bryon Makel", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/bryon (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6813, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ethan Shuey",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "TX", // (optional)
      "bio": "Player since 2020",
      "photo": "/managers/ethan (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Sam Osina", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/sam (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6790, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ryan Kerr",
      "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Houston, TX", // (optional)
      "bio": "Player since 2013",
      "photo": "/managers/ryan (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Myca Mackelveen", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/myca (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Zach Weidert",
      "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Dallas, TX", // (optional)
      "bio": "Player since 2013",
      "photo": "/managers/zach (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Bryce Greene", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/bryce (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 856, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "James Ford",
      "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Antonio, TX", // (optional)
      "bio": "Player since 2019",
      "photo": "/managers/james (1).jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Chance Givens", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/chance (1).jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 96, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Varies each season",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
