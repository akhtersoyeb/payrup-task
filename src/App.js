import ActionCard from './components/ActionCard'
import BlogCard, { BlogCardSmall } from './components/BlogCard'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import SupportBanner from './components/SupportBanner'
import blogs from './fakedata/blogs'
import popularBlogs from './fakedata/popularblogs'
import './wave.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto space-y-10 py-10 px-2 sm:px-5 '>

        <div className='space-y-2 max-w-xl mx-auto'>
          <h1 className='text-4xl text-blue-600 font-bold text-center'>Our Blogs</h1>
          <p className='text-slate-800 text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tristique imperdiet. Proin odio libero, venenatis et leo vitae, venenatis pellentesque urna.</p>
        </div>

        <Hero />

        <Categories />

        {/* Blogs */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4'>
          <div className='col-span-2 space-y-5'>
            {blogs.map(blog => {
              return (
                <BlogCard
                  key={blog.id}
                  image={blog.image}
                  tags={blog.tags}
                  title={blog.title}
                  text={blog.text}
                  date={blog.date}
                />
              )
            })}
          </div>

          <div className='space-y-5 ml-0 lg:ml-3'>
            <Newsletter />
            <div className='space-y-2 rounded-xl px-2 py-4 shadow-lg'>
              <h3 className='text-xl text-slate-800 font-medium'>Popular Blogs</h3>
              <hr />
              {popularBlogs.map(blog => {
                return (
                  <BlogCardSmall
                    key={blog.id}
                    image={blog.image}
                    title={blog.title}
                    date={blog.date}
                  />
                )
              })}
            </div>
            <div className='space-y-2 rounded-xl px-2 py-4 shadow-lg'>
              <h3 className='text-xl text-slate-800 font-medium'>Follow Us</h3>
              <hr />
              <div className="space-y-3">

                <a
                  href='https://www.instagram.com'
                  className='flex items-center gap-4'
                >
                  <img
                    src='/svgs/ig.svg'
                    alt='Img not found'
                    className='w-10 h-10'
                  />
                  <span className='text-blue-400'>Instagram</span>
                </a>


                <a
                  href='https://www.twitter.com'
                  className='flex items-center gap-4'
                >
                  <img
                    src='/svgs/twitter.svg'
                    alt='Img not found'
                    className='w-10 h-10 rounded-md overflow-hidden'
                  />
                  <span className='text-blue-400'>Twitter</span>
                </a>

                <a
                  href='https://www.facebook.com'
                  className='flex items-center gap-4'
                >
                  <img
                    src='/svgs/fb.svg'
                    alt='Img not found'
                    className='w-10 h-10'
                  />
                  <span className='text-blue-400'>Facebook</span>
                </a>

              </div>
            </div>
          </div>

        </div>

        <SupportBanner />

        <div className=''>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className=' space-y-2 text-sm font-medium'>
              <img
                src='/svgs/logo.svg'
                alt='Logo'
                className='w-32'
              />
              <p>India's leading digital platform fol all your online recharges, utility payments, products and services purchases. Enjoy all travel and hotl bookings for every trip you plan.</p>
              <p>Welcome to Payrup - your complete digital partner on the internet!</p>
            </div>

            <div className=' space-y-2'>
              <p className='text-lg font-semibold'>Quick Links</p>
              <ul className='flex items-center flex-wrap gap-3'>
                <li>
                  <a href='#'>Mobile & Dth Recharge</a>
                </li>
                <li>
                  <a href='#'>Bill Payments</a>
                </li>
                <li>
                  <a href='#'>Utility Payments</a>
                </li>
                <li>
                  <a href='#'>Travel Booking</a>
                </li>
                <li>
                  <a href='#'>eGift Cards</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <ActionCard
              image={'/images/assistence.svg'}
              title="24*7 Assistance"
              text="Available throughout the day to assist you"
            />
            <ActionCard
              image={'/images/safe.svg'}
              title="100% Safe and legit"
              text="Your security and privacy at our portal is out responsibility"
            />
            <ActionCard
              image={'/images/easy.svg'}
              title="Quick & Easy method of payments"
              text="Pay from wherever you are at whatever time you like through which"
            />
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default App