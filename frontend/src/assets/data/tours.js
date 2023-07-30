import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Amazing Andaman",
    city: "Port Blair",
    address: 'Dollygunj, Port Blair, Andaman and Nicobar Islands, Port Blair, India',
    distance: 300,
    price: 999,
    maxGroupSize: 10,
    desc: "Arrive Port Blair ---> Cellular Jail ---> Light and Sound Show On arrive at Port Blair airport, meet our representative and get escorted to the hotel.  Check-in at the hotel and relax. Afterwards, proceed to Cellular Jail (National Memorial). At evening, we move for the Light and Sound Show at Cellular Jail where the saga of the freedom struggle will be brought alive. Overnight stay at the hotel.",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
      {
        name: "Riya Agarwal",
        rating: 4.2,
      },
      {
        name: "Poonam Goswami",
        rating: 3.8
      },
      {
        name: "Venugopal Iyer",
        rating: 4.8
      }
    ],
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Super Singapore",
    city: "Singapore",
    distance: 400,
    address: "Hotel IBIS Macpherson (Standard) / Grand Pacific (Deluxe) / Grand Copthorone Waterfront (Premium) or similar in Singapore",
    price: 999,
    maxGroupSize: 8,
    desc: "Welcome to Singapore! Upon arrival at the Changi International Airport, clear your immigration. You will be transferred to the hotel (check in after 1400 hrs). Rest of the day is at leisure.",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Maldives Holidays",
    city: "Maldives",
    address: 'Alimatha Aqatic Resort or similar in Maldives',
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Upon arrival in Male, you will be transferred to your resort. Check in at the hotel (standard 1400 hrs). Enjoy the rest of the day at leisure.",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Char Dham Yatra",
    city: "Haridwar",
    address: "Hotel Udhman Grand Orchid or similar in Haridwar",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Arrive New Delhi and we'll drive to Haridwar. On arrival at Haridwar, check in to your hotel. In the evening, proceed to Har Ki Pauri to enjoy Ganga Aarti on the banks of Ganges. Dinner and Overnight stay at Haridwar.Note – Tourists coming down from other cities to reach Delhi latest by 10:00 hrs Delhi: Vehicle leaves from Pick up point: 11:00 hrs",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Explore Bali-Indonesia",
    city: "Bali",
    address: "Hotel Bedrock (Deluxe) / Paradiso (Premium) or similar in Kuta",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Arrival in Bali --> Upon arrival at the Ngurah Rai, Bali International Airport, meet & greet by our local guide who lead you to the parking area to board on vehicle for your transfer to your hotel. It takes about 20 minutes’ drive from airport to your hotel or more depending on the traffic. --> Upon arrival at the hotel, directly check in and freshen up.",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Thailand-Pattaya-Bangkok",
    city: "Bangkok",
    address: "Golden Beach hotel  (Standard) / A-One New Wing Pattaya (Deluxe) / The Zign Hotel (Premium).",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Arrive at Bangkok. Transfer to Pattaya. Visit Alcazar Show (SIC basis) ---> Welcome to Thailand! ---> Upon arrival at the airport, pick up from airport and transfer to your hotel. Check in at hotel (standard time approx 1400 hrs). ---> In the evening we visit the Alcazar show. The Alcazar show is one of the most anticipated shows where professional performers are dancing in stunning costumes and millions of Thai Baht are used to apply colorful, complicated light effects and modern stage technology into creating the most extraordinary art product for all of its audiences.",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "South African Grandeur",
    city: "Capetown",
    address:"Hotel Cresta Grande or similar in Cape Town",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Fly to Capetown. ---> Welcome to South Africa. ---> On arrival at Capetown you will be greeted by local representative outside the baggage hall and proceed to the hotel (Standard Check-in time is 1500hrs).",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Kerala - Backwaters in Kerala",
    city: "Kerala",
    address: "Standard - Oxygen Resort or Similar Deluxe - The World Backwater / Punnamada Backwater Resorts or Similar Premium - Lake Canopy / Ramada or Similar",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Arrival Kochi on to Alleppey (90 Kms/3hrs) ---> Welcome to your Kochi, popularly known as “THE QUEEN OF ARABIAN SEA”. Upon arrival at the Kochi international airport / Ernakulam Railway Station start on your journey to the hotel in Alleppey. Alappuzha (Alleppey) is famous as ‘the Venice of the East’. ---> On arrival check-in at hotel and relax for a while. Overnight stay in Alleppey",
    reviews: [
      {
        name: "Ram Kumar",
        rating: 4.6,
      },
    ],
    photo: tourImg08,
    featured: false,
  },
  
];

export default tours;
