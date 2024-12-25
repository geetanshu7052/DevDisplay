import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef();

  const handleWheel = (event) => {
    event.stopPropagation();
    event.preventDefault();
    let container = event.target;
    if (!container) return false;

    while (!container.classList.contains('skills-container')) {
      container = container.parentNode;
    }

    const delta = event.deltaX || event.deltaY;
    container.scrollLeft += delta;
  };

  React.useEffect(() => {
    cardRef.current.addEventListener('wheel', handleWheel, { passive: false });
  }, []);

  return (
    <div className="mb-6 h-auto rounded-lg bg-white p-4 shadow dark:bg-textPrimary">
      <div className="relative flex gap-4">
        <div className="h-24 w-24 flex-shrink-0">
          <img src={data.avatar} className="h-full w-full rounded-full" alt="User logo" />
        </div>
        <div className="w-[55%] sm:w-[75%]">
          <h3>
            <a
              className="text-lg font-bold hover:text-textSecondary dark:text-white"
              href={data.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              {data.name}
            </a>
          </h3>
          <p className="flex items-center gap-x-1 text-sm dark:text-white">
            <FaLocationDot />
            {data.location}
          </p>
          <div className=" group flex overflow-hidden">
            <div
              className=" skills-container group-hover:paused mr-2 mt-4 flex h-auto  animate-loop-scroll gap-4 whitespace-nowrap "
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div
              className=" skills-container group-hover:paused mr-2 mt-4 flex h-auto  animate-loop-scroll gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div
              className=" skills-container group-hover:paused mt-4 flex h-auto animate-loop-scroll  gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className={` md:absolute md:right-2 md:top-2 ${
            data.portfolio ? 'ml-auto w-28 hover:underline' : 'ml-auto w-28 cursor-not-allowed brightness-50'
          }`}
        >
          <a href={data.portfolio} className="text-textSecondary" target="_blank" rel="noreferrer">
            View Profile &#8594;
          </a>
        </div>
      </div>
      <div className="mt-4">
        <div className="dark:text-white">{data.bio}</div>
        <div className="mt-1 flex gap-x-4">
          {data.social?.GitHub && (
            <a href={data.social.GitHub} target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Instagram && (
            <a href={data.social.Instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Gmail && (
            <a href={`mailto:${data.social.Gmail}`} target="_blank" rel="noreferrer">
              <FaEnvelope className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
