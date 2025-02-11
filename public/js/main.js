// ascii art
////////////////////////////////////////////////////////////////////////// 
//     ___ ___ _                 _                _   _ ___             //
// ___|  _|  _| |_ ___ ___ ___ _| |   ___ ___ ___| |_|_|  _|_ _         //
//| . |  _|  _| . |  _| .'|   | . |  |_ -| . | . |  _| |  _| | |        //
//|___|_| |_| |___|_| |__,|_|_|___|  |___|  _|___|_| |_|_| |_  |        //
//                                       |_|               |___|        //
//v3                                                            by angel//
//////////////////////////////////////////////////////////////////////////
// data for the albums
var albums = [
    { database: 1,   artist: "Tyler, The Creator", album: "Wolf", folder: "tylerthecreator/wolf", image: "albumcover.webp" },
    { database: 1,   artist: "Tyler, The Creator", album: "Flower Boy", folder: "tylerthecreator/flowerboy", image: "albumcover.webp" },
    { database: 1,   artist: "Tyler, The Creator", album: "Igor", folder: "tylerthecreator/igor", image: "igorcover.webp" },
    { database: 1,   artist: "Tyler, The Creator", album: "Cherry Bomb", folder: "tylerthecreator/cherrybomb", image: "cherrybomb.webp" },
    { database: 1,   artist: "Tyler, The Creator", album: "Goblin", folder: "tylerthecreator/goblin", image: "Goblincover.webp" },
    { database: 3,   artist: "Tyler, The Creator", album: "Call Me If You Get Lost", folder: "tylerthecreator/cmiygl", image: "albumcover.jpg"},
    { database: 3,   artist: "Tyler, The Creator", album: "Call Me If You Get Lost: The Estate Sale", folder: "tylerthecreator/cmiygles", image: "albumcover.png"},
    { database: 1,   artist: "Arctic Monkeys", album: "AM", folder: "arcticmonkeys/am", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "Humbug", folder: "arcticmonkeys/humbug", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "WPSIATWIN", folder: "arcticmonkeys/wpsiatwin", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "Favourite Worst Nightmare", folder: "arcticmonkeys/fwn", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "Suck It and See", folder: "arcticmonkeys/sias", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "Tranquility Base Hotel & Casino", folder: "arcticmonkeys/tbhc", image: "albumcover.webp"},
    { database: 1,   artist: "Arctic Monkeys", album: "The Car", folder: "arcticmonkeys/car", image: "albumcover.webp"},
    { database: 1,   artist: "Wallows", album: "Nothing Happens", folder: "wallows/nonthinghappens", image: "albumcover.webp"},
    { database: 1,   artist: "Melanie Martinez", album: "Crybaby", folder: "melanie/crybaby", image: "albumcover.webp"},
    { database: 1,   artist: "Melanie Martinez", album: "K-12", folder: "melanie/k12", image: "albumcover.webp"},
    { database: 1,   artist: "Melanie Martinez", album: "Portals", folder: "melanie/portals", image: "albumcover.webp"},
    { database: 1,   artist: "The weeknd", album: "Kiss Land", folder: "theweekend/kissland", image: "albumcover.webp"},
    { database: 1,   artist: "The weeknd", album: "Beauty Behind the Madness", folder: "theweekend/bbtm", image: "albumcover.webp"},
    { database: 1,   artist: "The weeknd", album: "starboy", folder: "theweekend/starboy", image: "albumcover.webp"},
    { database: 1,   artist: "The weeknd", album: "Afterhours", folder: "theweekend/afterhours", image: "albumcover.webp"},
    { database: 1,   artist: "The weeknd", album: "Dawnfm", folder: "theweekend/dawnfm", image: "albumcover.png"},
    { database: 1,   artist: "Laufey", album: "Bewitched", folder: "laufey/bewitched", image: "albumcover.png"},
    { database: 2,   artist: "Laufey", album: "Everything I Know About Love", folder: "laufey/eikal", image: "albumcover.webp"},
    { database: 1,   artist: "Roddy Ricch", album: "Live Life Fast", folder: "rr/llf", image: "albumcover.png"},
    { database: 1,   artist: "Roddy Ricch", album: "Please Excuse Me for Being Antisocial", folder: "rr/pemfba", image: "albumcover.png"},
    { database: 1,   artist: "Lemon Demon", album: "Spirit phone", folder: "ld/sp", image: "albumcover.png"},
    { database: 1,   artist: "Lemon Demon", album: "Clown", folder: "ld/cc", image: "albumcover.jpg"},
    { database: 2,   artist: "Kanye West", album: "The College Dropout", folder: "kanyewest/tcd", image: "albumcover.jpg"},
    { database: 2,   artist: "Kanye West", album: "Late Registration", folder: "kanyewest/lr", image: "albumcover.webp"},
    { database: 2,   artist: "Kanye West", album: "Graduation", folder: "kanyewest/grad", image: "albumcover.webp"},
    { database: 2,   artist: "Kanye West", album: "808s & Heartbreak", folder: "kanyewest/808s", image: "albumcover.png"},
    { database: 1,   artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", folder: "kanyewest/mbdtf", image: "albumcover.jpg"},
    { database: 2,   artist: "Kanye West", album: "Watch the Throne", folder: "kanyewest/wtt", image: "albumcover.webp"},
    { database: 2,   artist: "Kanye West", album: "Cruel Summer", folder: "kanyewest/cs", image: "albumcover.webp"},
    { database: 1,   artist: "Kanye West", album: "Yeezus", folder: "kanyewest/yeezus", image: "Cover.jpg"},
    { database: 2,   artist: "Kanye West", album: "The Life of Pablo", folder: "kanyewest/tlop", image: "albumcover.webp"},
    { database: 1,   artist: "Kanye West", album: "Ye", folder: "kanyewest/ye", image: "Cover.jpg" },
    { database: 2,   artist: "Kanye West", album: "Kids See Ghosts", folder: "kanyewest/ksg", image: "albumcover.png"},
    { database: 1,   artist: "Kanye West", album: "Jesus Is King", folder: "kanyewest/jesusisking", image: "Cover.jpg" },
    { database: 1,   artist: "Kanye West", album: "Donda", folder: "kanyewest/donda", image: "cover.webp" },
    { database: 1,   artist: "Kanye West", album: "Donda 2", folder: "kanyewest/donda2", image: "albumcover.webp" },
    { database: 2,   artist: "Kanye West", album: "Vultures 1", folder: "kanyewest/vult1", image: "albumcover.webp"},
    { database: 2,   artist: "Kanye West", album: "Vultures 2", folder: "kanyewest/vult2", image: "albumcover.webp"},
    { database: 2,   artist: "Kanye West", album: "Vultures 3", folder: "kanyewest/vult3", image: "albumcover.webp"},
    { database: 1,   artist: "Frank Ocean", album: "Channel Orange", folder: "franko/co", image: "albumcover.webp" },
    { database: 1,   artist: "Frank Ocean", album: "Blonde", folder: "franko/blonde", image: "albumcover.webp" },
    { database: 2,   artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", folder: "be/wwafawdwg", image: "albumcover.png" },
    { database: 1,   artist: "Billie Eilish", album: "Happier Than Ever", folder: "be/hte", image: "albumcover.jpg" },
    { database: 2,   artist: "Billie Eilish", album: "Hit Me Hard and Soft", folder: "be/hmhas", image: "albumcover.png" },
    { database: 3,   artist: "SZA", album: "SOS", folder: "sza/sos", image: "albumcover.jpg" },
    { database: 2,   artist: "Kendrick Lamar", album: "Overly Dedicated", folder: "kenla/overded", image: "albumcover.png"},
    { database: 2,   artist: "Kendrick Lamar", album: "Section.80", folder: "kenla/sec80", image: "albumcover.jpg" },
    { database: 2,   artist: "Kendrick Lamar", album: "good kid, m.A.A.d city", folder: "kenla/gkmc", image: "albumcover.jpg" },
    { database: 1,   artist: "Kendrick Lamar", album: "To Pimp a Butterfly", folder: "kenla/tpabf", image: "albumcover.jpg" },
    { database: 2,   artist: "Kendrick Lamar", album: "Untitled Unmastered", folder: "kenla/um", image: "albumcover.jpg"},
    { database: 2,   artist: "Kendrick Lamar", album: "Damn", folder: "kenla/dang", image: "albumcover.jpg"},
    { database: 1,   artist: "Kendrick Lamar", album: "Mr. Morale & the Big Steppers", folder: "kenla/mmtbs", image: "albumcover.jpg" },
    { database: 2,   artist: "Billie Holiday", album: "God Bless The Child", folder: "billieh/gbtc", image: "albumcover.jpg"},
    { database: 4,   artist: "TV Girl", album: "French Exit", folder: "tvgirl/fe", image: "images.jpeg" },
    { database: 4,   artist: "TV Girl", album: "Who Really Cares", folder: "tvgirl/wrc", image: "images.jpeg" },
    // placeholder when starting the app for the first time
    { database: 0,   artist: "", album: "", folder: "place/holder", image: "nonealbum.png" }
];
// data for the audiotracks
var audioTracks = {
    "tylerthecreator/wolf": [
        "WOLF.mp3",
        "Jamba.mp3",
        "Cowboy.mp3",
        "Awkward.mp3",
        "Domo23.mp3",
        "Answer.mp3",
        "Slater.mp3",
        "48.mp3",
        "Colossus.mp3",
        "10 PartyIsntOver_Campfire_Bimmer.mp3",
        "IFHY.mp3",
        "Pigs.mp3",
        "Parking Lot.mp3",
        "Rusty.mp3",
        "Trashwang.mp3",
        "Treehome95.mp3",
        "Tamale.mp3",
        "Lone.mp3"
    ],
    "tylerthecreator/flowerboy": [
        "01 Foreword (feat. Rex Orange County).mp3",
        "02 Where This Flower Blooms (feat. Frank Ocean).mp3",
        "Sometimes....mp3",
        "04 See You Again (feat. Kali Uchis).mp3",
        "05 Who Dat Boy (feat. A$AP Rocky).mp3",
        "06 Pothole (feat. Jaden Smith).mp3",
        "07 Garden Shed (feat. Estelle).mp3",
        "08 Boredom (feat. Rex Orange County _ Anna of the North).mp3",
        "09 I Ain_t Got Time!.mp3",
        "10 911 _ Mr. Lonely (feat. Frank Ocean _ Steve Lacy).mp3",
        "11 Droppin_ Seeds (feat. Lil Wayne).mp3",
        "November.mp3",
        "Glitter.mp3",
        "Enjoy Right Now, Today.mp3"
    ],
    "tylerthecreator/igor": [
        "01 IGOR_S THEME (feat. Lil Uzi Vert _ Kali Uchis).mp3",
        "02 EARFQUAKE (feat. Playboi Carti _ Charlie Wilson).mp3",
        "03 I THINK (feat. Solange).mp3",
        "04 BOYFRIEND (feat. Charlie Wilson _ Santigold).mp3",
        "05 RUNNING OUT OF TIME (feat. Jessy Wilson).mp3",
        "06 NEW MAGIC WAND (feat. Santigold _ Jessy Wilson).mp3",
        "07 A BOY IS A GUN_.mp3",
        "08 PUPPET (feat. Kanye West).mp3",
        "09 WHAT_S GOOD (feat. Slowthai).mp3",
        "10 GONE, GONE _ THANK YOU (feat. CeeLo Green, Cullen Omori _ La Roux).mp3",
        "11 I DON_T LOVE YOU ANYMORE (feat. Charlie Wilson, Jessy Wilson _ Solange).mp3",
        "12 ARE WE STILL FRIENDS_ (feat. Pharrell Williams).mp3"
    ],
    "tylerthecreator/cherrybomb": [
        "1 Deathcamp.mp3",
        "2 Buffalo.mp3",
        "3 PILOT.mp3",
        "4 RUN.mp3",
        "5 FIND YOUR WINGS.mp3",
        "6 Cherry Bomb.mp3",
        "7 BLOW MY LOAD.mp3",
        "8 2SEATER.mp3",
        "9 THE BROWN STAINS OF DARKEESE.mp3",
        "10 F YOUNG _ PERFECT.mp3",
        "11 SMUCKERS.mp3",
        "12 KEEP DA O_S.mp3",
        "13 OKAGA, CA.mp3"
    ],
    "tylerthecreator/goblin": [
        "01 Goblin.mp3",
        "02 Yonkers.mp3",
        "03 Radicals.mp3",
        "04 She (feat. Frank Ocean).mp3",
        "05 Transylvania.mp3",
        "06 Nightmare.mp3",
        "07 Tron Cat.mp3",
        "08 Her.mp3",
        "13 Window (feat. Domo Genesis, Hodgy Beats, Frank Ocean & Mike G).mp3",
        "14 AU79.mp3",
        "15 Golden.mp3",
        "2-01 Burger (feat. Hodgy Beats).mp3",
        "2-03 Steak Sauce.mp3",
    ],
    "tylerthecreator/cmiygl": [
        "01. SIR BAUDELAIRE.mp3",
        "02. CORSO.mp3",
        "03. LEMONHEAD.mp3",
        "04. WUSYANAME.mp3",
        "05. LUMBERJACK.mp3",
        "06. HOT WIND BLOWS.mp3",
        "07. MASSA.mp3",
        "08. RUNITUP.mp3",
        "09. MANIFESTO.mp3",
        "10. SWEET ⧸ I THOUGHT YOU WANTED TO DANCE.mp3",
        "11. MOMMA TALK.mp3",
        "12. RISE!.mp3",
        "13. BLESSED.mp3",
        "14. JUGGERNAUT.mp3",
        "15. WILSHIRE.mp3",
        "16. SAFARI.mp3",
    ],
    "tylerthecreator/cmiygles": [
        "01. SIR BAUDELAIRE.mp3",
        "02. CORSO.mp3",
        "03. LEMONHEAD.mp3",
        "04. WUSYANAME.mp3",
        "05. LUMBERJACK.mp3",
        "06. HOT WIND BLOWS.mp3",
        "07. MASSA.mp3",
        "08. RUNITUP.mp3",
        "09. MANIFESTO.mp3",
        "10. SWEET ⧸ I THOUGHT YOU WANTED TO DANCE.mp3",
        "11. MOMMA TALK.mp3",
        "12. RISE!.mp3",
        "13. BLESSED.mp3",
        "14. JUGGERNAUT.mp3",
        "15. WILSHIRE.mp3",
        "16. SAFARI.mp3",
        "17. EVERYTHING MUST GO.mp3",
        "18. STUNTMAN.mp3",
        "19. WHAT A DAY.mp3",
        "20. WHARF TALK.mp3",
        "21. DOGTOOTH.mp3",
        "22. HEAVEN TO ME.mp3",
        "23. BOYFRIEND, GIRLFRIEND (2020 Demo).mp3",
        "24. SORRY NOT SORRY.mp3",    
    ],
    "arcticmonkeys/am": [
        "01 - Do I Wanna Know.mp3",
        "02 - R U Mine.mp3",
        "03 - One For the Road.mp3",
        "04 - Arabella.mp3",
        "05 - I Want It All.mp3",
        "06 - No. 1 Party Anthem.mp3",
        "07 - Mad Sounds.mp3",
        "08 - Fireside.mp3",
        "09 - Why'd You Only Call Me When You're High.mp3",
        "10 - Snap Out of It.mp3",
        "11 - Knee Socks.mp3",
        "12 - I Wanna Be Yours.mp3"
    ], 
    "arcticmonkeys/humbug": [
        "01. My Propeller.mp3",
        "02. Crying Lightning.mp3",
        "03. Dangerous Animals.mp3",
        "04. Secret Door.mp3",
        "05. Potion Approaching.mp3",
        "06. Fire And The Thud.mp3",
        "07. Cornerstone.mp3",
        "08. Dance Little Liar.mp3",
        "09. pretty visitors.mp3",
        "10 the jeweller's hands.mp3",
        "11_red right hand(2)(2).mp3"
    ],
    "arcticmonkeys/wpsiatwin": [
        "01 The View from the Afternoon.mp3",
        "02 I Bet You Look Good on the Dancefloor.mp3",
        "03 Fake Tales of San Francisco.mp3",
        "04 Dancing Shoes.mp3",
        "05 You Probably Couldn't See for the Lights But You Were Staring.mp3",
        "06 Still Take You Home.mp3",
        "07 Riot Van.mp3",
        "08 Red Light Indicates Doors Are Secured.mp3",
        "09 Mardy Bum.mp3",
        "10 Perhaps Vampires Is a Bit Strong But.mp3",
        "11 When the Sun Goes Down.mp3",
        "12 From the Ritz to the Rubble.mp3",
        "13 A Certain Romance.mp3",
    ],
    "arcticmonkeys/fwn": [
        ""
    ], 
    "arcticmonkeys/sias": [
        ""
    ],
    "arcticmonkeys/tbhc": [
        ""
    ],
    "arcticmonkeys/car": [
        ""
    ],
    "wallows/nonthinghappens": [
        "Only Friend.mp3",
        "Treacherous Doctor.mp3",
        "Sidelines.mp3",
        "Are You Bored Yet (feat. Clairo).mp3",
        "Scrawny.mp3",
        "Ice Cold Pool.mp3",
        "Worlds Apart.mp3",
        "What You Like.mp3",
        "Remember When.mp3",
        "I_m Full.mp3",
        "Do Not Wait.mp3"
    ],
    "melanie/crybaby": [
        ""
    ],
    "melanie/k12": [
        ""
    ],
    "melanie/portals": [
        ""
    ],
    "theweekend/kissland": [
        "01 - The Weeknd - Professional.mp3",
        "02 - The Weeknd - The Town.mp3",
        "03 - The Weeknd - Adaptation.mp3",
        "04 - The Weeknd - Love in the Sky.mp3",
        "05 - The Weeknd - Belong to the World.mp3",
        "06 - The Weeknd - Live For (Feat. Drake).mp3",
        "07 - The Weeknd - Wanderlust.mp3",
        "08 - The Weeknd - Kiss Land.mp3",
        "09 - The Weeknd - Pretty.mp3",
        "10 - The Weeknd - Tears in the Rain.mp3",
    ],
    "theweekend/bbtm": [
        "01 Real Life.mp3",
        "02 Losers.mp3",
        "03 Tell Your Friends.mp3",
        "04 Often.mp3",
        "05 The Hills.mp3",
        "06 Acquainted.mp3",
        "07 Can't Feel My Face.mp3",
        "08 Shameless.mp3",
        "09 Earned It (Fifty Shades Of Grey).mp3",
        "10 In The Night.mp3",
        "11 As You Are.mp3",
        "12 Dark Times.mp3",
        "13 Prisoner.mp3",
        "14 Angel.mp3"
    ],
    "theweekend/starboy": [
        "01. Starboy.mp3",
        "02. Party Monster.mp3",
        "03. False Alarm.mp3",
        "04. Reminder.mp3",
        "05. Rockin.mp3",
        "06. Secrets.mp3",
        "07. True Colors.mp3",
        "08. Stargirl Interlude.mp3",
        "09. Sidewalks.mp3",
        "10. Six Feet Under.mp3",
        "11. Love To Lay.mp3",
        "12. A Lonely Night.mp3",
        "13. Attention.mp3",
        "14. Ordinary Life.mp3",
        "15. Nothing Without You.mp3",
        "16. All I Know.mp3",
        "17. Die For You.mp3",
        "18. I Feel It Coming.mp3",
        "19. Die For You (Remix).mp3",
        "20. Starboy (Kygo Remix).mp3",
        "21. Reminder (Remix).mp3"

    ],
    "theweekend/afterhours": [
        "01 Alone Again.mp3",
        "02 Too Late.mp3",
        "03 Hardest To Love.mp3",
        "04 Scared To Live.mp3",
        "05 Snowchild.mp3",
        "06 Escape From LA.mp3",
        "07 Heartless.mp3",
        "08 Faith.mp3",
        "09 Blinding Lights.mp3",
        "10 In Your Eyes.mp3",
        "11 Save Your Tears.mp3",
        "12 Repeat After Me (Interlude).mp3",
        "13 After Hours.mp3",
        "14 Until I Bleed Out.mp3"
    ],
    "theweekend/dawnfm": [
        "01. Dawn FM.mp3",
        "02. Gasoline.mp3",
        "03. How Do I Make You Love Me_.mp3",
        "04. Take My Breath.mp3",
        "05. Sacrifice.mp3",
        "06. A Tale By Quincy.mp3",
        "07. Out of Time.mp3",
        "08. Here We Go… Again.mp3",
        "09. Best Friends.mp3",
        "10. Is There Someone Else_.mp3",
        "11. Starry Eyes.mp3",
        "12. Every Angel is Terrifying.mp3",
        "13. Don’t Break My Heart.mp3",
        "14. I Heard You’re Married.mp3",
        "15. Less Than Zero.mp3",
        "16. Phantom Regret by Jim.mp3"
    ],
    "laufey/bewitched": [
        "01 Dreamer.mp3",
        "02 Second Best.mp3",
        "03 Haunted.mp3",
        "04 Must Be Love.mp3",
        "05 While You Were Sleeping.mp3",
        "06 Lovesick.mp3",
        "07 California and Me (feat. Philharm.mp3",
        "08 Nocturne (Interlude).mp3",
        "09 Promise.mp3",
        "10 From The Start.mp3",
        "11 Misty.mp3",
        "12 Serendipity.mp3",
        "13 Letter To My 13 OSelf.mp3",
        "14 Bewitched.mp3"
    ],
    "laufey/eikal": [
        "01. Fragile.mp3",
        "02. Beautiful Stranger.mp3",
        "03. Valentine.mp3",
        "04. Above The Chinese Restaurant.mp3",
        "05. Dear Soulmate.mp3",
        "06. What Love Will Do to You.mp3",
        "07. I've Never Been In Love Before.mp3",
        "08. Just Like Chet.mp3",
        "09. Everything I Know About Love.mp3",
        "10. Falling Behind.mp3",
        "11. Hi.mp3",
        "12. Dance With You Tonight.mp3",
        "13. Night Light.mp3",
    ],
    "rr/llf": [
        ""
    ],
    "rr/pemfba": [
        ""
    ],
    "ld/sp": [
        ""
    ],
    "ld/cc": [
        "01. Error.mp3",
        "02. Lemon Demon.mp3",
        "03. Ten Thousand Light  y.mp3",
        "04. Don't Be Like the Sun.mp3",
        "05. Bowling Alley.mp3",
        "06. Wrong.mp3",
        "07. Hazel's Modus Operandi.mp3",
        "08. Idiot Control Now.mp3",
        "09. Pepper and Salt.mp3",
        "10. Holy Bison Beaks!.mp3",
        "11. Somnolence.mp3",
        "12. Fire Motif.mp3",
        "13. Hyakugojyuuichi 2003.mp3",
        "14. Elsewhere.mp3",
    ],
    "kanyewest/tcd": [
        "1. Intro.mp3",
        "2. We Don't Care.mp3",
        "3. Graduation Day.mp3",
        "4. All Falls Down.mp3",
        "5. I'll Fly Away.mp3",
        "6. Spaceship.mp3",
        "7. Jesus Walks.mp3",
        "8. Never Let Me Down.mp3",
        "9. Get Them High.mp3",
        "10. Workout Plan.mp3",
        "11. The New Workout Plan.mp3",
        "12. Slow Jams.mp3",
        "13. Breath In Breath Out.mp3",
        "14. School Spirit (skit 1).mp3",
        "15. School Spirit.mp3",
        "16. School Spirit (skit 2).mp3",
        "17. Lil Jimmy (skit).mp3",
        "18. Two Words.mp3",
        "19. Through The Wire.mp3",
        "20. Family Business.mp3",
        "21. Last Call.mp3",
    
    ],
    "kanyewest/lr": [
        "1. Wake Up Mr. West.mp3",
        "2. Heard 'Em Say.mp3",
        "3. Touch The Sky.mp3",
        "4. Gold Digger.mp3",
        "5. Skit #1.mp3",
        "6. Drive Slow.mp3",
        "7. My Way Home.mp3",
        "8. Crack Music.mp3",
        "9. Roses.mp3",
        "10. Bring Me Down.mp3",
        "11. Addiction.mp3",
        "12. Skit #2.mp3",
        "13. Diamonds From Sierra Leone (Remix).mp3",
        "14. We Major.mp3",
        "15. Skit #3.mp3",
        "16. Hey Mama.mp3",
        "17. Celebration.mp3",
        "18. Skit #4 .mp3",
        "19. Gone.mp3",
        "20. Diamonds From Sierra Leone (Bonus Track).mp3",
        "21. Late.mp3",
    ],
    "kanyewest/grad": [
        "1. Good Morning.mp3",
        "2. Champion.mp3",
        "3. Stronger.mp3",
        "4. I Wonder.mp3",
        "5. Good Life.mp3",
        "6. Can't Tell Me Nothing.mp3",
        "7. Barry Bonds.mp3",
        "8. Drunk and Hot Girls.mp3",
        "9. Flashing Lights.mp3",
        "10. Everything I Am.mp3",
        "11. The Glory.mp3",
        "12. Homecoming.mp3",
        "13. Big Brother.mp3",
        "14. Good Night.mp3",
    ],
    "kanyewest/808s": [
        "1. Say You Will.mp3",
        "2. Welcome to Heartbreak (feat. Kid Cudi).mp3",
        "3. Heartless.mp3",
        "4. Amazing (ft. Young Jeezy ).mp3",
        "5. Love Lockdown.mp3",
        "6. Paranoid (feat. Mr Hudson).mp3",
        "7. RoboCop.mp3",
        "8. Street Lights.mp3",
        "9. Bad News.mp3",   
        "10. See you in my nightmares.mp3",
        "11. Coldest Winter.mp3",
        "12. Pinocchio Story.mp3"
    ],
    "kanyewest/mbdtf": [
        "01. Dark Fantasy.mp3",
        "02. Who Will Survive In America.mp3",
        "03. Gorgeous [feat. Kid Cudi].mp3",
        "04. POWER.mp3",
        "05. All Of The Lights [Interlude].mp3",
        "06. All Of The Lights.mp3",
        "07. Monster [feat. Jay-Z, Rick Ross, Nicki Minaj & Bon Iver].mp3",
        "08. So Appalled [feat. Jay-Z, Pusha T, CyHi Da Prynce, Swizz Beatz & The RZA].mp3",
        "09. Devil In A New Dress [feat. Rick Ross].mp3",
        "10. Runaway [feat. Pusha T].mp3",
        "11. Hell Of A Life.mp3",
        "12. Blame Game [feat. John Legend].mp3",
        "13. Lost In The World [feat. Bon Iver].mp3"
    ],
    "kanyewest/wtt": [
        ""
    ],
    "kanyewest/cs": [
        "1. To The World.mp3",
        "2. Clique.mp3",
        "3. Mercy.1.mp3",
        "4. New God Flow.1.mp3",
        "5. The Morning.mp3",
        "6. Cold.1.mp3",
        "7. Higher.mp3",
        "8. Sin City.mp3",
        "9. The One.mp3",
        "10. Creepers.mp3",
        "11. Bliss.mp3",
        "12. Don't Like.1.mp3",
    ],
    "kanyewest/yeezus": [
        "01 Kanye West - On Sight.mp3",
        "02 Kanye West - Black Skinhead.mp3",
        "03 Kanye West - I Am A God.mp3",
        "04 Kanye West - New Slaves.mp3",
        "05 Kanye West - Hold My Liquor.mp3",
        "06 Kanye West - I'm In It.mp3",
        "07 Kanye West - Blood On The Leaves.mp3",
        "08 Kanye West - Guilt Trip.mp3",
        "09 Kanye West - Send It Up.mp3",
        "10 Kanye West - Bound 2.mp3"
    ],
    "kanyewest/tlop": [
        "1. Ultralight Beam - Kanye West.mp3",
        "2. Father Stretch My Hands Pt. 1 - Kanye West.mp3",
        "3. Pt. 2 - Kanye West.mp3",
        "4. Famous - Kanye West.mp3",
        "5. Feedback - Kanye West.mp3",
        "6. Low Lights - Kanye West.mp3",
        "7. Highlights - Kanye West.mp3",
        "8. Freestyle 4 - Kanye West.mp3",
        "9. I Love Kanye - Kanye West.mp3",
        "10. Waves - Kanye West.mp3",
        "11. FML - Kanye West.mp3",
        "12. Real Friends - Kanye West.mp3",
        "13. Wolves - Kanye West.mp3",
        "14. Frank's Track - Kanye West.mp3",
        "15. Siiiiiiiiilver Surffffeeeeer Intermission - Kanye West.mp3",
        "16. 30 Hours - Kanye West.mp3",
        "17. No More Parties In LA - Kanye West.mp3",
        "18. Facts (Charlie Heat Version) - Kanye West.mp3",
        "19. Fade - Kanye West.mp3",
        "20. Saint Pablo - Kanye West.mp3",
    ],  
    "kanyewest/ye": [
        "01. I Thought About Killing You.mp3",
        "02. Yikes.mp3",
        "03. All Mine.mp3",
        "04. Wouldn't Leave.mp3",
        "05. No Mistakes.mp3",
        "06. Ghost Town.mp3",
        "07. Violent Crimes.mp3"
    ],
    "kanyewest/ksg": [
        "1. Feel The Love.mp3",
        "2. Fire.mp3",
        "3. 4th Dimension.mp3",
        "4.Freeee.mp3",
        "5. Reborn.mp3",
        "6. Kids See Ghosts.mp3",
        "7. Cudi Montage.mp3"        
    ],
    "kanyewest/jesusisking": [
        "01 Every Hour (feat. Sunday Service.mp3",
        "02 Selah.mp3",
        "03 Follow God.mp3",
        "04 Closed on Sunday.mp3",
        "05 On God.mp3",
        "06 Everything We Need (feat. Ty Doll.mp3",
        "07 Water (feat. Ant Clemons).mp3",
        "08 God Is.mp3",
        "09 Hands On (feat. Fred Hammond).mp3",
        "10 Use This Gospel (feat. Clipse & K.mp3",
        "11 Jesus Is Lord.mp3"
    ],
    "kanyewest/donda": [
        "01. Donda Chant.mp3",
        "02. Jail.mp3",
        "03. God Breathed.mp3",
        "04. Off The Grid.mp3",
        "05. Hurricane.mp3",
        "06. Praise God.mp3",
        "07. Jonah.mp3",
        "08. Ok Ok.mp3",
        "09. Junya.mp3",
        "10. Believe What I Say.mp3",
        "11. 24.mp3",
        "12. Remote Control.mp3",
        "13. Moon.mp3",
        "14. Heaven and Hell.mp3",
        "15. Donda.mp3",
        "16. Keep My Spirit Alive.mp3",
        "17. Jesus Lord.mp3",
        "18. New Again.mp3",
        "19. Tell The Vision.mp3",
        "20. Lord I Need You.mp3",
        "21. Pure Souls.mp3",
        "22. Come to Life.mp3",
        "23. No Child Left Behind.mp3",
        "24. Jail pt 2.mp3",
        "25. Ok Ok pt 2.mp3",
        "26. Junya pt 2.mp3",
        "27. Jesus Lord pt 2.mp3"
    ],
    "kanyewest/donda2": [
        "01 True Love (feat. XXXTentacion).mp3",
        "02 Broken Road (feat. Don Toliver).mp3",
        "03 Get Lost.mp3",
        "04 Too Easy.mp3",
        "05 Flowers.mp3",
        "06 Security.mp3",
        "07 We Did It Kid (feat. Baby Keem _ Migos).mp3",
        "08 Pablo (feat. Travis Scott _ Future).mp3",
        "09 Louie Bags (feat. Jack Harlow).mp3",
        "10 Happy (feat. Future).mp3",
        "11 Sci Fi (feat. Sean Leon).mp3",
        "12 Selfish (feat. XXXTentacion).mp3",
        "13 Lord Lift Me Up.mp3",
        "14 Keep It Burning (feat. Future).mp3",
        "15 City of Gods (with Fivio Foreign _ Alicia Keys).mp3",
        "16 First Time in a Long Time (feat. Soulja Boy).mp3"
    ],
    "kanyewest/vult1": [
        "01 STARS.mp3",
        "02 KEYS TO MY LIFE.mp3",
        "03 PAID.mp3",
        "04 TALKING.mp3",
        "05 BACK TO ME.mp3",
        "06 HOODRAT.mp3",
        "07 DO IT.mp3",
        "08 PAPERWORK.mp3",
        "09 BURN.mp3",
        "10 FUK SUMN.mp3",
        "11 VULTURES.mp3",
        "12 CARNIVAL.mp3",
        "13 BEG FORGIVENESS.mp3",
        "14 GOOD DON'T DIE.mp3",
        "15 PROBLEMATIC.mp3",
        "16 KING.mp3",
    ],
    "kanyewest/vult2": [
        ""
    ],
    "kanyewest/vult3": [
        ""
    ],
    "franko/co": [
        "01 Start.mp3",
        "02 Thinkin Bout You.mp3",
        "03 Fertilizer.mp3",
        "04 Sierra Leone.mp3",
        "05 Sweet Life.mp3",
        "06 Not Just Money.mp3",
        "07 Super Rich Kids (feat. Earl Sweat.mp3",
        "08 Pilot Jones.mp3",
        "09 Crack Rock.mp3",
        "10 Pyramids.mp3",
        "11 Lost.mp3",
        "12 White (feat. John Mayer).mp3",
        "13 Monks.mp3",
        "14 Bad Religion.mp3",
        "15 Pink Matter (feat. André 3000).mp3",
        "16 Forrest Gump.mp3",
        "17 End.mp3",
    ],
    "franko/blonde": [
        "01 Nikes.mp3",
        "02 Ivy.mp3",
        "03 Pink + White.mp3",
        "04 Be Yourself.mp3",
        "05 Solo.mp3",
        "06 Skyline To.mp3",
        "07 Self Control.mp3",
        "08 Good Guy.mp3",
        "09 Nights.mp3",
        "10 Solo (Reprise).mp3",
        "11 Pretty Sweet.mp3",
        "12 Facebook Story.mp3",
        "13 Close to You.mp3",
        "14 White Ferrari.mp3",
        "15 Seigfried.mp3",
        "16 Godspeed.mp3",
        "17 Futura Free.mp3",
    ],   
    "be/wwafawdwg": [
        "!!!!!!!.mp3",
        "bad guy.mp3",
        "xanny.mp3",
        "you should see me in a crown.mp3",
        "all the good girls go to hell.mp3",
        "wish you were gay.mp3",
        "when the party's over.mp3",
        "8.mp3",
        "my strange addiction.mp3",
        "bury a friend.mp3",
        "ilomilo.mp3",
        "listen before i go.mp3",
        "i love you.mp3",
        "goodbye.mp3"	
    ],
    "be/hte": [
        "01. Getting Older.mp3",
        "02. I Didn't Change My Number(Explicit).mp3",
        "03. Billie Bossa Nova.mp3",
        "04. my future.mp3",
        "05. Oxytocin.mp3",
        "06. GOLDWING.mp3",
        "07. Lost Cause(Explicit).mp3",
        "08. Halley's Comet.mp3",
        "09. Not My Responsibility.mp3",
        "10. OverHeated(Explicit).mp3",
        "11. Everybody Dies.mp3",
        "12. Your Power.mp3",
        "13. NDA(Explicit).mp3",
        "14. Therefore I Am.mp3",
        "15. Happier Than Ever(Explicit).mp3",
        "16. Male Fantasy.mp3",
    ],
    "be/hmhas": [
        ""
    ],
    "sza/sos": [
        "01. SOS.mp3",
        "02. Kill Bill.mp3",
        "03. Seek & Destroy.mp3",
        "04. Low.mp3",
        "05. Love Language.mp3",
        "06. Blind.mp3",
        "07. Used.mp3",
        "08. Snooze.mp3",
        "09. Notice Me.mp3",
        "10. Gone Girl.mp3",
        "11. Smoking on my Ex Pack.mp3",
        "12. Ghost in the Machine.mp3",
        "13. F2F.mp3",
        "14. Nobody Gets Me.mp3",
        "15. Conceited.mp3",
        "16. Special.mp3",
        "17. Too Late.mp3",
        "18. Far.mp3",
        "19. Shirt.mp3",
        "20. Open Arms.mp3",
        "21. I Hate U.mp3",
        "22. Good Days.mp3",
        "23. Forgiveless.mp3",
    ],
    "kenla/overded": [
        "01. Growing Apart (To Get Closer) (feat. Jhene Aiko).mp3",
        "02. Ignorance Is Bliss.mp3",
        "03. P & P 1.5 (feat. Ab-Soul).mp3",
        "04. Alien Girl (Today W⧸ Her).mp3",
        "05. Opposites Attract (Tomorrow W⧸O Her) (feat. Javonte).mp3",
        "06. Michael Jordan (feat. Schoolboy Q).mp3",
        "07. R.O.T.C (Interlude) (feat. Bj The Chicago Kid).mp3",
        "08. Barbed Wire (feat. Ash Riser).mp3",
        "09. Average Joe.mp3",
        "10. H.O.C.mp3",
        "11. Cut You Off (To Grow Closer).mp3",
        "12. She Needs Me (Remix) (feat. Dom Kennedy & Murs).mp3",
    ],
    "kenla/sec80": [
        "01. F*ck Your Ethnicity.mp3",
        "02. Hol' Up.mp3",
        "03. A.D.H.D.mp3",
        "04. No Make-Up (Her Vice).mp3",
        "05. Tammy's Song (Her Evils).mp3",
        "06. Chapter Six.mp3",
        "07. Ronald Reagan Era.mp3",
        "08. Poe Mans Dreams (His Vice).mp3",
        "09. Chapter Ten.mp3",
        "10. Keisha's Song (Her Pain).mp3",
        "11. Rigamortus.mp3",
        "12. Kush & Corinthians.mp3",
        "13. Blow My High (Members Only).mp3",
        "14. Ab-Souls Outro.mp3",
        "15. HiiiPower.mp3",
    ],
    "kenla/gkmc": [
        "01. Sherane a.k.a Master Splinter’s Daughter.mp3",
        "02. Bitch, Don’t Kill My Vibe.mp3",
        "03. Backseat Freestyle.mp3",
        "04. The Art of Peer Pressure.mp3",
        "05. Money Trees.mp3",
        "06. Poetic Justice.mp3",
        "07. good kid.mp3",
        "08. m.A.A.d city.mp3",
        "09. Swimming Pools (Drank) (Extended Version).mp3",
        "10. Sing About Me, I'm Dying Of Thirst.mp3",
        "11. Real.mp3",
        "12. Compton.mp3",
        "13. The Recipe (Bonus Track).mp3",
        "14. Black Boy Fly (Bonus Track).mp3",
        "15. Now Or Never (Bonus Track).mp3",
        "16. Bitch, Don’t Kill My Vibe (Remix).mp3",
    ], 
    "kenla/tpabf": [
        "01. Wesley's Theory.mp3",
        "02. For Free! (Interlude).mp3",
        "03. King Kunta.mp3",
        "04. Institutionalized.mp3",
        "05. These Walls.mp3",
        "06. u.mp3",
        "07. Alright.mp3",
        "08. For Sale! (Interlude).mp3",
        "09. Momma.mp3",
        "10. Hood Politics.mp3",
        "11. How Much A Dollar Cost.mp3",
        "12. Complexion (A Zulu Love).mp3",
        "13. The Blacker The Berry.mp3",
        "14. You Ain't Gotta Lie (Momma Said).mp3",
        "15. i.mp3",
        "16. Mortal Man.mp3"
    ],
    "kenla/um": [
        "1. untitled 01 | 08.19.2014..mp3",
        "2. untitled 02 | 06.23.2014..mp3",
        "3. untitled 03 | 05.28.2013..mp3",
        "4. untitled 04 | 08.14.2014..mp3",
        "5. untitled 05 | 09.21.2014..mp3",
        "6. untitled 06 | 06.30.2014..mp3",
        "7. untitled 07 | 2014 - 2016.mp3",
        "8. untitled 08 | 09.06.2014..mp3",
    ],
    "kenla/dang":[
        "01. DUCKWORTH..mp3",
        "02. GOD..mp3",
        "03. FEAR..mp3",
        "04. XXX..mp3",
        "05. LOVE..mp3",
        "06. LUST..mp3",
        "07. HUMBLE..mp3",
        "08. PRIDE..mp3",
        "09. LOYALTY..mp3",
        "10. FEEL..mp3",
        "11. ELEMENT..mp3",
        "12. YAH..mp3",
        "13. DNA..mp3",
        "14. BLOOD..mp3",
    ],
    "kenla/mmtbs": [
        "01. United In Grief.mp3",
        "02. N95.mp3",
        "03. Worldwide Steppers.mp3",
        "04. Die Hard.mp3",
        "05. Father Time.mp3",
        "06. Rich (Interlude).mp3",
        "07. Rich Spirit.mp3",
        "08. We Cry Together.mp3",
        "09. Purple Hearts.mp3",
        "10. Count Me Out.mp3",
        "11. Crown.mp3",
        "12. Silent Hill.mp3",
        "13. Savior (Interlude).mp3",
        "14. Savior.mp3",
        "15. Auntie Diaries.mp3",
        "16. Mr.Morale.mp3",-
        "17. Mother I Sober.mp3",
        "18. Mirror.mp3",
    ],
    "billieh/gbtc": [
        "1. God Bless The Child.mp3",
        "2. Lover Man.mp3",
        "3. That Ole Devil Called Love.mp3",
        "4. Them There Eyes.mp3",
        "5. You're My Thrill.mp3",
        "6. Don't Explain.mp3",
        "7. Crazy He Calls Me.mp3",
        "8. Ain't Nobody's Business If I Do.mp3",
        "9. Keeps On A Rainin.mp3",
        "10. The Blues Are Brewin'.mp3",
    ],
    "tvgirl/fe": [
        "01. Pantyhose",
        "02. Birds Dont Sing.mp3",
        "03. Louise.mp3",
        "04. Hate Yourself.mp3",
        "05. The Getaway.mp3",
        "06. Talk to Strangers.mp3",
        "07. The Blonde.mp3",
        "08. Daughter of a Cop.mp3",
        "09. Lovers Rock.mp3",
        "10. Her and Her Friend.mp3",
        "11. Come When You Call.mp3",
        "12. Anjela.mp3"
    ],
    "tvgirl/wrc": [
        "01. Taking What's Not Yours.mp3",
        "02. Song About Me.mp3",
        "03. Cigarettes out the Window.mp3",
        "04. Till You Tell Me to Leave.mp3",
        "05. Not Allowed.mp3",
        "06. [Do The] Act Like You Never Met Me.mp3",
        "07. Safeword.mp3",
        "08. For You.mp3",
        "09. Loving Machine.mp3",
        "10. Heaven is a Bedroom.mp3"
    ],     
    "place/holder": [
        ""
    ],
};
//yt-dlp -x --audio-format mp3 -o "%(title)s.%(ext)s" $linkss
// varibles for the player (yes)
let folartRaw = localStorage.getItem("folart");
let folart = folartRaw && folartRaw !== "" ? JSON.parse(folartRaw) : [];
var audio = document.getElementById("myAudio");
var playButton = document.querySelectorAll("#playbuttonthung");
var volumeControl = document.getElementById("volume");
var progressBar = document.querySelectorAll("progress");
var currentTrackIndex = 0;
var currentAlbum = "place/holder";
var currentAlbumIndex = albums.length - 1;
var audiotimern;
var repeatButtonClickCount = 0;
let selectedDatabase;
let DatabaseDomain;
let selectedDatabaseimage;
let DatabaseimageDomain;
let playbackMode = "none";
let savedaudio;
let backgroundcs;
let backgroundColorr;
var songTimeElement = document.querySelectorAll("#songTime");
var songDurationElement = document.querySelectorAll("#songDuration");
var songTimeElement2 = document.getElementById("songTime2");
var songDurationElement2 = document.getElementById("songDuration2");
var volumeControl = document.getElementById('volume');

// functions to get saved data from local storage
if (localStorage.getItem("Volume") !== null) {volumeControl.value = localStorage.getItem("Volume");audio.volume = localStorage.getItem("Volume");}else{audio.volume = 0.5;}
if (localStorage.getItem("Albumindex") !== null) {currentAlbumIndex = localStorage.getItem("Albumindex");}
if (localStorage.getItem("Trackindex") !== null) {currentTrackIndex = parseInt(localStorage.getItem("Trackindex"), 10);}
if (localStorage.getItem("CurrentAlbum") !== null) {currentAlbum = localStorage.getItem("CurrentAlbum");}
if (localStorage.getItem("timerforaudio") !== null) {audiotimern = localStorage.getItem("timerforaudio");}


// databases for images and the audio files
const databases = [
    { id: 0, url: "https://playmusichtml.web.app/" },
    { id: 1, url: "https://playmusicstorage.web.app/" },
    { id: 2, url: "https://playstorage2.web.app/" },
    { id: 3, url: "https://playstorage3.web.app/"},
    { id: 4, url: "https://playstorage3-e9531.web.app/"}
];
const databasesimages = [
    { id: 0, url: "https://playmusichtml.web.app/" },
    { id: 1, url: "https://playmusicstorage.web.app/" },
    { id: 2, url: "https://playstorage2.web.app/" },
    { id: 3, url: "https://playstorage3.web.app/"},
    { id: 4, url: "https://playstorage3-e9531.web.app/"}
];
function fetchDatabase() {
    selectedDatabase = null;
    DatabaseDomain = null;
    selectedDatabase = databases.find(db => db.id === albums[currentAlbumIndex].database);
    DatabaseDomain = selectedDatabase.url;
}
function fetchDatabaseImages(item) {
    selectedDatabaseimage = null;
    DatabaseimageDomain = null;
    selectedDatabaseimage = databasesimages.find(db => db.id === albums[item].database);
    DatabaseimageDomain = selectedDatabaseimage.url;
}
fetchDatabase();

// function to handle load the audio file
function loadTrack() {      
    fetchDatabase();  
    var trackPath = audioTracks[currentAlbum][currentTrackIndex];
    audio.src = DatabaseDomain + "songs/" + currentAlbum + "/" + trackPath;
    audio.load();
    updateTrackText();
    updateAlbumCover();
    mediathinggy();
    localStorage.setItem("Albumindex", currentAlbumIndex);
    localStorage.setItem("Trackindex", currentTrackIndex);
    localStorage.setItem("CurrentAlbum", currentAlbum);
    preloadNextTrack(); // Call the function to preload the next track
}

// says what it does in the function name
function preloadNextTrack() {
    let nextTrackIndex = currentTrackIndex + 1;
    let nextAlbum = currentAlbum;
    if (nextTrackIndex >= audioTracks[nextAlbum].length) {
        nextTrackIndex = 0; // Reset to the first track of the album
    }
    let nextTrackPath = audioTracks[nextAlbum][nextTrackIndex];
    let nextTrackSrc = DatabaseDomain + "songs/" + nextAlbum + "/" + nextTrackPath;
    let nextAudio = new Audio(nextTrackSrc);
    nextAudio.load(); // This starts loading the track without playing it
}
loadTrack();    
// media functions controls
function skipTrack() {
    changeTrack(1);
}
function previousTrack() {
    changeTrack(-1);
}
function seek(event, progressBarId) {
    const percent = event.offsetX / document.getElementById(progressBarId).offsetWidth;
    audio.currentTime = isFinite(percent * audio.duration) ? percent * audio.duration : console.error("Invalid seek time");
}
function toggleRepeat() {
    repeatButtonClickCount += 1;
    if (repeatButtonClickCount > 1) {
        repeatButtonClickCount = 0;
        playbackMode = "none";
    } else if (repeatButtonClickCount === 1) {
        playbackMode = "repeat";
    }
    updatePlaybackModeText();
}
function updatePlaybackModeText() {
    var buttonrepeat = document.getElementById("repeatbutton");
    if (playbackMode === "none") {
        buttonrepeat.innerHTML = '<i class="fa-solid fa-repeat" style="color: #ffffff;"></i>';
    } else if (playbackMode === "repeat") {
        buttonrepeat.innerHTML = '<i class="fa-solid fa-redo" style="color: #ffffff;"></i>';
    }
}
function playPause() {
    const isPaused = audio.paused;
    audio[isPaused ? 'play' : 'pause']();
    const iconClass = isPaused ? 'fas fa-pause' : 'fas fa-play';
    playButton.forEach(element => element.innerHTML = `<i class="${iconClass}"></i>`);
}
function setVolume() {
    audio.volume = volumeControl.value;
    localStorage.setItem("Volume", volumeControl.value);
}
volumeControl.addEventListener('input', setVolume);
function changeTrack(step) {
    console.log(`Saved track from previous: ${localStorage.getItem("Trackindex")}\n Ran ChangeTrack `);
    currentTrackIndex += step;
    console.log(`Before and After currentTrackIndex: ${currentTrackIndex - step} -> ${currentTrackIndex}`);
    let trackCount = audioTracks[currentAlbum].length;
    if (playbackMode === "repeat-song") {
        audio.currentTime = 0;
        audio.play();
        playbackMode = "none";
    updatePlaybackModeText();
        return;
    }

    // The rest of the previous logic remains unchanged
    if (playbackMode === "repeat") {
        currentTrackIndex = ((currentTrackIndex % trackCount) + trackCount) % trackCount;
    } else if (playbackMode === "loop" && currentTrackIndex < 0) {
        currentTrackIndex = trackCount - 1;        
    } else {
        currentTrackIndex = currentTrackIndex % trackCount;
    }
    updatePlaybackModeText();
    loadTrack();
    // wait for the track to load before playing
    audio.onloadeddata = function() {
        audio.play();
    };
}
// shortcuts 4 player
document.addEventListener('keydown', function(event) {
    const target = event.target;
    const nodeName = target.nodeName.toLowerCase();
    
    if (nodeName === 'input' || nodeName === 'textarea') {
        return; // Skip the keyboard shortcuts if the target is an input or textarea
    }
    if (event.code === 'Space') {
        event.preventDefault();
        playPause();
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        skipTrack();  
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        previousTrack();
    } else if (event.code === 'ArrowUp') {
        event.preventDefault();
        volumeControl = document.getElementById("volume");
        volumeControl.value = parseFloat(volumeControl.value) + 0.03;
        audio.volume = volumeControl.value;
        setVolume();
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        volumeControl = document.getElementById("volume");
        volumeControl.value = parseFloat(volumeControl.value) - 0.01;
        audio.volume = volumeControl.value;
        setVolume();
    } else if (event.code === 'KeyF') {
        event.preventDefault();
        openfullplayer();
    } else if (event.code === 'KeyG') {
        event.preventDefault();
        hidefullplayer();
    } else if (event.code === 'KeyL') {
        event.preventDefault();
        toggleRepeat();
    }
});
// more functions to handle the color of the album cover
function getContrastColor(rgbColor) {
    const [red, green, blue] = rgbColor.match(/\d+/g);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return brightness >= 195 ? "#222222" : "white";
}
function updateThemeColor(color) {
    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMetaTag) {
        themeColorMetaTag = document.createElement('meta');
        themeColorMetaTag.name = "theme-color";
        document.head.appendChild(themeColorMetaTag);
    }
    themeColorMetaTag.content = color;
}
// function to get the color, and display the album cover
function updateAlbumCover() {
    if (!currentAlbum || currentAlbumIndex === undefined || !albums[currentAlbumIndex]) {

        const defaultColor = "rgb(50, 50, 50)";
        const defaultTextColor = getContrastColor(defaultColor);
        const defaultBorderColor = "rgb(75, 75, 75)";
        
        updateThemeColor(defaultColor);
        document.querySelectorAll('[id="albumCover"]').forEach(element => element.src = ""); // Clear album cover
        const audioControls = document.querySelector(".audio-controls-full");
        const audioControlsMini = document.querySelector(".audio-controls");
        
        audioControls.style.backgroundColor = defaultColor;
        audioControls.style.color = defaultTextColor;
        document.querySelectorAll('i').forEach(element => element.style.color = defaultTextColor);
        document.body.style.backgroundColor = defaultColor;
        document.body.style.color = defaultTextColor;
        audioControlsMini.style.backgroundColor = defaultColor;
        audioControlsMini.style.color = defaultTextColor;
        audioControlsMini.style.borderColor = defaultBorderColor;
        
        return;
    }

    const selectedAlbum = DatabaseDomain + "songs/" + currentAlbum + "/" + albums[currentAlbumIndex].image;
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = selectedAlbum;
    document.querySelectorAll('[id="albumCover"]').forEach(element => element.src = selectedAlbum);
    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const audioControls = document.querySelector(".audio-controls-full");
        const audioControlsMini = document.querySelector(".audio-controls");
        const rgbColor = `rgb(${red},${green},${blue})`;
        const backgroundColor = `rgb(${red - 25},${green - 25},${blue - 25})`;
        const borderColor = `rgb(${red + 7},${green + 7},${blue + 7})`;
        const textContrastColor = getContrastColor(rgbColor);
        
        updateThemeColor(backgroundColor);
        audioControls.style.backgroundColor = rgbColor;
        audioControls.style.color = textContrastColor;
        backgroundcs = rgbColor;
        backgroundColorr = backgroundColor;
        document.querySelectorAll('i').forEach(element => element.style.color = textContrastColor);
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = textContrastColor;
        audioControlsMini.style.backgroundColor = rgbColor;
        audioControlsMini.style.color = textContrastColor;
        audioControlsMini.style.borderColor = borderColor;
    };
}
// change the album with the arrow buttons
function changeAlbum(step) {
    currentAlbumIndex += step;
    let albumCount = albums.length;
    currentAlbumIndex = ((currentAlbumIndex % albumCount) + albumCount) % albumCount;
    currentAlbum = albums[currentAlbumIndex].folder;
    currentTrackIndex = 0;
    if (audioTracks[currentAlbum]) {
        loadTrack();
        audio.play();
        updateAlbumCover();
    } else {
        console.error(`Album not found: ${currentAlbum}`);
    }
}
function nextAlbum() {
    changeAlbum(1);
}
function previousAlbum() {
    changeAlbum(-1);
}
audio.addEventListener("timeupdate", function() {
    const duration = audio.duration;
    if (isFinite(duration)) {
        const percentComplete = (audio.currentTime / duration) * 100;
        progressBar.forEach(element => element.value = percentComplete);
    }
    localStorage.setItem("timerforaudio", audio.currentTime);
});
audio.currentTime = localStorage.getItem("timerforaudio");
loadTrack();
audio.addEventListener("ended", skipTrack);
// update the track text on the full player and the mini player
function updateTrackText() {
    var currentTrackElements = document.querySelectorAll(".currentTrack");
    var currentTrack2Elements = document.querySelectorAll(".currentTrack2");
    var currentartist = document.querySelectorAll(".currentartist");
    var currentartist2  = document.querySelectorAll('.currentartist2');
    var artist = albums[currentAlbumIndex].artist;
    var track = audioTracks[currentAlbum][currentTrackIndex];
    
    // Remove the number, .mp3 extension, content inside parentheses, and underscores
    track = track.replace(".mp3", "");
    track = track.replace(/^\d{2,}\s*[-.]*\s*/, "");
    track = track.replace(/\(.*?\)/g, "");
    track = track.replace(/_/g, " ");
    
    currentTrackElements.forEach(function(element) {
        element.textContent = track;
    });
    currentartist.forEach(function(element) {
        element.textContent = artist;
    });
    currentartist2.forEach(function(element){
        element.textContent = artist;
    });
    currentTrack2Elements.forEach(function(element) {
        element.textContent = track;
    });
}
const elementsById = ['songselector', 'accountsettings', 'searching', 'lilbrary', 'settings', 'mlogin'].reduce((obj, id) => {
    obj[id] = document.getElementById(id);
    return obj;
}, {});
const elementsByClassName = ['audio-controls-full', 'audio-controls', 'sidebarmen'].reduce((obj, className) => {
    obj[className] = document.getElementsByClassName(className);
    return obj;
}, {});
// 2 functions to show and hide the Full Display Song
function hidefullplayer() {
    updateThemeColor(backgroundColorr);
    elementsById['songselector'].style.display = "flex";
    elementsByClassName['audio-controls-full'][0].style.display = "none";
    elementsByClassName['audio-controls'][0].style.display = "flex";
}
function openfullplayer() {
    updateThemeColor(backgroundcs);
    elementsById['songselector'].style.display = "none";
    elementsByClassName['audio-controls-full'][0].style.display = "flex";
    elementsByClassName['audio-controls'][0].style.display = "none";
}
updateTrackText();
// change the progress bar to the time of the current song playing
audio.addEventListener("timeupdate", function() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    if (isFinite(duration)) {
        var percentComplete = (currentTime / duration) * 100;
        progressBar.forEach(function(element) {
            element.value = percentComplete;
        });
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        var durationMinutes = Math.floor(duration / 60);
        var durationSeconds = Math.floor(duration % 60);
        songTimeElement.forEach(function(element) {
            element.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
        });
        songDurationElement.forEach(function(element) {
            element.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
        })
        songTimeElement2.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
        songDurationElement2.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
    }
});
// volume icon display function
document.getElementById("volumeIcon").addEventListener("click", function() {
    var volumeSlider = document.getElementById("volume");
    if (volumeSlider.style.display === "none" || volumeSlider.style.display === "") {
        volumeSlider.style.display = "block";
    } else {
        volumeSlider.style.display = "none";
    }
});
// singles and album switcher
    document.getElementById('swithcbox').addEventListener('change', (event) => {
    if (event.target.checked == true) {
        document.getElementById('farts').style.display = "none";
        document.getElementById("single").style.display = "block";
    } else {
        document.getElementById('farts').style.display = "block";
        document.getElementById("single").style.display = "none";
    }
});
// display the albums on the html page using json data (located at json/songs.json)
function fetchAndDisplayAlbums () {
    fetch('json/songs.json')
        .then((response) => response.json())
        .then((data) => {
            const songSelector = document.getElementById('farts');
            songSelector.innerHTML = ''; // Clear existing content

            data.albums.sort((a, b) => {
                const aIsFavorite = folart.includes(a.artist);
                const bIsFavorite = folart.includes(b.artist);
                return bIsFavorite - aIsFavorite; // True values (favorites) will come first
            });

            let currentArtist = ''; // Initialize the current artist
            let albumContainer;
            data.albums.forEach((album) => {
                if (album.artist !== currentArtist) {
                    albumContainer = document.createElement('div');
                    albumContainer.className = 'album-container';
                    const artistHeader = document.createElement('h1');
                    const icon = document.createElement('i');
                    const buttonstar = document.createElement('button');
                    icon.className = "fa-regular fa-star";
                    icon.alt = "Star";
                    buttonstar.title = "Favorite Artist"
                    buttonstar.ariaLabel = "Favorite Artist";
                    artistHeader.textContent = album.artist;
                    buttonstar.style.backgroundColor = "none";
                    icon.style.fontSize = "25px";
                    icon.style.marginLeft = "15px";
                    buttonstar.style.color = "inherit";

                    artistHeader.textContent = album.artist;
                    songSelector.appendChild(artistHeader);
                    artistHeader.appendChild(buttonstar)
                    buttonstar.appendChild(icon);
                    var clickcount = folart.includes(album.artist) ? 1 : 0;
                    icon.className = clickcount === 1 ? "fa-solid fa-star" : "fa-regular fa-star";

                    buttonstar.addEventListener("click", function() {
                        if (clickcount === 0) {
                            // Toggle star icon to solid
                            icon.className = "fa-solid fa-star";
                            // Add artist to favorites array and save to localStorage
                            folart.push(album.artist);
                            localStorage.setItem("folart", JSON.stringify(folart))
                        } else {
                            // Toggle star icon to regular
                            icon.className = "fa-regular fa-star";
                            // Remove artist from favorites array and update localStorage
                            const index = folart.indexOf(album.artist);
                            if (index > -1) {
                                folart.splice(index, 1);
                                localStorage.setItem("folart", JSON.stringify(folart));
                            }
                        }
                        // Toggle clickcount between 0 and 1
                        clickcount = (clickcount === 0) ? 1 : 0;
                    });

                    if (folart.includes(album.artist)) {
                        // Set star icon as filled for favorite artist
                        icon.className = "fa-solid fa-star";
                    }

                    currentArtist = album.artist;
                }
                // Create a button for each album and points to the function to load up the chosen album
                const albumButton = document.createElement('button');
                albumButton.innerHTML = `<img src="${album.cover}" alt="${album.album}" class="album-medium">`;
                albumButton.onclick = () => albumsec(album.folder);
                songSelector.appendChild(albumContainer);
                albumContainer.appendChild(albumButton);

                // delete this very soon
                if (album.explicit === "true" && localStorage.getItem("hideExplicit") === "true") {
                    albumButton.style.display = "none";
                    console.log('albumButton:', albumButton);
                    const artistHeaders = document.querySelectorAll('h1');
                    artistHeaders.forEach((artistHeader) => {
                        const artistAlbums = data.albums.filter(album => album.artist === artistHeader.textContent);
                            if (artistAlbums.every(album => album.explicit === "true")) {
                            artistHeader.style.display = "none";
                    }});
                }
            });
        })
        .catch((error) => {
            console.log('Error loading JSON data:', error);
            // Display offline message if fetch fails
            const songSelector = document.getElementById('farts');
            songSelector.innerHTML = '<h1>You are offline</h1><p>Please check your internet connection.</p>';
        });
}
fetchAndDisplayAlbums();

