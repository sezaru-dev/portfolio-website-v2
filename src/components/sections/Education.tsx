import React from 'react'

export default function Education() {
  return (
    <section className="wrapper py-24 text-white">
      {/* Section Heading */}
      <div className="mb-16">
        <h2 className="text-lg text-neutral-400 uppercase tracking-widest mb-2">Education</h2>
        <p className="text-3xl lg:text-4xl font-medium max-w-xl mb-6">Bachelor of Science in Information Technology</p>
        <p className="font-medium mb-4">Panpaciic University North Philippines</p>
        <p className="max-w-3xl leading-relaxed text-neutral-300">
          Focusing on applied programming and software creation through projects such as a web evaluation system and a mobile health diagnostic app, building skills in coding, database management, and user-focused application design.
        </p>
      </div>

      {/* Awards */}
      <div className="mb-16 font-light">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Awards & Competitions</h3>
        <p className="font-medium mb-4">Best Programmer of the Year 2018</p>
        <div>
          <p className="font-medium">CCS Day Programming Competition 2015 – Champion</p>
          <p className='text-neutral-300'>C++ challenge creating logic for order management and payment calculations.</p>
        </div>
      </div>
    </section>
  )
}
