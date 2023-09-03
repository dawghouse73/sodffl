/*   STEP 1   */
export const leagueID = "922637695908737024"; // your league ID
export const leagueName = "Shulaces Out Dan"; // your league name
export const dues = 200; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>THIS IS A TEST - Welcome to the <font color ="#FC4C02 "><i><b>Shulaces Out Dan</b></i></font> Fantasy Football League site.</p>
  <p>The <font color ="#FC4C02 "><i><b>Shulaces Out Dan</b></i></font> dynasty league arose from the ongoing comments and thoughts and chats from multiple keeper leagues that people were curious about the Dynasty front, sometimes stemming from frustration of having to give up a keeper due to the year limitation or having too many quality players and being forced to lose a high caliber player, sometimes for nothing in return.</p>
  <p></p>
  <p>Therein arrives the idea of kickstarting a dynasty league - combining managers from multiple leagues who've shown engagement, both on the social front and the league transaction perspective. Our league members are from all over the world, spanning a -8GMT to a +8GMT time zone variance.</p>
  <p><img src="../../worldmapofmanagers.png" alt="worldmap" width="387px" height="185px"</p> 
  <p></p
  <p>Our history will be made in the coming years. But if history has taught us one thing, it's this:</p>
  <h4><p>LACES OUT DAN!</p></h4>
  <p></p>
  <p><a href="https://www.youtube.com/watch?v=fIzRQew22qw" target="_blank"><img src="../../shulacesoutdan-rayfinkleteamphoto.jpg" alt"Ray Finkle Team Photo" width="387px" height="285px"></a></p>
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
        "roster": 1, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "737036675762548736",  
        "name": "Andrew",
        "tookOver": 2023,
        "location": "Thunder Bay, CA", // (optional)
        "bio": "He's our highest flying manager and definitely the one with the most air miles. His Yahoo fantasy profile shows he's been into the fantasy sports world since 2009, spreading his seed across a variety of sports - golf, hoops, hockey, baseball, and football. A career 54.5% win rate on Yahoo, he's a proud member of the Platinum Club (and the Mile High probably).",
        "photo": "/managers/andrew.jpg", 
        "fantasyStart": 2012, // (optional)
        "favoriteTeam": "sea", // (optional) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "Bryan", 
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/bryan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "QB", // (optional)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Air Raid Offense!",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
        "roster": 2, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "860600061682368512",  
        "name": "Bryan",
        "tookOver": 2023,
        "location": "Brussells, BE", // (optional)
        "bio": "The Tony Romo of Fantasy Football, slightly above average stats, winner of tight regular season games and a few meaningless league titles. Playoff maker, but all Swedish, no Finnish. He has spent many Sunday mornings driving to Aachen, Germany from Brussels, Belgium, to play Draft Kings (not legal in Belgium). He won big once in 2017 and has been slowly giving back his winnings ever since. A career 56.3% win rate in Yahoo and a member of the Yahoo Fantasy Sports Gold Club.",
        "photo": "/managers/bryan.jpg",
        "fantasyStart": 2011, // (optional) 
        "favoriteTeam": "chi", // (optional) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "Friesen",
            link: 10, // manager array number within this array, or null to link back to all managers page
            image: "/managers/friesen.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Win at all costs. (a close second: If you're not a pro, you're not an athlete.)",
        "tradingScale": 4, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
        "roster": 3, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "561303290777518080",  
        "name": "Craig B",
        "tookOver": 2023,
        "location": "Abbotsford, CA", // (optional)
        "bio": "Been playing fantasy poorly for ten years. Started with redraft and graduated to dynasty five years ago.   Love the building involved with fantasy football so play exclusively dynasty now.",
        "photo": "/managers/craigb.jpg", 
        "fantasyStart": 2015, // (optional)
        "favoriteTeam": "was", // (optional) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "House", 
            link: 6, // manager array number within this array, or null to link back to all managers page
            image: "/managers/house2.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' 
        "philosophy": "My philosophy is to be a fun, active league mate. I find fantasy is way more fun when people are wheeling and dealing.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
               {
        "roster": 4, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "923021999067283456",  
        "name": "Craig H",
        "tookOver": 2023,
        "location": "Vancouver, CA", // (optional)
        "bio": "Been playing Yahoo fantasy since 2013.  More of a hockey specialist.  Fodder for football.  46.7% win rate on Yahoo Football.  Currently participating in 3 redraft/keeper leagues.  This is my first crack at Dynasty here in 2023.",
        "photo": "/managers/craigh.jpg",
        "fantasyStart": 2014, 
        "favoriteTeam": "lv", // (optional) MUST BE LOWERCASE
        "mode": "Rebuild", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "MJ",
            link: 11, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mj.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 654, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Wait for all other teams to be decimated by December injuries!",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
      {
        "roster": 5, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "516138229067358208", 
        "name": "Dino",
        "tookOver": 2023,
        "location": "Kelowna, CA", // (optional)
        "bio": "If he could only see through the fantasy predictions like he can see through a human body. A career 47.7% win rate and a Bronze club member, per Yahoo Fantasy.",
        "photo": "/managers/dino2.jpg", 
        "fantasyStart": 2000, // (optional) 
        "favoriteTeam": "ind", // (optional) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "House",
            link: 6, // manager array number within this array, or null to link back to all managers page
            image: "/managers/house2.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 888, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' 
        "philosophy": "Don't draft with heart, draft to win.",
        "tradingScale": 3, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },   
    {
      "roster": 6, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "325892484276170752",
      "name": "House",
      "tookOver": 2023, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Coquitlam, CA", // (optional)
      "bio": "25 years in Fantasy Football with a career 57.0% win rate in Yahoo (19 seasons, 59 teams). 16 championships. A member of the Yahoo Platinum club. Dynasty newcomer in 2023.",
      "photo": "/managers/house2.jpg", 
      "fantasyStart": 1998, // (optional) 
      "favoriteTeam": "mia", // (optional) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) Win Now, Rebuild, Dynasty
      "rival":  {
        name: "Everyone", 
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                },
       "favoritePlayer": 7526, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) 
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' 
       "philosophy": "When you're in, you're ALL in!",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
       {
        "roster": 7, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "709158421466791936",  
        "name": "Jas",
        "tookOver": 2023,
        "location": "Vancouver, CA", // (optional)
        "bio": "First or last! Shake and bake! A career 52.9% Win rate in Yahoo Fantasy, he's a member of the Silver Club.",
        "photo": "/managers/jas.jpg", 
        "fantasyStart": 2014, // (optional)
        "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "Friesen", 
            link: 10, // manager array number within this array, or null to link back to all managers page
            image: "/managers/friesen.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 7526, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Just keep playing.",
        "tradingScale": 6, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
        "roster": 8, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "584245720849092608",  
        "name": "Jesse",
        "tookOver": 2023,
        "location": "Surrey, CA", // (optional)
        "bio": "Long time hockey pool enthusiast since the inception of OfficePools around 1997. Has since switched to NFL and betting on golf majors. Always betting, never winning",
        "photo": "/managers/jesse.jpg", 
        "fantasyStart": 2017, // (optional)
        "favoriteTeam": "sea", // (optional) MUST BE LOWERCASE
        "mode": "Rebuild", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "Craig B",
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/craigb.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 567, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Random number generator",
        "tradingScale": 8, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
          {
        "roster": 9, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)      
        "managerID": "923033990964064256",  
        "name": "Mark",
        "tookOver": 2023,
        "location": "Takamatsu, JP", // (optional)
        "bio": "This man will wager on anything sports related. Time zones don't matter - this guy is in. A career 52.5% win rate in Yahoo, he's a solid member of the Platinum club.",
        "photo": "/managers/mark.jpg", 
        "fantasyStart": 1998, // (optional)
        "favoriteTeam": "min", // (optional) MUST BE LOWERCASE
        "mode": "Dynasty", // (optional) Win NOw, Dynasty, Rebuild
        "rival":   {
            name: "House", 
            link: 6, // manager array number within this array, or null to link back to all managers page
            image: "/managers/house2.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 1123, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Just get it.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        "roster": 10, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "737238894550130688",
        "name": "Friesen",
        "tookOver": 2023,
        "location": "Vancouver, CA", // (optional)
        "bio": "Every year Mike starts the season with a question: how can I be a different animal, and the same beast? After 20 years of fantasy sports, he still doesn't have the answer. But that doesn't stop him from putting together balanced rosters to challenge for titles..",
        "photo": "/managers/friesen.jpg", 
        "fantasyStart": 1999, // (optional)
        "favoriteTeam": "det", // (optional) MUST BE LOWERCASE
        "mode": "Dynasty", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "MJ",
            link: 11, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mj.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 1234, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR",  // (optional) 
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' 
        "philosophy": "Buy low, sell high",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 11, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "862180378536976384", 
      "name": "MJ",
      "tookOver": 2023,
      "location": "Surrey, CA", // (optional)
      "bio": "Heartbroken Titans and Canucks fan still waiting for a single championship. Fantasy Football since 2008. Member of the Yahoo Fantasy Football Diamond Club with a career 58% Win Rate and 27 Trophies. Regular charitable donations to Draft Kings in both NFL Football and PGA Golf. Currently experimenting with NFL Best Ball on Underdog and with almost 50 teams drafted for the upcoming 2023 season and counting, its fair to say its becoming a bit of a problem.",
      "photo": "/managers/mj.jpg", 
      "fantasyStart": 2008, // (optional) 
      "favoriteTeam": "ten", // (optional) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) Win Now, Rebuild, Dynasty
      "rival":  {
         name: "House", 
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/house2.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                },
      "favoritePlayer": 8538, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) 
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
      "philosophy": "Swing for the fences",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
        "roster": 12, // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
        "managerID": "923071576252178432",  
        "name": "Simon",
        "tookOver": 2023,
        "location": "Vegreville, CA", // (optional)
        "bio": "Church mouse who loves fanstasy. The question is - can this mouse scare an elephant?",
        "photo": "/managers/simon.jpg", 
        "fantasyStart": 2017, // (optional) 
        "favoriteTeam": "sea", // (optional) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) Win Now, Dynasty, Rebuild
        "rival":   {
            name: "Friesen", 
            link: 10, // manager array number within this array, or null to link back to all managers page
            image: "/managers/friesen.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
        "favoritePlayer": 345, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "K", // (optional)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets'
        "philosophy": "Pick the best players and hope they play like the best players",
        "tradingScale": 3, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
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
    
