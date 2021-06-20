var config = {
  // Refernence the mapbox style here
  style: "mapbox://styles/vanritto/ckpeq5qti0hqv17qfe1nxbpe1",
  accessToken:
    // Replace with clients accessToken
    "pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ",
  showMarkers: false,
  theme: "liberty",
  // true or false to turn 3D terrain on/off
  use3dTerrain: true,
  title: "SCROLL THE MAP TO VIEW EACH STOP ALONG THE JOURNEY.",
  // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  // byline: 'By a Digital Storyteller',
  footer:
    "Made with <a href= https://www.mapbox.com/ target=_blank>Mapbox</a> resources. Content provided by The Liberty Project.",
  // Chapter Content- use description to alter text
  // image for the image link
  // Location for camera positioning
  chapters: [
    {
      id: "overview",
      alignment: "left",
      hidden: false,
      title: "RIDE 4 FREEDOM",
      image: "./images/photo-4.JPG",
      description:
        "Join us on the journey of the fundraiser route! As you scroll through the map you will learn more about Mozambique and The Liberty Project at each stop.",
      location: {
        center: [-87.077195, 45.785168],
        zoom: 5,
        pitch: 55,
        bearing: -5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "START: Mozambique and The Liberty Project",
      image: "./images/photo-17c.jpg",
      description:
        "Thank you for joining with us to partner in Mozambique. At the beginning of this ride we are going to be leaving from Thunder Bay’s Marina park! We are excited you can join us from around the world to help women in Mozambique and get fit in the process! ",
      location: {
        center: [-89.235, 48.43437],
        zoom: 13,
        pitch: 60,
        bearing: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "slug-style-id-cont",
      alignment: "left",
      hidden: false,
      title: "START: Mozambique and The Liberty Project",
      image: "./images/photo-1.PNG",
      description:
        "If you haven’t yet registered for our virtual challenge, sign up for it through Eventbrite using the REGISTER button on the webpage where you will be brough to the My Virtual Mission portal. If you’d rather donate check out our great swag available at different levels with Donorbox. Thanks to our great team for making this happen!",
      location: {
        center: [-89.235, 48.43437],
        zoom: 13,
        pitch: 60,
        bearing: 10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-one",
      alignment: "left",
      hidden: false,
      title: "STOP 1: Working in Mozambique",
      image: "./images/photo-1c.jpg",
      description:
        "The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.",
      location: {
        center: [-88.385, 49.00186], // NIPIGON
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
      id: "stop-two",
      alignment: "left",
      hidden: false,
      title: "STOP 2: Why Mozambique?",
      image: "./images/photo-11.JPG",
      description:
        "We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.",
      location: {
        center: [-87.195, 48.795168], //Terrace Bay
        zoom: 11,
        pitch: 70,
        bearing: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "stop-three",
      alignment: "left",
      hidden: false,
      title: "STOP 3: Our Response to the Numbers",
      image: "./images/photo-19b.jpg",
      description:
        "We were the first Christian faith-based organization in Cabo Delgado, the northernmost Province of Mozambique, and now are pioneering again in Nacala, Northern Mozambique. We have a focus of working with women affected by sexual exploitation, abuse, and cultural oppression.",
      location: {
        center: [-85.580095, 48.647444], // White River
        zoom: 12,
        pitch: 70,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },

    {
      id: "stop-three-cont",
      alignment: "left",
      hidden: false,
      title: "STOP 3: Our Response to the Numbers",
      image: "./images/photo-2c.jpg",
      description:
        "We confront these issues through discipleship, basic education and vocational training and life skills. We empower each woman, working side by side with her in relationship to bring true identity and freedom bringing transformation to families and communities.",
      location: {
        center: [-85.580095, 48.647444], // White River
        zoom: 12,
        pitch: 70,
        bearing: 25,
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
      image: "./images/photo-14c.jpg",
      description:
        "The main areas that The Liberty Project works in is: Basic Health, Human Rights and Literacy Education Vocational Training, and Social Enterprise.",
      location: {
        center: [-84.88697, 48.041381], // WAWA
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
      image: "./images/photo-18c.jpg",
      description:
        "In Mozambique, over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.",
      location: {
        center: [-84.798093, 47.452679], // LAKE SUPERIOR
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
        "We have partnered with  CouldYou? Cup to help bring accessible menstrual education & management for women & girls in Northern Mozambique.                                                         “The CouldYou? Cup gives me security and confidence while using during my menstrual cycle. It’s the best way to prevent the shame that we receive from people! I choose Could You Cup!” - Giniquina 14 years. What a powerful testimony from this beautiful one.",
      location: {
        center: [-84.316667, 46.521092], // Sault Ste. Marie
        zoom: 12,
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
      id: "stop-six-cont",
      alignment: "left",
      hidden: false,
      title: "STOP 6: Health Education",
      image: "./images/photo-21.JPG",
      description:
        "We are so thankful to be able to help equip girls to manage their periods in a way that ends period shaming and keeps them in school! Thank you CouldYou? Cup for your partnership, Together we bring freedom and bright futures to precious girls in Northern Mozambqiue! #MenstruationMatters #TheLibertyProject #Pemba",
      location: {
        center: [-84.316667, 46.521092], // Sault Ste. Marie
        zoom: 12,
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
      image: "./images/photo-6c.jpg",
      description:
        "In Northern Mozambique, 45% of women are unemployed. This is why vocational training and education are a priority of The Liberty Project. As we are having to relocate to another province in Mozambique due to conflict; we will be establishing an artisan workshop in our new location; partner with us to help bring vocational training to the women we work with!",
      location: {
        center: [-83.791296, 46.300395], // Bruce Mines
        zoom: 13,
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
      image: "./images/photo-13c.jpg",
      description:
        "70% of Women suffer from PTSD in Mozambique, and with the growing civil unrest and violent conflict we are only seeing increases of this type of severe trauma. This is why we offer holistic care including pastoral counselling, so that women can work through things in a peaceful atmosphere. If you want to partner with us and see women restored and transformed, donate today!",
      location: {
        center: [-82.952829, 46.1790651], // Blind River
        zoom: 15,
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
      image: "./images/bike-1.jpg",
      description:
        "Our Board Chair is a cyclist and thought that as a challenge, wouldn't it be great to bike from her current home in Thunder Bay to her old home in Peterborough County! And thus the idea was born. Thanks to Fleming College GIS collaboration project, the student team was able to build this webpage and web mapping application to show case the challenge and help people get connected. We are excited to see the world wide reach of this fun fitness challenge and fundraiser.",
      location: {
        center: [-81.796291, 46.249662], // Espanola
        zoom: 12,
        pitch: 60,
        bearing: -52.2,
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
      image: "./images/photo-8d.jpg",
      description:
        "95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Northern Mozambique doing preventative work through empowering and educateing women to help them break the cycle of vulnerability and poverty.",
      location: {
        center: [-81.056687, 46.465716], //  SUDBURY
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
      image: "./images/photo-5c.jpg",
      description:
        "This ride has been such fun, even though it has taken a very different turn because of Covid restrictions. Our Founder Laura and Board Chair Sarah want to say a big thank you to everyone who donated, participated in the ride and shared our story with their friends and family so far!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, and see the end of exploitation of women and children in Mozambique!",
      location: {
        center: [-80.424973, 45.576305], //  Point au Baril
        zoom: 11.5,
        pitch: 71,
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
        "WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.",
      location: {
        center: [-79.7811328, 45.16831], // Parry Sound
        zoom: 13,
        pitch: 74,
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
      image: "./images/photo-20.JPG",
      description:
        "The work we do with our girls here in Pemba, Mozambique is made possible through the incredible people who give their time, energy and hearts to pour into the lives of our women. Together we make up Team Liberty as one big family. We absolutely love those who serve with us and enjoy journeying this adventure together! Consider partnering with us for this fundraiser and all year – For ongoing updates check out our Instagram @the_libertyproject",
      location: {
        center: [-78.970271, 44.531692], // KAWARTHA LAKES
        zoom: 12,
        pitch: 71,
        bearing: -30.2,
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
      image: "./images/photo-23c.jpg",
      description:
        "Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge click on one of the REGISTER buttons to register for the event on Eventbrite where you will be emailed the link to the virtual race following your registration.",
      location: {
        center: [-78.355723, 44.28345], //Market Hall
        zoom: 12,
        pitch: 65,
        bearing: -25.2,
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
      title:
        "Thank you from everyone at The Libery Project for joining us on this journey.",
      image: "./images/photo-3.JPG",
      description: "",
      location: {
        center: [-87.077195, 48.775168],
        zoom: 5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [{}],
    },
  ],
};
