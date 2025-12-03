export interface EventType {
  id: number;
  title: string;
  slug: string;
  tracking: string;
  image: string;
  date: string;
  time: string;
  content: string | string[];
  desc: string;
}

export const highlightedEventId = 4; 

export const EVENTS = [
  {
    id: 1,
    title: "Explore GOA",
    subtitle: "Exclusive Dinner",
    tracking: "explore_goa",
    slug: "be-the-first-to-explore-goa",
    date: "Tuesday, 11 November 2025",
    time: "11:00 AM",
    image: "/events/unveiling-content.jpeg",
    content: "/events/unveiling-content.jpeg",
    homedesc: `Be the First to Explore GOA. Step into an evening where modern design meets the timeless allure of nature.`,
    desc: `Be the First to Explore GOA<br/>
          Step into an evening where modern design meets the timeless allure of nature.<br/> <br/> 

          Immerse yourself in exclusive live performances by <b>Natasya Elvira</b> (19.00 – 20.00 WIB)<br/>
          and <b>Herjunot Ali</b> (21.00 – 22.00 WIB).<br/><br/>

          <b>Live Performance — 11.11</b><br/>
          <b>IDR 599.000 / pax</b><br/>
          <i>RSVP Only | Limited Seats Available</i>`,
  },
  {
    id: 2,
    title: "CAVE PARTY AT GOA",
    subtitle: "Music & Vibes",
    tracking: "cave_party",
    slug: "cave-party-at-goa",
    date: "Friday, 14 November 2025",
    time: "Start from 21.00 WIB",
    image: "/events/cave-party.jpeg",
    content: "/events/cave-party.jpeg",
    homedesc: `A night of music, lights, and energy inside the iconic cave of Goa Saya.`,
    desc: `Get ready for an unforgettable <b>Cave Party at Goa Saya</b> — a night filled with lights, beats, and the best crowd in town.<br/><br/>

          Enjoy an exclusive live performance by <b>DJ Nuel Ante</b>. <br/><br/>

          <b>Special Offer:</b> Grab your <b>Cave Set Menu</b> and enjoy <b>3 Tequila Shots</b><br/><br/>

          <b>Event Details</b><br/>
          Date: Friday, 14 November 2025<br/>
          Time: Start from 21.00 WIB<br/><br/>

          <i>Limited Spots Available</i>`
},
  {
    id: 3,
    title: "ARABIAN NIGHT AT GOA",
    subtitle: "Shisha & Warm Lights",
    tracking: "arabian_night",
    slug: "arabian-night-at-goa",
    date: "Thursday, 20 November 2025",
    time: "Start from 18.00 WIB",
    image: "/events/arabian-night.jpeg",
    content: "/events/arabian-night.jpeg",
    homedesc: `Step into an intimate night of shisha, warm lights, and cozy ambience inside Goa Saya.`,
    desc: `Experience an enchanting <b>Arabian Night at GoaSaya</b> — an evening of shisha, soft lights, and warm desert-inspired ambience.<br/><br/>

          Relax and unwind as you enjoy the charm of our cave-style venue filled with glowing lights and calming music.<br/><br/>

          <b>Event Details</b><br/>
          Date: Thursday, 20 November 2025<br/>
          Time: Start from 18.00 WIB<br/><br/>

          <b>IDR 599.000 / Hookah Pipe</b><br/>
          <i>RSVP Only | Limited Spots Available</i>`
  },
  {
    id: 4,
    title: "North Pole Christmas",
    subtitle: "Festive Christmas Dining",
    tracking: "north_pole_christmas",
    slug: "north-pole-christmas-at-goa-saya",
    date: "11 – 30 December 2025",
    time: "All Day (4 Dining Sessions)",
    image: "/events/northpole/01.jpeg",
    content: ["/events/northpole/01.jpeg", "/events/northpole/02.png", "/events/northpole/03.png", "/events/northpole/04.png", "/events/northpole/06.jpg", "/events/northpole/07.jpeg"],
    homedesc: `A festive journey filled with holiday warmth, exquisite dining, and enchanting entertainment.`,
    desc: `
      From <b>11 – 30 December</b>, indulge in an exclusive <b>Festive Set Menu starting from IDR 699.000++</b> — crafted to bring the warmth and wonder of the holiday season to your table.<br/><br/>

      Enjoy daily live entertainment featuring:<br/>
      🎷 Solo Saxophone<br/>
      🎄 Christmas Jazz<br/>
      🎸 Live Band<br/>
      💃 Lighting Dancer<br/>
      🎧🔥 LIVE DJ<br/><br/>

      <b>Dining Time (2 Hours Each Session)</b><br/>
      1️⃣ 11:00 – 13:00<br/>
      2️⃣ 14:00 – 16:00<br/>
      3️⃣ 17:00 – 19:00<br/>
      4️⃣ 20:00 – 22:00<br/><br/>

      Secure your preferred time slot before it’s fully booked.<br/>
      Celebrate the season with us and make this Christmas truly magical! 🎁✨<br/><br/>

      <i>RSVP Only | Limited Seats Available</i>
    `,
  }

];
