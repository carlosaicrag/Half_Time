# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#seeding data with users and and their stories 
User.destroy_all
Story.destroy_all


img_files = ["https://halftime-seed-dev.s3-us-west-1.amazonaws.com/Nets+Edge+Knicks+in+First+New+York+Matchup+of+the+Season.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/%E2%80%98Let+the+Viejos+Play%E2%80%99-+In+the+World+Series%2C+Age+Is+an+Asset.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/Rockets+Fall+in+the+Premiere+of+a+Reunited+Harden+and+Westbrook.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/Nate+Diaz+Passed+Drug+Test+and+Can+Fight+Next+Week%2C+U.F.C.+Says.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/Deandre+Ayton+Suspended+25+Games+for+Failed+Drug+Test.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/Raptors+Open+Championship+Defense+With+a+Win+Over+the+Pelicans.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/New+Orleans+Is+Ready+to+Love+Zion+Williamson%2C+Even+if+It+Has+to+Wait.jpg",
"https://halftime-seed-dev.s3-us-west-1.amazonaws.com/The+Center+of+the+N.B.A.+Universe+Moves+to+Los+Angeles.jpg"
]

# default_photo = "https://halftime-seed-dev.s3-us-west-1.amazonaws.com/default-profile-picture-gmail-2.png"

demo_user = User.create!(username:Faker::Name.unique.name,email:"demo user",password:"password")
# demo_file = open(default_photo)
# demo_user.photo.attach(io: demo_file, filename:"default_img0.png")

# (1...10).each do |num|
#     user = User.create!(username:Faker::Name.unique.name,email:Faker::Internet.unique.email,password:"password")
#     file1 = open(default_photo)
#     user.photo.attach(io: file1, filename:"default_img#{num}.png")
#     story = Story.create!(title:Faker::Lorem.unique.sentence,body:Faker::Lorem.paragraph(1000), author_id:user.id)
#     file2 = open(img_files.shift)
#     story.photo.attach(io: file2, filename:"img_#{num}.jpg")
# end

user1 = User.create!(username:"Sopan Deb",email:Faker::Internet.unique.email,password:"password")
user2 = User.create!(username:"James Wagner",email:Faker::Internet.unique.email,password:"password")
user3 = User.create!(username:"Marc Stein",email:Faker::Internet.unique.email,password:"password")
user4 = User.create!(username:"John Branch",email:Faker::Internet.unique.email,password:"password")
user5 = User.create!(username:"Benjamin Hoffman",email:Faker::Internet.unique.email,password:"password")
# user6 = User.create!(username:"Marc Stein",email:Faker::Internet.unique.email,password:"password")
user7 = User.create!(username:"Jeré Longman",email:Faker::Internet.unique.email,password:"password")
# user8 = User.create!(username:Faker::Name.unique.name,email:Faker::Internet.unique.email,password:"password")
# user9 = User.create!(username:Faker::Name.unique.name,email:Faker::Internet.unique.email,password:"password")
# user10 = User.create!(username:Faker::Name.unique.name,email:Faker::Internet.unique.email,password:"password")

story1 = Story.create!(
    title:"Nets Edge Knicks in First New York Matchup of the Season",
    body:"In the season’s first installment of the N.B.A.’s answer to the Subway Series, the Nets held off the Knicks, 113-109, on Friday night.

Kyrie Irving didn’t score 50 points, as he had in Brooklyn’s season opener against the Minnesota Timberwolves, but he had plenty of help from his teammates — four of whom reached double figures in scoring — as the Nets picked up their first win of the Irving era.

Spencer Dinwiddie chipped in 20 points off the bench, while Joe Harris scored 13, Caris LeVert 12 and Taurean Prince 11. The second-year forward Rodions Kurucs contributed 9 more off the bench.

Not that Irving let his teammates slice through a porous Knicks defense all by themselves: Though he struggled from the field, he led the team with 26 points, shooting 8 for 19. He hit two 3-pointers in the final two minutes to save the Nets from what would have been a second straight home loss at the start of a season with steep expectations.

The Nets (1-1) dominated much of the game, leading by as many as 19 points in the second half. The Knicks (0-2) whittled the lead down in the fourth quarter — and eventually took it for themselves as the Nets went cold.

The game, though, was ultimately a measure of where the two teams stand in the N.B.A. hierarchy. One had a bona fide star, depth to back him up and a clear sense of direction. The other team was the Knicks.

There were plenty of Knicks fans in the Barclays Center stands, showing how much farther the Nets have to go to wrest the basketball affections of New York City fans. But Nets supporters taunted the Manhattan loyalists all night, with chants like “You are jealous!” and “You’ve got Dolan!” — a reference to the Knicks owner James Dolan, who is unpopular among much of the team’s fans.

Both teams had promising prospects making contributions on the floor, but the Knicks began the game with their rotation already shuffled for Game 2 of the season, with Elfrid Payton getting the start at point guard in place of Allonzo Trier.

And while Irving, the Nets’ star from free agency, hit multiple key shots in the fourth quarter, the Knicks’ top signing, Julius Randle, struggled the entire game, shooting 5 of 15 from the field and scoring 14 points. He also lost the ball out of bounds with 11 seconds — and a chance to tie the game — remaining.

The Knicks frequently looked disorganized. After Prince hit a 3-pointer on one of the first possessions of the second half for the Nets, Knicks Coach David Fizdale immediately called a timeout. The half was barely 30 seconds old.

A minute later, Prince hit another 3, pushing the lead to 19. But the Knicks’ 3-point shooting — 17 for 25 — brought them back into the fray. Wayne Ellington hit two straight from outside with about three and a half minutes left to give the Knicks a 1-point lead, and R.J. Barrett’s layup pushed it to 3 points, their biggest of the night.

In the end they had to settle for the consoling sight of strong performances from some of the young players who might be part of the Knicks’ core for years.

Trier, bouncing back from a disappointing opening night, scored 22 points off the bench on only seven shots. Kevin Knox, who had an inconsistent rookie year, added 16 points on eight shots, also off the bench. And Barrett, the team’s top draft pick, scored 16 points and had six steals as a starter, while showing poise down the stretch as the Knicks made their comeback.
", 
    author_id:user1.id)
