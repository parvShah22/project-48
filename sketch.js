var score =0;
var life =3;
var timer
var win 




function preload(){
  ghost1Img = loadAnimation("ghost1.png")
  ghost2Img = loadAnimation("ghost2.png")
  ghost3Img = loadAnimation("ghost3.png")
  ghost4Img = loadAnimation("ghost4.png")

  blueghostImg = loadAnimation("blueghost.png")

  coinImg = loadAnimation("coin1.png")
  cupImg = loadAnimation("cup.png")

  lifeImg = loadAnimation("life.png")

  go = loadAnimation("gameOver.png")
pacmanUp=loadAnimation("pacmanup.png","pacman.png")
pacmanDown=loadAnimation("pacmandown.png","pacman.png")
pacmanLeft=loadAnimation("pacmanleft.png","pacman.png")
pacmanRight=loadAnimation("pacmanright.png","pacman.png")
wallImg = loadAnimation("wall1.png")
wallImg1 = loadAnimation("wall2.png")
wallcornerImg = loadAnimation("wallcorner1.png")
wallcornerImg1 = loadAnimation("wallcorner.png")
}

function setup() {
  createCanvas(600,500);

  blue1 =createSprite(-490,50)
blue1.scale=0.2
blue1.visible=false

  blue2 =createSprite(-490,50)
  blue2.scale=0.2
  blue2.visible=false

  blue3 =createSprite(-490,50)
  blue3.scale=0.2
  blue3.visible=false

  blue4 =createSprite(-490,50)
  blue4.scale=0.2
  blue4.visible=false

  
  


  coinQ1= createSprite(245,160)
  coinQ1.addAnimation("coin",coinImg)
  coinQ1.scale=0.05
  coinQ1.visible=false
coinQ2= createSprite(245,175)
coinQ2.addAnimation("coin",coinImg)
coinQ2.scale=0.05
coinQ2.visible=false
coinQ3= createSprite(245,190)
coinQ3.addAnimation("coin",coinImg)
coinQ3.scale=0.05
coinQ3.visible=false
coinQ4= createSprite(245,205)
coinQ4.addAnimation("coin",coinImg)
coinQ4.scale=0.05
coinQ4.visible=false
coinQ5= createSprite(245,220)
coinQ5.addAnimation("coin",coinImg)
coinQ5.scale=0.05
coinQ5.visible=false
coinQ6= createSprite(385,160)
coinQ6.addAnimation("coin",coinImg)
coinQ6.scale=0.05
coinQ6.visible=false
coinQ7= createSprite(385,175)
coinQ7.addAnimation("coin",coinImg)
coinQ7.scale=0.05
coinQ7.visible=false
coinQ8= createSprite(385,190)
coinQ8.addAnimation("coin",coinImg)
coinQ8.scale=0.05
coinQ8.visible=false
coinQ9= createSprite(385,205)
coinQ9.addAnimation("coin",coinImg)
coinQ9.scale=0.05
coinQ9.visible=false
coinQ10= createSprite(385,220)
coinQ10.addAnimation("coin",coinImg)
coinQ10.scale=0.05
coinQ10.visible=false
coinQ11= createSprite(220,220)
coinQ11.addAnimation("coin",coinImg)
coinQ11.scale=0.05
coinQ11.visible=false
coinQ12= createSprite(220,85)
coinQ12.addAnimation("coin",coinImg)
coinQ12.scale=0.05
coinQ12.visible=false
coinQ13= createSprite(245,85)
coinQ13.addAnimation("coin",coinImg)
coinQ13.scale=0.05
coinQ13.visible=false
coinQ14= createSprite(280,400)
coinQ14.addAnimation("coin",coinImg)
coinQ14.scale=0.05
coinQ14.visible=false
coinQ15= createSprite(415,175)
coinQ15.addAnimation("coin",coinImg)
coinQ15.scale=0.05
coinQ15.visible=false

coinQ16= createSprite(460,175)
coinQ16.addAnimation("coin",coinImg)
coinQ16.scale=0.05
coinQ16.visible=false

coinQ17= createSprite(460,160)
coinQ17.addAnimation("coin",coinImg)
coinQ17.scale=0.05
coinQ17.visible=false

coinQ18= createSprite(487,175)
coinQ18.addAnimation("coin",coinImg)
coinQ18.scale=0.1
coinQ18.visible=false

coinQ19= createSprite(278,360)
coinQ19.addAnimation("coin",coinImg)
coinQ19.scale=0.05
coinQ19.visible=false

wallQ1 = createSprite(485,107)
wallQ1.addAnimation("wall",wallImg)
wallQ1.scale=0.3
wallQ1.visible=false

wallQ2 = createSprite(415,115)
wallQ2.addAnimation("wall",wallImg1)
wallQ2.scale=0.3
wallQ2.visible=false

wallQ3 = createSprite(435,60)
wallQ3.addAnimation("wall",wallImg)
wallQ3.scale=0.3
wallQ3.visible=false

wallQ4 = createSprite(350,70)
wallQ4.addAnimation("wall",wallImg1)
wallQ4.scale=0.3
wallQ4.visible=false

wallQ5 = createSprite(355,230)
wallQ5.addAnimation("wall",wallImg)
wallQ5.scale=0.3
wallQ5.visible=false

wallQ6 = createSprite(210,210)
wallQ6.addAnimation("wall",wallImg1)
wallQ6.scale=0.3
wallQ6.visible=false

wallQ7 = createSprite(235,360)
wallQ7.addAnimation("wall",wallImg)
wallQ7.scale=0.3
wallQ7.visible=false













// coins

// booster coin
coinboost1 = createSprite(115,40)
coinboost1.addAnimation("coin",coinImg)
coinboost1.scale=0.1

coin1 = createSprite(115,55)
coin1.addAnimation("coin",coinImg)
coin1.scale=0.05


coin2= createSprite(115,70)
coin2.addAnimation("coin",coinImg)
coin2.scale=0.05

coin3= createSprite(115,85)
coin3.addAnimation("coin",coinImg)
coin3.scale=0.05

coin4= createSprite(115,100)
coin4.addAnimation("coin",coinImg)
coin4.scale=0.05

coin5= createSprite(115,115)
coin5.addAnimation("coin",coinImg)
coin5.scale=0.05

coin6= createSprite(115,130)
coin6.addAnimation("coin",coinImg)
coin6.scale=0.05

coin7= createSprite(115,145)
coin7.addAnimation("coin",coinImg)
coin7.scale=0.05

coin8= createSprite(115,160)
coin8.addAnimation("coin",coinImg)
coin8.scale=0.05

coin9= createSprite(115,175)
coin9.addAnimation("coin",coinImg)
coin9.scale=0.05

coin10= createSprite(115,190)
coin10.addAnimation("coin",coinImg)
coin10.scale=0.05

coin11= createSprite(115,205)
coin11.addAnimation("coin",coinImg)
coin11.scale=0.05

coin12= createSprite(115,220)
coin12.addAnimation("coin",coinImg)
coin12.scale=0.05

coin13= createSprite(115,235)
coin13.addAnimation("coin",coinImg)
coin13.scale=0.05

coin14= createSprite(115,250)
coin14.addAnimation("coin",coinImg)
coin14.scale=0.05

coin15= createSprite(115,265)
coin15.addAnimation("coin",coinImg)
coin15.scale=0.05

coin16= createSprite(115,280)
coin16.addAnimation("coin",coinImg)
coin16.scale=0.05

coin17= createSprite(115,295)
coin17.addAnimation("coin",coinImg)
coin17.scale=0.05

coin18= createSprite(115,310)
coin18.addAnimation("coin",coinImg)
coin18.scale=0.05

coin19= createSprite(115,325)
coin19.addAnimation("coin",coinImg)
coin19.scale=0.05

coin20= createSprite(115,340)
coin20.addAnimation("coin",coinImg)
coin20.scale=0.05

coin21= createSprite(115,355)
coin21.addAnimation("coin",coinImg)
coin21.scale=0.05

coin22= createSprite(115,370)
coin22.addAnimation("coin",coinImg)
coin22.scale=0.05

coin23= createSprite(115,385)
coin23.addAnimation("coin",coinImg)
coin23.scale=0.05

coin24= createSprite(115,400)
coin24.addAnimation("coin",coinImg)
coin24.scale=0.05

//hello

coin25= createSprite(130,40)
coin25.addAnimation("coin",coinImg)
coin25.scale=0.05

coin26= createSprite(145,40)
coin26.addAnimation("coin",coinImg)
coin26.scale=0.05

coin27= createSprite(160,40)
coin27.addAnimation("coin",coinImg)
coin27.scale=0.05

coin28= createSprite(175,40)
coin28.addAnimation("coin",coinImg)
coin28.scale=0.05

coin29= createSprite(190,40)
coin29.addAnimation("coin",coinImg)
coin29.scale=0.05

coin30= createSprite(205,40)
coin30.addAnimation("coin",coinImg)
coin30.scale=0.05
//line 1 
coin31= createSprite(220,40)
coin31.addAnimation("coin",coinImg)
coin31.scale=0.05

coin32= createSprite(232,40)
coin32.addAnimation("coin",coinImg)
coin32.scale=0.05
// line 2
coin33= createSprite(245,40)
coin33.addAnimation("coin",coinImg)
coin33.scale=0.05

coin34= createSprite(265,40)
coin34.addAnimation("coin",coinImg)
coin34.scale=0.05

coin35= createSprite(280,40)
coin35.addAnimation("coin",coinImg)
coin35.scale=0.05

coin36= createSprite(295,40)
coin36.addAnimation("coin",coinImg)
coin36.scale=0.05

coin37= createSprite(310,40)
coin37.addAnimation("coin",coinImg)
coin37.scale=0.05

coin38= createSprite(325,40)
coin38.addAnimation("coin",coinImg)
coin38.scale=0.05

coin39= createSprite(340,40)
coin39.addAnimation("coin",coinImg)
coin39.scale=0.05
//line 3
coin40= createSprite(355,40)
coin40.addAnimation("coin",coinImg)
coin40.scale=0.05


coin41= createSprite(370,40)
coin41.addAnimation("coin",coinImg)
coin41.scale=0.05

//line 4
coin42= createSprite(385,40)
coin42.addAnimation("coin",coinImg)
coin42.scale=0.05

coin43= createSprite(400,40)
coin43.addAnimation("coin",coinImg)
coin43.scale=0.05

coin44= createSprite(415,40)
coin44.addAnimation("coin",coinImg)
coin44.scale=0.05

coin45= createSprite(430,40)
coin45.addAnimation("coin",coinImg)
coin45.scale=0.05

coin46= createSprite(445,40)
coin46.addAnimation("coin",coinImg)
coin46.scale=0.05

coin47= createSprite(460,40)
coin47.addAnimation("coin",coinImg)
coin47.scale=0.05

coin48= createSprite(475,40)
coin48.addAnimation("coin",coinImg)
coin48.scale=0.05

coin49= createSprite(487,40)
coin49.addAnimation("coin",coinImg)
coin49.scale=0.05
//hi!

coin50= createSprite(487,55)
coin50.addAnimation("coin",coinImg)
coin50.scale=0.05

coin51= createSprite(487,70)
coin51.addAnimation("coin",coinImg)
coin51.scale=0.05

coin52= createSprite(487,85)
coin52.addAnimation("coin",coinImg)
coin52.scale=0.05

coin53= createSprite(487,100)
coin53.addAnimation("coin",coinImg)
coin53.scale=0.05

coin54= createSprite(487,115)
coin54.addAnimation("coin",coinImg)
coin54.scale=0.05

coin55= createSprite(487,130)
coin55.addAnimation("coin",coinImg)
coin55.scale=0.05

coin56= createSprite(487,145)
coin56.addAnimation("coin",coinImg)
coin56.scale=0.05

coin57= createSprite(487,160)
coin57.addAnimation("coin",coinImg)
coin57.scale=0.05

coin58= createSprite(487,175)
coin58.addAnimation("coin",coinImg)
coin58.scale=0.05

coin59= createSprite(487,190)
coin59.addAnimation("coin",coinImg)
coin59.scale=0.05

coin60= createSprite(487,205)
coin60.addAnimation("coin",coinImg)
coin60.scale=0.05

coin61= createSprite(487,220)
coin61.addAnimation("coin",coinImg)
coin61.scale=0.05

coin62= createSprite(487,235)
coin62.addAnimation("coin",coinImg)
coin62.scale=0.05

coin63= createSprite(487,250)
coin63.addAnimation("coin",coinImg)
coin63.scale=0.05
// booster coin
coinboost4= createSprite(487,265)
coinboost4.addAnimation("coin",coinImg)
coinboost4.scale=0.1

coin65= createSprite(487,280)
coin65.addAnimation("coin",coinImg)
coin65.scale=0.05

coin66= createSprite(487,295)
coin66.addAnimation("coin",coinImg)
coin66.scale=0.05

coin67= createSprite(487,310)
coin67.addAnimation("coin",coinImg)
coin67.scale=0.05

coin68= createSprite(487,325)
coin68.addAnimation("coin",coinImg)
coin68.scale=0.05

coin69= createSprite(487,340)
coin69.addAnimation("coin",coinImg)
coin69.scale=0.05

coin70= createSprite(487,355)
coin70.addAnimation("coin",coinImg)
coin70.scale=0.05

coin71= createSprite(487,370)
coin71.addAnimation("coin",coinImg)
coin71.scale=0.05

coin72= createSprite(487,385)
coin72.addAnimation("coin",coinImg)
coin72.scale=0.05

coin73= createSprite(487,400)
coin73.addAnimation("coin",coinImg)
coin73.scale=0.05
//  :)

// booster coin
coinboost3= createSprite(130,400)
coinboost3.addAnimation("coin",coinImg)
coinboost3.scale=0.1

coin75= createSprite(145,400)
coin75.addAnimation("coin",coinImg)
coin75.scale=0.05

coin76= createSprite(160,400)
coin76.addAnimation("coin",coinImg)
coin76.scale=0.05

coin77= createSprite(175,400)
coin77.addAnimation("coin",coinImg)
coin77.scale=0.05

coin78= createSprite(190,400)
coin78.addAnimation("coin",coinImg)
coin78.scale=0.05

coin79= createSprite(205,400)
coin79.addAnimation("coin",coinImg)
coin79.scale=0.05

coin80= createSprite(220,400)
coin80.addAnimation("coin",coinImg)
coin80.scale=0.05

coin81= createSprite(235,400)
coin81.addAnimation("coin",coinImg)
coin81.scale=0.05

coin82= createSprite(250,400)
coin82.addAnimation("coin",coinImg)
coin82.scale=0.05

coin83= createSprite(265,400)
coin83.addAnimation("coin",coinImg)
coin83.scale=0.05

coin84= createSprite(280,400)
coin84.addAnimation("coin",coinImg)
coin84.scale=0.05


coin85= createSprite(295,400)
coin85.addAnimation("coin",coinImg)
coin85.scale=0.05

coin86= createSprite(310,400)
coin86.addAnimation("coin",coinImg)
coin86.scale=0.05

coin87= createSprite(325,400)
coin87.addAnimation("coin",coinImg)
coin87.scale=0.05

coin88= createSprite(340,400)
coin88.addAnimation("coin",coinImg)
coin88.scale=0.05

coin89= createSprite(355,400)
coin89.addAnimation("coin",coinImg)
coin89.scale=0.05

coin90= createSprite(370,400)
coin90.addAnimation("coin",coinImg)
coin90.scale=0.05

coin91= createSprite(385,400)
coin91.addAnimation("coin",coinImg)
coin91.scale=0.05

coin92= createSprite(400,400)
coin92.addAnimation("coin",coinImg)
coin92.scale=0.05

coin93= createSprite(415,400)
coin93.addAnimation("coin",coinImg)
coin93.scale=0.05

coin94= createSprite(430,400)
coin94.addAnimation("coin",coinImg)
coin94.scale=0.05

coin95= createSprite(445,400)
coin95.addAnimation("coin",coinImg)
coin95.scale=0.05

coin96= createSprite(460,400)
coin96.addAnimation("coin",coinImg)
coin96.scale=0.05

coin97= createSprite(475,400)
coin97.addAnimation("coin",coinImg)
coin97.scale=0.05
//line 1

coin98= createSprite(220,55)
coin98.addAnimation("coin",coinImg)
coin98.scale=0.05

coin99= createSprite(220,70)
coin99.addAnimation("coin",coinImg)
coin99.scale=0.05

coin100= createSprite(220,85)
coin100.addAnimation("coin",coinImg)
coin100.scale=0.05

coin101= createSprite(220,100)
coin101.addAnimation("coin",coinImg)
coin101.scale=0.05

coin102= createSprite(220,115)
coin102.addAnimation("coin",coinImg)
coin102.scale=0.05

coin103= createSprite(220,130)
coin103.addAnimation("coin",coinImg)
coin103.scale=0.05

coin104= createSprite(220,145)
coin104.addAnimation("coin",coinImg)
coin104.scale=0.05

coin105= createSprite(220,160)
coin105.addAnimation("coin",coinImg)
coin105.scale=0.05

coin106= createSprite(220,175)
coin106.addAnimation("coin",coinImg)
coin106.scale=0.05

coin107= createSprite(220,190)
coin107.addAnimation("coin",coinImg)
coin107.scale=0.05

coin108= createSprite(220,205)
coin108.addAnimation("coin",coinImg)
coin108.scale=0.05

coin109= createSprite(220,220)
coin109.addAnimation("coin",coinImg)
coin109.scale=0.05

coin110= createSprite(220,235)
coin110.addAnimation("coin",coinImg)
coin110.scale=0.05

coin111= createSprite(220,250)
coin111.addAnimation("coin",coinImg)
coin111.scale=0.05

coin112= createSprite(220,265)
coin112.addAnimation("coin",coinImg)
coin112.scale=0.05

coin113= createSprite(220,280)
coin113.addAnimation("coin",coinImg)
coin113.scale=0.05

coin114= createSprite(220,295)
coin114.addAnimation("coin",coinImg)
coin114.scale=0.05

coin115= createSprite(220,310)
coin115.addAnimation("coin",coinImg)
coin115.scale=0.05

coin116= createSprite(220,325)
coin116.addAnimation("coin",coinImg)
coin116.scale=0.05

coin117= createSprite(220,340)
coin117.addAnimation("coin",coinImg)
coin117.scale=0.05

coin118= createSprite(220,355)
coin118.addAnimation("coin",coinImg)
coin118.scale=0.05

// line 2
coin119= createSprite(245,55)
coin119.addAnimation("coin",coinImg)
coin119.scale=0.05

coin120= createSprite(245,70)
coin120.addAnimation("coin",coinImg)
coin120.scale=0.05

coin121= createSprite(245,85)
coin121.addAnimation("coin",coinImg)
coin121.scale=0.05

coin122= createSprite(245,100)
coin122.addAnimation("coin",coinImg)
coin122.scale=0.05

coin123= createSprite(245,115)
coin123.addAnimation("coin",coinImg)
coin123.scale=0.05

coin124= createSprite(245,130)
coin124.addAnimation("coin",coinImg)
coin124.scale=0.05

coin125= createSprite(245,145)
coin125.addAnimation("coin",coinImg)
coin125.scale=0.05

coin126= createSprite(245,160)
coin126.addAnimation("coin",coinImg)
coin126.scale=0.05

coin127= createSprite(245,175)
coin127.addAnimation("coin",coinImg)
coin127.scale=0.05

coin128= createSprite(245,190)
coin128.addAnimation("coin",coinImg)
coin128.scale=0.05

coin129= createSprite(245,205)
coin129.addAnimation("coin",coinImg)
coin129.scale=0.05

coin130= createSprite(245,220)
coin130.addAnimation("coin",coinImg)
coin130.scale=0.05

coin131= createSprite(245,235)
coin131.addAnimation("coin",coinImg)
coin131.scale=0.05

coin132= createSprite(245,250)
coin132.addAnimation("coin",coinImg)
coin132.scale=0.05

coin133= createSprite(245,265)
coin133.addAnimation("coin",coinImg)
coin133.scale=0.05

coin134= createSprite(245,280)
coin134.addAnimation("coin",coinImg)
coin134.scale=0.05

coin135= createSprite(245,295)
coin135.addAnimation("coin",coinImg)
coin135.scale=0.05

coin136= createSprite(245,310)
coin136.addAnimation("coin",coinImg)
coin136.scale=0.05

coin137= createSprite(245,325)
coin137.addAnimation("coin",coinImg)
coin137.scale=0.05

coin138= createSprite(245,340)
coin138.addAnimation("coin",coinImg)
coin138.scale=0.05

coin139= createSprite(245,355)
coin139.addAnimation("coin",coinImg)
coin139.scale=0.05

// line 3


coin140= createSprite(355,55)
coin140.addAnimation("coin",coinImg)
coin140.scale=0.05

coin141= createSprite(355,70)
coin141.addAnimation("coin",coinImg)
coin141.scale=0.05

coin142= createSprite(355,85)
coin142.addAnimation("coin",coinImg)
coin142.scale=0.05

coin143= createSprite(355,100)
coin143.addAnimation("coin",coinImg)
coin143.scale=0.05

coin144= createSprite(355,115)
coin144.addAnimation("coin",coinImg)
coin144.scale=0.05

coin145= createSprite(355,130)
coin145.addAnimation("coin",coinImg)
coin145.scale=0.05

coin146= createSprite(355,145)
coin146.addAnimation("coin",coinImg)
coin146.scale=0.05

coin147= createSprite(355,160)
coin147.addAnimation("coin",coinImg)
coin147.scale=0.05

coin148= createSprite(355,175)
coin148.addAnimation("coin",coinImg)
coin148.scale=0.05

coin149= createSprite(355,190)
coin149.addAnimation("coin",coinImg)
coin149.scale=0.05

coin150= createSprite(355,205)
coin150.addAnimation("coin",coinImg)
coin150.scale=0.05

coin151= createSprite(355,220)
coin151.addAnimation("coin",coinImg)
coin151.scale=0.05

coin152= createSprite(355,235)
coin152.addAnimation("coin",coinImg)
coin152.scale=0.05

coin153= createSprite(355,250)
coin153.addAnimation("coin",coinImg)
coin153.scale=0.05

coin154= createSprite(355,265)
coin154.addAnimation("coin",coinImg)
coin154.scale=0.05

coin155= createSprite(355,280)
coin155.addAnimation("coin",coinImg)
coin155.scale=0.05

coin156= createSprite(355,295)
coin156.addAnimation("coin",coinImg)
coin156.scale=0.05

coin157= createSprite(355,310)
coin157.addAnimation("coin",coinImg)
coin157.scale=0.05

coin158= createSprite(355,325)
coin158.addAnimation("coin",coinImg)
coin158.scale=0.05

coin159= createSprite(355,340)
coin159.addAnimation("coin",coinImg)
coin159.scale=0.05

coin160= createSprite(355,355)
coin160.addAnimation("coin",coinImg)
coin160.scale=0.05

// line 4

coin161= createSprite(385,55)
coin161.addAnimation("coin",coinImg)
coin161.scale=0.05

coin162= createSprite(385,70)
coin162.addAnimation("coin",coinImg)
coin162.scale=0.05

coin163= createSprite(385,85)
coin163.addAnimation("coin",coinImg)
coin163.scale=0.05

coin164= createSprite(385,100)
coin164.addAnimation("coin",coinImg)
coin164.scale=0.05

coin165= createSprite(385,115)
coin165.addAnimation("coin",coinImg)
coin165.scale=0.05

coin166= createSprite(385,130)
coin166.addAnimation("coin",coinImg)
coin166.scale=0.05

coin167= createSprite(385,145)
coin167.addAnimation("coin",coinImg)
coin167.scale=0.05

coin168= createSprite(385,160)
coin168.addAnimation("coin",coinImg)
coin168.scale=0.05

coin169= createSprite(385,175)
coin169.addAnimation("coin",coinImg)
coin169.scale=0.05

coin170= createSprite(385,190)
coin170.addAnimation("coin",coinImg)
coin170.scale=0.05

coin171= createSprite(385,205)
coin171.addAnimation("coin",coinImg)
coin171.scale=0.05

coin172= createSprite(385,220)
coin172.addAnimation("coin",coinImg)
coin172.scale=0.05

coin173= createSprite(385,235)
coin173.addAnimation("coin",coinImg)
coin173.scale=0.05

coin174= createSprite(385,250)
coin174.addAnimation("coin",coinImg)
coin174.scale=0.05

coin175= createSprite(385,265)
coin175.addAnimation("coin",coinImg)
coin175.scale=0.05

coin176= createSprite(385,280)
coin176.addAnimation("coin",coinImg)
coin176.scale=0.05

coin177= createSprite(385,295)
coin177.addAnimation("coin",coinImg)
coin177.scale=0.05

coin178= createSprite(385,310)
coin178.addAnimation("coin",coinImg)
coin178.scale=0.05

coin179= createSprite(385,325)
coin179.addAnimation("coin",coinImg)
coin179.scale=0.05

coin180= createSprite(385,340)
coin180.addAnimation("coin",coinImg)
coin180.scale=0.05

coin181= createSprite(385,355)
coin181.addAnimation("coin",coinImg)
coin181.scale=0.05

// part 1 (1)

coin182= createSprite(130,125)
coin182.addAnimation("coin",coinImg)
coin182.scale=0.05

// part 1 (2)
coin183= createSprite(152,125)
coin183.addAnimation("coin",coinImg)
coin183.scale=0.05

coin184= createSprite(152,115)
coin184.addAnimation("coin",coinImg)
coin184.scale=0.05

coin185= createSprite(152,100)
coin185.addAnimation("coin",coinImg)
coin185.scale=0.05

coin186= createSprite(152,85)
coin186.addAnimation("coin",coinImg)
coin186.scale=0.05

coin187= createSprite(152,70)
coin187.addAnimation("coin",coinImg)
coin187.scale=0.05




coin188= createSprite(175,72)
coin188.addAnimation("coin",coinImg)
coin188.scale=0.05


coin189= createSprite(190,72)
coin189.addAnimation("coin",coinImg)
coin189.scale=0.05



coin190= createSprite(205,70)
coin190.addAnimation("coin",coinImg)
coin190.scale=0.05

// :)

coin191= createSprite(265,160)
coin191.addAnimation("coin",coinImg)
coin191.scale=0.05

coin192= createSprite(265,175)
coin192.addAnimation("coin",coinImg)
coin192.scale=0.05

coin193= createSprite(265,190)
coin193.addAnimation("coin",coinImg)
coin193.scale=0.05

coin194= createSprite(265,205)
coin194.addAnimation("coin",coinImg)
coin194.scale=0.05

coin195= createSprite(265,220)
coin195.addAnimation("coin",coinImg)
coin195.scale=0.05

//
coin196= createSprite(295,220)
coin196.addAnimation("coin",coinImg)
coin196.scale=0.05

coin197= createSprite(295,160)
coin197.addAnimation("coin",coinImg)
coin197.scale=0.05

coin198= createSprite(295,175)
coin198.addAnimation("coin",coinImg)
coin198.scale=0.05

coin199= createSprite(295,190)
coin199.addAnimation("coin",coinImg)
coin199.scale=0.05

coin200= createSprite(295,205)
coin200.addAnimation("coin",coinImg)
coin200.scale=0.05




// part 2  (1)


coin201= createSprite(265,130)
coin201.addAnimation("coin",coinImg)
coin201.scale=0.05

coin202= createSprite(280,130)
coin202.addAnimation("coin",coinImg)
coin202.scale=0.05

coin203= createSprite(280,115)
coin203.addAnimation("coin",coinImg)
coin203.scale=0.05

coin204= createSprite(280,100)
coin204.addAnimation("coin",coinImg)
coin204.scale=0.05

coin205= createSprite(280,85)
coin205.addAnimation("coin",coinImg)
coin205.scale=0.05

coin206= createSprite(280,70)
coin206.addAnimation("coin",coinImg)
coin206.scale=0.05

coin207= createSprite(300,70)
coin207.addAnimation("coin",coinImg)
coin207.scale=0.05

coin208= createSprite(320,70)
coin208.addAnimation("coin",coinImg)
coin208.scale=0.05

coin209= createSprite(320,85)
coin209.addAnimation("coin",coinImg)
coin209.scale=0.05

coin210= createSprite(320,100)
coin210.addAnimation("coin",coinImg)
coin210.scale=0.05

coin211= createSprite(320,115)
coin211.addAnimation("coin",coinImg)
coin211.scale=0.05

coin212= createSprite(320,130)
coin212.addAnimation("coin",coinImg)
coin212.scale=0.05

coin213= createSprite(320,130)
coin213.addAnimation("coin",coinImg)
coin213.scale=0.05

coin214= createSprite(335,130)
coin214.addAnimation("coin",coinImg)
coin214.scale=0.05

// part 3 (1)

coin215= createSprite(400,70)
coin215.addAnimation("coin",coinImg)
coin215.scale=0.05



coin216= createSprite(415,70)
coin216.addAnimation("coin",coinImg)
coin216.scale=0.05


coin217= createSprite(430,70)
coin217.addAnimation("coin",coinImg)
coin217.scale=0.05


// booster coin
coinboost2= createSprite(445,70)
coinboost2.addAnimation("coin",coinImg)
coinboost2.scale=0.1


coin218= createSprite(445,85)
coin218.addAnimation("coin",coinImg)
coin218.scale=0.05



coin219= createSprite(445,100)
coin219.addAnimation("coin",coinImg)
coin219.scale=0.05



coin220= createSprite(447,115)
coin220.addAnimation("coin",coinImg)
coin220.scale=0.05



coin221= createSprite(445,130)
coin221.addAnimation("coin",coinImg)
coin221.scale=0.05



coin222= createSprite(470,125)
coin222.addAnimation("coin",coinImg)
coin222.scale=0.05


// part 4 (1)


coin223= createSprite(175,160)
coin223.addAnimation("coin",coinImg)
coin223.scale=0.05



coin224= createSprite(175,175)
coin224.addAnimation("coin",coinImg)
coin224.scale=0.05



coin225= createSprite(175,190)
coin225.addAnimation("coin",coinImg)
coin225.scale=0.05



coin226= createSprite(175,205)
coin226.addAnimation("coin",coinImg)
coin226.scale=0.05



coin227= createSprite(175,220)
coin227.addAnimation("coin",coinImg)
coin227.scale=0.05



coin228= createSprite(175,235)
coin228.addAnimation("coin",coinImg)
coin228.scale=0.05



coin229= createSprite(175,250)
coin229.addAnimation("coin",coinImg)
coin229.scale=0.05



coin230= createSprite(175,265)
coin230.addAnimation("coin",coinImg)
coin230.scale=0.05



coin231= createSprite(175,280)
coin231.addAnimation("coin",coinImg)
coin231.scale=0.05



coin232= createSprite(175,295)
coin232.addAnimation("coin",coinImg)
coin232.scale=0.05




coin233= createSprite(175,310)
coin233.addAnimation("coin",coinImg)
coin233.scale=0.05



coin234= createSprite(175,325)
coin234.addAnimation("coin",coinImg)
coin234.scale=0.05



coin235= createSprite(175,340)
coin235.addAnimation("coin",coinImg)
coin235.scale=0.05




coin236= createSprite(175,355)
coin236.addAnimation("coin",coinImg)
coin236.scale=0.05

// part 4 (2)

coin237= createSprite(415,355)
coin237.addAnimation("coin",coinImg)
coin237.scale=0.05

coin238= createSprite(415,355)
coin238.addAnimation("coin",coinImg)
coin238.scale=0.05

coin239= createSprite(415,355)
coin239.addAnimation("coin",coinImg)
coin239.scale=0.05

coin240= createSprite(415,355)
coin240.addAnimation("coin",coinImg)
coin240.scale=0.05

coin241= createSprite(415,355)
coin241.addAnimation("coin",coinImg)
coin241.scale=0.05

coin242= createSprite(415,340)
coin242.addAnimation("coin",coinImg)
coin242.scale=0.05

coin243= createSprite(415,325)
coin243.addAnimation("coin",coinImg)
coin243.scale=0.05

coin244= createSprite(415,310)
coin244.addAnimation("coin",coinImg)
coin244.scale=0.05

coin245= createSprite(415,295)
coin245.addAnimation("coin",coinImg)
coin245.scale=0.05

coin246= createSprite(415,280)
coin246.addAnimation("coin",coinImg)
coin246.scale=0.05

coin247= createSprite(415,265)
coin247.addAnimation("coin",coinImg)
coin247.scale=0.05

coin248= createSprite(415,250)
coin248.addAnimation("coin",coinImg)
coin248.scale=0.05

coin249= createSprite(415,235)
coin249.addAnimation("coin",coinImg)
coin249.scale=0.05

coin250= createSprite(415,220)
coin250.addAnimation("coin",coinImg)
coin250.scale=0.05

coin251= createSprite(415,205)
coin251.addAnimation("coin",coinImg)
coin251.scale=0.05


coin252= createSprite(415,190)
coin252.addAnimation("coin",coinImg)
coin252.scale=0.05


coin253= createSprite(415,175)
coin253.addAnimation("coin",coinImg)
coin253.scale=0.05


coin254= createSprite(415,160)
coin254.addAnimation("coin",coinImg)
coin254.scale=0.05
//
coin255= createSprite(140,190)
coin255.addAnimation("coin",coinImg)
coin255.scale=0.05


coin256= createSprite(140,175)
coin256.addAnimation("coin",coinImg)
coin256.scale=0.05

coin257= createSprite(140,160)
coin257.addAnimation("coin",coinImg)
coin257.scale=0.05





coin259= createSprite(460,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin260= createSprite(460,160)
coin260.addAnimation("coin",coinImg)
coin260.scale=0.05

//
coin261= createSprite(325,220)
coin261.addAnimation("coin",coinImg)
coin261.scale=0.05

coin262= createSprite(325,160)
coin262.addAnimation("coin",coinImg)
coin262.scale=0.05

coin263= createSprite(325,175)
coin263.addAnimation("coin",coinImg)
coin263.scale=0.05

coin264= createSprite(325,190)
coin264.addAnimation("coin",coinImg)
coin264.scale=0.05

coin265= createSprite(325,205)
coin265.addAnimation("coin",coinImg)
coin265.scale=0.05
// part 5(1)
coin266= createSprite(320,260)
coin266.addAnimation("coin",coinImg)
coin266.scale=0.05

coin267= createSprite(320,280)
coin267.addAnimation("coin",coinImg)
coin267.scale=0.05

coin268= createSprite(320,300)
coin268.addAnimation("coin",coinImg)
coin268.scale=0.05

coin269= createSprite(320,320)
coin269.addAnimation("coin",coinImg)
coin269.scale=0.05

coin270= createSprite(320,340)
coin270.addAnimation("coin",coinImg)
coin270.scale=0.05

coin271= createSprite(320,360)
coin271.addAnimation("coin",coinImg)
coin271.scale=0.05

coin272= createSprite(320,380)
coin272.addAnimation("coin",coinImg)
coin272.scale=0.05

//part 5 (2)


coin273= createSprite(280,260)
coin273.addAnimation("coin",coinImg)
coin273.scale=0.05

coin274= createSprite(280,280)
coin274.addAnimation("coin",coinImg)
coin274.scale=0.05

coin275= createSprite(280,300)
coin275.addAnimation("coin",coinImg)
coin275.scale=0.05

coin276= createSprite(280,320)
coin276.addAnimation("coin",coinImg)
coin276.scale=0.05

coin277= createSprite(280,340)
coin277.addAnimation("coin",coinImg)
coin277.scale=0.05

coin278= createSprite(280,360)
coin278.addAnimation("coin",coinImg)
coin278.scale=0.05

coin279= createSprite(280,380)
coin279.addAnimation("coin",coinImg)
coin279.scale=0.05



pacman= createSprite(20, 120);
pacman.addAnimation("right",pacmanRight)
pacman.addAnimation("left",pacmanLeft)
pacman.addAnimation("down",pacmanDown)
pacman.addAnimation("up",pacmanUp)

pacman.scale=0.2



life1 =createSprite(200,460)
life1.addAnimation("life",lifeImg)
life1.scale=0.4

life2 =createSprite(300,460)
life2.addAnimation("life",lifeImg)
life2.scale=0.4

life3 =createSprite(400,460)
life3.addAnimation("life",lifeImg)
life3.scale=0.4


wall1 = createSprite(190,17)
wall1.addAnimation("wall",wallImg)

wall2 = createSprite(95,60)
wall2.addAnimation("wall1",wallImg1)


wall3 = createSprite(505,60)
wall3.addAnimation("wall1",wallImg1)

wall4 = createSprite(280,17)
wall4.addAnimation("wall",wallImg)

wall5 = createSprite(370,17)
wall5.addAnimation("wall",wallImg)

wall6 = createSprite(460,17)
wall6.addAnimation("wall",wallImg)


wall7 = createSprite(140,17)
wall7.addAnimation("wall",wallImg)



wall8 = createSprite(550,105)
wall8.addAnimation("wall",wallImg)

wall9 = createSprite(550,140)
wall9.addAnimation("wall",wallImg)


wall10 = createSprite(130,80)
wall10.addAnimation("wall1",wallImg1)
wall10.scale=0.6

wall11 = createSprite(165,50)
wall11.addAnimation("wall1",wallImg)
wall11.scale=0.8

wall12 = createSprite(260,80)
wall12.addAnimation("wall1",wallImg1)
wall12.scale=0.6

wall13 = createSprite(300,50)
wall13.addAnimation("wall1",wallImg)
wall13.scale=0.9



wall14 = createSprite(340,80)
wall14.addAnimation("wall1",wallImg1)
wall14.scale=0.6

wall15 = createSprite(470,80)
wall15.addAnimation("wall1",wallImg1)
wall15.scale=0.6

wall16 = createSprite(435,50)
wall16.addAnimation("wall1",wallImg)
wall16.scale=0.8

wall17 = createSprite(50,105)
wall17.addAnimation("wall",wallImg)

wall18 = createSprite(50,140)
wall18.addAnimation("wall",wallImg)

wall19= createSprite(305,140)
wall19.addAnimation("wall",wallImg)



wall20 = createSprite(300,113)
wall20.addAnimation("wall",wallImg1)
wall20.scale=0.7


wall21= createSprite(403,145)
wall21.addAnimation("wall",wallImg1)
wall21.scale=1.3


wall22= createSprite(435,140)
wall22.addAnimation("wall",wallImg)
wall22.scale=0.7



wall23= createSprite(195,148)
wall23.addAnimation("wall",wallImg1)
wall23.scale=1.3


wall24= createSprite(165,140)
wall24.addAnimation("wall",wallImg)
wall24.scale=0.7


wall25= createSprite(93,190)
wall25.addAnimation("wall",wallImg1)
wall25.scale=1.1

wall26= createSprite(93,290)
wall26.addAnimation("wall",wallImg1)
wall26.scale=1.1

wall27 = createSprite(50,337)
wall27.addAnimation("wall",wallImg)

wall28= createSprite(507,190)
wall28.addAnimation("wall",wallImg1)
wall28.scale=1.1

wall29= createSprite(507,290)
wall29.addAnimation("wall",wallImg1)
wall29.scale=1.1

wall30 = createSprite(548,337)
wall30.addAnimation("wall",wallImg)
wall30.scale=1.0

wall31 = createSprite(550,372)
wall31.addAnimation("wall",wallImg)

wall32 = createSprite(50,372)
wall32.addAnimation("wall",wallImg)




wall33= createSprite(140,275)
wall33.addAnimation("wall",wallImg1)
wall33.scale=1.4


wall34= createSprite(460,275)
wall34.addAnimation("wall",wallImg1)
wall34.scale=1.4


wall35 = createSprite(260,275)
wall35.addAnimation("wall1",wallImg1)
wall35.scale=0.9

wall36 = createSprite(300,235)
wall36.addAnimation("wall1",wallImg)
wall36.scale=0.9



wall37 = createSprite(340,275)
wall37.addAnimation("wall1",wallImg1)
wall37.scale=0.9


wall38 = createSprite(300,320)
wall38.addAnimation("wall",wallImg1)
wall38.scale=1.2

//wall38.debug=true

wall39 = createSprite(210,372)
wall39.addAnimation("wall",wallImg)
wall39.scale=1.2



wall40= createSprite(205,330)
wall40.addAnimation("wall",wallImg1)
wall40.scale=0.8



wall41 = createSprite(390,372)
wall41.addAnimation("wall",wallImg)
wall41.scale=1.2



wall42= createSprite(395,330)
wall42.addAnimation("wall",wallImg1)
wall42.scale=0.8

wall43= createSprite(95,390)
wall43.addAnimation("wall",wallImg1)
wall43.scale=0.5

wall44= createSprite(500,390)
wall44.addAnimation("wall",wallImg1)
wall44.scale=0.5

wall45 = createSprite(135,417)
wall45.addAnimation("wall",wallImg)
wall45.scale=0.9

wall46 = createSprite(220,417)
wall46.addAnimation("wall",wallImg)
wall46.scale=0.9

wall47 = createSprite(305,417)
wall47.addAnimation("wall",wallImg)
wall47.scale=0.9

wall48 = createSprite(390,417)
wall48.addAnimation("wall",wallImg)
wall48.scale=0.9

wall49 = createSprite(460,417)
wall49.addAnimation("wall",wallImg)
wall49.scale=0.9

wallQ = createSprite(485,410)
wallQ.addAnimation("wall",wallImg)
wallQ.scale=0.3
wallQ.visible=false




// create ghost
ghost1= createSprite(115,35)
ghost1.addAnimation("ghost",ghost1Img)
ghost1.scale=0.2

ghost2= createSprite(400,35)
ghost2.addAnimation("ghost",ghost2Img)
ghost2.scale=0.2

ghost3= createSprite(280,220)
ghost3.addAnimation("ghost",ghost3Img)
ghost3.scale=0.2

ghost4 =createSprite(180,400)
ghost4.addAnimation("ghost",ghost4Img)
ghost4.scale=0.2


}




function draw() {
  background("black");  
pacmanControl()
pacmancollide()
pacmanLoop()
coinScore()
ghostCollide()
ghostControl()
ghostTime1()
ghostTime2()
ghostTime3()
ghostTime4()

livesHeart()
winner()
textSize(15)
fill("aqua")
text("𝓢𝓬𝓸𝓻𝓮:"+score,510,460)

  drawSprites();
}
function ghostTime1(){
if(pacman.isTouching(coinboost1)){
timer=100
blue1.addAnimation("bg1",blueghostImg)
blue2.addAnimation("bg2",blueghostImg)
blue3.addAnimation("bg3",blueghostImg)
blue4.addAnimation("bg4",blueghostImg)


blue1.x=115
blue1.y=35

blue2.x=400
blue2.y=35

blue3.x=280
blue3.y=220

blue4.x=180
blue4.y=400

ghost1.setVelocity(0,0)
ghost2.setVelocity(0,0)
ghost3.setVelocity(0,0)
ghost4.setVelocity(0,0)

ghost1.x=600
ghost1.y=600

ghost2.x=600
ghost2.y=600

ghost3.x=600
ghost3.y=600

ghost4.x=600
ghost4.y=600

coinboost1.x=600
coinboost1.y=600
coinboost1.visible=false
score=score+60

blue1.visible=true
blue2.visible=true
blue3.visible=true
blue4.visible=true

}
if (blue1.y<=35){
  blue1.velocityX=5
  blue1.velocityY=0

}
if (blue1.x>485){
  blue1.velocityX=0
  blue1.velocityY=5

}
if (blue1.y>395){
  blue1.velocityX=-5
  blue1.velocityY=0

}
if (blue1.isTouching(wall43)){
  blue1.velocityX=0
  blue1.velocityY=-5

}
if (blue2.y<60){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue2.isTouching(wall16)){
  blue2.velocityX=-5
  blue2.velocityY=0

}

if (blue2.isTouching(wall41)){
  blue2.velocityX=-5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ6)){
  blue2.velocityX=-5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ1)){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue2.isTouching(coinQ2)){
  blue2.velocityX=5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ7)){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue2.isTouching(coinQ8)){
  blue2.velocityX=-5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ3)){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue2.isTouching(coinQ4)){
  blue2.velocityX=5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ9)){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue2.isTouching(coinQ10)){
  blue2.velocityX=-5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ5)){
  blue2.velocityX=-5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ11)){
  blue2.velocityX=0
  blue2.velocityY=-5

}
if (blue2.isTouching(coinQ12)){
  blue2.velocityX=5
  blue2.velocityY=0

}
if (blue2.isTouching(coinQ13)){
  blue2.velocityX=0
  blue2.velocityY=5

}
if (blue3.isTouching(wall20)){
  blue3.velocityX=0
  blue3.velocityY=-5

}
if (blue3.y>200){
  blue3.velocityX=-5
  blue3.velocityY=0

}
if (blue3.isTouching(wall33)){
  blue3.velocityX=0
  blue3.velocityY=5

}
if (blue3.x<120){
  blue3.velocityX=0
  blue3.velocityY=-5

}
if (blue3.y<120){
  blue3.velocityX=5
  blue3.velocityY=0

}

