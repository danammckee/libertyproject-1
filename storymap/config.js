var config = {
  style: "mapbox://styles/vanritto/ckpeq5qti0hqv17qfe1nxbpe1",
  accessToken:
    "pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  showPopup: true,
  theme: "liberty",
  use3dTerrain: false,
  // title: 'The Title Text of this Story',
  // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  // byline: 'By a Digital Storyteller',
  footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "overview",
      alignment: "left",
      hidden: false,
      title: "TITLE / OVERVIEW OF ROUTE - ",
      image: "./images/photo-9.JPG",
      description: "",
      location: {
        center: [-87.077195, 45.785168],
        zoom: 5,
        pitch: 55,
        bearing: -5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          // layer: 'stops-along-route',
          // opacity: 0,
          //     layer: 'layer-name',
          //     opacity: 1,
          //     duration: 5000
        },
      ],
      onChapterExit: [
        // {{}
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "START: Mozambique and The Liberty Project",
      // label: "<h1/>START</h1>",
      image: "./images/photo-4.JPG",
      description:
        "NEEDS NEW WORDS! The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.",
      location: {
        center: [-89.21674, 48.43437],
        zoom: 13,
        pitch: 60,
        bearing: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {},
        // {
        //     layer: 'stops-along-route',
        //     opacity: 1
        //     // duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "stop-one",
      alignment: "left",
      hidden: false,
      title: "STOP 1: Working in Mozambique",
      image: "./images/photo-2.PNG",
      description:
        "The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.",
      location: {
        center: [-88.351609, 49.00186], // NIPIGON
        zoom: 11,
        pitch: 60,
        bearing: 20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          // layer: 'stops-along-route',
          // opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "stop-two",
      alignment: "left",
      hidden: false,
      title: "STOP 2: Why Mozambique?",
      image: "./images/photo-3.PNG",
      description:
        "We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.",
      location: {
        center: [-87.077195, 48.785168], //Terrace Bay
        zoom: 11,
        pitch: 70,
        bearing: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          // layer: 'stops-along-route',
          // opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "stop-three",
      alignment: "left",
      hidden: false,
      title: "STOP 3: Our Response to the Numbers",
      image: "./images/photo-1.PNG",
      description:
        "We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.",
      location: {
        center: [-85.550095, 48.647444], // White River
        zoom: 11,
        pitch: 70,
        bearing: 50,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-four",
      alignment: "left",
      hidden: false,
      title: "STOP 4: What Areas Are We Focusing On?",
      image: "./images/photo-2.PNG",
      description:
        "The main areas that the Liberty Project works in is: Education, Health education, vocational training, trauma therapy.",
      location: {
        center: [-84.84697, 48.041381], // WAWA
        zoom: 12,
        pitch: 60,
        bearing: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-five",
      alignment: "left",
      hidden: false,
      title: "STOP 5: Education",
      image: "./images/photo-3.PNG",
      description:
        "In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.",
      location: {
        center: [-84.748093, 47.472679], // LAKE SUPERIOR
        zoom: 12,
        pitch: 60,
        bearing: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-six",
      alignment: "left",
      hidden: false,
      title: "STOP 6: Health Education",
      image: "./images/photo-7.JPG",
      description:
        "We have partnered with CouldYou? Cup to help bring accessible menstrual education & management for women & girls in Northern Mozambique.                                                         “The Could You Cup gives me security and confidence while using during my menstrual cycle. It’s the best way to prevent the shame that we receive from people! I choose Could You Cup!” - Giniquina 14 years. What a powerful testimony from this beautiful one. We are so thankful to be able to help equip girls to manage their periods in a way that ends period shaming and keeps them in school! Thank you CouldYou? Cup for your partnership, Together we bring freedom and bright futures to precious girls in Northern Mozambqiue! #menstruationmatters #TheLibertyProject #Pemba",
      location: {
        center: [-84.286667, 46.521092], // Sault Ste. Marie
        zoom: 11,
        pitch: 60,
        bearing: 20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-seven",
      alignment: "left",
      hidden: false,
      title: "STOP 7: Vocational Training",
      image: "./images/photo-6b.JPG",
      description:
        "In Northern Mozambique, 45% of women are unemployed. This  is why vocational training and education are a priority of the Liberty Project. As we are having to move to another province in Mozambique due to the conflict; partner with us to help bring vocational training to the women we work with! You can also support this through the Liberty Market Place as more of their projects are featured.",
      location: {
        center: [-83.781296, 46.320395], // Bruce Mines
        zoom: 11,
        pitch: 60,
        bearing: -20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-nine",
      alignment: "left",
      hidden: false,
      title: "STOP 8: Trauma Therapy",
      image: "./images/photo-3.PNG",
      description:
        "70% of Women suffer from PTSD in Mozambique, and with the growing civil unrest and violent conflict we are only seeing increases of this type of severe trauma. This is why we offer holistic care including counselling, so that women can work through things in a peaceful atmosphere. If you want to partner with us and see women restored and transformed, donate today!",
      location: {
        center: [-82.951829, 46.183651], // Blind River
        zoom: 12,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-ten",
      alignment: "left",
      hidden: false,
      title: "STOP 9: Why the Fundraiser?",
      image: "./images/photo-1.PNG",
      description:
        "Our Board Chair is a cyclist and thought as a challenge wouldn't it be great to bike from her current home in Thunder Bay to her old home in Peterborough County. And thus idea was born. Thanks to Fleming College's collaboration project student team was able to build this webpage and mapping application to show case the challenge and help people get connected. We are excited to see the world wide reach of this fun fitness challenge and fundraiser.",
      location: {
        center: [-81.776291, 46.259662], // Espanola
        zoom: 12,
        pitch: 60,
        bearing: -50.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-eleven",
      alignment: "left",
      hidden: false,
      title: "STOP 10: End Exploitation",
      image: "./images/photo-2.PNG",
      description:
        "95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.",
      location: {
        center: [-81.056687, 46.475716], //  SUDBURY
        zoom: 11,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-twelve",
      alignment: "left",
      hidden: false,
      title: "STOP 11: Bringing Hope",
      image: "./images/photo-3.PNG",
      description:
        "This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).",
      location: {
        center: [-80.424973, 45.656305], //  Point au Baril
        zoom: 11,
        pitch: 70,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-thirteen",
      alignment: "left",
      hidden: false,
      title: "STOP 12: Moving",
      image: "./images/photo-22b.jpg",
      description:
        "WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills..",
      location: {
        center: [-79.738328, 45.17431], // Parry Sound
        zoom: 12,
        pitch: 70,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-fourteen",
      alignment: "left",
      hidden: false,
      title: "STOP 13: Partner With Us",
      image: "./images/photo-20b.jpg",
      description:
        "Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration..",
      location: {
        center: [-78.980271, 44.535692], // KAWARTHA LAKES
        zoom: 11,
        pitch: 65,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-fifteen",
      alignment: "left",
      hidden: false,
      title: "FINISH: Thank You!",
      image: "./images/photo-3.PNG",
      description:
        "NEED OTHER WORDS! Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.",
      location: {
        center: [-78.319723, 44.30345], //Market Hall
        zoom: 11,
        pitch: 60,
        bearing: -20.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "overview-2",
      alignment: "left",
      hidden: false,
      title: "TITLE / OVERVIEW OF ROUTE - ",
      image: "./images/photo-1.PNG",
      description: "",
      location: {
        center: [-87.077195, 48.785168],
        zoom: 5.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          //   layer: "stops-along-route",
          //   opacity: 0,
          //     layer: 'layer-name',
          //     opacity: 1,
          //     duration: 5000
        },
      ],
      onChapterExit: [
        {},
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
  ],
};
