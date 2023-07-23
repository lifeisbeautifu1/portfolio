import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Alexey's portfolio | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow cursor-text bg-[#151515] py-1 font-mono font-medium">
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['1']">
          <span className="text-[#BC89BD]">@tailwind</span>{" "}
          <span className="text-[#AADAFA]">base</span>;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['2']">
          <span className="text-[#BC89BD]">@tailwind</span>{" "}
          <span className="text-[#AADAFA]">components</span>;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['3']">
          <span className="text-[#BC89BD]">@tailwind</span>{" "}
          <span className="text-[#AADAFA]">utilities</span>;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['4']"></div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['5']">
          <span className="text-[#D2B782]">
            .contact <span className="text-[#F7D648]">{"{"}</span>
          </span>{" "}
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80 before:content-['6']">
          <span className="pl-6 text-[#AADAFA]">email:</span>{" "}
          <Link
            href="mailto: poltoradnevone@gmail.com"
            className="text-[#C5947C] hover:underline"
          >
            poltoradnevone@gmail.com
          </Link>
          ;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['7']">
          <span className="pl-6 text-[#AADAFA]">github:</span>{" "}
          <Link
            href="https://github.com/lifeisbeautifu1"
            target="_blank"
            className="text-[#C5947C] hover:underline"
          >
            @lifeisbeautifu1
          </Link>
          ;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['8']">
          <span className="pl-6 text-[#AADAFA]">telegram:</span>{" "}
          <Link
            target="_blank"
            href="https://t.me/happyandgrateful"
            className="text-[#C5947C] hover:underline"
          >
            @happyandgrateful
          </Link>
          ;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['8']">
          <span className="pl-6 text-[#AADAFA]">codeforces:</span>{" "}
          <Link
            target="_blank"
            href="https://codeforces.com/profile/Lifeisbeautifu1"
            className="text-[#C5947C] hover:underline"
          >
            lifeisbeatuifu1
          </Link>
          ;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['8']">
          <span className="pl-6 text-[#AADAFA]">leetcode:</span>{" "}
          <Link
            target="_blank"
            href="https://leetcode.com/lifeisbeautifu1/"
            className="text-[#C5947C] hover:underline"
          >
            lifeisbeatuifu1
          </Link>
          ;
        </div>
        <div className="pl-10 text-lg text-white before:pr-10 before:text-gray-300/80  before:content-['9']">
          <span className="text-[#F7D648]">{"}"}</span>{" "}
        </div>
      </div>
    </>
  );
}