if (blue3.isTouching(wall23)){
  blue3.velocityX=0
  blue3.velocityY=-5

}

if (blue3.isTouching(wall12)){
  blue3.velocityX=0
  blue3.velocityY=5

}

if (blue3.isTouching(wall19)){
  blue3.velocityX=5
  blue3.velocityY=0

}
if (blue3.isTouching(wall20)){
  blue3.velocityX=0
  blue3.velocityY=-5

}
if (blue3.isTouching(wall14)){
  blue3.velocityX=0
  blue3.velocityY=5

}
if (blue3.isTouching(wall21)){
  blue3.velocityX=0
  blue3.velocityY=5

}
if (blue4.x<200){
  blue4.velocityX=4
  blue4.velocityY=0

}
if (blue4.isTouching(coinQ14)){
  blue4.velocityX=0
  blue4.velocityY=-4

}
if (blue4.isTouching(wall36)){
  blue4.velocityX=4
  blue4.velocityY=0

}
if (blue4.isTouching(wall37)){
  blue4.velocityX=0
  blue4.velocityY=4

}
if (blue4.isTouching(wall47)){
  blue4.velocityX=4
  blue4.velocityY=0

}if (blue4.isTouching(wallQ)){
  blue4.velocityX=0
  blue4.velocityY=-5

}
if (blue4.isTouching(wall34)){
  blue4.velocityX=-5
  blue4.velocityY=0

}if (blue4.isTouching(wall42)){
  blue4.velocityX=0
blue4.velocityY=-5

}
if (blue4.isTouching(coinQ15)){
  blue4.velocityX=5
  blue4.velocityY=0

}
if (blue4.isTouching(coinQ16)){
  blue4.velocityX=0
  blue4.velocityY=-5

}
if (blue4.isTouching(coinQ17)){
  blue4.velocityX=5
  blue4.velocityY=0

}
if (blue4.isTouching(coinQ18)){
  blue4.velocityX=0
  blue4.velocityY=-5

}
if (blue4.isTouching(wallQ1)){
  blue4.velocityX=-4
  blue4.velocityY=0

}
if (blue4.isTouching(wallQ2)){
  blue4.velocityX=0
  blue4.velocityY=-5

}
if (blue4.isTouching(wallQ3)){
  blue4.velocityX=-4
  blue4.velocityY=0

}
if (blue4.isTouching(wallQ4)){
  blue4.velocityX=0
  blue4.velocityY=4

}
if (blue4.isTouching(wallQ5)){
  blue4.velocityX=-4
  blue4.velocityY=0

}
if (blue4.isTouching(wallQ6)){
  blue4.velocityX=0
  blue4.velocityY=4

}
if (blue4.isTouching(wallQ7)){
  blue4.velocityX=5
  blue4.velocityY=0

}
if (blue4.isTouching(coinQ19)){
  blue4.velocityX=0
  blue4.velocityY=-5

}
if(blue1.x>300){
  timer=timer-1
}
if (timer===0){
  ghost1.x=115
ghost1.y=35

ghost2.x=400
ghost2.y=35

ghost3.x=280
ghost3.y=220

ghost4.x=180
ghost4.y=400

blue1.x=600
blue1.y=600
blue1.setVelocity(0,0)

blue2.x=600
blue2.y=600
blue2.setVelocity(0,0)


blue3.x=600
blue3.y=600
blue3.setVelocity(0,0)


blue4.x=600
blue4.y=600
blue4.setVelocity(0,0)

ghostControl()
}
if(pacman.isTouching(blue1)){
  blue1.visible=false
  score=score+10
}
if(pacman.isTouching(blue2)){
  blue2.visible=false
  score=score+10
}
if(pacman.isTouching(blue3)){
  blue3.visible=false
  score=score+10
}
if(pacman.isTouching(blue4)){
  blue4.visible=false
  score=score+10
}
}
function ghostTime2(){
  if(pacman.isTouching(coinboost2)){
  timer=100
  blue1.addAnimation("bg1",blueghostImg)
  blue2.addAnimation("bg2",blueghostImg)
  blue3.addAnimation("bg3",blueghostImg)
  blue4.addAnimation("bg4",blueghostImg)
  
  
  blue1.x=115
  blue1.y=35
  
  blue2.x=400
  blue2.y=35
  
  blue3.x=280
  blue3.y=220
  
  blue4.x=180
  blue4.y=400
  
  ghost1.setVelocity(0,0)
  ghost2.setVelocity(0,0)
  ghost3.setVelocity(0,0)
  ghost4.setVelocity(0,0)
  
  ghost1.x=600
  ghost1.y=600
  
  ghost2.x=600
  ghost2.y=600
  
  ghost3.x=600
  ghost3.y=600
  
  ghost4.x=600
  ghost4.y=600
  
  coinboost2.x=600
  coinboost2.y=600
  coinboost2.visible=false
  score=score+60
  
  blue1.visible=true
  blue2.visible=true
  blue3.visible=true
  blue4.visible=true
  
  }
  if (blue1.y<=35){
    blue1.velocityX=5
    blue1.velocityY=0
  
  }
  if (blue1.x>485){
    blue1.velocityX=0
    blue1.velocityY=5
  
  }
  if (blue1.y>395){
    blue1.velocityX=-5
    blue1.velocityY=0
  
  }
  if (blue1.isTouching(wall43)){
    blue1.velocityX=0
    blue1.velocityY=-5
  
  }
  if (blue2.y<60){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue2.isTouching(wall16)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  
  if (blue2.isTouching(wall41)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ6)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ1)){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue2.isTouching(coinQ2)){
    blue2.velocityX=5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ7)){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue2.isTouching(coinQ8)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ3)){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue2.isTouching(coinQ4)){
    blue2.velocityX=5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ9)){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue2.isTouching(coinQ10)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ5)){
    blue2.velocityX=-5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ11)){
    blue2.velocityX=0
    blue2.velocityY=-5
  
  }
  if (blue2.isTouching(coinQ12)){
    blue2.velocityX=5
    blue2.velocityY=0
  
  }
  if (blue2.isTouching(coinQ13)){
    blue2.velocityX=0
    blue2.velocityY=5
  
  }
  if (blue3.isTouching(wall20)){
    blue3.velocityX=0
    blue3.velocityY=-5
  
  }
  if (blue3.y>200){
    blue3.velocityX=-5
    blue3.velocityY=0
  
  }
  if (blue3.isTouching(wall33)){
    blue3.velocityX=0
    blue3.velocityY=5
  
  }
  if (blue3.x<120){
    blue3.velocityX=0
    blue3.velocityY=-5
  
  }
  if (blue3.y<120){
    blue3.velocityX=5
    blue3.velocityY=0
  
  }
  
  if (blue3.isTouching(wall23)){
    blue3.velocityX=0
    blue3.velocityY=-5
  
  }
  
  if (blue3.isTouching(wall12)){
    blue3.velocityX=0
    blue3.velocityY=5
  
  }
  
  if (blue3.isTouching(wall19)){
    blue3.velocityX=5
    blue3.velocityY=0
  
  }
  if (blue3.isTouching(wall20)){
    blue3.velocityX=0
    blue3.velocityY=-5
  
  }
  if (blue3.isTouching(wall14)){
    blue3.velocityX=0
    blue3.velocityY=5
  
  }
  if (blue3.isTouching(wall21)){
    blue3.velocityX=0
    blue3.velocityY=5
  
  }
  if (blue4.x<200){
    blue4.velocityX=4
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(coinQ14)){
    blue4.velocityX=0
    blue4.velocityY=-4
  
  }
  if (blue4.isTouching(wall36)){
    blue4.velocityX=4
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(wall37)){
    blue4.velocityX=0
    blue4.velocityY=4
  
  }
  if (blue4.isTouching(wall47)){
    blue4.velocityX=4
    blue4.velocityY=0
  
  }if (blue4.isTouching(wallQ)){
    blue4.velocityX=0
    blue4.velocityY=-5
  
  }
  if (blue4.isTouching(wall34)){
    blue4.velocityX=-5
    blue4.velocityY=0
  
  }if (blue4.isTouching(wall42)){
    blue4.velocityX=0
  blue4.velocityY=-5
  
  }
  if (blue4.isTouching(coinQ15)){
    blue4.velocityX=5
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(coinQ16)){
    blue4.velocityX=0
    blue4.velocityY=-5
  
  }
  if (blue4.isTouching(coinQ17)){
    blue4.velocityX=5
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(coinQ18)){
    blue4.velocityX=0
    blue4.velocityY=-5
  
  }
  if (blue4.isTouching(wallQ1)){
    blue4.velocityX=-4
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(wallQ2)){
    blue4.velocityX=0
    blue4.velocityY=-5
  
  }
  if (blue4.isTouching(wallQ3)){
    blue4.velocityX=-4
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(wallQ4)){
    blue4.velocityX=0
    blue4.velocityY=4
  
  }
  if (blue4.isTouching(wallQ5)){
    blue4.velocityX=-4
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(wallQ6)){
    blue4.velocityX=0
    blue4.velocityY=4
  
  }
  if (blue4.isTouching(wallQ7)){
    blue4.velocityX=5
    blue4.velocityY=0
  
  }
  if (blue4.isTouching(coinQ19)){
    blue4.velocityX=0
    blue4.velocityY=-5
  
  }
  if(blue1.x>300){
    timer=timer-1
  }
  if (timer===0){
    ghost1.x=115
  ghost1.y=35
  
  ghost2.x=400
  ghost2.y=35
  
  ghost3.x=280
  ghost3.y=220
  
  ghost4.x=180
  ghost4.y=400
  
  blue1.x=600
  blue1.y=600
  blue1.setVelocity(0,0)
  
  blue2.x=600
  blue2.y=600
  blue2.setVelocity(0,0)
  
  
  blue3.x=600
  blue3.y=600
  blue3.setVelocity(0,0)
  
  
  blue4.x=600
  blue4.y=600
  blue4.setVelocity(0,0)
  
  ghostControl()
  }
  if(pacman.isTouching(blue1)){
    blue1.visible=false
    score=score+10
  }
  if(pacman.isTouching(blue2)){
    blue2.visible=false
    score=score+10
  }
  if(pacman.isTouching(blue3)){
    blue3.visible=false
    score=score+10
  }
  if(pacman.isTouching(blue4)){
    blue4.visible=false
    score=score+10
  }
  }
  







  function ghostTime3(){
    if(pacman.isTouching(coinboost3)){
    timer=100
    blue1.addAnimation("bg1",blueghostImg)
    blue2.addAnimation("bg2",blueghostImg)
    blue3.addAnimation("bg3",blueghostImg)
    blue4.addAnimation("bg4",blueghostImg)
    
    
    blue1.x=115
    blue1.y=35
    
    blue2.x=400
    blue2.y=35
    
    blue3.x=280
    blue3.y=220
    
    blue4.x=180
    blue4.y=400
    
    ghost1.setVelocity(0,0)
    ghost2.setVelocity(0,0)
    ghost3.setVelocity(0,0)
    ghost4.setVelocity(0,0)
    
    ghost1.x=600
    ghost1.y=600
    
    ghost2.x=600
    ghost2.y=600
    
    ghost3.x=600
    ghost3.y=600
    
    ghost4.x=600
    ghost4.y=600
    
    coinboost3.x=600
    coinboost3.y=600
    coinboost3.visible=false
    score=score+60
    
    blue1.visible=true
    blue2.visible=true
    blue3.visible=true
    blue4.visible=true
    
    }
    if (blue1.y<=35){
      blue1.velocityX=5
      blue1.velocityY=0
    
    }
    if (blue1.x>485){
      blue1.velocityX=0
      blue1.velocityY=5
    
    }
    if (blue1.y>395){
      blue1.velocityX=-5
      blue1.velocityY=0
    
    }
    if (blue1.isTouching(wall43)){
      blue1.velocityX=0
      blue1.velocityY=-5
    
    }
    if (blue2.y<60){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue2.isTouching(wall16)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    
    if (blue2.isTouching(wall41)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ6)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ1)){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue2.isTouching(coinQ2)){
      blue2.velocityX=5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ7)){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue2.isTouching(coinQ8)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ3)){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue2.isTouching(coinQ4)){
      blue2.velocityX=5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ9)){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue2.isTouching(coinQ10)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ5)){
      blue2.velocityX=-5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ11)){
      blue2.velocityX=0
      blue2.velocityY=-5
    
    }
    if (blue2.isTouching(coinQ12)){
      blue2.velocityX=5
      blue2.velocityY=0
    
    }
    if (blue2.isTouching(coinQ13)){
      blue2.velocityX=0
      blue2.velocityY=5
    
    }
    if (blue3.isTouching(wall20)){
      blue3.velocityX=0
      blue3.velocityY=-5
    
    }
    if (blue3.y>200){
      blue3.velocityX=-5
      blue3.velocityY=0
    
    }
    if (blue3.isTouching(wall33)){
      blue3.velocityX=0
      blue3.velocityY=5
    
    }
    if (blue3.x<120){
      blue3.velocityX=0
      blue3.velocityY=-5
    
    }
    if (blue3.y<120){
      blue3.velocityX=5
      blue3.velocityY=0
    
    }
    
    if (blue3.isTouching(wall23)){
      blue3.velocityX=0
      blue3.velocityY=-5
    
    }
    
    if (blue3.isTouching(wall12)){
      blue3.velocityX=0
      blue3.velocityY=5
    
    }
    
    if (blue3.isTouching(wall19)){
      blue3.velocityX=5
      blue3.velocityY=0
    
    }
    if (blue3.isTouching(wall20)){
      blue3.velocityX=0
      blue3.velocityY=-5
    
    }
    if (blue3.isTouching(wall14)){
      blue3.velocityX=0
      blue3.velocityY=5
    
    }
    if (blue3.isTouching(wall21)){
      blue3.velocityX=0
      blue3.velocityY=5
    
    }
    if (blue4.x<200){
      blue4.velocityX=4
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(coinQ14)){
      blue4.velocityX=0
      blue4.velocityY=-4
    
    }
    if (blue4.isTouching(wall36)){
      blue4.velocityX=4
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(wall37)){
      blue4.velocityX=0
      blue4.velocityY=4
    
    }
    if (blue4.isTouching(wall47)){
      blue4.velocityX=4
      blue4.velocityY=0
    
    }if (blue4.isTouching(wallQ)){
      blue4.velocityX=0
      blue4.velocityY=-5
    
    }
    if (blue4.isTouching(wall34)){
      blue4.velocityX=-5
      blue4.velocityY=0
    
    }if (blue4.isTouching(wall42)){
      blue4.velocityX=0
    blue4.velocityY=-5
    
    }
    if (blue4.isTouching(coinQ15)){
      blue4.velocityX=5
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(coinQ16)){
      blue4.velocityX=0
      blue4.velocityY=-5
    
    }
    if (blue4.isTouching(coinQ17)){
      blue4.velocityX=5
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(coinQ18)){
      blue4.velocityX=0
      blue4.velocityY=-5
    
    }
    if (blue4.isTouching(wallQ1)){
      blue4.velocityX=-4
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(wallQ2)){
      blue4.velocityX=0
      blue4.velocityY=-5
    
    }
    if (blue4.isTouching(wallQ3)){
      blue4.velocityX=-4
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(wallQ4)){
      blue4.velocityX=0
      blue4.velocityY=4
    
    }
    if (blue4.isTouching(wallQ5)){
      blue4.velocityX=-4
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(wallQ6)){
      blue4.velocityX=0
      blue4.velocityY=4
    
    }
    if (blue4.isTouching(wallQ7)){
      blue4.velocityX=5
      blue4.velocityY=0
    
    }
    if (blue4.isTouching(coinQ19)){
      blue4.velocityX=0
      blue4.velocityY=-5
    
    }
    if(blue1.x>300){
      timer=timer-1
    }
    if (timer===0){
      ghost1.x=115
    ghost1.y=35
    
    ghost2.x=400
    ghost2.y=35
    
    ghost3.x=280
    ghost3.y=220
    
    ghost4.x=180
    ghost4.y=400
    
    blue1.x=600
    blue1.y=600
    blue1.setVelocity(0,0)
    
    blue2.x=600
    blue2.y=600
    blue2.setVelocity(0,0)
    
    
    blue3.x=600
    blue3.y=600
    blue3.setVelocity(0,0)
    
    
    blue4.x=600
    blue4.y=600
    blue4.setVelocity(0,0)
    
    ghostControl()
    }
    if(pacman.isTouching(blue1)){
      blue1.visible=false
      score=score+10
    }
    if(pacman.isTouching(blue2)){
      blue2.visible=false
      score=score+10
    }
    if(pacman.isTouching(blue3)){
      blue3.visible=false
      score=score+10
    }
    if(pacman.isTouching(blue4)){
      blue4.visible=false
      score=score+10
    }
    }






    function ghostTime4(){
      if(pacman.isTouching(coinboost4)){
      timer=100
      blue1.addAnimation("bg1",blueghostImg)
      blue2.addAnimation("bg2",blueghostImg)
      blue3.addAnimation("bg3",blueghostImg)
      blue4.addAnimation("bg4",blueghostImg)
      
      
      blue1.x=115
      blue1.y=35
      
      blue2.x=400
      blue2.y=35
      
      blue3.x=280
      blue3.y=220
      
      blue4.x=180
      blue4.y=400
      
      ghost1.setVelocity(0,0)
      ghost2.setVelocity(0,0)
      ghost3.setVelocity(0,0)
      ghost4.setVelocity(0,0)
      
      ghost1.x=600
      ghost1.y=600
      
      ghost2.x=600
      ghost2.y=600
      
      ghost3.x=600
      ghost3.y=600
      
      ghost4.x=600
      ghost4.y=600
      
      coinboost4.x=600
      coinboost4.y=600
      coinboost4.visible=false
      score=score+60
      
      blue1.visible=true
      blue2.visible=true
      blue3.visible=true
      blue4.visible=true
      
      }
      if (blue1.y<=35){
        blue1.velocityX=5
        blue1.velocityY=0
      
      }
      if (blue1.x>485){
        blue1.velocityX=0
        blue1.velocityY=5
      
      }
      if (blue1.y>395){
        blue1.velocityX=-5
        blue1.velocityY=0
      
      }
      if (blue1.isTouching(wall43)){
        blue1.velocityX=0
        blue1.velocityY=-5
      
      }
      if (blue2.y<60){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue2.isTouching(wall16)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      
      if (blue2.isTouching(wall41)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ6)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ1)){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue2.isTouching(coinQ2)){
        blue2.velocityX=5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ7)){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue2.isTouching(coinQ8)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ3)){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue2.isTouching(coinQ4)){
        blue2.velocityX=5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ9)){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue2.isTouching(coinQ10)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ5)){
        blue2.velocityX=-5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ11)){
        blue2.velocityX=0
        blue2.velocityY=-5
      
      }
      if (blue2.isTouching(coinQ12)){
        blue2.velocityX=5
        blue2.velocityY=0
      
      }
      if (blue2.isTouching(coinQ13)){
        blue2.velocityX=0
        blue2.velocityY=5
      
      }
      if (blue3.isTouching(wall20)){
        blue3.velocityX=0
        blue3.velocityY=-5
      
      }
      if (blue3.y>200){
        blue3.velocityX=-5
        blue3.velocityY=0
      
      }
      if (blue3.isTouching(wall33)){
        blue3.velocityX=0
        blue3.velocityY=5
      
      }
      if (blue3.x<120){
        blue3.velocityX=0
        blue3.velocityY=-5
      
      }
      if (blue3.y<120){
        blue3.velocityX=5
        blue3.velocityY=0
      
      }
      
      if (blue3.isTouching(wall23)){
        blue3.velocityX=0
        blue3.velocityY=-5
      
      }
      
      if (blue3.isTouching(wall12)){
        blue3.velocityX=0
        blue3.velocityY=5
      
      }
      
      if (blue3.isTouching(wall19)){
        blue3.velocityX=5
        blue3.velocityY=0
      
      }
      if (blue3.isTouching(wall20)){
        blue3.velocityX=0
        blue3.velocityY=-5
      
      }
      if (blue3.isTouching(wall14)){
        blue3.velocityX=0
        blue3.velocityY=5
      
      }
      if (blue3.isTouching(wall21)){
        blue3.velocityX=0
        blue3.velocityY=5
      
      }
      if (blue4.x<200){
        blue4.velocityX=4
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(coinQ14)){
        blue4.velocityX=0
        blue4.velocityY=-4
      
      }
      if (blue4.isTouching(wall36)){
        blue4.velocityX=4
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(wall37)){
        blue4.velocityX=0
        blue4.velocityY=4
      
      }
      if (blue4.isTouching(wall47)){
        blue4.velocityX=4
        blue4.velocityY=0
      
      }if (blue4.isTouching(wallQ)){
        blue4.velocityX=0
        blue4.velocityY=-5
      
      }
      if (blue4.isTouching(wall34)){
        blue4.velocityX=-5
        blue4.velocityY=0
      
      }if (blue4.isTouching(wall42)){
        blue4.velocityX=0
      blue4.velocityY=-5
      
      }
      if (blue4.isTouching(coinQ15)){
        blue4.velocityX=5
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(coinQ16)){
        blue4.velocityX=0
        blue4.velocityY=-5
      
      }
      if (blue4.isTouching(coinQ17)){
        blue4.velocityX=5
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(coinQ18)){
        blue4.velocityX=0
        blue4.velocityY=-5
      
      }
      if (blue4.isTouching(wallQ1)){
        blue4.velocityX=-4
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(wallQ2)){
        blue4.velocityX=0
        blue4.velocityY=-5
      
      }
      if (blue4.isTouching(wallQ3)){
        blue4.velocityX=-4
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(wallQ4)){
        blue4.velocityX=0
        blue4.velocityY=4
      
      }
      if (blue4.isTouching(wallQ5)){
        blue4.velocityX=-4
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(wallQ6)){
        blue4.velocityX=0
        blue4.velocityY=4
      
      }
      if (blue4.isTouching(wallQ7)){
        blue4.velocityX=5
        blue4.velocityY=0
      
      }
      if (blue4.isTouching(coinQ19)){
        blue4.velocityX=0
        blue4.velocityY=-5
      
      }
      if(blue1.x>300){
        timer=timer-1
      }
      if (timer===0){
        ghost1.x=115
      ghost1.y=35
      
      ghost2.x=400
      ghost2.y=35
      
      ghost3.x=280
      ghost3.y=220
      
      ghost4.x=180
      ghost4.y=400
      
      blue1.x=600
      blue1.y=600
      blue1.setVelocity(0,0)
      
      blue2.x=600
      blue2.y=600
      blue2.setVelocity(0,0)
      
      
      blue3.x=600
      blue3.y=600
      blue3.setVelocity(0,0)
      
      
      blue4.x=600
      blue4.y=600
      blue4.setVelocity(0,0)
      
      ghostControl()
      }
      if(pacman.isTouching(blue1)){
        blue1.visible=false
        score=score+10
      }
      if(pacman.isTouching(blue2)){
        blue2.visible=false
        score=score+10
      }
      if(pacman.isTouching(blue3)){
        blue3.visible=false
        score=score+10
      }
      if(pacman.isTouching(blue4)){
        blue4.visible=false
        score=score+10
      }
      }











































































