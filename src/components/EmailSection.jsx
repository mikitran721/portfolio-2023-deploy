"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import { ImYoutube } from "react-icons/im";
// import LinkedinIcon from "../../public/linkedin-icon.svg";

const EmailSection = () => {
  // const [emailSubmitted, SetEmailSubmitted] = useState(false);

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    // const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent successfully");
      SetEmailSubmitted(true);
    }
  }; */

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2  my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>

        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/mikitran721">
            <Image src={GithubIcon} alt="Github icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/miki-enadev-b60057295"
          >
            <Image src={LinkedinIcon} alt="Github icon" />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@enadev">
            <ImYoutube className="text-white" size={50} />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col">
          <p className="text-[#ADB7BE] mb-4 w-full">
            {" "}
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>

          <Link href="mailto:enadevmikitran@gmail.com">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </Link>
          {/* {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