file1 = open(img_files.shift)
story1.photo.attach(io: file1, filename:"img_#{1}.jpg")

story2 = Story.create!(
    title:"‘Let the Viejos Play’: In the World Series, Age Is an Asset",
    body:"HOUSTON — There is a nickname that the more experienced players on the Washington Nationals use to describe themselves: Los Viejos. In Spanish, it means the Old Ones.

The main inspiration was Fernando Rodney, the 42-year-old reliever in his 17th year in the major leagues. But it was infielder Howie Kendrick (36), first baseman Ryan Zimmerman (35) and catcher Kurt Suzuki (36) who started using the term liberally throughout the season.

The Nationals have plenty of viejos, which, by modern baseball standards, is probably anyone over 30. And whenever any of them make a good play in a game, they compliment each other with a salute of, “Hey viejo, nice job.”

“Our slogan is: Let the viejos play,” said the 33-year-old closer Sean Doolittle, a twist on M.L.B.’s “Let the Kids Play” marketing campaign.
Major league clubs are increasingly relying on younger, cheaper players to fill their rosters and shying away from spending top dollar in the free agent market beyond superstars. Analytics-driven front offices have become more wary of aging players’ production dropping off since performance-enhancing drug testing began. Executives covet players’ years of franchise control and brag about amassing it.

But this World Series between the Houston Astros and Nationals has served as a reminder of the power of experience. Although they possess one of the sport’s brightest young stars in Juan Soto (who turns 21 on Friday), the Nationals’ 40-man regular season roster had an average age of 30.9, the oldest in the major leagues. In third place: the Astros, at 29.7.

“Veteran leadership and experience on the baseball field is something that you can’t quantify and can’t put a number to it,” said star pitcher Justin Verlander, who is enjoying a late-career renaissance and is the oldest player on the Astros’ roster. “So in the current state of baseball, if you can’t put a number on it, they don’t want to value it and they don’t want to pay you for it. I would hope the last couple years would show something to it.”

Verlander hinted at an underlying tension. The free-agent market has shifted substantially the past few off-seasons, as teams have become more leery about handing out lengthy contracts to older players. Several over 30 found it difficult to even land jobs, some settling for minor-league contracts.

A related problem in players’ eyes: If they are no longer going to be valued for their past performances in free agency, the younger ones making the league minimum ($555,000 in 2019) should earn more. Players are not eligible for salary arbitration generally until after their third season and free agency until after six.

“Then put it on the front end when you’ve got Breggie going for M.V.P., or Yordan coming up and creating more value than the league minimum,” said Astros reliever Joe Smith, 35, referring to his teammates third baseman Alex Bregman, 25, and designated hitter Yordan Alvarez, 22, a front-runner for the American League Rookie of the Year Award.

That economic structure will be a point of contention in labor negotiations, as the current collective bargaining agreement expires after the 2021 season. But beyond earnings, performance ultimately matters, too.

While younger players are generally more athletic, they can lack experience on how best to apply it. As Smith put it: “It’s easy to get here, it’s hard to stay.”

The average major league career lasts roughly four years, and Tony Clark, the executive director of the players’ union, said it takes all sorts of adjustments to hang around that long and more — from learning to hit breaking balls to fine-tuning training habits for a six-month regular season. He said the “symbiotic chain” between veteran and novice players had been eroded.

“Veteran players can help shorten learning curves,” Clark said earlier this year. “The effect we’re seeing now by more and more of the veteran guys being moved out is a young group of players that are learning on the fly. That’s challenging.”

Seven of the 10 oldest teams in the major leagues made the postseason this year, which isn’t a shock since contending teams usually move to supplement youthful cores with free-agent veterans. The youngest teams to reach the playoffs this season — the Tampa Bay Rays (28), Oakland Athletics (27.9) and Minnesota Twins (27.8) — are in the bottom half of M.L.B.’s payroll rankings. The youngest teams in baseball — the San Diego Padres (25.8) were the youngest, and finished 70-92 — were rebuilding and had shed most of their more experienced, better-paid players.

Many players on the Astros, one of the most unapologetically analytics-driven teams, said they would not have won the 2017 World Series without Carlos Beltran, a designated hitter who was 40 at the time and hit .231 with 14 home runs, and Brian McCann, a catcher who was 33 and hit .241 with 18 home runs. Their production wasn’t commensurate with their combined salaries of $33 million, but they still added value.

Beltran, who retired after that season, helped young hitters learn to game plan against opposing pitches, while McCann, who retired after two seasons later, mentored young pitchers.

“It felt like a winning atmosphere,” said Astros shortstop Carlos Correa, now 25.

“They gave us a lot of confidence and made us believe that we were the best team out there and had to compete like it,” Correa continued. “Having veterans on the team is huge. It helped the younger guys set the tone, and to speak when they had to speak in meetings or when the team is not playing good.”

The Nationals saw that firsthand this season. In late May, when they sat at 19-31, it was difficult to imagine them making the playoffs, let alone being up two games to none in the World Series against the juggernaut Astros.

But midseason acquisitions like outfielder Gerardo Parra, 32, and Rodney helped settle the team. Nationals General Manager Mike Rizzo said Rodney was a pseudo-coach to young relievers since his arrival, while Kendrick was the same for hitters.

“That’s a big help,” Rizzo said. “But bottom line: They’ve got to be able to play. If you can’t play, they’re not here just for their personality.”

Parra and Rodney contributed in their limited roles, and Kendrick had a big impact: His .344 average and .966 on-base-plus-slugging-percentages in 121 regular season games were the best marks of his career. He was the M.V.P. of the National League Championship Series sweep over the St. Louis Cardinals.

It has been the best postseason of Kendrick’s career, and past experience has certainly helped in October. James Paxton, a Yankees starter with parts of seven major-league seasons under his belt, said he couldn’t feel his body when he made his first career postseason start this month and pitched unevenly. (He was much improved by his third outing.)

“I like a veteran presence, but especially when it’s combined with a really good young core,” said Rizzo, who has one in outfielder Victor Robles (22), shortstop Trea Turner (26), third baseman Anthon Rendon (29) and Soto.

The Nationals’ average age, though, is a tad skewed because of Rodney. He has been around so long that one of his former teammates is in the other dugout during the World Series, but not playing: Astros Manager A.J. Hinch, 42, who was Rodney’s catcher while the two were on the 2003 Detroit Tigers. Hinch was stunned but proud that Rodney, a viejo, was still throwing hard at his age.

“Fernando,” Hinch said at a news conference this week, “if you’re listening, keep playing.”



",
    author_id:user2.id)