function ghostControl(){
  // 115,35
  if (ghost1.y<=35){
    ghost1.velocityX=5
    ghost1.velocityY=0
  
  }
  if (ghost1.x>485){
    ghost1.velocityX=0
    ghost1.velocityY=5
  
  }
  if (ghost1.y>395){
    ghost1.velocityX=-5
    ghost1.velocityY=0
  
  }
  if (ghost1.isTouching(wall43)){
    ghost1.velocityX=0
    ghost1.velocityY=-5
  
  }
  if (ghost2.y<60){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
  if (ghost2.isTouching(wall16)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  
  if (ghost2.isTouching(wall41)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ6)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ1)){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
  if (ghost2.isTouching(coinQ2)){
    ghost2.velocityX=5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ7)){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
  if (ghost2.isTouching(coinQ8)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ3)){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
  if (ghost2.isTouching(coinQ4)){
    ghost2.velocityX=5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ9)){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
  if (ghost2.isTouching(coinQ10)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ5)){
    ghost2.velocityX=-5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ11)){
    ghost2.velocityX=0
    ghost2.velocityY=-5
  
  }
  if (ghost2.isTouching(coinQ12)){
    ghost2.velocityX=5
    ghost2.velocityY=0
  
  }
  if (ghost2.isTouching(coinQ13)){
    ghost2.velocityX=0
    ghost2.velocityY=5
  
  }
 if (ghost3.isTouching(wall20)){
  ghost3.velocityX=0
  ghost3.velocityY=-5

}
if (ghost3.y>200){
  ghost3.velocityX=-5
  ghost3.velocityY=0

}
if (ghost3.isTouching(wall33)){
  ghost3.velocityX=0
  ghost3.velocityY=5

}
if (ghost3.x<120){
  ghost3.velocityX=0
  ghost3.velocityY=-5

}
if (ghost3.y<120){
  ghost3.velocityX=5
  ghost3.velocityY=0

}

