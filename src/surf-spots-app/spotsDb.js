import byron from "./pictures/byron.webp";
import desertPoint from "./pictures/desertPoint.jpeg";
import montañita from "./pictures/Ecuador.jpeg";
import france from "./pictures/france.avif";
import jBay from "./pictures/JBay.png";
import malibu from "./pictures/Malibu.jpeg";
import marroco from "./pictures/marroco.png";
import spain from "./pictures/san-sebastian.jpeg";
import teahupoo from "./pictures/teahupoo.jpeg";
import uluwatu from "./pictures/uluwatu.png";

export const spots = [
  {
    id: 1,
    location: "Byron Bay, Australia",
    foot: "Whites Beach",
    description: `For surfers, the "Bay" part isn't what defines Byron, it's more the Cape, which does in fact stick further out into the Pacific than any other piece of Aussie mainland. Naturally enough, there's a considerable quantity of surf spots in the area.

    On the tip of the Cape there's Watego's and Little Watego's. Kind of a combination reef/sand pointbreak, it produces slow rights.
    
    From there the whole thing opens up into The Pass, Byron's serious point. A long, winding right, it's dependent on sand distribution but usually starts close to a rock outcrop and peels down toward Clark's Beach over a half mile away. Often the wave gets hollower as it runs down the line. Competition for set waves on good days isn't so much intense as almost impossible.
    
    Opposite the town center there lies the remains of a wrecked ship, which can create decent sandbars.`,
    continent: "Oceania",
    img: byron,
  },
  {
    id: 2,
    location: "Lombok, Indonesia",
    foot: "desert Point",
    description: "Desert Point is hands-down one of the world's best waves, and also one of the world's most fickle, demanding a giant groundswell before it even thinks about breaking and producing those ultra-long, mesmerizing lefthand barrels. Many feel that Deserts is better than G-Land, and better than any left in the Mentawai Islands. The wave is severely tide-sensitive -- during a big swell at high tide it can be dead flat, and on the next low tide it can be double-overhead and absolutely shacking over shallow and razor-sharp coral reef.",
    continent: "Asia",
    img: desertPoint,
  },

  {
    id: 3,
    location: "Montañita, Ecuador",
    foot: "Main Beach",
    description: "Ecuador and the Galapagos Islands offer contrasting surfing environments. The Galapagos are quiet, remote quite fickle and rocky whilst Ecuador can be party-mad and offers a multitude of accessible sandy beach barrels through to long points and reefs. They do however share the same exposure to both north and south swells; both will suffer decay before reaching their shores but what does arrive, as a consequence is of high quality, losing much of the short period associated with locally generated swells. November to march being the primary swell season. Ecuador's surfing is focused around the northern reaches of the country and the famous surf town of Atacames. Water temperatures between the Galapagos and Ecuador are also divergent (20-25ºC or 68-77ºF), the former being in the path of the Humboldt Current and a good few degrees cooler. Tradewinds blow from a southerly direction all year, swinging more easterly for the Galapagos and westerly for Ecuador, though mornings are typically offshore on the mainland.",
    continent: "America",
    img: montañita,
  },

  {
    id: 4,
    location: "Hossegor, France",
    foot: "La Graviere",
    description: "In the heart of Hossegor lies one of the world's top-rated beachbreaks, Graviere. This is the crowning glory of a region that boasts a 225 km stretch of golden sand from the mouth of the Gironde in the north to Anglet in the south. In decent westerly swells, La Graviere produces serious, heavy, hollow, sand-charged pits up to 12-foot that take no prisoners. Summer sees everyone paddling out in fun Hossegor surf, and boogies playing in the shoredump, but as the seasons change and the swells increase, the numbers begin to drop off. Rips can be arm-destroying, the shorebreak board-destroying, and the closeouts soul-destroying. But also expect some of the best, most accessible barrels you will ever experience - if you come in the autumn.",
    continent: "Europe",
    img: france,
  },
  {
    id: 5,
    location: "Jeffreys Bay, South Africa",
    foot: "J-Bay",
    description: "Supers is 300 meters of perfection, with Boneyards and Impossibles as the two bookends. One of the most famous waves globally, J-Bay is still a Mecca for surfers, and your first proper wave at Supers will remain with you forever. However, it is a challenging wave that’s not to be toyed with. Bad things happen during most winter seasons: broken bones, severe reef cuts and other more serious injuries.",
    continent: "Africa",
    img: jBay,
  },

  {
    id: 6,
    location: "Baja Malibu, Mexico",
    foot: "Baja-Malibu break",
    description: "A quick and powerful escape from San Diego, Baja Malibu ranks up there as one of Baja's premier waves and can be world-class when everything aligns. This long stretch of beach loves a solid, long-period NW swell or combination of NW and S/SW swell. And thanks to the offshore bathymetry, those long winter lines get broken up and funnel in as juicy mega-peaks. Additionally, when offshore wind blows, Baja Malibu can turn into an anomaly of apexes compared to nearby Baja breaks. However, just as easily, onshore winds can shred the surf to uselessness.",
    continent: "America",
    img: malibu,
  },

  {
    id: 7,
    location: "Taghazout, Marroco",
    foot: "Taghazout",
    description: `Mysteries is the wave on the northern back beach of Anchor Point. A dirt area atop the cliffs offers camping and in peak winter holiday season can filled with more than fifty campervans with license plates from Poland to Portugal. Anchor Point is walking distance to the south, Killer's is walking distance and visible to the north.

    The wave itself is one of the few waves in the area that work on higher tides. A rock shelf reef that is exposed at the lowest tides, it offers a rippable fun right similar to Lower Trestles, and a left that can be decent and a nice change from all the right points you've been surfing. Keep an eye on it in the afternoons, as the crowd can ebb and flow and the tide changes can have it working at unexpected times, so be ready for the quick run out there.
    
    To reach it, head down the trails on the cliffs and time a jump off from the rocks, then paddle across the lineup and around the shoulder. The beginners like to surf it, but the more experienced can pick off the gems by marking your lineup and reading the shifts.`,
    continent: "Africa",
    img: marroco,
  },
  {
    id: 8,
    location: "San Sebastian, Spain",
    foot: "Main Beach",
    description: "Playa de la Zurriola, set in the heart of this urban setting, is a quality beachbreak. The sandy beach has a series of peaks that shift with the tides and swells. At the western end, a long stone jetty follows the river out into the bay. The eastern edge of the bay sees sandbanks form especially well, a righthander being the most consistent.",
    continent: "Europe",
    img: spain,
  },
  {
    id: 9,
    location: "Teahupoo, Tahiti",
    foot: "The Millennium Wave",
    description: `There can be only one "world's heaviest wave", and that title rests soundly with the wave at Teahupo'o (don't make saying it more difficult than it need be; it's pronounced Cho-poo). Along the southern end of the smaller of Tahiti's two extinct volcanoes, Tahiti Iti, the tiny town of Teahupo'o is where the pavement stops. Surfers have sampled the South Pacific island since the early 1960s, but prior to the mid-'80s, surfers had no reason to venture that far, especially considering the wealth of hollow reef breaks encircling the rest of the island. Consider that all Bruce Brown and crew got out of Tahiti was "Ins and Outs", a piddly mushburger that bounces off a bulkhead and can be ridden seaward. But one day, a few locals ventured out on a small swell and found that the wave at the end of the road was within the realm of possibility.

    Physically, nothing has changed since then, but with the increased attention the wave has stirred, Teahupo'o has become a well-trod yet still undercover surf destination.`,
    continent: "Oceania",
    img: teahupoo,
  },
  {
    id: 10,
    location: "Bali, Indonesia",
    foot: "Uluwatu beach",
    description: "Uluwatu is actually a series of breaks on the southwest tip of the Bukit Peninsula: The Racetrack, The Peak, Temples, Outside Corner and The Bombie. With all of these breaks to choose from, Uluwatu is an ultra-consistent spot. Depending on the tide and swell size, any of these breaks will usually be firing at one point during the day. Generally, due to the access through the cave and the strong currents, the best possible conditions for larger swells are very low tides. Smaller and medium swells work well on all tides. During smaller swells, look for barrels and peaky surf on the higher tides at The Peak.",
    continent: "Asia",
    img: uluwatu,
  },
];