// album selector button
function albumsec(folder) {
    const albumDetails = albums.find(album => album.folder === folder);
    fetchDatabase();
    if (albumDetails) {
        currentAlbumIndex = albums.indexOf(albumDetails);
        currentAlbum = albumDetails.folder;
        currentTrackIndex = 0;
        loadTrack();
        audio.play();
        playButton.forEach(element => element.innerHTML = `<i class="fas fa-pause"></i>`);
        updateAlbumCover();
    } else {
        console.error(`Album with folder ${folder} not found in the albums array.`);
    }
}
// fancy media session stuff
function mediathinggy() {
    const imagealbum = DatabaseDomain + "songs/" + currentAlbum + "/" +albums[currentAlbumIndex].image;
    var track = audioTracks[currentAlbum][currentTrackIndex]
    track = track.replace(".mp3", "");
    track = track.replace(/^\d+\s*[-.]*\s*/, "");
    if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track,
            artist: albums[currentAlbumIndex].artist,
            album: albums[currentAlbumIndex].album,
            artwork: [{ src: imagealbum, sizes: "96x96", type: "image/webp",},
                { src: imagealbum, sizes: "128x128",type: "image/webp",},
                { src: imagealbum, sizes: "192x192", type: "image/webp",},
                { src: imagealbum, sizes: "256x256", type: "image/webp",},
                { src: imagealbum, sizes: "384x384", type: "image/webp", },
                { src: imagealbum, sizes: "512x512", type: "image/webp", },
            ],
        });
        navigator.mediaSession.setActionHandler("play", () => {
            playPause();
        });
        navigator.mediaSession.setActionHandler("pause", () => {
            playPause();
        });
        navigator.mediaSession.setActionHandler("seekto", (details) => {
            if (details && details.seekTime !== undefined) {
                if (details.fastSeek && 'fastSeek' in audio) {
                    audio.fastSeek(details.seekTime);
                } else {
                    audio.currentTime = details.seekTime;
                }
            } else {
                console.error("Invalid or missing details for seekto operation");
            }
        });
        navigator.mediaSession.setActionHandler("previoustrack", () => {
            previousTrack();
        });
        navigator.mediaSession.setActionHandler("nexttrack", () => {
            skipTrack();
        });
    }
}