if (ghost3.isTouching(wall23)){
  ghost3.velocityX=0
  ghost3.velocityY=-5

}

if (ghost3.isTouching(wall12)){
  ghost3.velocityX=0
  ghost3.velocityY=5

}

if (ghost3.isTouching(wall19)){
    ghost3.velocityX=5
  ghost3.velocityY=0

}
if (ghost3.isTouching(wall20)){
  ghost3.velocityX=0
ghost3.velocityY=-5

}
if (ghost3.isTouching(wall14)){
  ghost3.velocityX=0
ghost3.velocityY=5

}
if (ghost3.isTouching(wall21)){
  ghost3.velocityX=0
ghost3.velocityY=5

}
if (ghost4.x<200){
  ghost4.velocityX=4
  ghost4.velocityY=0

}
if (ghost4.isTouching(coinQ14)){
  ghost4.velocityX=0
ghost4.velocityY=-4

}
if (ghost4.isTouching(wall36)){
  ghost4.velocityX=4
ghost4.velocityY=0

}
if (ghost4.isTouching(wall37)){
  ghost4.velocityX=0
ghost4.velocityY=4

}
if (ghost4.isTouching(wall47)){
  ghost4.velocityX=4
ghost4.velocityY=0

}if (ghost4.isTouching(wallQ)){
  ghost4.velocityX=0
ghost4.velocityY=-5

}
if (ghost4.isTouching(wall34)){
  ghost4.velocityX=-5
ghost4.velocityY=0

}if (ghost4.isTouching(wall42)){
  ghost4.velocityX=0
ghost4.velocityY=-5

}
if (ghost4.isTouching(coinQ15)){
  ghost4.velocityX=5
  ghost4.velocityY=0

}
if (ghost4.isTouching(coinQ16)){
  ghost4.velocityX=0
  ghost4.velocityY=-5

}
if (ghost4.isTouching(coinQ17)){
  ghost4.velocityX=5
  ghost4.velocityY=0

}
if (ghost4.isTouching(coinQ18)){
  ghost4.velocityX=0
  ghost4.velocityY=-5

}
if (ghost4.isTouching(wallQ1)){
  ghost4.velocityX=-4
  ghost4.velocityY=0

}
if (ghost4.isTouching(wallQ2)){
  ghost4.velocityX=0
  ghost4.velocityY=-5

}
if (ghost4.isTouching(wallQ3)){
  ghost4.velocityX=-4
  ghost4.velocityY=0

}
if (ghost4.isTouching(wallQ4)){
  ghost4.velocityX=0
  ghost4.velocityY=4

}
if (ghost4.isTouching(wallQ5)){
  ghost4.velocityX=-4
  ghost4.velocityY=0

}
if (ghost4.isTouching(wallQ6)){
  ghost4.velocityX=0
  ghost4.velocityY=4

}
if (ghost4.isTouching(wallQ7)){
  ghost4.velocityX=5
  ghost4.velocityY=0

}
if (ghost4.isTouching(coinQ19)){
  ghost4.velocityX=0
  ghost4.velocityY=-5

}
  }
  

