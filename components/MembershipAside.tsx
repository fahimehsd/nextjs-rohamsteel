import Link from "next/link";
import React from "react";

const MembershipAside = () => {
  return (
    <div className="bg-white shadow-md border px-2 py-4">
      <p className=" first-letter:pr-3">
        جهت عضویت در سایت رهام پارس کلیک کنید تا از آخرین اخبار و محصولات باخبر
        شوید.
      </p>
      <Link href={"/signup"} className="flexCenter mt-5">
        <button className="bg-red-500 p-2 w-1/2 text-white font-bold rounded-sm hover:shadow-lg">
          عضویت
        </button>
      </Link>
    </div>
  );
};

export default MembershipAside;