// search function

function searchfunction() {
    const input = document.getElementById('myInput').value.toLowerCase();
    const listHolder = document.querySelector('#list-holder');
    listHolder.innerHTML = "";
        
for (let i = 0; i < albums.length; i++) {
    const obj = albums[i];
    const albumName = obj.album.toLowerCase();
    const artistName = obj.artist.toLowerCase();
    fetchDatabaseImages(i)
if (albumName.includes(input) || artistName.includes(input)) {
    const div = document.createElement('div');
    const imagealbum = document.createElement('img');
    const listitem = document.createElement('li');
    const label = document.createElement('span');
    const label2 = document.createElement('span');
    const br = document.createElement('br');
    
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + obj.image

    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);

        const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const rgbColor = `rgb(${red},${green},${blue})`;
        const textContrastColor = getContrastColor(rgbColor);

        label2.style.color = textContrastColor;
        label.style.color = textContrastColor;
        div.style.backgroundColor = rgbColor;
        
    };

    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.width = "200px";
    div.style.height = "270px"
    div.style.maxHeight = "300px"; // Set maximum height
    div.style.overflow = "hidden"; // or "hidden" if you don't want scrollbars
    div.style.borderRadius = "10px";
    div.style.display = "inline-block";
    
    imagealbum.style.borderRadius = "5px";
    imagealbum.style.width = "200px";
    imagealbum.style.height = "200px";
    
    label2.style.color = "grey";
    label.style.color = "white";
    
    label.style.fontSize = "1em";
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    
    label.textContent = `${obj.album}`;
    label2.textContent = `${obj.artist}`;
    listitem.style.paddingTop = "10px"
    div.appendChild(imagealbum);
    div.appendChild(br); // Add a line break if needed
    div.appendChild(label);
    div.appendChild(label2);
    
    // Append the div to the document or another parent element
    

    div.addEventListener('click', function() {
        document.getElementById('searching').style.display = "none"
        albumpage(i)
    });
    imagealbum.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + obj.image;
    listitem.appendChild(label);
    listitem.appendChild(br)
    listitem.appendChild(label2);
    div.appendChild(imagealbum);
    div.appendChild(listitem);
    div.appendChild(document.createElement('br'));
    listHolder.appendChild(div);
}
}
}
function albumpage(i) {
    fetchDatabaseImages(i)
    const albumpagd = document.getElementById("albumpage")
    const nameap = document.getElementById("h2ap")
    const porfileart = document.getElementById("imageap") 
    const artistalbul = document.getElementById("artistalbul");
    const tracklist = document.getElementById("trackalbumpg")
    tracklist.innerHTML = ""
    artistalbul.textContent = albums[i].artist;
    albumpagd.style.display = "block";
    nameap.textContent = `${albums[i].album}`;
    porfileart.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + albums[i].image
    var tn = albums[i].folder;
    for (let ij = 0;ij < audioTracks[tn].length; ij++ ) {
        // alert(audioTracks[tn][ij])
            trackname = audioTracks[tn][ij].replace(".mp3", "");
            trackname = trackname.replace(/^\d+\s*[-.]*\s*/, "");
        const p = document.createElement("p");
        p.innerHTML = trackname;
        p.addEventListener("click", function() {
            currentTrackIndex = ij;
            currentAlbum = tn;
            currentAlbumIndex = i;
            loadTrack();
            audio.play();
        });
        tracklist.appendChild(p);
    }
}   