function pacmanControl(){
  if (keyWentDown( UP_ARROW)){
    pacman.changeAnimation("up")
    pacman.velocityY=-3;
    pacman.velocityX=0;
  }
  if (keyWentDown( DOWN_ARROW)){
    pacman.changeAnimation("down")
    pacman.velocityY=3;
    pacman.velocityX=0;
  }
  if (keyWentDown( RIGHT_ARROW)){
    pacman.changeAnimation("right")
    pacman.velocityY=0;
    pacman.velocityX=3;
  }
  if (keyWentDown( LEFT_ARROW)){
    pacman.changeAnimation("left")
    pacman.velocityY=0;
    pacman.velocityX=-3;
  }
}


function pacmancollide (){
  /*for (var i=1;i<50;i++){
    pacman.collide(wall(i))
  }*/
  pacman.collide(wall1)
  pacman.collide(wall2)
  pacman.collide(wall3)
  pacman.collide(wall4)
  pacman.collide(wall5)
  pacman.collide(wall6)
  pacman.collide(wall7)
  pacman.collide(wall8)
  pacman.collide(wall9)
  pacman.collide(wall10)
  pacman.collide(wall11)
  pacman.collide(wall12)
  pacman.collide(wall13)
  pacman.collide(wall14)
  pacman.collide(wall15)
  pacman.collide(wall16)
  pacman.collide(wall17)
  pacman.collide(wall18)
  pacman.collide(wall19)
  pacman.collide(wall20)
  pacman.collide(wall21)
  pacman.collide(wall22)
  pacman.collide(wall23)
  pacman.collide(wall24)
  pacman.collide(wall25)
  pacman.collide(wall26)
  pacman.collide(wall27)
  pacman.collide(wall28)
  pacman.collide(wall29)
  pacman.collide(wall30)
  pacman.collide(wall31)
  pacman.collide(wall32)
  pacman.collide(wall33)
  pacman.collide(wall34)
  pacman.collide(wall35)
  pacman.collide(wall36)
  pacman.collide(wall37)
  pacman.collide(wall38)
  pacman.collide(wall39)
  pacman.collide(wall40)
  pacman.collide(wall41)
  pacman.collide(wall42)
  pacman.collide(wall43)
  pacman.collide(wall44)
  pacman.collide(wall45)
  pacman.collide(wall46)
  pacman.collide(wall47)
  pacman.collide(wall48)
  pacman.collide(wall49)











}

