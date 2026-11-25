/**
 * wedding-data.js — Customer-facing editable data layer
 * Edit this file to update couple names, bios, wedding dates, times, programme, family details, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      name: "Pushpender",
      fullName: "Pushpender Chaudhary",
      line: "S/o Smt. Reetu Devi & Sh. Vijender Kumar",
      note: "Beloved grandson of Late Smt. Leela Devi & Late Sh. Soran Singh, Village Gajdinpur, District Saharanpur (U.P.).",
      photo: "./editable/assets/groom.png",
    },
    bride: {
      name: "Ekta",
      fullName: "Ekta Chaudhary",
      line: "D/o Smt. Laxmi Devi & Sh. Sher Singh",
      note: "Of Hoshiarpur, Punjab — stepping into a lifetime of love, warmth, and shared blessings.",
      photo: "./editable/assets/bride.png",
    },
  },

  wedding: {
    dateISO: "2026-02-10T05:00:00+05:30",
    endISO: "2026-02-10T11:00:00+05:30",
    saveTheDateDay: "10",
    saveTheDateMonthYear: "February 2026",
    dateLabel: "Wednesday, 10 February 2026",
    dateShort: "10 · 02 · 2026",
    timeLabel: "Sehra Bandhi · 4:00 AM | Dep. of Barat · 5:00 AM",
    muhurthamLabel: "Wedding Ceremony · 10th Feb 2026",
    footerDateLocation: "10 · 02 · 2026 · Saharanpur (U.P.)",
  },

  venue: {
    name: "Village Gajdinpur",
    address: "P.O. Bartha Kayasth, District Saharanpur (U.P.)",
    locationShort: "Saharanpur, U.P.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gajdinpur+Bartha+Kayasth+Saharanpur+Uttar+Pradesh",
  },

  invitation: {
    sacredSymbol: "ॐ",
    hostsLine: "Late Smt. Leela Devi w/o Late Sh. Soran Singh",
    hostsMessage: "Request your gracious presence with family on the auspicious occasion of the wedding of our beloved grandson.",
    ceremonyMessage: "You are warmly invited to the auspicious occasion of the Wedding Ceremony of our children, which will be held at our residence.",
    cordialFrom: [
      { name: "Ch. Gyan Singh", detail: "" },
      { name: "Ch. Rishi Pal Singh", detail: "Retd. BSF" },
      { name: "Dr. Vijender Singh", detail: "Ex. Sarpanch Vill. Gajdinpur · Director, Cooperative Society" },
    ],
    youngStars: ["Vandana", "Vansh", "Garvit", "Devang"],
    cordially: ["Sanjeev Panwar", "Sikander Panwar", "Sukhdev Panwar", "Devender Panwar"],
    rsvp: "The Entire Panwar Family",
    contacts: ["9456981006", "9467291293", "9896074529"],
  },

  programme: [
    {
      day: "Monday, 08th Feb 2026",
      events: [
        { name: "Ladies Sangeet", time: "7:00 PM" },
      ],
    },
    {
      day: "Tuesday, 09th Feb 2026",
      events: [
        { name: "Havan", time: "7:00 AM" },
        { name: "Mandha", time: "9:00 AM" },
        { name: "Lunch", time: "11:00 AM" },
      ],
    },
    {
      day: "Wednesday, 10th Feb 2026",
      events: [
        { name: "Sehra Bandhi", time: "4:00 AM" },
        { name: "Dep. of Barat", time: "5:00 AM" },
      ],
    },
  ],

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
  },
};
