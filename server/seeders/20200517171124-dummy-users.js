'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const data = [{first_name:"Rosa",last_name:"Schwieso",email:"rschwieso0@irs.gov",gender:"Female",dni:"512-75-1374",comments:null},
      {first_name:"Dionisio",last_name:"Digges",email:"ddigges1@google.co.uk",gender:"Male",dni:"833-10-5373",comments:null},
      {first_name:"Pippa",last_name:"Portugal",email:"pportugal2@census.gov",gender:"Female",dni:"885-90-8391",comments:null},
      {first_name:"Inglis",last_name:"Coulman",email:"icoulman3@paginegialle.it",gender:"Male",dni:"245-40-6623",comments:null},
      {first_name:"Susi",last_name:"Sykora",email:"ssykora4@mtv.com",gender:"Female",dni:"298-91-6534",comments:null},
      {first_name:"Eloise",last_name:"Wessell",email:"ewessell5@comcast.net",gender:"Female",dni:"253-38-9125",comments:null},
      {first_name:"Darill",last_name:"Bretherton",email:"dbretherton6@addtoany.com",gender:"Male",dni:"837-23-2225",comments:""},
      {first_name:"Lonna",last_name:"Godard",email:"lgodard7@wufoo.com",gender:"Female",dni:"320-77-7196",comments:null},
      {first_name:"Theobald",last_name:"Sopp",email:"tsopp8@whitehouse.gov",gender:"Male",dni:"851-64-4304",comments:null},
      {first_name:"Crystal",last_name:"Graveney",email:"cgraveney9@netvibes.com",gender:"Female",dni:"321-94-6332",comments:"potenti"},
      {first_name:"Victor",last_name:"McGrill",email:"vmcgrilla@last.fm",gender:"Male",dni:"826-65-8818",comments:null},
      {first_name:"Jami",last_name:"Siviter",email:"jsiviterb@china.com.cn",gender:"Female",dni:"438-99-7795",comments:null},
      {first_name:"Garnette",last_name:"McElhargy",email:"gmcelhargyc@bizjournals.com",gender:"Female",dni:"515-31-9893",comments:null},
      {first_name:"Cassy",last_name:"Fadell",email:"cfadelld@typepad.com",gender:"Female",dni:"874-99-9435",comments:null},
      {first_name:"Keen",last_name:"Woolstenholmes",email:"kwoolstenholmese@elegantthemes.com",gender:"Male",dni:"321-62-5673",comments:"pretium nisl ut volutpat sapien arcu sed"},
      {first_name:"Trudy",last_name:"Hawkeridge",email:"thawkeridgef@dion.ne.jp",gender:"Female",dni:"174-44-7707",comments:null},
      {first_name:"Justine",last_name:"Kingsnorth",email:"jkingsnorthg@themeforest.net",gender:"Female",dni:"730-54-2735",comments:"primis in faucibus orci luctus et ultrices posuere"},
      {first_name:"Lorrie",last_name:"Cotherill",email:"lcotherillh@ycombinator.com",gender:"Male",dni:"659-18-2493",comments:null},
      {first_name:"Joellen",last_name:"Leasor",email:"jleasori@jimdo.com",gender:"Female",dni:"842-74-6302",comments:"turpis integer"},
      {first_name:"Goddard",last_name:"Senior",email:"gseniorj@soup.io",gender:"Male",dni:"686-83-6535",comments:"nulla"},
      {first_name:"Herc",last_name:"De'Vere - Hunt",email:"hdeverehuntk@google.fr",gender:"Male",dni:"554-11-8274",comments:null},
      {first_name:"Karim",last_name:"Deener",email:"kdeenerl@usda.gov",gender:"Male",dni:"693-17-0162",comments:null},
      {first_name:"Wain",last_name:"Bertenshaw",email:"wbertenshawm@telegraph.co.uk",gender:"Male",dni:"315-23-8300",comments:null},
      {first_name:"Madel",last_name:"Warwick",email:"mwarwickn@cbsnews.com",gender:"Female",dni:"520-26-2071",comments:null},
      {first_name:"Chico",last_name:"Chaffin",email:"cchaffino@yelp.com",gender:"Male",dni:"131-96-9554",comments:"enim"},
      {first_name:"Leonid",last_name:"Eouzan",email:"leouzanp@gov.uk",gender:"Male",dni:"749-28-4608",comments:null},
      {first_name:"Lemmie",last_name:"Arkcoll",email:"larkcollq@cargocollective.com",gender:"Male",dni:"532-05-4615",comments:null},
      {first_name:"Lisette",last_name:"Ewbanche",email:"lewbancher@psu.edu",gender:"Female",dni:"575-93-9742",comments:null},
      {first_name:"Gayle",last_name:"Huggins",email:"ghugginss@surveymonkey.com",gender:"Male",dni:"815-80-6774",comments:null},
      {first_name:"Veda",last_name:"Crocetto",email:"vcrocettot@g.co",gender:"Female",dni:"685-93-9313",comments:"et ultrices posuere cubilia curae"},
      {first_name:"Karlen",last_name:"Pattlel",email:"kpattlelu@nature.com",gender:"Female",dni:"373-70-0651",comments:null},
      {first_name:"Warner",last_name:"Roger",email:"wrogerv@photobucket.com",gender:"Male",dni:"614-39-8717",comments:null},
      {first_name:"Nicky",last_name:"Everley",email:"neverleyw@reddit.com",gender:"Female",dni:"766-01-1665",comments:"cubilia curae nulla dapibus dolor"},
      {first_name:"Berrie",last_name:"Reavell",email:"breavellx@buzzfeed.com",gender:"Female",dni:"142-12-0423",comments:null},
      {first_name:"Roxanna",last_name:"Kleinpeltz",email:"rkleinpeltzy@indiegogo.com",gender:"Female",dni:"229-75-7786",comments:null},
      {first_name:"Helenka",last_name:"Kelleway",email:"hkellewayz@netlog.com",gender:"Female",dni:"610-87-4049",comments:null},
      {first_name:"Sioux",last_name:"Dockrell",email:"sdockrell10@qq.com",gender:"Female",dni:"493-39-0605",comments:"volutpat convallis morbi odio odio elementum eu interdum"},
      {first_name:"Van",last_name:"Begwell",email:"vbegwell11@independent.co.uk",gender:"Female",dni:"780-73-2284",comments:"gravida nisi"},
      {first_name:"Donal",last_name:"Coulling",email:"dcoulling12@github.io",gender:"Male",dni:"610-65-1704",comments:null},
      {first_name:"Bendix",last_name:"Vitler",email:"bvitler13@phpbb.com",gender:"Male",dni:"515-54-6204",comments:null},
      {first_name:"Darcy",last_name:"Gouck",email:"dgouck14@diigo.com",gender:"Male",dni:"579-70-9033",comments:null},
      {first_name:"Odelinda",last_name:"Kearns",email:"okearns15@bigcartel.com",gender:"Female",dni:"329-70-2565",comments:null},
      {first_name:"Cathy",last_name:"Dalrymple",email:"cdalrymple16@biglobe.ne.jp",gender:"Female",dni:"206-36-3609",comments:null},
      {first_name:"Esmaria",last_name:"Benley",email:"ebenley17@ameblo.jp",gender:"Female",dni:"878-20-7676",comments:null},
      {first_name:"Brandy",last_name:"Gawthrope",email:"bgawthrope18@slate.com",gender:"Male",dni:"869-47-3026",comments:null},
      {first_name:"Auberta",last_name:"Dalling",email:"adalling19@cdbaby.com",gender:"Female",dni:"477-26-5803",comments:null},
      {first_name:"Denna",last_name:"Menichino",email:"dmenichino1a@squidoo.com",gender:"Female",dni:"664-21-1159",comments:null},
      {first_name:"Ella",last_name:"McRill",email:"emcrill1b@home.pl",gender:"Female",dni:"719-65-9595",comments:null},
      {first_name:"Angela",last_name:"Melonby",email:"amelonby1c@arizona.edu",gender:"Female",dni:"790-56-3479",comments:null},
      {first_name:"Dianemarie",last_name:"Cashley",email:"dcashley1d@twitpic.com",gender:"Female",dni:"200-46-8262",comments:null}].map(item => {
        return {
          ...item,
          createdAt: new Date(),
          updatedAt: new Date(),
      };
    });

    console.log(data[0])

    return queryInterface.bulkInsert('Users', data)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
