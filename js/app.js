function mySentence() {
//list out the words
var arrOne = ["Sociologists say", "Sociologists study", "Sociologist steps down over", "Sociologist discovers", "Sociologist proposes theory of", "Sociologist requests", "Sociologist aspires toward", "Sociologist forced out of Yale due to", "Sociologist radically redefines", "Sociologist stages protest over", "Sociologist is, like, whatever due to", "Sociologist gets super emo over", "Sociologist runs marathon in response to", "Sociologist faces allegations regarding", "Sociologist drops out over", "Sociologist escapes from", "Sociologist vanishes after", "Sociologists notice", "Sociologists yawn at", "Sociologists sniffle at", "Sociologists unite over", "Sociologists rejoyce following", "Sociologist enjoys", "Sociologists doubt", "Sociologist causes", "Sociologists adapt to", "Sociologists bless", "Sociologist calculates", "Sociologists destroy", "Sociologist confesses to", "Sociologists facilitate", "Sociologists hypothesize about", "Sociologist admits secret love of", "Sociologists itching to investigate", "Sociologists peep", "Sociologist mourns"]
var arrTwo = ["more", "bigger", "smaller", "easier", "illegitimate", "fabricated", "comparative", "comprehensive", "cultural", "race-based", "incoherent", "illogical", "empirical", "systemic", "false", "inhumane", "contradictory", "absurd", "discordant", "vaguely familiar", "fatally flawed", "problematic", "doubly problematic", "feminist", "imperialist", "Jungian", "marginalized", "Marxist", "mythical", "postmodern", "contextual", "salient", "hierarchical", "probable", "further", "abortive", "axiomatic", "enduring", "present", "extant", "non-trivial", "recursive", "instructive", "unsafe"]
var arrThree = ["things like", "examples of", "instances of", "reports about", "data on", "R plots", "endless lists of", "sheafs of", "mountains of", "oceans of", "opportunities for", "cases of", "need for", "desire for", "PowerPoint about", "obsession over", "so-called 'deadline' regarding", "ideas about", "plans for", "drawings of", "meeting about", "active listening regarding", "false sincerity in the matter of", "coordinated t-shirts regarding", "#hashtags about", "tumblr about", "instagram about", "cellphone video of", "underground zine about", "chanted slogans of", "fixation on", "movement about", "pitchfork weilding"]
var arrFour = ["capitalist", "hypocritacal", "Euro-centric", "contextual", "asexual", "pan-sexual", "self-referrential", "deeply aware", "post-racial", "culturally insensitive", "patriarchical", "bicultural", "phallo-centric", "oppresive", "implicit", "structural", "cis-gendered", "gendered", "racialized", "dramatic", "OCD", "plaintive", "tone deaf", "little violin playing", "!@#$^", "bravely honest", "lost cause", "protest", "quixotic", "obsidian", "priviliged", "heartbreaking", "gut-wrenching", "broke ass", "medicinal", "cathartic", "unorthodox", "kosher", "flatulating", "mind-numbing", "anti-orgasmic", "shameless", "godless", "willfully ignorant", "oblivious"]
var arrFive = ["absolute poverty", "achieved status", "affirmative action", "aggregate", "alienation", "amalgamation", "anomic theory", "anticipatory socialization", "assimilation", "baby boom", "class conflict", "closed system", "cognitive development theory", "cohort", "conflict approach", "conjugal family", "contact hypothesis", "cooptation", "creationism", "cultural capital", "cultural relativism", "dyad", "emotion work", "white narrative", "Asian fetishism", "microagression", "poverty", "urban strife", "redistricting", "stereotyping", "thought violence", "not my job to educate you", "tone policing", "ableism", "trigger", "rape culture", "sounding white", "appropriation", "annexation", "victim blaming", "stepping on legos", "white washing", "homophobia", "slur", "transphobia", "shaming", "fat shaming", "statistics", "outcomes", "covariance", "internalized", "racism", "hugs", "face work", "genocide", "generalized other", "groupthink", "heterosexual", "Hispanics", "incest taboo", "interlocking directorates","\"Me\" portion of the self", "micro level", "random sample", "real values", "resource mobilization theory", "relative poverty", "social control", "angry mob", "gay Mexicans"]
//put them together at random
var num = Math.floor((Math.random() * arrOne.length));
var out = (arrOne[num] + " ");
var num = Math.floor((Math.random() * arrTwo.length));
var out = (out + arrTwo[num] + " ");
var num = Math.floor((Math.random() * arrThree.length));
var out = (out + arrThree[num] + " ");
var num = Math.floor((Math.random() * arrFour.length));
var out = (out + arrFour[num] + " ");
var num = Math.floor((Math.random() * arrFive.length));
var out = (out + arrFive[num] + " ");

//output
$(".my-output").append(
$('<p class="typing">' + out + '</p>'));
}


(function theLoop (i) {
	console.log(i);
	mySentence();
  setTimeout(function () {

// the rest of the timeout loop
    if (--i) {          // If i > 0, keep going
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 5000);
})(200);