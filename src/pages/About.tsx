function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        This is
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          webRTC
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        This is a dashboard and admin for a webRTC system that uses the webRTC
        api with no SFU control. The backend exchanges the signaling among the
        legs, and controls authentication, authorization and room setup
      </p>
    </section>
  )
}
export default AboutPage