file2 = open(img_files.shift)
story2.photo.attach(io: file2, filename:"img_#{2}.jpg")

story3 = Story.create!(
    title:"Rockets Fall in the Premiere of a Reunited Harden and Westbrook",
    body:"HOUSTON — After a lengthy silence, the Houston Rockets general manager, Daryl Morey, became an active social media user again on Thursday. He posted multiple promotional messages about his team on Twitter hours before its season opener against the Milwaukee Bucks.

Morey then watched the bulk of the game from the Rockets’ video room at Toyota Center — as he usually does — and was treated to an uneven and ultimately disappointing performance from his new star pairing of James Harden and Russell Westbrook. Hoping for a statement victory over an Eastern Conference power and to finally inch away from the October tension this franchise has endured, Houston played at a faster pace than it did last season but proved unable to finish off the Bucks — even after the Milwaukee star Giannis Antetokounmpo fouled out.

Neither Harden nor Westbrook shot the ball well in Milwaukee’s 117-111 triumph, combining to make just nine of 30 shots from the field. Worse yet, Houston squandered a 16-point lead, then failed to take advantage after Antetokounmpo picked up his sixth foul with 5 minutes 18 seconds to play.

Westbrook led the Rockets with 24 points — 16 coming in the final quarter — but Harden shot 2-for-13 from the field and Houston guard Eric Gordon shot 4-for-19. Antetokounmpo posted a triple-double before exiting (30 points, 13 rebounds and 11 assists), then watched from the bench as Ersan Ilyasova (who scored 9 of his 13 points in the final quarter) and Brook Lopez (whose 11 points all came in the fourth quarter) carried the Bucks’ offense in crunchtime.

“This one’s on me,” said Harden, who finished with 19 points and 14 assists but missed seven of his eight 3-point attempts.

“We’ll figure it out,” Westbrook insisted.

The start of this second marriage for the Harden-Westbrook tandem, reunited for the first time since the Oklahoma City Thunder traded Harden to Houston in October 2012, drew a sellout crowd of 18,055. That included several fans wearing T-shirts and toting signs with pro-Hong Kong slogans, including a large group behind one basket in shirts bearing the messages “Fight for Freedom” and “China, Stop Bullying.”

On Oct. 4, Morey posted a tweet in support of pro-democracy protesters in Hong Kong, then quickly deleted it. He posted two more tweets on Oct. 6 trying to clarify his stance, then went dark on social media until opening night arrived for the remade Rockets.

The initial tweet created a furor in China — where the Rockets have been one of the N.B.A.’s most popular teams since drafting Yao Ming in 2002 — and led to an exodus of Chinese sponsors that has cost the Rockets an estimated $25 million in revenue already this season, according to a person with knowledge of the situation who was not authorized to discuss it publicly.

The N.B.A. commissioner, Adam Silver, has said that, for the league, revenue losses “have already been substantial.”

Morey and the Rockets’ team owner, Tilman Fertitta, met briefly before the game and then proceeded to their customary vantage points. For Fertitta, that was a floor seat at midcourt. Morey, who has spoken often of the extreme anxiety he feels when watching the Rockets play, preferred to stay out of public view.

The Rockets’ marquee personalities, however, did their utmost to drag the focus back to basketball — and all the hoopla that goes with it in the modern-day N.B.A.

Upholding a promise Harden made on media day in September, before any of the China chaos, the Rockets installed a red carpet to greet players as they entered the building, with a house disc jockey nearby to add music to the mood.

Harden was the first to enter the building, roughly 90 minutes before tipoff. He wore a white Helmut Lang windbreaker with matching pants and sang along to “Time” by Lil Baby (featuring Meek Mill) as he strutted down the hall. Westbrook soon followed in what appeared to be an off-white, one-piece painter’s ensemble.

Amid strains of skepticism around the league about whether two players so accustomed to having the ball in their hands could form an elite partnership at this stage of their careers, Houston’s new star duo clearly looked committed to embracing its shared status as fashion influencers.

On the floor, they had one animated conversation in the first half that set off a different sort of social media frenzy, but Westbrook chided members of the news media afterward for making too much of the incident.

“Don’t deep-dive too much into it,” Westbrook said, adding that “nobody around the world” can “get in between” the bond he and Harden have built “because we’ve had it for too long.”

Unimpressed with his big fourth quarter, as part of a near triple-double which included 16 rebounds and seven assists, Westbrook said he was actually the one who needed to do more to counter the way Milwaukee was swarming Harden defensively.

“That’s why I’m here,” Westbrook said. “To be able to create for him so he doesn’t have to create and do everything.”

The Rockets coach, Mike D’Antoni, likewise isn’t ducking Houston’s outsize expectations — even amid his own uncertain feature. Asked directly before the game if he feels he is sitting on a hot seat after contract extension talks collapsed twice during the off-season, D’Antoni answered candidly.

“You tell me what coach in the N.B.A. is not on the hot seat,” said D’Antoni, who is in the final season of his original four-year Rockets deal. “They’re all on the hot seat. You’re always on it. That’s life. It doesn’t affect me.”
", 
    author_id:user3.id)
