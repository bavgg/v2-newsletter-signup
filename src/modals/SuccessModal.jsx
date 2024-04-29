
import IconList from "/images/icon-list.svg";
function SuccessModal({ setSuccessModal, email }) {
  return (
    <>
      <div className=" z-[2000] bg-[#59595942] overflow-hidden h-full  absolute  inset-0 "></div>
      <div className="absolute z-[2001] inset-0 flex items-center justify-center">
        <div className=" flex flex-col gap-[16px] w-[440px] bg-white p-[42px] rounded-[24px]">
          <img className="w-[50px] h-[50px] " src={IconList} />
          <h1 className="mt-[14px] text-[var(--darkSlateGrey)] leading-[1] font-[var(--bold)] text-[46px]">
            Thanks for subscribing!
          </h1>

          <p className="">
            A confirmation email has been sent to <span className="font-[var(--bold)]">{email}</span>
            .
            Please open it and click the button inside to confirm your subscription.
          </p>

          <button id="subscribe" onClick={() => setSuccessModal(false)} className="font-[var(--bold)] flex w-full items-center justify-center rounded-[8px] p-[20px] text-[var(--white)]  bg-[var(--darkSlateGrey)]">Dismiss message</button>
        </div>
      </div>


    </>
  )
}

export default SuccessModal
