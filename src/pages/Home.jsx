import React from 'react'
import { useForm } from 'react-hook-form';
import IllustrationDesktop from "/images/illustration-sign-up-desktop.svg"
import IllustrationMobile from "/images/illustration-sign-up-mobile.svg"
function Home({onSubmit}) {
  const { register, handleSubmit, formState: { errors = false } } = useForm();
  
  

  return (
    <>
      {/* <!-- Sign-up form start --> */}
      <main id="row-flex" className="flex flex-col  bg-white p-[20px] rounded-[16px]" >
        <img id="i-mobile" src={IllustrationMobile} />
        <main id="signup" className="bg-white py-[24px]  leading-[var(--lineHeight)]">
          <h1 className="pb-[16px] text-[var(--darkSlateGrey)] font-[var(--bold)] text-large">
            Stay updated!
          </h1>
          <p className="pb-[16px] text-[var(--charcoalGrey)] " >
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul id="list" className="pb-[28px] text-[var(--darkSlateGrey)] ">


            <li>
              <span>
                Product discovery and building what matters
              </span>

            </li>
            <br />

            <li >
              Measuring to ensure updates are a success
            </li>
            <br />

            <li >
              And much more!
            </li>
          </ul>
          
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex">
              <p className="mr-auto pb-[4px] font-[var(--bold)] text-small text-[var(--darkSlateGrey)] text-[var(--darkSlateGrey)] ">
                Email address
              </p>
              {errors.email && <p className=" text-small text-[var(--tomato)] font-[var(--bold)]">{ 'Valid email required'}</p>}
            </div>
            
            <input className={`${errors.email && 'border-[var(--tomato)] bg-[#FEE2E0]  text-[var(--tomato)]'}  outline-none flex w-full border borde-[var(--grey)] rounded-[8px] p-[20px] text-[var(--grey)]`} {...register('email', {defaultValue: 'email@company.com', required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} defaultValue="email@company.com" type="email" id="email" name="email" /> 
            
            <br />
            <button id="subscribe" className="font-[var(--bold)] flex w-full items-center justify-center rounded-[8px] p-[20px] text-[var(--white)]  bg-[var(--darkSlateGrey)]" type="submit">
              Subscribe to monthly newsletter

            </button>
          </form>
          
          
          
        </main>
        <img id="i-desktop" className="hidden " src={IllustrationDesktop} />
        
      </main>














      {/* <!-- Sign-up form end --> */}

      {/* <!-- Success message start --> */}
      
      

      

      {/* <!-- Success message end --> */}

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">bavgg</a>.
      </div>
    </>
  );
}

export default Home