file3 = open(img_files.shift)
story3.photo.attach(io: file3, filename:"img_#{3}.jpg")

story4 = Story.create!(
    title:"Nate Diaz Passed Drug Test and Can Fight Next Week, U.F.C. Says",
    body:"A day after Nate Diaz said he would not fight in his upcoming Ultimate Fighting Championship bout at Madison Square Garden because he was told he had tested positive for a banned substance — an allegation that he made public and vehemently denied in a single tweet — officials said he was all clear.

The fight against Jorge Masvidal will go ahead as scheduled on Nov. 2, apparently. It is the main event of a card billed as U.F.C. 244.

“Mr. Diaz has not committed an antidoping policy violation, has not been provisionally suspended and is not subject to any sanctions,” the U.F.C. said in a statement released late Friday.

During a recent random drug test, Diaz was found to have trace amounts of LGD-4033, a selective androgen receptor modulator, which is banned because of its anabolic, muscle-building effects. U.F.C. said that the amounts detected did not reach a minimum threshold for a failed test, and that a lab found that two bottles of a plant-based multivitamin used by Diaz were contaminated with the banned substance.

Diaz, 34, a ferocious fighter whose salty language and frequent criticism of the U.F.C. spurs his popularity, has a habit of creating controversy.

His upset victory over Conor McGregor in 2016 shot him to global attention, but after losing a close rematch with McGregor later that year, Diaz did not fight again for nearly three years. His return in August, with a victory over Anthony Pettis, raised his profile again.

This time, nine days before his next bout, it was a tweet that shook U.F.C.

Diaz told his 1.3 million Twitter followers on Thursday that he would not fight “because they say I tested with elevated levels that they say might be from some tainted supplements.”

He denied taking any sort of steroids — an allegation Diaz often hurls at opponents — and other fighters, including Masvidal, came to his defense.

Diaz alleged that other fighters would keep quiet until after their bout, to collect the payday.

“That’s cheating,” Diaz wrote. “So fight game I’ll see you when I see you.”

The revelation surprised U.F.C., which said Thursday afternoon that it would look into the matter. It took until Friday night for U.F.C. to clear it up.

“There was never a thought in my mind that Nate would cheat,” said the U.F.C. president, Dana White. “And I never doubted for a second that this fight wasn’t going to happen. The team did a great job looking into this, and I’ll see you guys in New York next Saturday.”", 
    author_id:user4.id)
file4 = open(img_files.shift)
story4.photo.attach(io: file4, filename:"img_#{4}.jpg")

story5 = Story.create!(
    title:"Deandre Ayton Suspended 25 Games for Failed Drug Test",
    body:"Deandre Ayton of the Phoenix Suns has been suspended without pay for 25 games for a violation of the terms of the N.B.A.’s drug program, the league announced on Thursday.

Ayton, 21, tested positive for a banned diuretic, according to the league. His suspension is scheduled to begin with tomorrow’s game between the Phoenix Suns and the Denver Nuggets.

The No. 1 pick in the 2018 draft, Ayton made the all-rookie team last year with averages of 16.3 points, 10.3 rebounds and 1.8 assists a game. In Wednesday’s season opener against Sacramento, he played well, collecting 18 points, 11 rebounds and 4 blocks in the Suns’ 124-95 victory.

Ayton, who practiced with the Suns on Thursday and was expected to travel with the team to Denver for Friday’s game, issued a statement about the suspension.

“I want to apologize to my family, the entire Suns organization, my teammates, partners, our fans and the Phoenix community,” he said. “This was an unintentional mistake, and unfortunately I put something in my body that I was completely unaware of.”

Suns General Manager James Jones issued a statement, saying he and Coach Monty Williams are disappointed by Ayton’s actions, which they believe do not uphold the standards of the team.

“His actions are not taken lightly,” Jones said. “We are committed to ensuring that Deandre understands the profound impact it has had on the team, organization, and Suns community.”

Ayton said he would work with the N.B.A. Players Association to go through the arbitration process in search of a “positive resolution,” which would presumably be a reduction in the length of the suspension. If Ayton were to miss all 25 games, it would cost him just over $2 million in salary.

A native of the Bahamas, Ayton played a single season for the University of Arizona before declaring for the draft. He is part of a young core for the Suns that, thanks to the addition of a few key veterans, came into this season with hopes of ending Phoenix’s streak of five losing seasons.", 
    author_id:user5.id)
file5 = open(img_files.shift)
story5.photo.attach(io: file5, filename:"img_#{5}.jpg")

