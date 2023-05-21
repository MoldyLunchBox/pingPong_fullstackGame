// pages/profile.js

import Head from 'next/head';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Profile</title>
        <meta name="description" content="My profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl font-bold">Welcome to My Profile</h1>

        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src="/profile-pic.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            className="rounded-full"
          />
          <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
          <p className="mt-2 text-lg">Web Developer</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="text-2xl font-bold">Work Experience</h3>
          <ul className="mt-2 text-lg list-disc">
            <li>Web Developer at XYZ Company (2018-present)</li>
            <li>Freelance Web Developer (2015-2018)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="text-2xl font-bold">Education</h3>
          <ul className="mt-2 text-lg list-disc">
            <li>Bachelor of Science in Computer Science, XYZ University (2010-2014)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="text-2xl font-bold">Skills</h3>
          <ul className="mt-2 text-lg list-disc">
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-lg">© 2021 My Profile</p>
      </footer>
    </div>
  );
};

export default Profile;
