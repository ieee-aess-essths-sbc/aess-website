import Navigation from '@/components/nav';
import Header from '@/components/header';
import About from '@/components/about';
import ExCom from '@/components/excom';
import AESSTunisia from '@/components/aessrunisia';
import Values from '@/components/values';
import UpEvents from '@/components/activities';
import { upevents } from '../data/events';
import DroneProj from '@/components/drone';
import Questions from '@/components/questions';
import ContactPage from '@/components/location';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* <Navigation /> */}
        <Header />
      </div>

      <div className="max-md:px-10 max-sm:px-10 sm:px-10 md:px-10 lg:px-16 lg:py-8">
        <main className="item-center flex w-full flex-col content-center justify-center max-sm:gap-5 sm:gap-10 md:gap-15 lg:gap-20">
          <About />
          <ExCom />
          <AESSTunisia />
          <Values />
          <UpEvents chapter={upevents} />
          <DroneProj />
          <Questions />
          <ContactPage />
        </main>
      </div>
      <footer className="w-full">
        {' '}
        <Footer />{' '}
      </footer>
    </>
  );
}
