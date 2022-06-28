export type NavbarListItemsDataType = {
  filter: string;
  title: string;
  titleEn: string;
  item: Array<string> | null;
  itemEn: Array<string> | null;
};
export type NavbarListDataType = {
  filter: string;
  lable: string;
  labelEn: string;
  data: Array<NavbarListItemsDataType> | null;
};
const NavbarListItemsData: Array<NavbarListDataType> = [
  {
    filter: "mobile",
    lable: "گوشی موبایل",
    labelEn: "Mobile Phone",
    data: [
      {
        filter: "apple",
        title: "اپل",
        titleEn: "apple",
        item: null,
        itemEn: null,
      },
      {
        filter: "samsung",
        title: "سامسونگ",
        titleEn: "samsung",
        item: null,
        itemEn: null,
      },
      {
        filter: "xiaomi",
        title: "شیائومی",
        titleEn: "xiaomi",
        item: null,
        itemEn: null,
      },
      {
        filter: "nokia",
        title: "نوکیا",
        titleEn: "nokia",
        item: null,
        itemEn: null,
      },
      {
        filter: "huawei",
        title: "هوآوی",
        titleEn: "huawei",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "laptop",
    lable: "لپتاپ",
    labelEn: "Laptop",
    data: [
      {
        filter: "laptopApple",
        title: "لپتاپ اپل",
        titleEn: "apple laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopLenovo",
        title: "لپتاپ لنوو",
        titleEn: "lenovo laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopMSI",
        title: "لپتاپ ام اس آی",
        titleEn: "msi laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopAsus",
        title: "لپتاپ ایسوس",
        titleEn: "asus laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopHuawei",
        title: "لپ تاپ هوآوی",
        titleEn: "huawei laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopDell",
        title: "لپ تاپ دل",
        titleEn: "dell laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopHP",
        title: "لپ تاپ اچ پی",
        titleEn: "hp laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopSony",
        title: "لپ تاپ سونی",
        titleEn: "sony laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopParts",
        title: "قطعات لپ تاپ",
        titleEn: "laptop parts",
        item: ["هارد لپتاپ", "رم لپتاپ"],
        itemEn: ["hard laptop", "ram laptop"],
      },
      {
        filter: "laptopEx",
        title: "لوازم جانبی کامپیوتر و لپتاپ",
        titleEn: "laptop and computer accessories",
        item: [
          "فلش مموری",
          "موس و کیبرد",
          "مانیتور",
          "کیس های سمبل شده",
          "کابل",
          "کیف هارد",
          "کیس",
          "کول پد لپتاپ",
          "باتری و شارژ لپتاپ",
          "آل این وان",
        ],
        itemEn: [
          "memory",
          "mouse & keyboard",
          "monitor",
          "Symbolized cases",
          "cable",
          "hard drive bag",
          "case",
          "cool pad laptop",
          "laptop battery and charger",
          "all in one",
        ],
      },
    ],
  },
  {
    filter: "computerParts",
    lable: "قطعات کامپیوتر",
    labelEn: "Computer Parts",
    data: [
      {
        filter: "CPU",
        title: "پردازنده مرکزی کامپیوتر",
        titleEn: "CPU",
        item: null,
        itemEn: null,
      },
      {
        filter: "RAM",
        title: "رم کامپیوتر",
        titleEn: "RAM",
        item: null,
        itemEn: null,
      },
      {
        filter: "GPU",
        title: "کارت گرافیک",
        titleEn: "GPU",
        item: null,
        itemEn: null,
      },
      {
        filter: "hard&&SSD",
        title: "هارد و اس اس دی",
        titleEn: "hard & ssd",
        item: null,
        itemEn: null,
      },
      {
        filter: "mindboard",
        title: "مادربرد",
        titleEn: "mainboard",
        item: null,
        itemEn: null,
      },
      {
        filter: "powerSupply",
        title: "منبع تغذیه",
        titleEn: "power supply",
        item: null,
        itemEn: null,
      },
      {
        filter: "CDWriter",
        title: "درایو نوری",
        titleEn: "CD writer",
        item: null,
        itemEn: null,
      },
      {
        filter: "expansionCard",
        title: "کارت توسعه",
        titleEn: "expansion card",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "tablet",
    lable: "تبلت",
    labelEn: "Tablet",
    data: [
      {
        filter: "tabletApple",
        title: "تبلت اپل",
        titleEn: "apple tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletSamsung",
        title: "تبلت سامسونگ",
        titleEn: "samsung tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletHuawei",
        title: "تبلت هوآوی",
        titleEn: "huawei tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletLenovo",
        title: "تبلت لنوو",
        titleEn: "lenovo tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletMicrosoft",
        title: "تبلت میاکروسافت",
        titleEn: "microsoft tablet",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "smartwatch",
    lable: "مچ بند و ساعت هوشمند",
    labelEn: "Smart Watch",
    data: [
      {
        filter: "smartwatchApple",
        title: "مچ بند و ساعت اپل",
        titleEn: "apple smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchSamsung",
        title: "مچ بند و ساعت سامسونگ",
        titleEn: "samsung smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchXiaomi",
        title: "مچ بند و ساعت شیائومی",
        titleEn: "xiaomi smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchHuawei",
        title: "مچ بند و ساعت هوآوی",
        titleEn: "huawei smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartWatch",
        title: "مچ بند و ساعت",
        titleEn: "smart watch",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "security",
    lable: "سیتسم های امنیتی و نظارتی",
    labelEn: "security & survelliance systems",
    data: [
      {
        filter: "CCTV",
        title: "دوربین مداربسته",
        titleEn: "CCTV",
        item: null,
        itemEn: null,
      },
      {
        filter: "AlarmPlaces",
        title: "دزدگیر اماکن",
        titleEn: "alarm places",
        item: null,
        itemEn: null,
      },
      {
        filter: "DVR",
        title: "دستگاه دی وی آر",
        titleEn: "DVR",
        item: null,
        itemEn: null,
      },
      {
        filter: "automaticDoors",
        title: "درب اتوماتیک و کرکره برقی",
        titleEn: "automatic doors & electric shutters",
        item: null,
        itemEn: null,
      },
      {
        filter: "gate&&Barries",
        title: "گیت و راه بند",
        titleEn: "gate & barries",
        item: null,
        itemEn: null,
      },
      {
        filter: "wireless",
        title: "بیسیم",
        titleEn: "wireless",
        item: null,
        itemEn: null,
      },
      {
        filter: "cordless",
        title: "گوشی تلفن بیسیم و باسیم",
        titleEn: "cordless & coordless telephone",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "gameConsole",
    lable: "کنسول بازی",
    labelEn: "game console",
    data: [
      {
        filter: "playstation&&Xbox",
        title: "پلی استیشن و ایکس باکس",
        titleEn: "playstation & xbox",
        item: null,
        itemEn: null,
      },
      {
        filter: "games",
        title: "بازی ها",
        titleEn: "games",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "officeMachine",
    lable: "ماشین های اداری",
    labelEn: "office machines",
    data: [
      {
        filter: "printer",
        title: "پرینتر",
        titleEn: "printer",
        item: null,
        itemEn: null,
      },
      {
        filter: "fax",
        title: "فکس",
        titleEn: "fax",
        item: null,
        itemEn: null,
      },
      {
        filter: "scaner",
        title: "اسکنر",
        titleEn: "scaner",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "audioEquipment",
    lable: "تجهیزات صوتی",
    labelEn: "audio equipment",
    data: [
      {
        filter: "microphone",
        title: "میکروفون",
        titleEn: "microphone",
        item: null,
        itemEn: null,
      },
      {
        filter: "speaker",
        title: "اسپیکر بلوتوثی و باسیم",
        titleEn: "bluetooth & wired speaker",
        item: null,
        itemEn: null,
      },
    ],
  },
];

export { NavbarListItemsData };
