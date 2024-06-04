import { MailIcon } from "../icons/MailIcon";

export default function OauthOptions() {
  return (
    <>
      <button className="relative w-full mb-4 px-2 py-2 items-center border-slate-950 border-1 rounded-md	">
        <div className="text-center">Continue with Facebook</div>
        <div className="absolute left-0 top-2.5 mt-0.5 ml-2">
          <MailIcon />
        </div>
      </button>
      <button className="relative w-full mb-4 px-2 py-2 items-center border-slate-950 border-1 rounded-md	">
        <div className="text-center">Continue with Google</div>
        <div className="absolute left-0 top-2.5 mt-0.5 ml-2">
          <MailIcon />
        </div>
      </button>
      <button className="relative w-full mb-4 px-2 py-2 items-center border-slate-950 border-1 rounded-md	">
        <div className="text-center">Continue with Apple</div>
        <div className="absolute left-0 top-2.5 mt-0.5 ml-2">
          <MailIcon />
        </div>
      </button>
      {/* <button className="w-full mb-4 flex gap-x-24 px-2 py-2 items-center border-slate-950 border-1 rounded-md	">
        <div>
          <MailIcon />
        </div>
        <div>Continue with Google</div>
      </button>
      <button className="w-full mb-4 flex gap-x-24 px-2 py-2 items-center border-slate-950 border-1 rounded-md	">
        <div>
          <MailIcon />
        </div>
        <div>Continue with Apple</div>
      </button> */}
    </>
  );
}
