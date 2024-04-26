import Button from "../components/atoms/Button";
import Images from "../assets/images/images";
import Card from "../components/molecules/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PodCard, StepCard } from "../components/molecules";

const {
  Guy,
  Girl,
  Media,
  Users,
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  podCardImg1,
  podCardImg2,
  podCardImg3,
  podCardImg4,
  podCardImg5,
  podCardImg6,
  podCardImg7,
  person,
  mic,
  edit,
  upload,
  footImg,
  footImg2,
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  backring1,

  backring3,
} = Images;

export default function Landing() {
  return (
    <main className=" md:px-[6.25rem]">
      <div className=" h-[6.25rem] justify-between items-center md:flex hidden relative">
        <div className="w-[39rem] h-[32.375rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block">
          <img className="w-full h-full object-contain" src={backring1} />
        </div>

        <div>
          <h1 className="text-[2rem] text-[Mono]">Podcast</h1>
        </div>
        <div>
          <ul className="list-none flex text-[1rem] font-[400] leading-[1.362rem] text-[#1E1E1E] gap-16">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Episodes</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-5">
          <Button
            text="Log in"
            width="7.125rem"
            height="2.625rem"
            backgroundColor="#320E3B"
            color="white"
            borderRadius="0.625rem"
            border="1px solid #320E3B"
          />
          <Button
            text="Sign up"
            width="7.125rem"
            height="2.625rem"
            backgroundColor="white"
            color="#320E3B"
            borderRadius="0.625rem"
            border="1px solid #320E3B"
          />
        </div>
      </div>
      <section className="flex justify-between md:min-h-[40rem] md:w-full py-[1.5rem]">
        <div className="md:w-[40.125rem]">
          {" "}
          <div className="w-full text-center md:text-left md:w-full py-[3rem] md:py-[5.438rem] ">
            <h1 className="text-[#1E1E1E] text-[2rem] md:text-[3rem] leading-normal md:leading-[4.375rem] font-[700]">
              Talk,Listen,Get Inspired On Our{" "}
              <span className="text-[#320E3B]">Platform</span>
            </h1>
            <p className="text-[#1E1E1E] text-[1rem] md:text-[1.5rem] leading-[2.043rem] font-[400]">
              Find all your favourite podcast here listen in and enjoy catch up
              on all your missed episode. Only here
            </p>
          </div>
          <div className="flex md:justify-start justify-center gap-3">
            <Button
              text="Start Listening"
              width="10rem"
              height="2.625rem"
              borderRadius="0.625rem"
              border="1px solid #320E3B"
              backgroundColor="#320E3B"
              color="#FFFFFF"
            />
            <Button
              text="Learn more"
              width="10rem"
              height="2.625rem"
              borderRadius="0.625rem"
              border="1px solid #320E3B"
              backgroundColor="#FFFFFF"
              color="#320E3B"
            />
          </div>
          <div className="flex items-center gap-3 md:py-4">
            <div className="md:w-[6rem] w-[4rem] md:h-[1.875rem] h-[4rem]">
              <img className="object-contain w-full h-full" src={Users} />
            </div>
            <p className="text-[0.875rem]">+500k users worldwide</p>
          </div>
        </div>
        <div className=" md:w-[60rem] relative md:block hidden">
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute md:right-[17rem] ">
            <img className="object-contain w-full h-full" src={Guy} />
          </div>
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute translate-y-3/4 md:right-[3rem] ">
            <img className="object-contain w-full h-full" src={Girl} />
          </div>
          <div className=" w-[10rem] h-[13rem] md:w-[18rem] md:h-[21rem] absolute translate-y-[20rem] md:right-[18rem]">
            <img className="object-contain w-full h-full" src={Media} />
          </div>
        </div>
      </section>
      <section className="py-9 relative">
        <h1 className=" md:text-[2.25rem] text-[1.25rem] font-[600] text-center md:leading-[3.064rem]">
          We have listed the top podcast for this week
        </h1>
        <div className="w-[15rem] h-[28rem] absolute md:-top-[0.4rem] md:-left-[10rem] -z-10 md:block">
          <img className="w-full h-full object-contain" src={backring3} />
        </div>
        <div className="flex flex-col justify-center pt-[5.699rem]">
          <div className="flex justify-between md:gap-5 overflow-hidden">
            {slides.map((item) => (
              <div className="px-8  md:px-0">
                <div className="md:w-[17.726rem] md:h-[17.726rem] w-[22rem]">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center pt-[4.887rem] gap-8">
            <FontAwesomeIcon className="text-[1.5rem]" icon={faArrowLeft} />
            <FontAwesomeIcon className="text-[1.5rem]" icon={faArrowRight} />
          </div>
        </div>
      </section>

      <section className="py-[2rem]">
        <div className=" md:flex justify-between items-start ">
          <div className=" p-4 md:p-0 text-center md:text-start  w-full md:w-[23.813rem]">
            <h2 className="text-[2.375rem] leading-[3.188rem] font-[700] text-[#1E1E1E]">
              People like us because we offer the best{" "}
              <span className="text-[#320E3B]">service</span>
            </h2>
            <p className="text-[1rem] leading-[1.313rem] font-[400] opacity-50 py-5">
              These are our major selling point and why we stand out among other
              podcasting platform
            </p>
            <Button
              text="Learn more "
              color="#FFFFFF"
              backgroundColor="#320E3B"
              width="10rem"
              height="2.635rem"
              borderRadius="0.635rem"
              border="1px solid #320E3B"
            >
              {" "}
              <FontAwesomeIcon
                className="text-white w-4 h-4 px-2"
                icon={faArrowRight}
              />
            </Button>{" "}
          </div>

          <div className="flex md:justify-start justify-center items-center flex-wrap md:gap-[4rem] gap-6 md:w-[52.875rem] ">
            {cardlist.map((item) => (
              <Card text={item.text} subtext={item.subtext} img={item.img} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#320E3B] bg-opacity-5 py-[5rem]">
        <div className="px-2">
          <h1 className="font-[700] text-center md:leading-[3.064rem] text-[2.375rem] leading-[3.188rem] text-[#1E1E1E]">
            Explore our podcast by{" "}
            <span className="text-[#320E3B]">categories</span> you like
          </h1>
        </div>

        <div className=" gap-4 flex flex-wrap justify-between px-10 md:px-8 py-9 ">
          <Button
            text="All"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Health"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="News"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Entertainment"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Technology"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Business"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="True Crime"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Sports"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
          <Button
            text="Educational"
            padding="1.2rem"
            border="1px solid #320E3B"
            borderRadius="10px"
          />
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12 p-8 md:p-4 justify-center items-center ">
          {podcastList.map((item) => (
            <PodCard
              headText={item.headtext}
              episodes={item.episodes}
              time={item.time}
              img={item.img}
            />
          ))}
        </div>
      </section>

      <section className="md:py-[7.813rem] py-[4.813rem]">
        <div className="md:flex justify-between items-start">
          <div className=" p-4 md:p-0 text-center md:text-start  w-full md:w-[24.188rem]">
            <h2 className="text-[2.375rem] leading-[3.188rem] font-[500] text-[#1E1E1E]">
              Here is how we make{" "}
              <span className="text-[#320E3B] font-[700]">podcasting</span>{" "}
              easier{" "}
            </h2>
            <p className="text-[1rem] leading-[1.313rem] font-[400] opacity-50 py-5">
              The following steps to be followed to record your podcast easily.
              The following steps to be followed to record your podcast easily
            </p>
            <Button
              text="Start recording"
              color="#FFFFFF"
              backgroundColor="#320E3B"
              width="10rem"
              height="2.635rem"
              borderRadius="0.635rem"
              border="1px solid #320E3B"
            >
              {" "}
            </Button>{" "}
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center md:gap-[3.75rem] md:w-[59.5rem] py-[1.25rem]">
            {steplist.map((item) => (
              <div>
                {" "}
                <StepCard
                  text={item.text}
                  subtext={item.subtext}
                  img={item.img}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className=" md:text-[2.25rem] text-[1.25rem] font-[600] text-center md:leading-[3.064rem]">
          Our <span className="text-[#320E3B] font-[700]">pricing</span> is
          simple with no hidden charges
        </h1>
        <div>
          <div className="flex justify-center p-6">
            <button className="border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] bg-[#320E3B] text-[#FFFFFF] leading-[1.362rem] text-[1rem] font-[400] rounded-tl-[0.625rem] rounded-bl-[0.625rem]">
              Monthly
            </button>
            <button className="border-[#320E3B] border-[1px] px-[1.938rem] py-[0.625rem] text-[#320E3B] leading-[1.362rem] text-[1rem] font-[400] rounded-tr-[0.625rem] rounded-br-[0.625rem]">
              Yearly
            </button>
          </div>
        </div>
        <div className="py-[4.438rem] flex flex-col justify-center items-center gap-5  md:flex-row md:justify-between">
          {planlist.map((item) => (
            <div className="border-[#320E3B] border-[1px] w-[19.625rem] rounded-[0.625rem] px-[1.813rem] py-[2.375rem]">
              <div className="mb-[2.188rem] flex flex-col gap-[0.313rem]">
                <h1 className="text-[2.25rem] font-[700] leading-[3.064rem]">
                  {item.plan}
                </h1>
                <p className=" text-[1rem] text-[#1E1E1E] font-[400] leading-[1.362rem] ">
                  {item.description}
                </p>
              </div>
              <div className="py-3">
                <h2 className="text-[2rem] font-[600] leading-[2.724rem] text-[#1E1E1E]">
                  {item.price}
                </h2>
              </div>
              <ul className="text-[1rem] font-[400] flex flex-col gap-[0.625rem]">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} /> {item.channels}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {item.user}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {item.episodes}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> {item.downloads}
                </li>
              </ul>
              <div className="mt-[3.688rem] flex justify-center">
                <Button
                  text="Get Started for free"
                  border="1px solid #320E3B"
                  borderRadius="0.625rem"
                  width="13.625rem"
                  height="2.625"
                  padding="0.625rem"
                  color="#320E3B"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-[#320E3B] h-[20.75rem] w-full flex justify-center items-center flex-col md:rounded-[0.625rem] relative ">
          <div className="absolute right-0 top-0 hidden md:block">
            <img src={footImg2} />
          </div>
          <div className="flex-col flex items-center justify-center gap-3">
            <h2 className="text-[#FFFFFF] md:text-[2.25rem] text-[2rem] font-[700] leading-[3.064rem]">
              Never miss an episode
            </h2>
            <p className="text-[#FFFFFF] text-[1rem] font-[400] leading-[1.362rem]">
              Get notified anytime there is something new
            </p>
          </div>

          <div className="flex md:pt-[3.25rem] pt-[2rem]">
            <input
              className="md:w-[35.125rem] w-[15rem] h-[3.125rem] md:pl-[2.5rem] pl-[1rem] rounded-none"
              type="text"
              placeholder="Enter email address here"
            />
            <button className="text-[1rem] color-[#320E3B] font-[600] bg-[#FFFFFF] px-4">
              Subscribe
            </button>
          </div>
          <div className="absolute left-0 bottom-0 hidden md:block">
            <img src={footImg} />
          </div>
        </div>
      </section>
      <section className="pt-[6.375rem]">
        <div className="flex justify-between w-full px-4 ">
          <div className=" flex md:w-[11.25rem] flex-col gap-[1.563rem]">
            <h1 className="md:text-[2rem] text-[1.5rem] text-[Mono]">
              Podcast
            </h1>
            <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem] font-[500]">
              Your number one podcast streaming plaform
            </p>
            <div className="flex justify-between md:w-full w-[8rem]">
              <a href="www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="www.twiter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className=" flex md:w-[11.25rem] w-1/3 flex-col gap-[1.563rem]">
            <p className="text-[1rem] text-[Mono] font-[500]">Company</p>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                About us
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                Career
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                FAQs
              </p>
            </a>
          </div>
          <div className=" flex md:w-[11.25rem] w-1/3 flex-col gap-[1.563rem]">
            <p className="text-[1rem] text-[Mono] font-[500]">Contact</p>

            <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
              {" "}
              (+24) 777 864 0904{" "}
            </p>

            <a href="mailto:podcast@gmail.com">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                podcast@gmail.com
              </p>
            </a>
            <a href="#">
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                London, United Kingdom
              </p>
            </a>
          </div>
        </div>
      </section>
      <footer className="py-[1rem]">
        <div className="flex justify-center">
          <p className="text-xs">&copy; Christopher 2024</p>
        </div>
      </footer>
    </main>
  );
}

const cardlist = [
  {
    id: "1",
    img: cardImg1,
    text: "Interesting Contents",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
  },
  {
    id: "2",
    img: cardImg4,
    text: "All platform supported",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
  },
  {
    id: "3",
    img: cardImg2,
    text: "High Quality audio",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
  },
  {
    id: "3",
    img: cardImg3,
    text: "Different Categories",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.",
  },
];
const slides = [
  { img: carouselImg1 },
  { img: carouselImg2 },
  { img: carouselImg3 },
  { img: carouselImg4 },
  { img: carouselImg3 },
  { img: carouselImg2 },
  { img: carouselImg1 },
];

const podcastList = [
  {
    id: "1",
    img: podCardImg1,
    headtext: "Feminine Health",
    episodes: " 17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg2,
    headtext: "Empowerment",
    episodes: " 17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg3,
    headtext: "Design",
    episodes: " 17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg4,
    headtext: "Sport today",
    episodes: " 17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg5,
    headtext: "Car reviews",
    episodes: "17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg6,
    headtext: "Business talk",
    episodes: "17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg7,
    headtext: "Almost got away",
    episodes: "17 episodes",
    time: "120 mins",
  },
  {
    id: "2",
    img: podCardImg7,
    headtext: "Ace that paper",
    episodes: "17 episodes",
    time: "120 mins",
  },
];

const steplist = [
  {
    id: "1",
    img: person,
    text: "Create an account",
    subtext: "Set up your account to start enjoying our seamless service",
  },
  {
    id: "2",
    img: mic,
    text: "Record your podcast",
    subtext: "Record easily and everything is easy and simple to use",
  },
  {
    id: "3",
    img: edit,
    text: "Edit your podcast",
    subtext: "Remove unwanted noise an just edit where its requried",
  },
  {
    id: "4",
    img: upload,
    text: "Upload your podcast",
    subtext: "Remove unwanted noise an just edit where its requried",
  },
];

const planlist = [
  {
    id: "1",
    plan: "Basic",
    description: "Multistreaming sample",
    price: "Free",
    channels: "2 Channels",
    user: "1 User",
    episodes: "12 Episodes",
  },
  {
    id: "2",
    plan: "Popular",
    description: "Essential tool to get started",
    price: "N5000",
    channels: "Up to 15 Channels",
    user: "3 Users",
    episodes: "Unlimited Episodes",
    downloads: "300 Monthly downloads",
  },
  {
    id: "3",
    plan: "Premium",
    description: "Essential tool to get started",
    price: "N10,000",
    channels: "Up to 60 Channels",
    user: "9 Users",
    episodes: "Unlimited Episodes",
    downloads: "600 Monthly downloads",
  },
];
