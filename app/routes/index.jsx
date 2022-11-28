import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div
      className='hero min-h-screen'
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-white'>
        <div className='max-w-md'>
          <h1 className='mb-5  text-5xl font-bold'>
            Remix Tailwindcss Template
          </h1>
          <p className='mb-5'>
            A Remixjs template setup to use TailwindCSS and Daisy UI for easy
            site theming!
          </p>
          <Link to='https://daisyui.com/' className='btn btn-primary'>
            Find out more!
          </Link>
        </div>
      </div>
    </div>
  )
}