story6 = Story.create!(
    title:"Raptors Open Championship Defense With a Win Over the Pelicans",
    body:"TORONTO — There was no use dwelling on who was not in the building. Not here. On this night, at least, no one at a bouncing Scotiabank Arena seemed to mind that Kawhi Leonard and Zion Williamson were nowhere to be found.

The Toronto Raptors’ rabid fan base coped comfortably without Tuesday’s high-profile absentees, predictably choosing instead to soak in the roller-coaster of a 130-122 overtime victory over the New Orleans Pelicans that followed the unveiling of the first championship banner in the history of the N.B.A.’s lone Canadian franchise.

On opening night of the Raptors’ 25th season, they drew an announced crowd of 20,787 inside, plus an estimated 1,200 fans outside in the nearby public square known as Jurassic Park. It took a comeback from a double-digit deficit, led by Pascal Siakam’s 34 points and 18 rebounds, but the Raptors ultimately managed to scratch out a win that preserved the evening’s celebratory feel.

Mere days after landing a four-year, $130 million contract extension, Siakam hauled Toronto out of a late six-point hole in regulation before fouling out. The undrafted guard Fred Van Vleet added a career-high 34 points, along with seven assists and five rebounds,  including a dagger 3-pointer from the corner with 1 minute 27 seconds remaining in overtime.

Leonard was some 2,500 miles away preparing for his debut with the Los Angeles Clippers later Tuesday, having bolted the Raptors in free agency just weeks after leading them to the championship. Williamson, meanwhile, was stuck in New Orleans after having a knee operation on Monday.

N.B.A. Commissioner Adam Silver nonetheless sounded as eager as the audience to get the pregame ring ceremony started; much of his past two weeks were consumed by the league’s continuing conflict with many of its longtime business partners in China after Daryl Morey, the general manager of the Houston Rockets, posted a tweet supporting Hong Kong’s pro-democracy protesters.

T-shirts with the words “The North Stand With Hong Kong” could be seen among fans in the plaza, but there were no tangible disruptions to the game inside.

It was not the basketball scene league officials hoped for when the schedule was set over the summer. After playing spectacularly in his first N.B.A. preseason, Williamson was “more than shellshocked” to be felled by an injury just before making his official debut, according to a team staff member who was not authorized to discuss the situation publicly. But David Griffin, the New Orleans vice president of basketball operations, said he expected Williamson to make a full recovery and chided those who had suggested that excess weight caused the injury.

“He’s in elite condition, and he stays in elite condition,” Griffin said of Williamson, who is listed at 6-foot-6 and 284 pounds. “He also has a body type that we’re learning how to deal with as a 19-year-old kid.”

“But the notion that this happened somehow because Zion is in poor condition is just asinine,” Griffin continued.

Even without Williamson, who averaged 23.3 points on a remarkable 71.4 percent shooting in four preseason games, New Orleans seized an early 11-point lead. The Pelicans’ reserves also outscored Toronto’s by 57-23, but the hosts escaped in overtime after Norman Powell missed a 3-pointer to win the game at the regulation buzzer.

Asked to describe the emotions of the evening, Nav Bhatia, Toronto’s best-known fan after the rapper Drake, said from his familiar baseline seat that they were “the highest they’ve ever been.”

“Twenty-four years ago, I came to my first game as a Raptors fan,” said Bhatia, who received his own championship ring from the Raptors president of basketball operations, Masai Ujiri, at a halftime news conference. “You dream of it, but now it’s happening in reality. The banner is up. I’m so happy everybody is in celebration mode. This has really brought Canada together.”

As for how much Leonard’s absence detracted from the occasion, Bhatia added: “It doesn’t take away anything. This is a team sport. It’s not golf.”", 
    author_id:user3.id)
file6 = open(img_files.shift)
story6.photo.attach(io: file6, filename:"img_#{6}.jpg")

