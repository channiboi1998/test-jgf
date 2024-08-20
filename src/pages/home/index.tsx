import { useHashScroll } from '@shared/hooks';
import { scrollToTop } from '@shared/utilities';
import { useEffect } from 'react';
import AboutJollibeeGroup from './about-jollibee-group';
import AboutUs from './about-us';
import AccomplishmentReports from './accomplishment-reports';
import Ace from './ace';
import BannerImage from './banner-image';
import BltPartnership from './blt-partnership';
import BoardOfTrustees from './board-of-trustees';
import BrandPartners from './brand-partners';
import BusogLusogTalino from './busog-lusog-talino';
import ChangingTheFuture from './changing-the-future';
import CreatingModels from './creating-models';
import Fep from './fep';
import Mantra from './mantra';
import OurApproach from './our-approach';
import Partnerships from './partnerships';
import TheLogo from './the-logo';
import FightingHungerTogether from './fighting-hunger-together';
import ReforestationProgram from './reforestation-program';
import FoodAid from './food-aid';

const Home = () => {
  useHashScroll();

  useEffect(() => {
    scrollToTop('instant');
  }, []);

  return (
    <main id="home">
      <BannerImage />
      <AboutUs />
      <TheLogo />
      <Mantra />
      <OurApproach />
      <Partnerships />
      <Fep />
      <CreatingModels />
      <Ace />
      <ChangingTheFuture />
      <BusogLusogTalino />
      <BltPartnership />
      <FoodAid />
      <FightingHungerTogether />
      <ReforestationProgram />
      <AccomplishmentReports />
      <BoardOfTrustees />
      <AboutJollibeeGroup />
      <BrandPartners />
    </main>
  );
};
export default Home;
