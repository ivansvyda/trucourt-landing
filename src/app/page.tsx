import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className='space-y-16'>
      <section>
        <div className='container flex flex-col justify-center items-center gap-4 py-12 bg-primary rounded-[2.5rem]'>
          <h1 className='font-semibold text-7xl text-white text-center'>
            Tennis Academy: Where
            <br />
            champions are born!
          </h1>
          <p className='text-lg text-white text-center'>
            Start your path to success together with experienced
            <br />
            coaches and like-minded people in the cozy and friendly
            <br />
            atmosphere of our school.
          </p>
          <Link
            href='/'
            className='text-primary font-semibold text-lg bg-white px-5 py-2 mt-4 rounded-full'
          >
            get started
          </Link>
          <div className='mt-4 px-12'>
            <Image
              src='/assets/hero_section_photo.jpg'
              alt='image'
              width={2500}
              height={2500}
              className='h-72 rounded-[2.5rem] object-cover'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='container flex justify-between gap-10'>
          <div className='w-full flex flex-col justify-between items-start'>
            <div>
              <div className='space-y-2 mb-10'>
                <h2 className='font-semibold text-5xl'>
                  100% of our results are
                  <br />
                  obtained within a clearly
                  <br /> defined time frame, even
                  <br />
                  from scratch.
                </h2>
                <p className='text-lg'>
                  This is because we form small groups of up
                  <br />
                  to 4-6 people and select partners based
                  <br />
                  on your level of training.
                </p>
              </div>
              <Link
                href='/'
                className='text-white font-semibold text-lg bg-primary px-8 py-3 rounded-full'
              >
                Sign up for a class
              </Link>
            </div>
            <div className='w-full bg-beige_light px-8 py-5 rounded-[2rem] space-y-2'>
              <h3 className='text-4xl'>1500+ balances</h3>
              <p>
                We learned to play during the 7 years of our
                <br />
                school's operation.
              </p>
            </div>
          </div>
          <div className='w-full'>
            <Image
              src='/assets/call_to_action_photo.jpg'
              alt='image'
              width={2500}
              height={2500}
              className='w-full h-[600px] rounded-[2.5rem] object-cover'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='container bg-orange rounded-[2.5rem] flex flex-col py-10 gap-10 items-center justify-center text-center'>
          <div className='space-y-4'>
            <h1 className='text-white font-semibold text-4xl'>
              Sign up for a trial lesson with
              <br />
              the best trainers
            </h1>
            <p className='text-white text-lg'>
              Leave your details and we will contact you as soon as possible
            </p>
          </div>
          <div className='w-96 flex flex-col gap-3.5'>
            <input placeholder='Name' className='px-4 py-2 rounded-full' />
            <input placeholder='Phone' className='px-4 py-2 rounded-full' />
          </div>
          <button className='text-primary font-semibold text-lg bg-white px-5 py-2 mt-4 rounded-full'>
            Submit your application
          </button>
        </div>
      </section>
      <section>
        <div className='container space-y-8'>
          <div className='flex gap-24'>
            <h1 className='font-semibold text-5xl'>Why choose our school?</h1>
            <p className='text-lg'>
              Guarnteed results for the current period
              <br />
              of time - even without initial knowledge!
            </p>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <div className='bg-beige rounded-[2.5rem] p-8 space-y-2 hover:scale-[1.05] hover:rotate-3 transition-transform duration-300'>
              <h2 className='text-white font-semibold text-4xl'>
                Convenient
                <br />
                class schedule
              </h2>
              <p className='text-white'>
                We select a convenient day
                <br />
                and time and a place to study
              </p>
            </div>
            <div className='rounded-[2.5rem] overflow-hidden hover:scale-[1.05] hover:rotate-3 transition-transform duration-300'>
              <Image
                src='/assets/why_section_player_photo.jpg'
                alt='image'
                width={2500}
                height={2500}
                className='h-60 object-cover'
              />
            </div>
            <div className='bg-primary rounded-[2.5rem] p-8 space-y-2 hover:scale-[1.05] hover:rotate-3 transition-transform duration-300'>
              <h2 className='text-white font-semibold text-4xl'>
                Team of
                <br />
                trainers
              </h2>
              <p className='text-white'>
                Our trainers are specialists
                <br />
                with over 5 years of training
                <br />
                experience.
              </p>
            </div>
            <div className='rounded-[2.5rem] overflow-hidden hover:scale-[1.05] hover:rotate-3 transition-transform duration-300'>
              <Image
                src='/assets/why_section_balls_photo.jpg'
                alt='image'
                width={2500}
                height={2500}
                className='h-60 object-cover'
              />
            </div>
            <div className='relative bg-green rounded-[2.5rem] p-8 col-span-2 hover:scale-[1.05] hover:-rotate-3 transition-transform duration-300'>
              <div className='space-y-2'>
                <h2 className='text-white font-semibold text-4xl'>
                  Courts in London
                  <br />
                  and London Region
                </h2>
                <p className='text-white'>
                  You will always find a court that
                  <br />
                  is 20-40 minutes away from you
                </p>
              </div>
              <div className='absolute -bottom-[1.75rem] right-10'>
                <h1 className='text-white font-semibold text-[8rem]'>+ 32</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