function pacmanLoop(){
if (pacman.x<0){
  pacman.x=600
}
if (pacman.x>600){
  pacman.x=0
}



}

function coinScore(){
  if (pacman.isTouching(coin1)){
    coin1.visible=false;
    coin1.x=600;
    coin1.y=600
    score=score+10

  }
  if (pacman.isTouching(coin2)){
    coin2.visible=false;
    coin2.x=600;
    coin2.y=600
    score=score+10

  }
  if (pacman.isTouching(coin3)){
    coin3.visible=false;
    coin3.x=600;
    coin3.y=600
    score=score+10

  }
  if (pacman.isTouching(coin4)){
    coin4.visible=false;
    coin4.x=600;
    coin4.y=600
    score=score+10

  }
  if (pacman.isTouching(coin5)){
    coin5.visible=false;
    coin5.x=600;
    coin5.y=600
    score=score+10

  }
  if (pacman.isTouching(coin6)){
    coin6.visible=false;
    coin6.x=600;
    coin6.y=600
    score=score+10

  }
  if (pacman.isTouching(coin7)){
    coin7.visible=false;
    coin7.x=600;
    coin7.y=600
    score=score+10

  }
  if (pacman.isTouching(coin8)){
    coin8.visible=false;
    coin8.x=600;
    coin8.y=600
    score=score+10

  }
  if (pacman.isTouching(coin9)){
    coin9.visible=false;
    coin9.x=600;
    coin9.y=600
    score=score+10

  }
  if (pacman.isTouching(coin10)){
    coin10.visible=false;
    coin10.x=600;
    coin10.y=600
    score=score+10

  }
  if (pacman.isTouching(coin11)){
    coin11.visible=false;
    coin11.x=600;
    coin11.y=600
    score=score+10

  }
  if (pacman.isTouching(coin12)){
    coin12.visible=false;
    coin12.x=600;
    coin12.y=600
    score=score+10

  }
  if (pacman.isTouching(coin13)){
    coin13.visible=false;
    coin13.x=600;
    coin13.y=600
    score=score+10

  }
  if (pacman.isTouching(coin14)){
    coin14.visible=false;
    coin14.x=600;
    coin14.y=600
    score=score+10

  }
  if (pacman.isTouching(coin15)){
    coin15.visible=false;
    coin15.x=600;
    coin15.y=600
    score=score+10

  }
  if (pacman.isTouching(coin16)){
    coin16.visible=false;
    coin16.x=600;
    coin16.y=600
    score=score+10

  }
  if (pacman.isTouching(coin17)){
    coin17.visible=false;
    coin17.x=600;
    coin17.y=600
    score=score+10

  }
  if (pacman.isTouching(coin18)){
    coin18.visible=false;
    coin18.x=600;
    coin18.y=600
    score=score+10

  }
  if (pacman.isTouching(coin19)){
    coin19.visible=false;
    coin19.x=600;
    coin19.y=600
    score=score+10

  }
  if (pacman.isTouching(coin20)){
    coin20.visible=false;
    coin20.x=600;
    coin20.y=600
    score=score+10

  }
  if (pacman.isTouching(coin21)){
    coin21.visible=false;
    coin21.x=600;
    coin21.y=600
    score=score+10

  }
  if (pacman.isTouching(coin22)){
    coin22.visible=false;
    coin22.x=600;
    coin22.y=600
    score=score+10

  }
  if (pacman.isTouching(coin23)){
    coin23.visible=false;
    coin23.x=600;
    coin23.y=600
    score=score+10

  }if (pacman.isTouching(coin24)){
    coin24.visible=false;
    coin24.x=600;
    coin24.y=600
    score=score+10

  }
  if (pacman.isTouching(coin25)){
    coin25.visible=false;
    coin25.x=600;
    coin25.y=600
    score=score+10

  }
  if (pacman.isTouching(coin26)){
    coin26.visible=false;
    coin26.x=600;
    coin26.y=600
    score=score+10

  }
  if (pacman.isTouching(coin27)){
    coin27.visible=false;
    coin27.x=600;
    coin27.y=600
    score=score+10

  }
  if (pacman.isTouching(coin28)){
    coin28.visible=false;
    coin28.x=600;
    coin28.y=600
    score=score+10

  }
  if (pacman.isTouching(coin29)){
    coin29.visible=false;
    coin29.x=600;
    coin29.y=600
    score=score+10

  }
  if (pacman.isTouching(coin30)){
    coin30.visible=false;
    coin30.x=600;
    coin30.y=600
    score=score+10

  }
  if (pacman.isTouching(coin31)){
    coin31.visible=false;
    coin31.x=600;
    coin31.y=600
    score=score+10

  }
  if (pacman.isTouching(coin32)){
    coin32.visible=false;
    coin32.x=600;
    coin32.y=600
    score=score+10

  }
  if (pacman.isTouching(coin33)){
    coin33.visible=false;
    coin33.x=600;
    coin33.y=600
    score=score+10

  }
  if (pacman.isTouching(coin34)){
    coin34.visible=false;
    coin34.x=600;
    coin34.y=600
    score=score+10

  }
  if (pacman.isTouching(coin35)){
    coin35.visible=false;
    coin35.x=600;
    coin35.y=600
    score=score+10

  }
  if (pacman.isTouching(coin36)){
    coin36.visible=false;
    coin36.x=600;
    coin36.y=600
    score=score+10

  }
  if (pacman.isTouching(coin37)){
    coin37.visible=false;
    coin37.x=600;
    coin37.y=600
    score=score+10

  }
  if (pacman.isTouching(coin38)){
    coin38.visible=false;
    coin38.x=600;
    coin38.y=600
    score=score+10

  }
  if (pacman.isTouching(coin39)){
    coin39.visible=false;
    coin39.x=600;
    coin39.y=600
    score=score+10

  }
  if (pacman.isTouching(coin40)){
    coin40.visible=false;
    coin40.x=600;
    coin40.y=600
    score=score+10

  }
  if (pacman.isTouching(coin41)){
    coin41.visible=false;
    coin41.x=600;
    coin41.y=600
    score=score+10

  }
  if (pacman.isTouching(coin42)){
    coin42.visible=false;
    coin42.x=600;
    coin42.y=600
    score=score+10

  }
  if (pacman.isTouching(coin43)){
    coin43.visible=false;
    coin43.x=600;
    coin43.y=600
    score=score+10

  }
  if (pacman.isTouching(coin44)){
    coin44.visible=false;
    coin44.x=600;
    coin44.y=600
    score=score+10

  }
  if (pacman.isTouching(coin45)){
    coin45.visible=false;
    coin45.x=600;
    coin45.y=600
    score=score+10

  }
  if (pacman.isTouching(coin46)){
    coin46.visible=false;
    coin46.x=600;
    coin46.y=600
    score=score+10

  }
  if (pacman.isTouching(coin47)){
    coin47.visible=false;
    coin47.x=600;
    coin47.y=600
    score=score+10

  }
  if (pacman.isTouching(coin48)){
    coin48.visible=false;
    coin48.x=600;
    coin48.y=600
    score=score+10

  }
  if (pacman.isTouching(coin49)){
    coin49.visible=false;
    coin49.x=600;
    coin49.y=600
    score=score+10

  }
  if (pacman.isTouching(coin50)){
    coin50.visible=false;
    coin50.x=600;
    coin50.y=600
    score=score+10

  }
  if (pacman.isTouching(coin51)){
    coin51.visible=false;
    coin51.x=600;
    coin51.y=600
    score=score+10

  }
  if (pacman.isTouching(coin52)){
    coin52.visible=false;
    coin52.x=600;
    coin52.y=600
    score=score+10

  }
  if (pacman.isTouching(coin53)){
    coin53.visible=false;
    coin53.x=600;
    coin53.y=600
    score=score+10

  }
  if (pacman.isTouching(coin54)){
    coin54.visible=false;
    coin54.x=600;
    coin54.y=600
    score=score+10

  }
  if (pacman.isTouching(coin55)){
    coin55.visible=false;
    coin55.x=600;
    coin55.y=600
    score=score+10

  }
  if (pacman.isTouching(coin56)){
    coin56.visible=false;
    coin56.x=600;
    coin56.y=600
    score=score+10

  }
  if (pacman.isTouching(coin57)){
    coin57.visible=false;
    coin57.x=600;
    coin57.y=600
    score=score+10

  }
  if (pacman.isTouching(coin58)){
    coin58.visible=false;
    coin58.x=600;
    coin58.y=600
    score=score+10

  }

  if (pacman.isTouching(coin59)){
    coin59.visible=false;
    coin59.x=600;
    coin59.y=600
    score=score+10

  }
  if (pacman.isTouching(coin60)){
    coin60.visible=false;
    coin60.x=600;
    coin60.y=600
    score=score+10

  }

  if (pacman.isTouching(coin61)){
    coin61.visible=false;
    coin61.x=600;
    coin61.y=600
    score=score+10

  }
  if (pacman.isTouching(coin62)){
    coin62.visible=false;
    coin62.x=600;
    coin62.y=600
    score=score+10

  }if (pacman.isTouching(coin63)){
    coin63.visible=false;
    coin63.x=600;
    coin63.y=600
    score=score+10

  }
  /*if (pacman.isTouching(coin64)){
    coin64.visible=false;
    coin64.x=600;
    coin64.y=600
    score=score+10

  }*/
  if (pacman.isTouching(coin65)){
    coin65.visible=false;
    coin65.x=600;
    coin65.y=600
    score=score+10

  }
  if (pacman.isTouching(coin66)){
    coin66.visible=false;
    coin66.x=600;
    coin66.y=600
    score=score+10

  }
  if (pacman.isTouching(coin67)){
    coin67.visible=false;
    coin67.x=600;
    coin67.y=600
    score=score+10

  }
  if (pacman.isTouching(coin68)){
    coin68.visible=false;
    coin68.x=600;
    coin68.y=600
    score=score+10

  }
  if (pacman.isTouching(coin69)){
    coin69.visible=false;
    coin69.x=600;
    coin69.y=600
    score=score+10

  }
  if (pacman.isTouching(coin70)){
    coin70.visible=false;
    coin70.x=600;
    coin70.y=600
    score=score+10

  }
  if (pacman.isTouching(coin71)){
    coin71.visible=false;
    coin71.x=600;
    coin71.y=600
    score=score+10

  }
  if (pacman.isTouching(coin72)){
    coin72.visible=false;
    coin72.x=600;
    coin72.y=600
    score=score+10

  }
  if (pacman.isTouching(coin73)){
    coin73.visible=false;
    coin73.x=600;
    coin73.y=600
    score=score+10

  }
 /*if (pacman.isTouching(coin74)){
    coin74.visible=false;
    coin74.x=600;
    coin74.y=600
    score=score+10

  }*/
  if (pacman.isTouching(coin75)){
    coin75.visible=false;
    coin75.x=600;
    coin75.y=600
    score=score+10

  }if (pacman.isTouching(coin76)){
    coin76.visible=false;
    coin76.x=600;
    coin76.y=600
    score=score+10

  }

  if (pacman.isTouching(coin77)){
    coin77.visible=false;
    coin77.x=600;
    coin77.y=600
    score=score+10

  }if (pacman.isTouching(coin78)){
    coin78.visible=false;
    coin78.x=600;
    coin78.y=600
    score=score+10

  }

  if (pacman.isTouching(coin79)){
    coin79.visible=false;
    coin79.x=600;
    coin79.y=600
    score=score+10

  }
  if (pacman.isTouching(coin80)){
    coin80.visible=false;
    coin80.x=600;
    coin80.y=600
    score=score+10

  }
  if (pacman.isTouching(coin81)){
    coin81.visible=false;
    coin81.x=600;
    coin81.y=600
    score=score+10

  }
  if (pacman.isTouching(coin82)){
    coin82.visible=false;
    coin82.x=600;
    coin82.y=600
    score=score+10

  }
  if (pacman.isTouching(coin83)){
    coin83.visible=false;
    coin83.x=600;
    coin83.y=600
    score=score+10

  }if (pacman.isTouching(coin84)){
    coin84.visible=false;
    coin84.x=600;
    coin84.y=600
    score=score+10

  }
  if (pacman.isTouching(coin85)){
    coin2.visible=false;
    coin85.x=600;
    coin85.y=600
    score=score+10

  }
  if (pacman.isTouching(coin86)){
    coin86.visible=false;
    coin86.x=600;
    coin86.y=600
    score=score+10

  }

  if (pacman.isTouching(coin87)){
    coin87.visible=false;
    coin87.x=600;
    coin87.y=600
    score=score+10

  }

  if (pacman.isTouching(coin88)){
    coin88.visible=false;
    coin88.x=600;
    coin88.y=600
    score=score+10

  }if (pacman.isTouching(coin89)){
    coin89.visible=false;
    coin89.x=600;
    coin89.y=600
    score=score+10

  }
  if (pacman.isTouching(coin90)){
    coin90.visible=false;
    coin90.x=600;
    coin90.y=600
    score=score+10

  }

  if (pacman.isTouching(coin91)){
    coin91.visible=false;
    coin91.x=600;
    coin91.y=600
    score=score+10

  }
  if (pacman.isTouching(coin92)){
    coin92.visible=false;
    coin92.x=600;
    coin92.y=600
    score=score+10

  }if (pacman.isTouching(coin93)){
    coin93.visible=false;
    coin93.x=600;
    coin93.y=600
    score=score+10

  }
  if (pacman.isTouching(coin94)){
    coin94.visible=false;
    coin94.x=600;
    coin94.y=600
    score=score+10

  }
  if (pacman.isTouching(coin95)){
    coin95.visible=false;
    coin95.x=600;
    coin95.y=600
    score=score+10

  }
  if (pacman.isTouching(coin96)){
    coin96.visible=false;
    coin96.x=600;
    coin96.y=600
    score=score+10

  }
  if (pacman.isTouching(coin97)){
    coin97.visible=false;
    coin97.x=600;
    coin97.y=600
    score=score+10

  }
  if (pacman.isTouching(coin98)){
    coin98.visible=false;
    coin98.x=600;
    coin98.y=600
    score=score+10

  }
  if (pacman.isTouching(coin99)){
    coin99.visible=false;
    coin99.x=600;
    coin99.y=600
    score=score+10

  }
  if (pacman.isTouching(coin100)){
    coin100.visible=false;
    coin100.x=600;
    coin100.y=600
    score=score+10

  }
  if (pacman.isTouching(coin101)){
    coin101.visible=false;
    coin101.x=600;
    coin101.y=600
    score=score+10

  }
  if (pacman.isTouching(coin102)){
    coin102.visible=false;
    coin102.x=600;
    coin102.y=600
    score=score+10

  }

  if (pacman.isTouching(coin103)){
    coin103.visible=false;
    coin103.x=600;
    coin103.y=600
    score=score+10

  }if (pacman.isTouching(coin104)){
    coin104.visible=false;
    coin104.x=600;
    coin104.y=600
    score=score+10

  }

  if (pacman.isTouching(coin105)){
    coin105.visible=false;
    coin105.x=600;
    coin105.y=600
    score=score+10

  }
  if (pacman.isTouching(coin106)){
    coin106.visible=false;
    coin106.x=600;
    coin106.y=600
    score=score+10

  }if (pacman.isTouching(coin107)){
    coin107.visible=false;
    coin107.x=600;
    coin107.y=600
    score=score+10

  }

  if (pacman.isTouching(coin108)){
    coin108.visible=false;
    coin108.x=600;
    coin108.y=600
    score=score+10

  }
  if (pacman.isTouching(coin109)){
    coin109.visible=false;
    coin109.x=600;
    coin109.y=600
    score=score+10

  }if (pacman.isTouching(coin110)){
    coin110.visible=false;
    coin110.x=600;
    coin110.y=600
    score=score+10

  }
  if (pacman.isTouching(coin111)){
    coin111.visible=false;
    coin111.x=600;
    coin111.y=600
    score=score+10

  }
  if (pacman.isTouching(coin112)){
    coin112.visible=false;
    coin112.x=600;
    coin112.y=600
    score=score+10

  }
  if (pacman.isTouching(coin113)){
    coin113.visible=false;
    coin113.x=600;
    coin113.y=600
    score=score+10

  }if (pacman.isTouching(coin114)){
    coin114.visible=false;
    coin114.x=600;
    coin114.y=600
    score=score+10

  }
  if (pacman.isTouching(coin115)){
    coin115.visible=false;
    coin115.x=600;
    coin115.y=600
    score=score+10

  }
  if (pacman.isTouching(coin116)){
    coin116.visible=false;
    coin116.x=600;
    coin116.y=600
    score=score+10

  }
  if (pacman.isTouching(coin117)){
    coin117.visible=false;
    coin117.x=600;
    coin117.y=600
    score=score+10

  }
  if (pacman.isTouching(coin118)){
    coin118.visible=false;
    coin118.x=600;
    coin118.y=600
    score=score+10

  }
  if (pacman.isTouching(coin119)){
    coin119.visible=false;
    coin119.x=600;
    coin119.y=600
    score=score+10

  }
  if (pacman.isTouching(coin120)){
    coin120.visible=false;
    coin120.x=600;
    coin120.y=600
    score=score+10

  }
  if (pacman.isTouching(coin121)){
    coin121.visible=false;
    coin121.x=600;
    coin121.y=600
    score=score+10

  }
  if (pacman.isTouching(coin122)){
    coin122.visible=false;
    coin122.x=600;
    coin122.y=600
    score=score+10

  }
  
  if (pacman.isTouching(coin123)){
    coin123.visible=false;
    coin123.x=600;
    coin123.y=600
    score=score+10

  }
  if (pacman.isTouching(coin124)){
    coin124.visible=false;
    coin124.x=600;
    coin124.y=600
    score=score+10

  }
  if (pacman.isTouching(coin125)){
    coin125.visible=false;
    coin125.x=600;
    coin125.y=600
    score=score+10

  }
  if (pacman.isTouching(coin126)){
    coin126.visible=false;
    coin126.x=600;
    coin126.y=600
    score=score+10

  }
  if (pacman.isTouching(coin127)){
    coin127.visible=false;
    coin127.x=600;
    coin127.y=600
    score=score+10

  }
  if (pacman.isTouching(coin128)){
    coin128.visible=false;
    coin128.x=600;
    coin128.y=600
    score=score+10

  }
  if (pacman.isTouching(coin129)){
    coin129.visible=false;
    coin129.x=600;
    coin129.y=600
    score=score+10

  }
  if (pacman.isTouching(coin130)){
    coin130.visible=false;
    coin130.x=600;
    coin130.y=600
    score=score+10

  }
  if (pacman.isTouching(coin131)){
    coin131.visible=false;
    coin131.x=600;
    coin131.y=600
    score=score+10

  }
  if (pacman.isTouching(coin132)){
    coin132.visible=false;
    coin132.x=600;
    coin132.y=600
    score=score+10

  }
  if (pacman.isTouching(coin133)){
    coin133.visible=false;
    coin133.x=600;
    coin133.y=600
    score=score+10

  }
  if (pacman.isTouching(coin134)){
    coin134.visible=false;
    coin134.x=600;
    coin134.y=600
    score=score+10

  }
   if (pacman.isTouching(coin135)){
    coin135.visible=false;
    coin135.x=600;
    coin135.y=600
    score=score+10

  }
  if (pacman.isTouching(coin136)){
    coin136.visible=false;
    coin136.x=600;
    coin136.y=600
    score=score+10

  }
  if (pacman.isTouching(coin137)){
    coin137.visible=false;
    coin137.x=600;
    coin137.y=600
    score=score+10

  }
  if (pacman.isTouching(coin138)){
    coin138.visible=false;
    coin138.x=600;
    coin138.y=600
    score=score+10

  }
  if (pacman.isTouching(coin139)){
    coin139.visible=false;
    coin139.x=600;
    coin139.y=600
    score=score+10

  }
  if (pacman.isTouching(coin140)){
    coin140.visible=false;
    coin140.x=600;
    coin140.y=600
    score=score+10

  }
  if (pacman.isTouching(coin141)){
    coin141.visible=false;
    coin141.x=600;
    coin141.y=600
    score=score+10

  }
  if (pacman.isTouching(coin142)){
    coin142.visible=false;
    coin142.x=600;
    coin142.y=600
    score=score+10

  }
  if (pacman.isTouching(coin143)){
    coin143.visible=false;
    coin143.x=600;
    coin143.y=600
    score=score+10

  }
  if (pacman.isTouching(coin144)){
    coin144.visible=false;
    coin144.x=600;
    coin144.y=600
    score=score+10

  }
  if (pacman.isTouching(coin145)){
    coin145.visible=false;
    coin145.x=600;
    coin145.y=600
    score=score+10

  }
  if (pacman.isTouching(coin146)){
    coin146.visible=false;
    coin146.x=600;
    coin146.y=600
    score=score+10

  }
  if (pacman.isTouching(coin147)){
    coin147.visible=false;
    coin147.x=600;
    coin147.y=600
    score=score+10

  }
  if (pacman.isTouching(coin148)){
    coin148.visible=false;
    coin148.x=600;
    coin148.y=600
    score=score+10

  }
  if (pacman.isTouching(coin149)){
    coin149.visible=false;
    coin149.x=600;
    coin149.y=600
    score=score+10

  }
  if (pacman.isTouching(coin150)){
    coin150.visible=false;
    coin150.x=600;
    coin150.y=600
    score=score+10

  }
  if (pacman.isTouching(coin150)){
    coin150.visible=false;
    coin150.x=600;
    coin150.y=600
    score=score+10

  }
  if (pacman.isTouching(coin151)){
    coin151.visible=false;
    coin151.x=600;
    coin151.y=600
    score=score+10

  }
  if (pacman.isTouching(coin152)){
    coin152.visible=false;
    coin152.x=600;
    coin152.y=600
    score=score+10

  }
  if (pacman.isTouching(coin153)){
    coin153.visible=false;
    coin153.x=600;
    coin153.y=600
    score=score+10

  }
  if (pacman.isTouching(coin154)){
    coin154.visible=false;
    coin154.x=600;
    coin154.y=600
    score=score+10

  }
  if (pacman.isTouching(coin155)){
    coin155.visible=false;
    coin155.x=600;
    coin155.y=600
    score=score+10

  }
  if (pacman.isTouching(coin156)){
    coin156.visible=false;
    coin156.x=600;
    coin156.y=600
    score=score+10

  }
   if (pacman.isTouching(coin157)){
    coin157.visible=false;
    coin157.x=600;
    coin157.y=600
    score=score+10

  }
  if (pacman.isTouching(coin158)){
    coin158.visible=false;
    coin158.x=600;
    coin158.y=600
    score=score+10

  }
   if (pacman.isTouching(coin159)){
    coin159.visible=false;
    coin159.x=600;
    coin159.y=600
    score=score+10

  }
  if (pacman.isTouching(coin160)){
    coin160.visible=false;
    coin160.x=600;
    coin160.y=600
    score=score+10

  }
   if (pacman.isTouching(coin161)){
    coin161.visible=false;
    coin161.x=600;
    coin161.y=600
    score=score+10

  }
  if (pacman.isTouching(coin162)){
    coin162.visible=false;
    coin162.x=600;
    coin162.y=600
    score=score+10

  }
   if (pacman.isTouching(coin163)){
    coin163.visible=false;
    coin163.x=600;
    coin163.y=600
    score=score+10

  }
  if (pacman.isTouching(coin164)){
    coin164.visible=false;
    coin164.x=600;
    coin164.y=600
    score=score+10

  }
   if (pacman.isTouching(coin165)){
    coin165.visible=false;
    coin165.x=600;
    coin165.y=600
    score=score+10

  }
  if (pacman.isTouching(coin165)){
    coin165.visible=false;
    coin165.x=600;
    coin165.y=600
    score=score+10

  }
   if (pacman.isTouching(coin166)){
    coin166.visible=false;
    coin166.x=600;
    coin166.y=600
    score=score+10

  }
  if (pacman.isTouching(coin167)){
    coin167.visible=false;
    coin167.x=600;
    coin167.y=600
    score=score+10

  }
   if (pacman.isTouching(coin168)){
    coin168.visible=false;
    coin168.x=600;
    coin168.y=600
    score=score+10

  }
  if (pacman.isTouching(coin169)){
    coin169.visible=false;
    coin169.x=600;
    coin169.y=600
    score=score+10

  }
  if (pacman.isTouching(coin170)){
    coin170.visible=false;
    coin170.x=600;
    coin170.y=600
    score=score+10

  }
   if (pacman.isTouching(coin171)){
    coin171.visible=false;
    coin171.x=600;
    coin171.y=600
    score=score+10

  }
   if (pacman.isTouching(coin172)){
    coin172.visible=false;
    coin172.x=600;
    coin172.y=600
    score=score+10

  }
  if (pacman.isTouching(coin173)){
    coin173.visible=false;
    coin173.x=600;
    coin173.y=600
    score=score+10

  }
  if (pacman.isTouching(coin174)){
    coin174.visible=false;
    coin174.x=600;
    coin174.y=600
    score=score+10

  }
  if (pacman.isTouching(coin175)){
    coin175.visible=false;
    coin175.x=600;
    coin175.y=600
    score=score+10

  }
  if (pacman.isTouching(coin176)){
    coin176.visible=false;
    coin176.x=600;
    coin176.y=600
    score=score+10

  }
  if (pacman.isTouching(coin177)){
    coin177.visible=false;
    coin177.x=600;
    coin177.y=600
    score=score+10

  }
  if (pacman.isTouching(coin178)){
    coin178.visible=false;
    coin178.x=600;
    coin178.y=600
    score=score+10

  }
   if (pacman.isTouching(coin179)){
    coin179.visible=false;
    coin179.x=600;
    coin179.y=600
    score=score+10

  }
  if (pacman.isTouching(coin180)){
    coin180.visible=false;
    coin180.x=600;
    coin180.y=600
    score=score+10

  }
  if (pacman.isTouching(coin181)){
    coin181.visible=false;
    coin181.x=600;
    coin181.y=600
    score=score+10

  }
  if (pacman.isTouching(coin182)){
    coin182.visible=false;
    coin182.x=600;
    coin182.y=600
    score=score+10

  }
  if (pacman.isTouching(coin183)){
    coin183.visible=false;
    coin183.x=600;
    coin183.y=600
    score=score+10

  }
  if (pacman.isTouching(coin184)){
    coin184.visible=false;
    coin184.x=600;
    coin184.y=600
    score=score+10

  }
  if (pacman.isTouching(coin185)){
    coin185.visible=false;
    coin185.x=600;
    coin185.y=600
    score=score+10

  }
  if (pacman.isTouching(coin186)){
    coin186.visible=false;
    coin186.x=600;
    coin186.y=600
    score=score+10

  }
  if (pacman.isTouching(coin187)){
    coin187.visible=false;
    coin187.x=600;
    coin187.y=600
    score=score+10

  }
  if (pacman.isTouching(coin188)){
    coin188.visible=false;
    coin188.x=600;
    coin188.y=600
    score=score+10

  }
  if (pacman.isTouching(coin189)){
    coin189.visible=false;
    coin189.x=600;
    coin189.y=600
    score=score+10

  }
  if (pacman.isTouching(coin190)){
    coin190.visible=false;
    coin190.x=600;
    coin190.y=600
    score=score+10

  }
  if (pacman.isTouching(coin191)){
    coin191.visible=false;
    coin191.x=600;
    coin191.y=600
    score=score+10

  }
  if (pacman.isTouching(coin192)){
    coin192.visible=false;
    coin192.x=600;
    coin192.y=600
    score=score+10

  }
  if (pacman.isTouching(coin193)){
    coin193.visible=false;
    coin193.x=600;
    coin193.y=600
    score=score+10

  }
   if (pacman.isTouching(coin194)){
    coin194.visible=false;
    coin194.x=600;
    coin194.y=600
    score=score+10

  }
  if (pacman.isTouching(coin195)){
    coin195.visible=false;
    coin195.x=600;
    coin195.y=600
    score=score+10

  }
  if (pacman.isTouching(coin196)){
    coin196.visible=false;
    coin196.x=600;
    coin196.y=600
    score=score+10

  }
  if (pacman.isTouching(coin197)){
    coin197.visible=false;
    coin197.x=600;
    coin197.y=600
    score=score+10

  }
   if (pacman.isTouching(coin198)){
    coin198.visible=false;
    coin198.x=600;
    coin198.y=600
    score=score+10

  }
  if (pacman.isTouching(coin199)){
    coin199.visible=false;
    coin199.x=600;
    coin199.y=600
    score=score+10

  }
   if (pacman.isTouching(coin200)){
    coin200.visible=false;
    coin200.x=600;
    coin200.y=600
    score=score+10

  }
  if (pacman.isTouching(coin201)){
    coin201.visible=false;
    coin201.x=600;
    coin201.y=600
    score=score+10

  }
  if (pacman.isTouching(coin202)){
    coin202.visible=false;
    coin202.x=600;
    coin202.y=600
    score=score+10

  }
   if (pacman.isTouching(coin203)){
    coin203.visible=false;
    coin203.x=600;
    coin203.y=600
    score=score+10

  }
   if (pacman.isTouching(coin204)){
    coin204.visible=false;
    coin204.x=600;
    coin204.y=600
    score=score+10

  }
  if (pacman.isTouching(coin205)){
    coin205.visible=false;
    coin205.x=600;
    coin205.y=600
    score=score+10

  }
  if (pacman.isTouching(coin206)){
    coin206.visible=false;
    coin206.x=600;
    coin206.y=600
    score=score+10

  }
  if (pacman.isTouching(coin207)){
    coin207.visible=false;
    coin207.x=600;
    coin207.y=600
    score=score+10

  }
  if (pacman.isTouching(coin208)){
    coin208.visible=false;
    coin208.x=600;
    coin208.y=600
    score=score+10

  }
  if (pacman.isTouching(coin209)){
    coin209.visible=false;
    coin209.x=600;
    coin209.y=600
    score=score+10

  }
   if (pacman.isTouching(coin210)){
    coin210.visible=false;
    coin210.x=600;
    coin210.y=600
    score=score+10

  }
  if (pacman.isTouching(coin211)){
    coin211.visible=false;
    coin211.x=600;
    coin211.y=600
    score=score+10

  }
   if (pacman.isTouching(coin212)){
    coin212.visible=false;
    coin212.x=600;
    coin212.y=600
    score=score+10

  }
  if (pacman.isTouching(coin213)){
    coin213.visible=false;
    coin213.x=600;
    coin213.y=600
    score=score+10

  }
  if (pacman.isTouching(coin214)){
    coin214.visible=false;
    coin214.x=600;
    coin214.y=600
    score=score+10

  }
  if (pacman.isTouching(coin215)){
    coin215.visible=false;
    coin215.x=600;
    coin215.y=600
    score=score+10

  }
   if (pacman.isTouching(coin216)){
    coin216.visible=false;
    coin216.x=600;
    coin216.y=600
    score=score+10

  }
  if (pacman.isTouching(coin217)){
    coin217.visible=false;
    coin217.x=600;
    coin217.y=600
    score=score+10

  }
   if (pacman.isTouching(coin218)){
    coin218.visible=false;
    coin218.x=600;
    coin218.y=600
    score=score+10

  }
  if (pacman.isTouching(coin219)){
    coin219.visible=false;
    coin219.x=600;
    coin219.y=600
    score=score+10

  }
  if (pacman.isTouching(coin220)){
    coin220.visible=false;
    coin220.x=600;
    coin220.y=600
    score=score+10

  }
  if (pacman.isTouching(coin221)){
    coin221.visible=false;
    coin221.x=600;
    coin221.y=600
    score=score+10

  }
  if (pacman.isTouching(coin222)){
    coin222.visible=false;
    coin222.x=600;
    coin222.y=600
    score=score+10

  }
   if (pacman.isTouching(coin223)){
    coin223.visible=false;
    coin223.x=600;
    coin223.y=600
    score=score+10

  }
  if (pacman.isTouching(coin224)){
    coin224.visible=false;
    coin224.x=600;
    coin224.y=600
    score=score+10

  }
  if (pacman.isTouching(coin225)){
    coin225.visible=false;
    coin225.x=600;
    coin225.y=600
    score=score+10

  }
   if (pacman.isTouching(coin226)){
    coin226.visible=false;
    coin226.x=600;
    coin226.y=600
    score=score+10

  }
  if (pacman.isTouching(coin227)){
    coin227.visible=false;
    coin227.x=600;
    coin227.y=600
    score=score+10

  }
  if (pacman.isTouching(coin228)){
    coin228.visible=false;
    coin228.x=600;
    coin228.y=600
    score=score+10

  }
  if (pacman.isTouching(coin229)){
    coin229.visible=false;
    coin229.x=600;
    coin229.y=600
    score=score+10

  }
  if (pacman.isTouching(coin230)){
    coin230.visible=false;
    coin230.x=600;
    coin230.y=600
    score=score+10

  }
  if (pacman.isTouching(coin231)){
    coin231.visible=false;
    coin231.x=600;
    coin231.y=600
    score=score+10

  }
   if (pacman.isTouching(coin232)){
    coin232.visible=false;
    coin232.x=600;
    coin232.y=600
    score=score+10

  }
  if (pacman.isTouching(coin233)){
    coin233.visible=false;
    coin233.x=600;
    coin233.y=600
    score=score+10

  }
  if (pacman.isTouching(coin234)){
    coin234.visible=false;
    coin234.x=600;
    coin234.y=600
    score=score+10

  }
  if (pacman.isTouching(coin235)){
    coin235.visible=false;
    coin235.x=600;
    coin235.y=600
    score=score+10

  }
  if (pacman.isTouching(coin236)){
    coin236.visible=false;
    coin236.x=600;
    coin236.y=600
    score=score+10

  }
   if (pacman.isTouching(coin237)){
    coin237.visible=false;
    coin237.x=600;
    coin237.y=600
    score=score+10

  }
  if (pacman.isTouching(coin238)){
    coin238.visible=false;
    coin238.x=600;
    coin238.y=600
    score=score+10

  }
  if (pacman.isTouching(coin239)){
    coin239.visible=false;
    coin239.x=600;
    coin239.y=600
    score=score+10

  }
  if (pacman.isTouching(coin240)){
    coin240.visible=false;
    coin240.x=600;
    coin240.y=600
    score=score+10

  }
  if (pacman.isTouching(coin241)){
    coin241.visible=false;
    coin241.x=600;
    coin241.y=600
    score=score+10

  }
   if (pacman.isTouching(coin242)){
    coin242.visible=false;
    coin242.x=600;
    coin242.y=600
    score=score+10

  }
  if (pacman.isTouching(coin243)){
    coin243.visible=false;
    coin243.x=600;
    coin243.y=600
    score=score+10

  }
   if (pacman.isTouching(coin244)){
    coin244.visible=false;
    coin244.x=600;
    coin244.y=600
    score=score+10

  }
  if (pacman.isTouching(coin245)){
    coin245.visible=false;
    coin245.x=600;
    coin245.y=600
    score=score+10

  }

  if (pacman.isTouching(coin246)){
    coin246.visible=false;
    coin246.x=600;
    coin246.y=600
    score=score+10

  }
  if (pacman.isTouching(coin247)){
    coin247.visible=false;
    coin247.x=600;
    coin247.y=600
    score=score+10

  }
  if (pacman.isTouching(coin248)){
    coin248.visible=false;
    coin248.x=600;
    coin248.y=600
    score=score+10

  }
   if (pacman.isTouching(coin249)){
    coin249.visible=false;
    coin249.x=600;
    coin249.y=600
    score=score+10

  }
  if (pacman.isTouching(coin250)){
    coin250.visible=false;
    coin250.x=600;
    coin250.y=600
    score=score+10

  }
  if (pacman.isTouching(coin251)){
    coin251.visible=false;
    coin251.x=600;
    coin251.y=600
    score=score+10

  }
  if (pacman.isTouching(coin252)){
    coin252.visible=false;
    coin252.x=600;
    coin252.y=600
    score=score+10

  }
  if (pacman.isTouching(coin253)){
    coin253.visible=false;
    coin253.x=600;
    coin253.y=600
    score=score+10

  }
  if (pacman.isTouching(coin254)){
    coin254.visible=false;
    coin254.x=600;
    coin254.y=600
    score=score+10

  }
  if (pacman.isTouching(coin255)){
    coin255.visible=false;
    coin255.x=600;
    coin255.y=600
    score=score+10

  }
  if (pacman.isTouching(coin256)){
    coin256.visible=false;
    coin256.x=600;
    coin256.y=600
    score=score+10

  }
  if (pacman.isTouching(coin257)){
    coin257.visible=false;
    coin257.x=600;
    coin257.y=600
    score=score+10

  }
  
  if (pacman.isTouching(coin259)){
    coin259.visible=false;
    coin259.x=600;
    coin259.y=600
    score=score+10

  }
  if (pacman.isTouching(coin260)){
    coin260.visible=false;
    coin260.x=600;
    coin260.y=600
    score=score+10

  }
   if (pacman.isTouching(coin261)){
    coin261.visible=false;
    coin261.x=600;
    coin261.y=600
    score=score+10

  }
  if (pacman.isTouching(coin262)){
    coin262.visible=false;
    coin262.x=600;
    coin262.y=600
    score=score+10

  }
  if (pacman.isTouching(coin263)){
    coin263.visible=false;
    coin263.x=600;
    coin263.y=600
    score=score+10

  }
   if (pacman.isTouching(coin264)){
    coin264.visible=false;
    coin264.x=600;
    coin264.y=600
    score=score+10

  }
  if (pacman.isTouching(coin265)){
    coin265.visible=false;
    coin265.x=600;
    coin265.y=600
    score=score+10

  }
  if (pacman.isTouching(coin266)){
    coin266.visible=false;
    coin266.x=600;
    coin266.y=600
    score=score+10

  }
  if (pacman.isTouching(coin267)){
    coin267.visible=false;
    coin267.x=600;
    coin267.y=600
    score=score+10

  }
   if (pacman.isTouching(coin268)){
    coin268.visible=false;
    coin268.x=600;
    coin268.y=600
    score=score+10

  }
  if (pacman.isTouching(coin269)){
    coin269.visible=false;
    coin269.x=600;
    coin269.y=600
    score=score+10

  }
   if (pacman.isTouching(coin270)){
    coin270.visible=false;
    coin270.x=600;
    coin270.y=600
    score=score+10

  }
  if (pacman.isTouching(coin271)){
    coin271.visible=false;
    coin271.x=600;
    coin271.y=600
    score=score+10

  }
  if (pacman.isTouching(coin272)){
    coin272.visible=false;
    coin272.x=600;
    coin272.y=600
    score=score+10

  }
  if (pacman.isTouching(coin273)){
    coin273.visible=false;
    coin273.x=600;
    coin273.y=600
    score=score+10

  }
  if (pacman.isTouching(coin274)){
    coin274.visible=false;
    coin274.x=600;
    coin274.y=600
    score=score+10

  }
   if (pacman.isTouching(coin275)){
    coin275.visible=false;
    coin275.x=600;
    coin275.y=600
    score=score+10

  }
  if (pacman.isTouching(coin276)){
    coin276.visible=false;
    coin276.x=600;
    coin276.y=600
    score=score+10

  }
  if (pacman.isTouching(coin277)){
    coin277.visible=false;
    coin277.x=600;
    coin277.y=600
    score=score+10

  }
  if (pacman.isTouching(coin278)){
    coin278.visible=false;
    coin278.x=600;
    coin278.y=600
    score=score+10

  }
  if (pacman.isTouching(coin279)){
    coin279.visible=false;
    coin279.x=600;
    coin279.y=600
    score=score+10

  }
  

}


