import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

const sections = [
  'Do',
  'See',
];

const BucketList = () => (
  <Main>
    <Helmet title="Bucket List" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Bucket List</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <div className="education">
        <div className="link-to" id="do" />
        <div className="title">
          <h3>Do</h3>
        </div>
        • <s>Skydiving at 18k feet</s><br/>
        • <s>Bungee Jumping at 150m</s><br/>
        • <s>Run with the bulls at San Fermin</s><br/>
        • Swim with sharks<br/>
        • Swim with dolphins<br/>
        • <s>Swim with manta rays</s><br/>
        • Fly in a hot air balloon<br/>
        • Parasail at >150m<br/>
        • <s>Whitewater rafting at >7 level rapids</s><br/>
        • <s>Sail a boat</s><br/>
        • Snowboard a black diamond<br/>
        • <s>Run a half marathon</s><br/>
        • Run a marathon<br/>
        • Finish a triathalon<br/>
        • Toboggan<br/>
        • Climb Mount Kilimanjaro<br/>
        • Walk on hot coals<br/>
        • <s>Catch an 80pound fish</s><br/>
        • <s>Find gold</s><br/>
        • Get published as an author<br/>
        • Visit the White House<br/>
        • Go to the Super Bowl<br/>
        • <s>Go to an AFL Grand Final</s><br/>
        • <s>Go to a World Cup Game</s><br/>
        • Go to a World Series Game<br/>
        • Start a chariry<br/>
        • Donate >$10mil to the underprivileged<br/>
        • Spend a Week at a Silent Temple<br/>
        • Give a TED talk<br/>
        • <s>Make a prime-time TV appearance as an actor</s><br/>
        • Make a prime-time TV appearance as a backup dancer<br/>
        • Spar With a Pro Boxer<br/>
        • Play off a -1 golf handicap<br/>
        • <s>Make a hole in one</s><br/>
        • <s>Eat no food for 3 full days</s><br/>
        • Eat no food for 7 full days<br/>
        • <s>30 straight days of eating only McDonalds</s><br/>
        • <s>30 straight days of volunteering at different charities</s><br/>
        • <s>30 straight days without complaining</s><br/>
        • <s>30 straight days without sugar</s><br/>
        • <s>Get tattooed by a Monk</s><br/>
        • <s>Rave at the Ministry of Sound in London</s><br/>
        • <s>Rescue an animal</s><br/>
        • Drive a Bugatti<br/>
        • Go deep sea in a Submarine<br/>
        • Sleep in the Driskill Hotel<br/>
        • Memorize every country in the world<br/>
        • Party in Goa<br/>
        • Party in Ibiza<br/>
        • <s>Anzac Day in Gallipoli</s><br/>
        • <s>Songkran Water Festival in Thailand</s><br/>
        • <s>St Patrick's Day in Ireland</s><br/>
        • Carnival in Brazil<br/>
        • <s>Oktoberfest in Germany</s><br/>
        • <s>La Tomatina in Spain</s><br/>
        • Cannes film festival in France<br/>
        • Burning man in USA<br/>
        • <s>Ha Long Bay in Vietnam</s><br/>
        • <s>Full moon party in Koh phangan</s><br/>
        • Día de los Muertos in Mexico<br/>
        • <s>Floating Lantern festival in Thailand</s><br/>
        • <s>Temples of Angkor in Cambodia</s><br/>
        • <s>Party in Freetown Christiania in Copenhagen</s><br/>
        • Hike the Wadi Rum Desert in Jordan<br/>
        • <s>Climb the Eiffel Tower</s><br/>
        • <s>Swim the Great Barrier Reef</s><br/>
        • Safari the Serengeti in Tanzania<br/>
        • Ski the Swiss Alps in Switzerland<br/>
        • Hike the Inca Trail in Peru<br/>
        • Hike Cinque Terre in Italy<br/>
        • Sit on the Edge of Preikestolen in Norway<br/>
        • <s>Snorkel the Underwater Museum in Mexico</s><br/>
        • Eat in the Underwater Hotel in Maldives<br/>
        • <s>Tube down the Mekong River in Laos</s><br/>
        • Float in the Dead Sea in Jordan/Israel<br/>
        • Watch a Sumo Wrestling match in Japan<br/>
        • <s>Drink monkey poo coffee in Bali</s><br/>
        • Stay in a Glass Igloo in Finland<br/>
        • Take the Walk of Faith, Tianmen Mountain<br/>
        • <s>Listen to Jazz in the French Quarter, Louisiana</s><br/>
        • Meditate at the Budhist Retreat Centre in KwaZulu, Sth Africa<br/>
        • Surf in Hawaii<br/>
        • <s>Helicopter over Kauai</s><br/>
        • <s>See the Biggest Trees on Earth in California</s><br/>
        • Meet the Dalai Lama<br/>
        • Meet Thich Nhat Hanh<br/>
        • Master 3 languages<br/>
        • Read each Holy Book (Bible, Qu'ran, Śruti texts, sutras, Tao Te Ching)<br/>
        • Stay Awake for 96 Hours<br/>
        • Start Fire Without Matches<br/>
        • Finish a Rubiks Cube in less than 5mins<br/>
        • Do a survival camp/course<br/>
        • Finish a GoRuck challenge<br/>
        • Write a patent<br/>
        • Eat anything someone dares me to eat<br/>
        • Drink a glass of Macallan 1937 Single Malt Scotch Whiskey<br/>
        • Create a documentary<br/>
        • Sleep on the street for a night<br/>
        • Trek the Kokoda Trail<br/>
        • <s>Trek the Kalalau Trail</s>
        • Trek the Chadar in the Himalayas
      </div>
      <div className="education">
        <div className="link-to" id="see" />
        <div className="title">
          <h3>See</h3>
        </div>
       • A live Olympic Games<br/>
       • Machu Picchu<br/>
       • <s>Dharavi slum</s><br/>
       • <s>Big Sur</s><br/>
       •  Yosemite<br/>
       • <s>Grand Canyon</s><br/>
       • <s>Red light district in Amsterdam</s><br/>
       • <s>The Blue Mosque</s><br/>
       • <s>Colosseum, Rome</s><br/>
       • Pyramids of Giza<br/>
       • <s>Cesky Krumlov</s><br/>
       • <s>Singapore Botanic Gardens</s><br/>
       • Historic Centre of Warsaw<br/>
       • Great wall of China<br/>
       • Tibet<br/>
       • <s>Louvre</s><br/>
       • Taj Mahal<br/>
       • Greek islands<br/>
       • Old Havana, Cuba<br/>
       • <s>Stonehenge</s><br/>
       • <s>Sky Gardens, Singapore</s><br/>
       • <s>Golden Triangle</s><br/>
       • Ancient Ruins of Petra<br/>
       • Mount Fuji<br/>
       • <s>Vatican City</s><br/>
       • <s>Guiness Brewary factory</s><br/>
       • <s>Buckingham Palace</s><br/>
       • <s>Big Ben</s><br/>
       • <s>Tower of London</s><br/>
       • <s>Basque Country</s><br/>
       • <s>San Sebastion</s><br/>
       • Pink sand beach, Bahamas<br/>
       • the Amazon<br/>
       • <s>the Northern Lights (Norway)</s><br/>
       • the Northern Lights (Alaska)<br/>
       • <s>Times Square</s><br/>
       • <s>Vegas</s><br/>
       • <s>Hollywood</s><br/>
       • <s>Napa</s><br/>
       • <s>Route 66</s><br/>
      </div>
    </article>
  </Main>
);

export default BucketList;
