import './exCome.css';

export default function ExCom() {
  return (
    <div className="mx-auto flex w-full flex-1 flex-col items-center md:justify-center md:px-10 lg:px-12">
      <div className="fontheader mb-8 items-center text-center text-xl sm:text-sm lg:text-xl">
        IEEE AESS ESSTHS SBC EXCOM{' '}
      </div>
      <div className="grid w-full max-lg:grid-cols-5 max-md:grid-cols-1 max-sm:grid-cols-6 max-sm:gap-4 sm:grid-cols-9 sm:gap-4 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-1
      max-md:bg-blue
      
      ">
        {teamData
          ?.filter((s) => !!s?.active)
          ?.map((speaker) => (
            // <Link
            // 	key={speaker.name}
            // 	to={speaker.name}
            // 	className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
            // >
            <div className='cardex items-left relative flex justify-start rounded-2xl  md:col-span-2 max-md:col-span-4 
            lg:col-span-1 max-lg:col-span-1
            sm:col-span-4
            max-sm:col-span-6
            md:h-40
            max-sm:h-40
            w-full
lg:h-80
            max-sm:gap-2  
            ' key={speaker.name}>
            <div
              
              className="rounded-xl border-2 border-none w-full h-full flex flex-row justify-start max-md:items-center
              max-md:bg-right lg:bg-bottom
              "
              style={{
                backgroundImage: `url(${speaker.imageSmall.url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              
                aspectRatio:"2"
              }}
            >
              <div className=" text-left max-sm:p-4 sm:gap-4 sm:p-4">
                <div className="fontheader text-wrap md:text-xl">{speaker.name}</div>

                <div className="text-sm">
                  {speaker.title}
                  {false && `, ${speaker.company.name}`}
                </div>
              </div>
            </div>
            </div>
            // </Link>
          ))}
      </div>
    </div>
  );
}

export const teamData = [
  {
    active: true,
    name: 'Emna Chermiti',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'excom/chair.png',
    },
  },
  {
    active: true,
    name: 'Rahma Mghayeth',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Vice Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yomna_vhkxfs.png',
    },
    imageSmall: {
      url: 'excom/vice.png',
    },
  },
  {
    active: true,
    name: 'Maryem Baklouti',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yassmine_jszfdz.png',
    },
    imageSmall: {
      url: 'excom/sg.png',
    },
  },
  {
    active: true,
    name: 'Lamis Benfraj',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Treasurer',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222796/arije_fi9u5i.png',
    },
    imageSmall: {
      url: 'excom/treso.png',
    },
  },
  {
    active: true,
    name: 'Fourat Idani',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'excom/webmaster.png',
    },
  },
];
export const teamData2024 = [
  {
    active: true,
    name: 'Nour Jeday',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Nour Jeday-Chair.jpg',
    },
  },
  {
    active: true,
    name: 'Ameni Chokri',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Vice Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Ameni Chokri Vice-Chair.png',
    },
  },
  {
    active: true,
    name: 'Farah Fassi',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Farah Fassi-SG.jpg',
    },
  },
  {
    active: true,
    name: 'Treasurer',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Ons Lassoued',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/OnsLassoued-Treasurer .jpeg',
    },
  },
  {
    active: true,
    name: 'Hichem Fantar',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Hichem Fantar - Webmaster.jpeg',
    },
  },
  {
    active: true,
    name: 'Arije Ben Abdel Hamid',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Human Resources Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Arije Ben bdel Hamid -HR Chief .jpeg',
    },
  },

  {
    active: true,
    name: 'Med Amine Achour',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Media Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Med Amine Achour - Media Chief.jpg',
    },
  },
];

export const teamData2023 = [
  {
    active: true,
    name: 'Rima Fathallah',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/chair.jpg',
    },
  },
  {
    active: true,
    name: 'Ahmed Hmila',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Vice Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/OC pictures/ahmed_hmila.jpg',
    },
  },
  {
    active: true,
    name: 'Fedi Nabli',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/webmaster.jpg',
    },
  },
  {
    active: true,
    name: 'Ahmed Hmila',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Human Resources Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/OC pictures/ahmed_hmila.jpg',
    },
  },

  {
    active: true,
    name: 'Yasmine Douik',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/sg.jpg',
    },
  },
  {
    active: true,
    name: 'Treasurer',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Aymen Lassouad',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/treasurer.jpg',
    },
  },
];