function livesHeart(){
  if (life==2){
    life1.visible=false;
  }

if (life==1){
  life2.visible=false;
}


if (life==0){
  life3.visible=false;

  ghost1.visible=false;
  ghost2.visible=false;
  ghost3.visible=false;
  ghost4.visible=false;

  pacman.visible=false;
  var over = createSprite(300,200)
  over.addAnimation("over",go)
  over.scale=2.5
}
}

function ghostCollide(){
if(ghost1.isTouching(pacman)){
life=life-1;
pacman.x=20;
pacman.y=120;
pacman.velocityX=0
pacman.velocityY=0
score=score-100;

}  
if(ghost2.isTouching(pacman)){
  life=life-1;
  pacman.x=20;
  pacman.y=120;
  pacman.velocityX=0
  pacman.velocityY=0
  score=score-100;
  
  }  
  if(ghost3.isTouching(pacman)){
    life=life-1;
    pacman.x=20;
    pacman.y=120;
    pacman.velocityX=0
    pacman.velocityY=0
    score=score-100;
    
    }  
    if(ghost4.isTouching(pacman)){
      life=life-1;
      pacman.x=20;
      pacman.y=120;
      pacman.velocityX=0
      pacman.velocityY=0
      score=score-100;
      
      }  
}

function winner (){
  
  if(score>=1800){
    win = createSprite(300,200) 
    win.addAnimation("cup",cupImg)
    win.scale=1.5
ghost1.visible=false
ghost2.visible=false
ghost3.visible=false
ghost4.visible=false
pacman.visible=false


  }
}














