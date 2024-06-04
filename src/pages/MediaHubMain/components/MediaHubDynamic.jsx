const arr = [
  {
    section: "The Innovation Unveiled",
    content:
      "This new feature is more than just an upgrade; it’s a revolution in recycling technology, with the potential to significantly increase recycling rates by accommodating a wider range of recyclable materials. The prototype uses advanced AI and computer vision to accurately identify and sort plastic and paper cups, a step that broadens the horizon for recycling possibilities.",
  },
  {
    section: "Technological Advancements",
    content:
      "At the heart of this innovation is our commitment to in-house technological development, focusing on user-friendly and efficient solutions. “We aimed to make the recycling process as fast and comfortable as possible for the user,” explained the development team. With our new system, users can simply take a photo of their cup, and the bin’s sophisticated AI will recognize it, allowing for deposit and recycling within an astonishing 10 seconds. This seamless interaction is powered by a robust combination of AI, computer vision, and IoT, ensuring real-time data tracking and a smooth user experience.",
  },
  {
    section: "Market Impact and Future Plans",
    content:
      "The response to the new prototype at STEP 2024 was overwhelmingly positive. Our CEO, Sander, shared, “We got a lot of positive feedback on the prototype and are looking forward to scaling it up.” The vision doesn’t stop at just enhancing the bins’ capabilities; it extends to making recycling accessible to everyone. “Our ultimate goal is to provide a recycling point within a 5-minute walk everywhere,” he added.",
  },
  {
    section: "Environmental and Social Benefits",
    content:
      "By making recycling more accessible and rewarding—through Raffles within Renie App — we are set to significantly impact recycling rates positively. Moreover, the data collected from Renie Bins can be used for data monetization technology, offering invaluable insights into recycling trends and efficiencies for business. This, in turn, supports the global movement towards plastic and carbon offsetting, contributing to a more sustainable planet. The STEP 2024 conference served as a pivotal platform for us to showcase our continued innovation and dedication to making the world a better place. The introduction of our AI and computer vision-equipped Renie bins for plastic and paper cups marks a significant milestone in our recycling technology!",
  },
];

const MediaHubDynamic = () => {
  return (
    <div className="reniehub-trustedby-main flex justify-center">
      <div className="cmd:w-10/12 max-w-[1440px] lg:px-8 mx-auto">
        <div className="flex flex-col cmd:flex-row justify-between items-center">
          <div className="flex flex-col pt-10">
            <span className="text-[36px] font-semibold gradient-text text-center cmd:text-left">
              Revolutionizing Recycling: Renie Bin Unveils
            </span>
            <span className="text-[36px] font-semibold gradient-text text-center cmd:text-left">
              Groundbreaking AI-Powered Solution at STEP 2024
            </span>
          </div>
          <p className="text-[#6F6F6F] font-semibold">20-May-2024</p>
        </div>
        <div className="flex flex-col gap-6 py-[100px] px-4 cmd:px-0">
          <p className="text-[18px] text-center cmd:text-left">
            Under bright Dubai sun of the STEP 2024 conference held on February
            21st and 22nd, an innovation stood out, promising to redefine the
            landscape of waste management and recycling. Known for IoT-powered
            Renie Bins that already have transformed recycling with transparency
            and efficiency, we unveiled our latest prototype: an AI and computer
            vision-enabled bin adept at recognizing not just water bottles, but
            now, plastic and paper cups as well!
          </p>
          {arr.map((item) => {
            return (
              <div>
                <h2 className="text-[32px] text-center cmd:text-left">
                  {item.section}
                </h2>
                <p className="text-[18px] text-center cmd:text-left">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MediaHubDynamic;