story7 = Story.create!(
    title:"New Orleans Is Ready to Love Zion Williamson, Even if It Has to Wait",
    body:"NEW ORLEANS — The advice to Zion Williamson came from Saints quarterback Drew Brees. It is passed from athlete to athlete here like an heirloom: “If you love the city of New Orleans, it will love you right back.”

This city throws its arms open to new arrivals, sharing its music, its food, its rich culture. From its athletes it wants something in return: confirmation that they want to be here. Validation that New Orleans punches above its weight, that a small market can hold its own in the big leagues.

“They like to see their athletes doing New Orleans type things — eating beignets, out on Bourbon Street,” said Saints tackle Terron Armstead.

As skilled as forward Anthony Davis was for the N.B.A.’s Pelicans, many fans say that he seemed to be in New Orleans but not of New Orleans. His protracted divorce from the team last season and his departure to seek championships in Los Angeles with LeBron James and the Lakers left many here feeling jilted, a hoops marriage vacated at the altar of competition and finance.

The local embrace is more hopeful for Williamson, 19, who arrived by unlikely chance via the No. 1 pick in the draft lottery and whose teenage charisma, explosive power and agile grace have made him the most anticipated N.B.A. rookie since James joined Cleveland out of high school in 2003.

But the city will have to wait, after the team announced its beloved young star would miss six to eight weeks after undergoing surgery for a torn meniscus in his right knee.

Cleverly, Williamson has associated himself with the sport that people care most about here — football — appearing at games involving the Saints, Tulane and Louisiana State. And he has developed a kind of bromance with Brees, the Super Bowl winner who gave him a framed jersey that said, “To Zion — Passing the torch to you!” For this summer’s ESPY Awards, Brees dressed his three sons in maroon tuxedos almost identical to the one that Williamson wore.

Football’s imprimatur has been more than enough to persuade Pelicans fans. An estimated 10,000 showed up for a public practice. The team has sold more than 12,000 season-ticket packages, a franchise record. Its lone home preseason game drew an announced sellout of 17,954. There were empty seats but no vacant enthusiasm.

“The only thing that would come close for me to what we’re experiencing with Zion would be David Robinson getting out of the Navy and coming to San Antonio,” said Pelicans Coach Alvin Gentry, who was an assistant with the Spurs in the 1989-90 season.

New Orleans is not a place that expects perfection. It is patient and willing to grant second chances. It stuck by the Saints through 20 consecutive nonwinning seasons as an expansion franchise. But just as this city knows how to put out the welcome mat, it knows how to hold a grudge, even if playfully.

After a referee’s blown pass-interference call during the N.F.C. championship game in January probably kept the Saints out of the Super Bowl, the town held a Boycott Bowl parade and concert. Less gleefully, a Saints fan filed a lawsuit against the N.F.L. that reached the state supreme court in Louisiana before being dismissed.

So when Davis asked to be traded, and then was after last season, it was no surprise that feelings were hurt. To hear fans tell it, it was not just that Davis left, but the way he left — wearing a “That’s all folks!” T-shirt to his final game in New Orleans.

“We might be ‘the City that Care Forgot,’ but it’s not that we don’t care,” said Rick Sanchez, a Pelicans season-ticket holder. “You can’t leave us high and dry. You don’t want to be with us, we don’t want to be with you.”

When New Orleans secured the first pick via the N.B.A. draft lottery in May, some in the media surmised that Williamson might try to return to Duke for his sophomore season. But his stepfather, Lee Anderson, felt a small Southern market could be a good fit for Williamson, who grew up in South Carolina, telling ESPN in a radio interview, “We’re excited about the Crescent City down there in New Orleans.”

after the draft in June, Williamson wrote on Twitter, “Dream is finally here, ready to get to work and give the City of New Orleans everything I got.”

He kept his word during the preseason, muscling and whirling inside to hit 12 of 13 shots against the Chicago Bulls, then powering to the basket regularly against Rudy Gobert of Utah, the N.B.A.’s reigning two-time defensive player of the year.

“He’s kind of surprisingly agile; he takes a lot of people off guard because of that,” Gobert said. “He can change direction pretty quick.”

As rookies inevitably do, Williamson needs to take a “big step” to improve his defense, Gentry said. But a feathery 3-pointer against Utah suggested that Williamson may be able to hit jump shots when he cannot get to the rim.

There has been much discussion about whether Williamson could handle the wear and tear of an N.B.A. season while carrying 285 pounds on his 6-foot-6 inch frame. Days before the injury, Gentry said he was unconcerned.

“He’s got 8 percent body fat; we should all be so lucky,” Gentry said. “We’re fine with where he is.”

A City of Big Hopes
New Orleans is a predominantly black city known for transcendent African-American entertainers, but the sporting Mount Rushmore of New Orleans is considered by many fans and experts to only include whites: Brees, Saints Coach Sean Payton, the former Saints quarterback Archie Manning and the New Orleans Jazz star Pete Maravich. Perhaps Chris Paul deserves to be on this list, but feelings about him here have been complicated since he was traded to the Los Angeles Clippers in 2011 after saying he would not sign a contract extension with New Orleans.

Some black fans said it was not important to have a transformative black athlete play in the city. Others said it was. “Anthony Davis had the potential, but he did not embrace New Orleans,” said Edgar Chase III, whose family’s restaurant, Dooky Chase, is a legendary exemplar of Creole cooking.

Chase added: “Now I think Zion has the potential. He’s going about it from the beginning in the right way. He understands the people. He knows us so we can know him.”

the director of African-American and Diaspora Studies at Xavier University here, said it was encouraging to see Williamson interacting with the artist and activist known as Bmike and high school students, most of them black, who are designing an Air Jordan shoe that Williamson will wear in a game.

Turner said he was curious to see whether Williamson, as he matures, develops a sense of social responsibility that could include opening a school as James did in Akron, Ohio, or supporting other initiatives that encourage young black men to further their education.

“Does Zion run that pathway and have that impact in New Orleans? Who knows,” Turner said. “It would be very much welcomed.”

Of course, academics and community leaders acknowledge, that is a lot to ask of a 19-year-old just beginning his professional career. But Williamson said that at some point, he could see himself addressing issues that are urgent in New Orleans in the post-Katrina era, like affordable housing.

“At a certain age, when I’ve learned how to handle myself, of course, and manage my own stuff, yeah, I’m going to get into that a little bit,” he said.

For now, Chase said, it was more than enough for Williamson to excel at basketball.

“Let the man enjoy his life,” he said. “New Orleans needing help will be New Orleans needing help 30 years from now. We’re not asking for his money — we’re asking for his talent, his commitment to the team, to the city. That’s all free. Win a championship, that’s what we want.

“Our community is strong enough to develop its own structures of success, but we don’t have the innate talent to dunk a basketball or shoot a 3-pointer or block a shot that Zion has. We can find the other stuff. We can’t find you, Zion.”", 
    author_id:user7.id)
file7 = open(img_files.shift)
story7.photo.attach(io: file7, filename:"img_#{7}.jpg")

story8 = Story.create!(
    title:"The Center of the N.B.A. Universe Moves to Los Angeles",
    body:"It has been six years since a team other than the Golden State Warriors won the Western Conference, and eight since a team other than the Warriors or the San Antonio Spurs won it, but that appears almost certain to change.

The Los Angeles Clippers added Kawhi Leonard and Paul George to a playoff team, and the Los Angeles Lakers traded for Anthony Davis to complement LeBron James. In a far riskier move, the Houston Rockets reunited James Harden and Russell Westbrook in a backcourt that could be more productive than anything the league has ever seen — or a disaster for both players.

N.B.A. SEASON PREVIEW Are the 76ers poised to take over in the East?
But even after those moves, there is still a sense that the conference, and the N.B.A. in general, is wide open. The stranglehold the Warriors had on the entire league has been released, and in the resulting power vacuum, at least four or five teams have emerged that could easily rise to the top of the West.

PACIFIC DIVISION

Los Angeles Clippers
Key additions: Kawhi Leonard, Paul George, Maurice Harkless

Key subtractions: Danilo Gallinari, Shai Gilgeous-Alexander

Draft: Mfiondu Kabengele (No. 27), Terrance Mann (No. 48)

Everyone knows about Kawhi Leonard (N.B.A. champion, defensive maestro) and Paul George (perennial All-Star, defensive maestro), and there is no question that their joint arrival in Los Angeles this summer instantly vaulted the Clippers into the realm of bona fide contenders.

More often overlooked is that the Clippers did not need to trade away half their roster — cough, Lakers, cough — to attain their two new stars. Consider the players who are returning from the team that went to the playoffs last season, and even pushed the Warriors to six games in a first-round series: Lou Williams, Patrick Beverley, Montrezl Harrell, Landry Shamet.

That is a decent core to build around. George will miss the early part of the schedule as he continues to recover from shoulder surgery, and there are always chemistry questions when new players come to town. But Leonard and George fit the blue-collar, roll-up-your-sleeves attitude that the team came to embrace last season, and it would be a huge surprise if the Clippers do not position themselves as one of the teams to beat in the Western Conference. SCOTT CACCIOLA

Los Angeles Lakers
Key additions: Anthony Davis, Jared Dudley, Danny Green, Dwight Howard, Quinn Cook

Key subtractions: Lonzo Ball, Brandon Ingram, Josh Hart

Draft: None

The Lakers are trying to reboot for the second season of the LeBron James Experience: new coach, new supporting cast and loftier expectations after nearly everything that could have gone wrong last season went wrong.

James, after missing a big chunk of last season with a groin injury, watched the playoffs from home for the first time since the 2004-05 season, when he was a second-year forward with the Cleveland Cavaliers. No one expects the Lakers to finish with another losing record after they (finally) traded for perennial All-Star Anthony Davis over the off-season. They also added some much-needed shooting by signing Danny Green and Jared Dudley.

But the Lakers lack depth — they shipped a fleet of promising young players to the New Orleans Pelicans to acquire Davis — and an injury to one of their front line stars would likely doom their championship aspirations.

Underestimate James at your own peril, though, even at age 34 and even after a preseason full of geopolitical distractions stemming from the team’s recent trip to China. James has a chance to make his mark yet again in a wide-open conference. SCOTT CACCIOLA

Golden State Warriors
Key additions: D’Angelo Russell, Willie Cauley-Stein, Omari Spellman, Glenn Robinson III, Marquese Chriss

Key subtractions: Kevin Durant, Andre Iguodala, Shaun Livingston, DeMarcus Cousins, Quinn Cook, Alfonzo McKinnie, Jordan Bell

Draft: Jordan Poole (No. 28), Alen Smailagic (No. 39), Eric Paschall (No. 41)

After five consecutive trips to the N.B.A. finals and three championships, the Warriors were radically remade through the combination of Kevin Durant leaving for Brooklyn, Andre Iguodala being traded, Shaun Livingston retiring and Klay Thompson being sidelined indefinitely with a torn anterior cruciate ligament in his knee.

The Warriors did their best to salvage the off-season, acquiring D’Angelo Russell, a 23-year-old All-Star point guard, in a sign-and-trade for Durant. But even that move could limit them, as it put them under a hard cap for salaries for the season, meaning the team they have on Day 1 is likely to be the team they have all season, beyond the roster fillers at the end of the bench.

Golden State still has one of the game’s most devastating offensive weapons in Stephen Curry, and its most versatile defender in Draymond Green. When Thompson returns they would be the only team in the N.B.A. that could put a lineup on the floor with four players who had made an All-Star team in the last two seasons. But there is no question that the team’s championship-level defense has been gutted.

Sacramento Kings
Key additions: Dewayne Dedmon, Trevor Ariza

Key subtractions: Willie Cauley-Stein

Draft: Justin James (No. 40), Kyle Guy (No. 55), Vanja Marinkovic (No. 60)

If Coach Luke Walton deploys the offense that most people expect from him, then Buddy Hield, De’Aaron Fox and Bogdan Bogdanovic should all be taking even more shots from 3-point range. The team invested a chunk of change in retaining Harrison Barnes, who is familiar with Walton from their time together in Golden State, but a playoff spot in the West typically requires some defense. Beyond the signing of an aging Trevor Ariza, it’s hard to see how Sacramento plans to improve in that regard.

Phoenix Suns
Key additions: Ricky Rubio, Dario Saric, Frank Kaminsky, Aron Baynes

Key subtractions: T.J. Warren

Draft: Cameron Johnson (No. 11), Ty Jerome (No. 24)

Drafting in the lottery each year means Phoenix gets its fair share of interesting young prospects, but in recent history that hasn’t led to the team getting any better. This year’s roster, however, has some compelling additions. Ricky Rubio is a solid veteran who has experience winning, Dario Saric has had flashes of brilliance, and Aron Baynes adds toughness to a team used to getting beaten up. Even the draft was interesting, as Cameron Johnson is more of a high-end complementary player than a potential superstar, which could make him an ideal fit on the floor with Devin Booker and Deandre Ayton.

NORTHWEST DIVISION

Denver Nuggets
Key addition: Jerami Grant

Draft: Bol Bol (No. 44)

The Nuggets have something almost none of the N.B.A.’s other contenders have: continuity. They are bringing back last year’s starting five, and Nikola Jokic looked like he was only getting better at the FIBA World Cup. They have a few lottery tickets in the forms of Michael Porter Jr., who missed last year because of injury, and Bol Bol, a center who fell in the draft but could provide serious upside if he can keep himself on the court. It’s easy to be taken in by the big names of the Los Angeles teams, but the Nuggets, figuring to get off to a more seamless start, are a threat to finish as the No. 1 seed in the West.

Portland Trail Blazers
Key additions: Pau Gasol, Hassan Whiteside, Kent Bazemore, Mario Hezonja

Key subtractions: Al-Farouq Aminu, Maurice Harkless, Seth Curry, Evan Turner, Enes Kanter, Meyers Leonard and Jake Layman

Draft: Nassir Little (No. 25)

The combination of Damian Lillard and C.J. McCollum makes Portland dangerous every season, and while the Blazers seem intrigued at what they may be able to get on both ends from Hassan Whiteside, it is hard to look at the players who left and the ones who came in and think the team didn’t either tread water or get worse. When you consider what the rest of the teams in the West’s playoff picture did, that could push Portland down into the 8-10 seed range.

Utah Jazz
Key additions: Mike Conley, Bojan Bogdanovic, Jeff Green, Ed Davis, Emmanuel Mudiay

Key subtractions: Ricky Rubio, Derrick Favors, Jae Crowder, Kyle Korver, Grayson Allen

Draft: Jarrell Brantley (No. 50), Justin Wright-Foreman (No. 53), Miye Oni (No. 58)

Apparently sick of being a good but not great team, the Jazz blew things up, surrounding Rudy Gobert and Donovan Mitchell with a series of upgrades. None is larger than Mike Conley, a veteran guard who could simultaneously unlock the best of Mitchell and hit a new level with his own game.

Minnesota Timberwolves
Key additions: Jake Layman, Shabazz Napier, Jordan Bell, Noah Vonleh and Treveon Graham

Key subtractions: Dario Saric, Derrick Rose, Tyus Jones, Anthony Tolliver, Taj Gibson, Luol Deng, Jerryd Bayless

Draft: Jarrett Culver (No. 6), Jaylen Nowell (No. 43)

The Timberwolves don’t inspire a lot of confidence, but the team’s starting lineup is far from terrible. Karl-Anthony Towns is legitimately great, Robert Covington is a beast when healthy, Jarrett Culver is intriguing and Jeff Teague is … fine. The wild card is Andrew Wiggins, who keeps saying he’s going to play up to his draft position and contract but never seems to get there. Minnesota doesn’t figure to be a very good team, but it shouldn’t be awful.

Oklahoma City Thunder
Key additions: Chris Paul, Danilo Gallinari, Shai Gilgeous-Alexander

Key subtractions: Russell Westbrook, Paul George, Jerami Grant

Draft: Darius Bazley (No. 23)

The Thunder’s transaction column this off-season saw a likely Hall of Famer come in and two likely Hall of Famers go out. No one is sure how long Chris Paul will stick around with a team that is reworking itself, but before he pushes too hard for a trade he may want to consider that Oklahoma City has solid young prospects in Shai Gilgeous-Alexander and Darius Bazley and a metric ton of draft picks to get better in the near future. This season may be rough, but as Paul nears the twilight of his career, being around a team of fun youngsters could extend his relevance.

SOUTHEAST DIVISION

Houston Rockets
Key additions: Russell Westbrook, Tyson Chandler, Thabo Sefolosha

Key subtractions: Chris Paul

Draft: None

Well, the Houston Rockets had a quiet summer. It’s not like they blew up their team and made a risky trade for Russell Westbrook, or that the executive who pulled the trigger on that deal unwittingly set off an international incident.

But on to basketball: Whatever the pairing of Westbrook and James Harden will be, it will not be boring. But if it’s going to work, Westbrook needs to be able to hit a respectable amount of jumpers. He’ll likely get a lot of open looks, the most of his career. He can’t shoot 29 percent from out there, otherwise teams will load up on Harden in the paint. The Rockets aren’t deep and just lost Gerald Green to a broken foot for a significant amount of time. If Houston works, it’ll be because Westbrook and Harden jibe: Westbrook’s explosiveness combined with Harden’s isolation dominance will work better than people are predicting. SOPAN DEB

San Antonio Spurs
Key additions: DeMarre Carroll, Trey Lyles

Draft: Luka Samanic (No. 19), Keldon Johnson (No. 29), Quinndary Weatherspoon (No. 49)

Of the West’s playoff teams, San Antonio is the only one that can rival Denver in stability. While that likely does not bring them back to the heights they were reaching just a few years ago, it’s reasonable to expect improvement this season from last, as Dejounte Murray is healthy and Derrick White and Jakob Poeltl are still developing.

New Orleans Pelicans
Key additions: J.J. Redick, Derrick Favors, Lonzo Ball, Brandon Ingram, Josh Hart

Key subtractions: Anthony Davis

Draft: Zion Williamson (No. 1), Jaxson Hayes (No. 8), Nickeil Alexander-Walker (No. 17), Marcos Louzada Silva (No. 35)

Losing Anthony Davis hurts, but a major fact remains: The Pelicans never won anything with him no matter how good the big man was. Given the task of building something entirely new, David Griffin, a general manager with an N.B.A. title on his resume, got lucky by scoring the No. 1 pick and using it on Zion Williamson. The start of Williamson’s career is complicated some by a knee injury that will keep him out at the start of the season — and it’s reasonable to wonder if his weight and violent body movements will be a long-term issue — but Griffin complemented the Williamson pick with two more potential stars in Jaxson Hayes and Nickeil Alexander-Walker. He also gave in to Davis’s trade demand, but not before extracting a king’s ransom from Los Angeles. The Pelicans are still young and raw, but they have everything they need to be great — and it may not take that long for them to get there, provided Williamson’s knee gets back to 100 percent.


Dallas Mavericks
Key additions: Delon Wright, Seth Curry

Key subtractions: Dirk Nowitzki

Draft: Isaiah Roby (No. 45)

Beyond the expected, yet depressing, retirement of Dirk Nowitzki, there wasn’t much movement for Dallas in the transaction column. But the Mavericks should be a far different team with the return from injury of Kristaps Porzingis and the continued development of Luka Doncic, last season’s Rookie of the Year Award winner. Dallas will go as far as that pair takes it, and while it won’t be instant, it’s easy to see why the Mavericks made a series of painful moves to get to this place.

Memphis Grizzlies
Key additions: Jae Crowder, Tyus Jones, Andre Iguodala

Key subtractions: Mike Conley, Justin Holiday

Draft: Ja Morant (No. 2), Brandon Clarke (No. 21)

The Grizzlies admitted enough was enough, and traded away Mike Conley, the last piece of the Grit and Grind era. This team now belongs to Ja Morant and Jaren Jackson. They’ll get some help from veterans like Jonas Valanciunas and Jae Crowder, but there will probably be a lot more sinking than swimming, at least in the early going.", 
    author_id:user5.id)
file8 = open(img_files.shift)
story8.photo.attach(io: file8, filename:"img_#{8}.jpg")

# story9 = Story.create!(
#     title:Faker::Lorem.unique.sentence,
#     body:Faker::Lorem.paragraph(1000), 
#     author_id:user.id)

# story10 = Story.create!(
#     title:Faker::Lorem.unique.sentence,
#     body:Faker::Lorem.paragraph(1000), 
#     author_id:user.id)




